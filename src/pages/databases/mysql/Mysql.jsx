import { H2, Pre } from "../../../components/Tags";

const Mysql = () => {
  return (
    <section>
      <H2>Mysql</H2>
      <ul className="list-inside list-disc">
        <li>
          Mysql adalah RDBMD yang digunaan secara luas, gratis, open source, cocok untuk aplikasi kecil maupun besar, lintas
          platform, pertama rilis 1995, dipegang Oracle,{" "}
        </li>
        <li>
          RDBMS adalah dasar untuk semua sistem database modern seperti MySQL, Microsoft SQL Server, Oracle, dan Microsoft
          Access.
        </li>
        <li>
          buka xampp control panel pastikan mysql aktif. buka explorer C:\xampp\mysql\bin cari mysql.exe lalu buka jika tidak
          terbuka, cara lain adalah dengan langsung membuka terminal lalu ketik `mysql -u root -p` entar dua kali
        </li>
        <li>
          Syntax
          <Pre>{`
SHOW DATABASES;
CREATE DATABASE db_name;
USE db_name
CREATE TABLE table_name (
  id int primary key auto_increment,
  name varchar(100),
  age int(2),
)
SHOW TABLES
DESCRIBE table_name
DROP TABLE table_name
DROP DATABASE db_name

SELECT <columns> FROM <table_name> <options>
  <columns>: [*] | [columnA, columnB] | [columnN]
  <options>: WHERE | ORDER BY | LIMIT
    WHERE <conditions(operators|null)>
      <operators>: = > < >= <= <> (not equal) BETWEEN LIKE IN
      contoh: WHERE nama = 'ahmad' | WHERE id < 5
      <null>: <columns> IS NULL | IS NOT NULL
      contoh: WHERE nama IS NULL
    ORDER BY ASC | DESC
    LIMIT number OFFSET number
SELECT DISTINCT <columns> FROM table_name             
  // only distinct/different value
SELECT <functions>(<columns>) FROM table_name
  <functions>: MAX | MIN | COUNT | AVG | SUM
  contoh: MAX(id)
aliases

INSERT INTO table_name (columnA, columnB, columnN) VALUES (valueA, valueB, valueN)
INSERT INTO table_name VALUES (null, urutanA, urutanB)
  // table_name tanpa () valuesnya harus berurutan, jika ada nilai default bisa diberi null

UPDATE table_name SET columnA='valueA', columnB='valueB', columnN='valueN' WHERE <conditions>
  // jika tanpa operator WHERE maka akan diubah semua yang terseleksi

DELETE FROM table_name WHERE <conditions>
  // jika tanpa operator WHERE maka akan dihapus semua yang terseleksi

          `}</Pre>
        </li>
      </ul>
    </section>
  );
};

export default Mysql;
