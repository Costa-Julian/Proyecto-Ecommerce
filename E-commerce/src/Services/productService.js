export const getAllProductos = () => {
    return fetch("http://localhost:4003/producto/all")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => data.content)
        .catch(error => console.log('error', error));
}

export const getProductById = (id) => {
    return fetch(`http://localhost:4003/producto/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => data)
        .catch(error => console.log('error', error));
}

export const createProduct = (nombre, descripcion, precio, stock, categoria) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "nombre": nombre,
        "descripcion": descripcion,
        "precio": precio,
        "stock": stock,
        "categoria": categoria
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:4003/producto/create", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

export const updateProduct = (id, nombre, descripcion, precio, stock, categoria) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "nombre": nombre,
        "descripcion": descripcion,
        "precio": precio,
        "stock": stock,
        "categoria": categoria
    });

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(`http://localhost:4003/producto/update/${id}`, requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result);
            return result; // Devolver el resultado para que se pueda encadenar más adelante
        })
        .catch(error => {
            console.log('error', error);
            throw error; // Lanzar el error para que pueda ser capturado más adelante
        });
};





