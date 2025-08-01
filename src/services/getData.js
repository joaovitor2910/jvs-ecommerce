import api from "./api";

export async function getCategories() {
    const data = await api.get('/categories')
    console.log(data)
    return data
}

 export async function getSmartphones() {
    const {data:
        {products}
    } = await api.get('/category/smartphones')

     return products
    }

    export async function getProductsByCategory(category) {
    const {data:
        {products}
    } = await api.get(`/category/${category}`)

     return products
    }

     export async function getTablets() {
    const {data:
        {products}
    } = await api.get('/category/tablets')

     return products
    }

     export async function getLaptops() {
    const {data:
        {products}
    } = await api.get('/category/laptops')

     return products
    }

     export async function getSportsAccessories() {
    const {data:
        {products}
    } = await api.get('/category/sports-accessories')

     return products
    }

     export async function getMobileAccessories() {
    const {data:
        {products}
    } = await api.get('/category/mobile-accessories')

     return products
    }

     export async function getWatches() {
    const {data:
        {products}
    } = await api.get('/category/mens-watches')

     return products
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

