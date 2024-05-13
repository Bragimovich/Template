document.addEventListener("DOMContentLoaded", function() {
    fetch('http://127.0.0.1:3000/products')
    .then(response => response.json())
    .then(data => {
        const productsTable = document.getElementById('productsTable').getElementsByTagName('tbody')[0];

        data.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.category}</td>
                <td>${product.price}</td>
            `;
            productsTable.appendChild(row);
        });
    })
    .catch(error => console.error('Ошибка получения данных:', error));
});
 