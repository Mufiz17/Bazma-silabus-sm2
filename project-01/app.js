const addInDb = require('./create');
const remove = require('./delete');
const searching = require('./find');
const read = require('./read');
const update = require('./update');
const { rl, question } = require('./system');

const choice = async() => {
    const menu = ['1. Add data', '2. Read data', '3. Searching data', '4. Update data', '5. Delete Data', '6. Exit'];
    for (const name of menu) {
        console.log(name);
    };

    const input = await question('What do you want to do: ')
    switch (Number(input)) {
        case 1:
            return addInDb();
        case 2:
            return read();
        case 3:
            return searching();
        case 4:
            return update();
        case 5:
            return remove();
        case 6:
            console.log('Thank you');
            rl.close();
            return;
        default:
            console.log('Wrong input');
            rl.close()
            break;
    };
};
choice();