export const checkAuth = async () => {
    const res = await fetch('https://server-9n6t.onrender.com/api/me', {
        method: 'GET',
        credentials: 'include',
    });

    if (!res.ok) return null;
    return res.json();
}
