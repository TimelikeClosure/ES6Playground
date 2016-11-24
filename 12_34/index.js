function User(id = generateId()) {
    this.id = id;
}

function generateId() {
    return Math.random() * 9999999;
}

function createAdminUser(user = new User()) {
    user.admin = true;

    return user;
}

console.log(createAdminUser());
