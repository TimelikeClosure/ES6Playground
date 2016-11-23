/*
Find the user in the users's array who is an admin.  Assign this user to the variable 'admin'.
 */
//  CODE START
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(function(user){
    return user.admin;
});
//  CODE END
console.log(admin);
