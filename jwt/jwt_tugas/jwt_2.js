const jwt = require('jsonwebtoken');
const scrtKey = '@smktibazma';

function createToken(jadwalShalat, jadwalMakan, jadwalBermain) {
    const data = { jadwalShalat, jadwalMakan, jadwalBermain };
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

const schedule = {
    id: 2,
    jadwalShalat: ['Shubuh', 'Dzuhur', 'Ashar', 'Maghrib', 'Isya'],
    jadwalMakan: ['Sarapan', 'Makan Siang', 'Makan Malam'],
    jadwalBermain: ['Bermain Game', 'Bermain Bersama Keluarga', 'Bermain di Taman']
}

const token = createToken(schedule.jadwalShalat, schedule.jadwalMakan, schedule.jadwalBermain);
console.log("Token jadwal kegiatan untuk libur Lebaran di rumah:", token);

const scheduleInfo = verifyToken(token);
if (scheduleInfo) {
    console.log("Jadwal kegiatan untuk libur Lebaran di rumah:", scheduleInfo);
    console.log("Token valid. Perjalanan bisa dimulai!");
} else {
    console.log("Token tidak valid. Silakan periksa kembali atau hubungi penyelenggara.");
}