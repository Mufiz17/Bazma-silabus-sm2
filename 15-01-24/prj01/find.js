const { search, question, rl } = require('./system')
const searching = async() => {
    const id = await question('Please enter the id: ');
    search(id);
    rl.close();
}
module.exports = searching;