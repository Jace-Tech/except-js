require('../except')

const user = { name: "John Smith", age: 45, email: "john.smith@gmail.com"}
const modifiedUser = user.except("age")

console.table({modifiedUser, user})