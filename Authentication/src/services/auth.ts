import api from "./api";

export async function signIn(email: string, password: string) {
    const response =
        await api.post("/v1/login", {
            email,
            password
        })
    return {
        user: {
            name: response.data.name,
        },
        token: response.data.token
    }
}
