const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];

console.log(['blue', ...fallColors, ...defaultColors, ...userFavoriteColors]);

function validateShoppingList(...items) {
    if (items.indexOf('milk') < 0) {
        return ['milk', ...items];
    }
}

console.log(validateShoppingList('oranges', 'bread'));
