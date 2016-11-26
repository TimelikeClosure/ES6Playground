url = "https://jsonplaceholder.typicode.com/posts/";
//  NOTE: fetch only runs in browsers
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
