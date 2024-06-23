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
