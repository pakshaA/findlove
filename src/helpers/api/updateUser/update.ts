interface User {
    name: string;
    surname: string;
    gender: string;
    age: number;
    city: string;
    avatar: string;
}

export const updateUser = async (user: User) => {
    const response = await fetch('https://server-9n6t.onrender.com/api/updateUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(user)
    })

    const data = await response.json()
    
    if (response.ok) {
        console.log(data.user, 'Обновление прошло успешно')
        return true
    } else {
        throw new Error(data.message)
    }
}
    