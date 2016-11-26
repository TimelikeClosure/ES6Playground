/*
Imagine that you are building an application to manage a user's Facebook profile.  A profile might have a 'name', 'age', and 'dateOfBirth'.
Declare three variables with these same names, making sure to use 'const' or 'let' depending on whether you expect the value to change over time.
 */
//  CODE START
const name = 'John Doe';
let age = 44;
const dateOfBirth = '11/23/1972';
//  CODE END
try {
    name = 'Jane Doe';
    console.log("(name): " + name);
} catch (e) {
    console.log("Error (name): " + e.message);
}
try {
    age = 57;
    console.log("(age): " + age);
} catch (e) {
    console.log("Error (age): " + e.message);
}
try {
    dateOfBirth = '1/3/67';
    console.log("(dateOfBirth): " + dateOfBirth);
} catch (e) {
    console.log("Error (dateOfBirth): " + e.message);
}
