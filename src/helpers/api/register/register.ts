export const registerUser = async (username: string, email: string, password: string) => {
    const response = await fetch('https://server-9n6t.onrender.com/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ username, email, password })
    })

    const data = await response.json()
    console.log(data)
    if (response.ok) {
        console.log(data.user, 'Регистрация успешна')
        return true
    } else {
        throw new Error(data.message)
    }
}
