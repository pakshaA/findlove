'use client'

export const loginUser = async (email: string, password: string) => {
    const response = await fetch('https://server-9n6t.onrender.com/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ email, password })
    })

    const data = await response.json()
    if (response.ok) {
        return true
    } else {
        throw new Error(data.message)
    }
}