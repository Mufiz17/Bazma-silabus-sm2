const { todos } = require('./todos')

console.log('-----welcome-----')

const getTodo = () => {
    todos()
    console.log('-----Thank you-----')
}
getTodo()