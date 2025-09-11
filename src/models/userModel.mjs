let users = [
    { id:1, username: "Liam", email:"liam@exmaple.com"},
    { id: 2, username: "Geo", email: "geothebest@example.com"}
]

// GET all users
export const getUsers = () => users;

// GET one user by id
export const findUserById = (id) => users.find(u => u.id == id);

// POST user
export const addUser = (user) => users.push(user);