'use server'


export const getCoins = async () => {
    const res = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=10&page=1&price_change_percentage=1h,24h,7d',
        {
            headers: {
                "x-cg-demo-api-key": process.env.COINGECKO_API as string,
                "accept": "application/json"
            }
        }
    )

    const data: any[] = await res.json()

    return data
}


export const getBtcMarketCap = async () => {
    const res = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&ids=bitcoin&sparkline=true&price_change_percentage=1h,24h,7d',
        {
            headers: {
                "x-cg-demo-api-key": process.env.COINGECKO_API as string,
                "accept": "application/json"
            },
            next: { revalidate: 60 }
        }
    )

    const data = await res.json()

    return data[0]
}


export const getCoinById = async (id: string) => {
    const apiKey = process.env.COINGECKO_API as string;
    const headers = {
        "x-cg-demo-api-key": apiKey,
        "accept": "application/json"
    };

    try {
        const [resMarket, resDetail] = await Promise.all([
            fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&ids=${id}`,
                { headers, next: { revalidate: 60 } }),

            fetch(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false`,
                { headers, next: { revalidate: 60 } }),
        ]);

        if (!resDetail.ok) return null;

        const marketData = await resMarket.json();
        const detailData = await resDetail.json();
        const market = marketData[0] || {};

        return {
            ...market,
            id: detailData.id,
            name: detailData.name,
            symbol: detailData.symbol,
            image: detailData.image?.large || market.image,
            description: detailData.description?.en || "",
            links: detailData.links || {},
            categories: detailData.categories || [],
            genesis_date: detailData.genesis_date,
            sentiment_votes_up_percentage: detailData.sentiment_votes_up_percentage,
        };
    } catch (error) {
        console.error("Error fetching coin data:", error);
        return null;
    }
}

export const getAllCoinsData = async (page: Number) => {
    const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=50&page=${page}&sparkline=true&price_change_percentage=1h,24h,7d`,
        {
            headers: {
                "x-cg-demo-api-key": process.env.COINGECKO_API as string,
                "accept": "application/json"
            },
            next: { revalidate: 60 }
        }
    )

    if (!res.ok) return []
    return res.json()
}

export const getTrendingCoins = async () => {
    const res = await fetch(`https://api.coingecko.com/api/v3/search/trending`, {
        headers: { "x-cg-demo-api-key": process.env.COINGECKO_API as string },
        next: { revalidate: 3600 }
    });

    if (!res.ok) return [];
    const data = await res.json();
    
    const IDR_EXCHANGE = 15800;

    return data.coins.map((c: any) => {
        const item = c.item;
        const coinData = item.data;

        return {
            id: item.id,
            market_cap_rank: item.market_cap_rank,
            name: item.name,
            symbol: item.symbol,
            image: item.large, 
            current_price: coinData.price * IDR_EXCHANGE,
            price_change_percentage_24h: coinData.price_change_percentage_24h.idr || coinData.price_change_percentage_24h.usd,
            price_change_percentage_1h_in_currency: 0,
            price_change_percentage_7d_in_currency: 0,
            market_cap: parseFloat(coinData.market_cap.replace(/[$,]/g, '')) * IDR_EXCHANGE,
            sparkline_url: coinData.sparkline 
        };
    });
}



export const getAssetPlatforms = async () => {
    const res = await fetch('https://api.coingecko.com/api/v3/asset_platforms', {
        headers: {
            "x-cg-demo-api-key": process.env.COINGECKO_API as string,
            "accept": "application/json"
        },
    });

    if (!res.ok) return [];

    const data = await res.json();

    const filtered = data.filter((platform: any) => {
        return (
            platform.chain_identifier !== null &&
            platform.chain_identifier !== '' &&
            platform.shortname !== null &&
            platform.shortname !== ''
        );
    });

    return filtered;
};

