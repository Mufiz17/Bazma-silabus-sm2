# CREATE TABEL Buku
```mysql
CREATE TABLE Buku (
   id_buku INT AUTO_INCREMENT PRIMARY KEY,
   judul VARCHAR(255),
   pengarang VARCHAR(255),
   penerbit VARCHAR(255),
   tahun_terbit INT,
   jumlah_kopi INT
);
```

# CREATE TABEL Anggota
```mysql
CREATE TABLE Anggota (
    id_anggota INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255),
    alamat VARCHAR(255),
    nomor_telepon VARCHAR(20)
);
```
# CREATE TABEL Peminjaman
```mysql
CREATE TABLE Peminjaman (
    id_peminjaman INT AUTO_INCREMENT PRIMARY KEY,
    id_buku INT,
    id_anggota INT,
    tanggal_peminjaman DATE,
    tanggal_pengembalian DATE,
    status_pengembalian ENUM('dipinjam', 'dikembalikan'),
    FOREIGN KEY (id_buku) REFERENCES Buku(id_buku) ON DELETE CASCADE,
    FOREIGN KEY (id_anggota) REFERENCES Anggota(id_anggota) ON DELETE CASCADE
);
```
