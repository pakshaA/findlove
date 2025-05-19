export const logoutUser = async () => {
    const res = await fetch("https://server-9n6t.onrender.com/api/logout", {
        method: "POST",
        credentials: "include",
    });

    if (!res.ok) {
        throw new Error("Ошибка при выходе из аккаунта");
    }

    return res.json();
};
