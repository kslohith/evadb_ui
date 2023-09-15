export async function executeQuery(content: string): Promise<any> {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        )
        const movies = await response.json()
        return movies
    } catch (e) {
        console.log(e)
    }
}
