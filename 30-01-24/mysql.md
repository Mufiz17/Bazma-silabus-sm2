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
menggunakan select * from biodata where id = (insert id)

### filter data berdasarkan kelas
select * from biodata where kelas = 12;

### Update Data berdasarkan id
update biodata set nama="Rio" where id=9;

### Remove data berdasarkan Id
delete from biodata where id=8;

### and  & or operator
select (any) from (any) where (any) and (any)
select (any) from (any) where (any) or (any)
select (any) from (any) where (any) and (any) and (any)
select (any) from (any) where (any) or (any) or (any)
select (any) from (any) where (any) or (any) and (any)

### not
select (any) from (any) where not (any)

### order by
- Desceding dimulai dari z-a
-ascending dimulai dari a-z
select * from (any) order by  (column name) asc/desc

### membatasi jumlah data
select from any limit any

### like
like '%any' huruf depan
like 'any%' huruf belakang
like '%any%'  semua karakter