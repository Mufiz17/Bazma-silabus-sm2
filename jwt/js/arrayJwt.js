const jwt = require('jsonwebtoken');
const scrtKey = '@smktibazma';

function createToken(name, clas, address, hoby) {
    const data = { name, clas, address, hoby };
    return jwt.sign(data, scrtKey);
};

function verifyToken(token) {
    try {
        const decode = jwt.verify(token, scrtKey);
        delete decode.iat;
        return decode;
    } catch (err) {
        console.error('Kesalahan verifikasi token:', err.message);
        return null;
    }
}

const studentArray = [{
        id: 2,
        name: 'Yanto',
        clas: 'XI RPL',
        address: 'Cikarang',
        hoby: 'Bermain Game'
    },
    {
        id: 3,
        name: 'Ariana',
        clas: 'X RPL',
        address: 'Bandung',
        hoby: 'Reading Book'
    },
    {
        id: 4,
        name: 'Rio',
        clas: 'XI MIPA',
        address: 'Jakarta',
        hoby: 'Exploring The World'
    }
];

const tokenArr = [];
studentArray.forEach(siswa => {
    const token = createToken(
        siswa.name,
        siswa.clas,
        siswa.address,
        siswa.hoby
    );
    tokenArr.push(token);
});

tokenArr.forEach((token, index) => {
    console.log(`Token ke-${index + 1}:`, token);
    const userInfo = verifyToken(token);
    if (userInfo) {
        console.log("Informasi pengguna:", userInfo);
        console.log("Token valid. Petualangan bisa dimulai!");
    } else {
        console.log("Token tidak valid. Silakan periksa kembali atau hubungi penyelenggara.");
    }
});