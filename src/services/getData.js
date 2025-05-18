import api from "./api";

export async function getCategories() {
    const data = await api.get('/categories')
    console.log(data)
    return data
}

export async function getDetalhes(id) {
    const { data } = await api.get(`/${id}`)
    console.log(data)
    return data
}

export async function getImages(id) {
    const { data: {images} } = await api.get(`/${id}`)
    console.log(images)
    return images
}

