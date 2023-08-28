const getProducts = (set) => {
    fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(res=>set(res))
}

export {getProducts}