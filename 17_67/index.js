url = "https://jsonplaceholder.typicode123.com/posts123456/";
//  NOTE: fetch only runs in browsers
fetch(url)
    .then(response => console.log(response))
    .catch(error => console.log('BAD', error));
