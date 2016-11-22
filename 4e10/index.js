var products = [
    { name: 'cucumber', type: 'vegetable' },
    { name: 'banana', type: 'fruit' },
    { name: 'celery', type: 'vegetable' },
    { name: 'orange', type: 'fruit' }
];
var filteredProducts = [];

for (var i = 0; i < products.length; i++){
    if (products[i].type === 'fruit') {
        filteredProducts.push(products[i]);
    }
}

console.log(filteredProducts);

var filterProducts = products.filter(function (product) {
    return product.type === "fruit";
});

console.log(filterProducts);
