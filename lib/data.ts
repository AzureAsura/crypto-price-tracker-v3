'use server'


export const getCoins = async () => {
    const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=10&page=1`,
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
export const getAllCoinsData = async () => {
    const res = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h,24h,7d',
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

export const getAllExchangesData = async () => {
    const res = await fetch(
        'https://api.coingecko.com/api/v3/exchanges?per_page=50&page=1',
        {
            headers: {
                "x-cg-demo-api-key": process.env.COINGECKO_API as string,
                "accept": "application/json"
            },
            next: { revalidate: 60 }
        }
    )

    if (!res.ok) {
        console.error("Failed to fetch exchanges");
        return []
    }
    
    return res.json()
}