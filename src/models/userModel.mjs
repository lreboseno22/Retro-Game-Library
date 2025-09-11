let users = [
    { id:1, username: "Liam", email:"liam@exmaple.com"},
    { id: 2, username: "Geo", email: "geothebest@example.com"}
]


export const getUsers = () => users;

export const findUserById = (id) => users.find(u => u.id == id);