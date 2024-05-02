const jwt = require('jsonwebtoken');
const scrtKey = '@smktibazma';

function createToken(nama, alamat, nomorKontak) {
    const data = { nama, alamat, nomorKontak };
    return jwt.sign(data, scrtKey, { expiresIn: '24h' });
};

function verifyToken(token) {
    try {
        const decode = jwt.verify(token, scrtKey);
        delete decode.iat;
        return decode;
    } catch (err) {
        console.error('Kesalahan verifikasi token:', error.message);
    }
};

const student = {
    id: 2,
    nama: 'Muhammad Iqbal',
    alamat: "Jl. Raya Cikole No.103",
    nomorKontak: '085763919'
}

const token = createToken(student.nama, student.alamat, student.nomorKontak);
console.log("Token ajaib untuk pendaftaran libur Lebaran:", token);

const userInfo = verifyToken(token);
if (userInfo) {
    console.log("Informasi pengguna:", userInfo);
    console.log("Token valid. Petualangan bisa dimulai!");
} else {
    console.log("Token tidak valid. Silakan periksa kembali atau hubungi penyelenggara.");
}