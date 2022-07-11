/*
Define a function that can answer the role of a user. 
A user can be on following roles:
admin - with all access
subadmin - with acccess to create/delete courses
testprep - with access to create/delete tests
user - consume all content
other - trial user.

Input: getUserRole(name, role)
*/

function getUserRole(name, role) {
  switch (role) {
    case "admin":
      return `${name} is admin with all the access`;

    case "subadmin":
      return `${name} is sub-admin to create/delete courses`;
    case "testprep":
      return `${name}  is test-prep  create/delete tests`;
  }
}

console.log(getUserRole("Ram", "testprep"));
