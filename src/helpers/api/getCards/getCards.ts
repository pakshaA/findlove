export const getAllUsers = async () => {
    const res = await fetch("https://server-9n6t.onrender.com/api/users", {
        method: "GET",
        credentials: "include",
    });

    if (!res.ok) {
        throw new Error("Не удалось загрузить пользователей");
    }

    const data = await res.json();
    return data.users;
};
