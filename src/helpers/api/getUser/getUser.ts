'use client'

export const getUser = async () => {
    const response = await fetch('https://server-9n6t.onrender.com/api/getUser', {
        method: 'GET',
        credentials: 'include'
    })

    const data = await response.json()
    console.log(data)
    if (response.ok) {
        return data.user
    } else {
        throw new Error(data.message)
    }
}
