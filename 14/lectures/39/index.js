var savedFiled = {
    extension: 'jpg',
    name: 'repost',
    size: 14040
};

function fileSummary({name, extension, size}, {color}) {
    return `The file ${name}.${extension} is of size ${size}. Also, for some reason there is the color ${color}.`;
}

console.log(fileSummary(savedFiled, {color: 'red'}));
