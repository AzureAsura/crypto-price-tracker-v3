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