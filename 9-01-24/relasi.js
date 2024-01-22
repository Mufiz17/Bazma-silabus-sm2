function relationName(name) {
    return `Hai, my name is ${name}`;
};

function location(addres) {
    return `I live in ${addres}`;
};

function school(schoolName, department) {
    const data = { schoolName, department }
    return data
}

function abjad() {
    return ['a', 'b', 'c', 'd']
}

module.exports = { relationName, location, school, abjad };