function Car(model) {
    this.model = model;
}

var cars = [
    new Car('Buick'),
    new Car('Camaro'),
    new Car('Focus')
];

var focus = cars.find(function (car) { 
    return car.model === 'Focus';
});

console.log(focus);

var posts = [
    { id: 1, title: 'New Post' },
    { id: 2, title: 'Old Post' }
];

var comment = { postId: 1, content: 'Great Post' };

function postForComment(comment, posts) {
    return posts.find(function (post) {
        return post.id === comment.postId;
    });
}

console.log(postForComment(comment, posts));
