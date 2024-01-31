const { removeById, question } = require('./system');
const remove = async() => {
    const asking = await question('Please enter the Id: ');
    removeById(asking);
    console.log('Thank you');
}
module.exports = remove;