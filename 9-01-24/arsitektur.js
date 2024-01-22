// class 
const getClass = (unique) => {
    const clas = unique === 1 ? 'SIJA' : 'RPL';
    return { unique, clas };
};

// game Item
const item = (cd, use, type, to, desc) => {
    return { cd, use, type, to, desc };
};

const getItem = (unique) => {
    const fiture =
        unique === 1 ? item('30s', 'To give damage', 'Attack', 'Saber, lancer, Caseter', 'This item have a huge damage') :
        unique === 2 ? item('20s', 'To deffense', 'Diffense', 'Berserk', 'This item is unbrakeable') :
        unique === 3 ? item('3s', 'To give us movement', 'dodge', 'Saber, lancer, Caseter', 'This item make us be the fastest') :
        item(undefined, undefined, undefined, undefined, undefined);
    return { unique, fiture };
};

// class Description
const classFunc = (unique, des) => {
    return { unique, des };
};
const getClassDes = (id) => {
    const clas =
        id === 1 ? classFunc('SIJA', 'Sistem Informasi Jaringan dan Aplikasi') :
        id === 2 ? classFunc('RPL', 'Rekayasa Prangkat Lunak') :
        classFunc(undefined, undefined);

    return { id, clas };
};


// class Name
const funcNameKelas = (kode, namaKelas) => {
    return { kode, namaKelas };
};

const getNameKelas = (id) => {
    const getName =
        id === 1 ? funcNameKelas("SIJA", "Sistem Informasi Jaringan & Aplikasi") :
        id === 2 ? funcNameKelas("RPL", "Rekayasa Perangkat Lunak") :
        id === 3 ? funcNameKelas("MM", "Multimedia") :
        funcNameKelas(undefined, undefined);
    return { id, getName };
};


// async
// const getAsyncClass = async(code) => {
//     const clas = code === 1 ? 'sija' : 'rpl';
//     const data = await clas;
//     return { code, data };
// };
// getAsyncClass(2).then(console.log);

// promise
const getPromise = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const clas = id === 1 ? 'sija' : 'rpl';
            resolve({ id, clas });
        }, 500);
    });
};

// module exports
module.exports = {
    getClassDes,
    getClass,
    getItem,
    getNameKelas,
    getPromise
};