export const verifyTokenAuth = async (token: string | undefined) => {

    return await fetch(
        new URL(process.env.NEXT_PUBLIC_API_BASE_URL! + '/users/').href,
        {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + String(token),
                'Content-Type': 'application/json',
            },
        }
    )
        .then(async response => {
            if (!response.ok) {
                return false;
            }

            return true;
        })
        .catch(async () => {
            return false;
        });
};
