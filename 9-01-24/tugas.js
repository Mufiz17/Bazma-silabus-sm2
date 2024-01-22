function getDaysName(Day) {
    switch (Day) {
        case 1:
            return 'Hari Senin';
        case 2:
            return 'Hari Selasa';
        case 3:
            return 'Hari Rabu';
        case 4:
            return 'Hari Kamis';
        case 5:
            return 'Hari Jumat';
        default:
            return 'Libur';
    };
};

function square(p, l) {
    for (let i = 0; i < p; i++) {
        let baris = " ";
        for (let j = 0; j < l; j++) {
            baris += ("* ");
        };
        console.log(baris);
    };
};

function value(score) {
    switch (score) {
        case 100:
            return 'Terbaik';
        case 90:
            return 'Cukup Baik';
        case 80:
            return 'Baik';
        case 60:
            return 'Harus Semangat';
        case 50:
            return 'Remedial';
        default:
            return 'Maaf, nilai tidak terdeteksi'
    };
};
module.exports = { getDaysName, square, value };