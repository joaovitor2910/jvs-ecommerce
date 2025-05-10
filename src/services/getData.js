import api from "./api";

export async function getCategories() {
    const data = await api.get('/categories')
    console.log(data)
    return data
}