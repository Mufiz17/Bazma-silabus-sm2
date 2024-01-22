const getClass = (unique) => {
    const clas = unique === 1 ? 'SIJA' : 'RPL';
    return { unique, clas }
}
const ourClass = getClass(1);
console.log('Anda masuk ke dalam Kelas', ourClass);


const classFunc = (unique, des) => {
    return { unique, des };
}

const getClassDes = (id) => {
    const clas =
        id === 1 ? classFunc('SIJA', 'Sistem Informasi Jaringan dan Aplikasi') :
        id === 2 ? classFunc('RPL', 'Rekayasa Prangkat Lunak') :
        classFunc('TKJ', 'Teknik Komputer dan Jaringan')

    return { id, clas }
}
console.log(getClassDes(3))


const item = (cd, use, type, to, desc) => {
    return { cd, use, type, to, desc }
}

const getItem = (unique) => {
    const fiture =
        unique === 1 ? item('30s', 'To give damage', 'Attack', 'Saber, lancer, Caseter', 'This item have a huge damage') :
        unique === 2 ? item('20s', 'To deffense', 'Diffense', 'Berserk', 'This item is unbrakeable') :
        item('3s', 'To give us movement', 'dodge', 'Saber, lancer, Caseter', 'This item make us be the fastest')
    return { unique, fiture }
}

console.log(getItem(1))