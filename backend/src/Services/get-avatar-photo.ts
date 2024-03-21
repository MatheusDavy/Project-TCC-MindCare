export const getAvatarProfile = async (name: string) => {
    const apiUrl = `https://gender-api.com/get?name=${name}&key=${process.env.NEXT_PUBLIC_GENDER_API_KEY}`;
    try {
        const resposta = await fetch(apiUrl);
        const dados = await resposta.json();

        if (dados.gender) {
            return dados.gender === 'male'
                ? '/images/profiles/profile-man.webp'
                : '/images/profiles/profile-woman.webp';
        }
    } catch (erro) {
        (erro);
    }
};