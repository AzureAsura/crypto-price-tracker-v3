'use server'


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

export const getExchangeById = async (id: string) => {
    const res = await fetch(`https://api.coingecko.com/api/v3/exchanges/${id}`, {
        next: { revalidate: 60 } 
    });

    if (!res.ok) {
        throw new Error('Gagal ambil data exchange, coba lagi kleng!');
    }

    return res.json();
}

