import { H2 } from "../../components/Tags";

const Databases = () => {
  return (
    <section>
      <H2>Database</H2>
      <ul className="list-inside list-disc">
        <li>
          untuk memahami database perlu dipahami dulu data. Data adalah representasi fakta di dunia nyata, suatu data selalu
          terkait dengan data lain, misalnya buku siapa pengarangnya, penerbitnya, dll
        </li>
        <li>
          menyimpan data bisa di mana saja (kertas, notepad, excel) tapi perlu diperhatikan maalah kapasitas, kecepatan,
          keamanan, duplikasi dll. Solusinya skalabilitas, ketersesiaan saat dibutuhkan, keamanan, permanen dll. dan semua
          solusi itu sudah ada dalam database
        </li>
        <li>
          database adalah data di dalam DBMS. DBMS (database management system) adalah softwarenya seperti Mysql, mongodb,
          dll. Jenis DBMS: rasional, hierarcical, network, NoSql. Sql adalah bahasa untuk melakukan interaksi dengan
          database.
        </li>
        <li>
          RDBMS memiliki banyak tabel. Setiap tabel semestinya memiliki primary key (sebuah data yang dapat merepresentasikan
          satu baris recordnya) sifatnya harus unik dan harus string sekalipun seluruhnya berupa nomor karena jika nomor
          diawali nol maka nol dianggap tidak ada.
        </li>
        <li>istilah: field/column, row, primary key, foreign key, auto increment, relationship, normalizer</li>
      </ul>
    </section>
  );
};

export default Databases;
