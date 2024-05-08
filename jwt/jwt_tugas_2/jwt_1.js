const jwt = require('jsonwebtoken');
const scrtKey = '@smktibazma';

function createToken(nama, alamat, nomorKontak) {
    const data = { nama, alamat, nomorKontak };
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
        id: 1,
        nama: 'Muhammad Iqbal',
        alamat: "Jl. Raya Cikole No.103",
        nomorKontak: '085763919'
    },
    {
        id: 2,
        nama: 'Andi',
        alamat: "Jl. Merdeka No. 10",
        nomorKontak: '081234567'
    },
    {
        id: 3,
        nama: 'Budi',
        alamat: "Jl. Jendral Sudirman No. 5",
        nomorKontak: '087654321'
    },
    {
        id: 4,
        nama: 'Citra',
        alamat: "Jl. Pahlawan No. 30",
        nomorKontak: '082345678'
    },
    {
        id: 5,
        nama: 'Dewi',
        alamat: "Jl. Darmawangsa No. 25",
        nomorKontak: '089876543'
    }
];
const tokenArr = [];
studentArray.forEach(siswa => {
    const token = createToken(
        siswa.name,
        siswa.alamat,
        siswa.nomorKontak
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