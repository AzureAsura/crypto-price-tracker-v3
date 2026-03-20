'use server'

export const searchActions = async (prevState: any, formData: FormData) => {

    const query = formData.get('query')
    const apiKey = process.env.COINGECKO_API

    if (!query) return { coins: [] };

    try {
        const res = await fetch(`https://api.coingecko.com/api/v3/search?query=${query}`, {
            headers: { 'x-cg-demo-api-key': apiKey || '' },
            next: { revalidate: 60 }
        });

        const data = await res.json();
        
        return data

    } catch (err) {
        return { coins: [], error: "Failed to fetch data" };
    }

}