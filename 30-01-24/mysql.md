# Pertemuan 1

### Cara membuat database baru

Buka terminal ketikan 'mysql -u root -p' dan passwordnya (enter aja)

Default mysql adalah username: root dan passwordnya: (kosong)

berikan kode yang ada di module dengan cara 'create databases nama_database;'

### membuat tabel Baru di smk_personal
disini akan membuat table baru dengan cara 'create table (nama tabel); 
- id, nama, kelas, jurusan, umur'

-id int primary key not null
-nama  varchar(255),
-kelas varchar(20),
-jurursan varchar(255),
-umur int

### melihat data table biodata
dapat menggunakan query 'desc biodata;'
atau dapat juga menggunakan 'select * from biodata;'

### membuat data baru pada tabel biodata
disini kita akan menambahkan data baru dengan query berikut
insert into biodata (id, nama, kelas, jurursan, umur)  values(12, "Imang", 13, "SIJA", 20);

### mencari data berdasarkan ID
menggunakan select * from biodata where id = (insert id);

### filter data berdasarkan kelas
select * from biodata where kelas = 12;

### Update Data berdasarkan id
update biodata set nama="Rio" where id=9;

### Remove data berdasarkan Id
delete from biodata where id=8;

### and  & or operator
select (any) from (any) where (any) and (any);
select (any) from (any) where (any) or (any);
select (any) from (any) where (any) and (any) and (any);
select (any) from (any) where (any) or (any) or (any);
select (any) from (any) where (any) or (any) and (any);

### not
select (any) from (any) where not (any)

### order by
- Desceding dimulai dari z-a
-ascending dimulai dari a-z
select * from (any) order by  (column name) asc/desc;

### membatasi jumlah data
select from any limit any

### like
like '%any' huruf depan
like 'any%' huruf belakang
like '%any%'  semua karakter

### aliases
select fields as as field from table;

### in
select * from tabel where condition in (select statement);


### bikin perpus
CREATE TABLE library (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    Kategori VARCHAR(255),
    judul VARCHAR(400),
    deskripsi TEXT,
    penulis VARCHAR(255),
    penerbit VARCHAR(255),
    tahun_terbit INT,
    jumlah_halaman INT,
    batas_umur INT,
    isbn BIGINT,
    harga INT
);

INSERT INTO library (Kategori, judul, deskripsi, penulis, penerbit, tahun_terbit, jumlah_halaman, batas_umur, isbn, harga)
VALUES 
('Fiksi', 'Judul Buku 1', 'Deskripsi buku 1', 'Penulis 1', 'Penerbit 1', 2022, 300, 18, 1234567890, 50),
('Non-Fiksi', 'Judul Buku 2', 'Deskripsi buku 2', 'Penulis 2', 'Penerbit 2', 2020, 250, 16, 9876543210, 40),
('Fiksi', 'Judul Buku 3', 'Deskripsi buku 3', 'Penulis 3', 'Penerbit 3', 2021, 400, 20, 1122334455, 60);


 UPDATE library             
    -> SET kategori = 
    -> case
    -> when id = 1 then 'Coding hitz'
    -> when id = 2 then 'Coding hitz'                               
    -> when id = 3 then 'Coding hitz' 
    -> end 
    -> where id in (1,2,3);