const { updateById, question, search, rl } = require('./system');
const update = async() => {
    const id = await question('Please Enter the Id: ');
    const existData = search(id);
    if (existData) {
        const title = await question('Please enter the title: ');
        const desc = await question('Please fill in the description box: ');
        const sit = await question('Please enter the sit code: ');
        const payment = await question('Please enter the payment method: ');
        const qty = await question('Please enter the quantity: ');
        const other = await question('Anything else: ');
        const rateUs = await question('Please enter your rating for us: ');

        const updateDb = {
            title: title.trim() !== '' ? title.trim() : existData.title,
            desc: desc.trim() !== '' ? desc.trim() : existData.desc,
            sit: sit.trim() !== '' ? sit.trim() : existData.sit,
            payment: payment.trim() !== '' ? payment.trim() : existData.payment,
            qty: qty.trim() !== '' ? qty.trim() : existData.qty,
            other: other.trim() !== '' ? other.trim() : existData.other,
            rateUs: rateUs.trim() !== '' ? rateUs.trim() : existData.rateUs
        };
        if (Object.values(updateDb).some(value => value !== undefined && value !== existData[value])) {
            updateById(id, updateDb);
            console.log('Success');
        } else {
            console.log('Nothing to update');

        };
    } else {
        rl.close()
    };
};

module.exports = update;