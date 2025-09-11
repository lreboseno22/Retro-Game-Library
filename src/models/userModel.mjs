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

// PUT (UPDATE) user
export const updateUser = (id, updatedFields) => {
    const user = users.find(u => u.id == id);
    if(!user) return null;

    const { username, email } = updatedFields;
    user.username = username ?? user.username;
    user.email = email ?? user.email;

    return user;
}

// DELETE user 
export const deleteUser = (id) => {
    const index = users.findIndex(u => u.id == id);
    if(!index === -1) return null;
    return users.splice(index, 1);
}