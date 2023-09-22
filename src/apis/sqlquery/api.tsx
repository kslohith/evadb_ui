export async function executeQuery(content: string): Promise<any> {
    try {
        const response = await fetch(
            'http://127.0.0.1:5000/execute', // 'https://jsonplaceholder.typicode.com/users'
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query: content }),
            }
        )
        const movies = await response.json()
        return movies
    } catch (e) {
        console.log(e)
    }
}
