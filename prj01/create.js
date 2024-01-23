const { add, question } = require('./system');
const addInDb = async() => {

    const title = await validation('Please enter the title: ');
    const desc = await validation('Please fill in the description box: ');
    const sit = await validation('Please enter the sit code: ');
    const payment = await validation('Please enter the payment method: ');
    const qty = await validation('Please enter the quantity: ');
    const other = await validation('Anything else: ');
    const rateUs = await validation('Please enter your rating for us: ');
    add(title, desc, sit, payment, qty, other, rateUs);
    console.log('Thank you');
};

// validation 
const validation = async(anything) => {
    let data;
    do {
        data = await question(anything);
        if (!data) {
            console.log('Plese fill the answer');
        };
    } while (!data);
    return data;
};

module.exports = addInDb;