import { H2, H3 } from "../../components/Tags";

const Nodejs = () => {
  return (
    <section>
      <H2>Nodejs</H2>
      <H3>Wpu</H3>
      <ul className="list-inside list-disc">
        <li>nodejs is javascript runtime built on chromes v8 javascript engine</li>
        <li>
          ryan dahl 2009, jalankan kode js di luar web browser, karena tidak berjalan di bworser jadi tidak semua vitur js
          bisa dilakukan di nodejs contohnya dom dan ajax, dari kata humongous database yakni besar, basis dokumen yang
          skalabilitas dan fleksibilitas tinggi, fitur query, indexing; kategori NoSQL schemaless/flexible Schema,
          denormalization, unstructured, semi, structured; bentuk data json(bson: binary json) mern, mevn, mean react angular
          vue
        </li>
      </ul>
      <H3>Davegray</H3>
      <p>nanti dulu</p>
      <H2>Nodejs & Expressjs dari eduwork</H2>
      <H3>Nodejs</H3>
      <ul className="list-inside list-disc">
        <li>
          Js adalah bahasa pemrograman client side yang berjalan pada chrome. Dengan kelebihan asynchronousnya menginspirasi
          Ryan Dahl tahun 2008 untuk ciptakan tools berbasis V8 engine (engine chrome) bernama NodeJs agar code js bisa jalan
          di sisi server
        </li>
        <li>
          Manfaatnya: Fullstack, Prilaku js di sisi server, modul system sisi server, alat bantu pengembangan seperti compile
          asset, transform format dll. Dibutuhkan saat membuat web fullstack js, rest Api, bot / engine
        </li>
        <li>
          buat file javascript misal berisi console.log(`hello`) buka terminal arahkan ke file tersebut, jalankan dengan
          `node namafile` enter
        </li>
        <li>
          konsep module system nodejs dan js itu sama beda cara / syntax. Awalnya module system di nodejs menggunakan library
          commonjs. Akhirnya diadopsi pada nodejs sebagai package bawaan
        </li>
        <li>Ketika download nodejs dan menginstalnya, ada dua tools bawaan yaitu NPM dan Yarn</li>
        <li>
          Membuat advance service dengan nodejs, Fitur yang dibutuhkan: advance routing, middleware, validation,
          authentication, database interaction, testing
        </li>
        <li>
          object res untuk menangani response, object req untuk menangani request. object req menampung semua informasi
          request termasuk url saat ini yang bisa dimanfaatkan untuk logic dan routing
        </li>
        <li>
          beberapa framework yang digunakan di atas nodejs: <a href="https://expressjs.com/">express</a>,{" "}
          <a href="https://koajs.com/">koa</a>, <a href="https://sailsjs.com/">sails</a>,{" "}
          <a href="https://loopback.io/">loopback</a>, <a href="https://hapi.dev/">hapi</a>,{" "}
          <a href="https://nestjs.com/">nest</a>, <a href="https://adonisjs.com/">adonis</a>
        </li>
      </ul>
      <H3>ExpressJs</H3>
      <ul className="list-inside list-disc">
        <li>
          Express adalah framework nodejs. Memiliki fitur yang dibutuhkan untuk membagung web fullstack. tagline `Fast,
          unopinionated, minimalist web framework for nodejs`
        </li>
        <li>
          unopinionated artinya tidak ada aturan khusus dalam menggukana framework ini, dalam membuat aplikasi expressnya
          misal struktur foldernya, routingnya. Semuanya terserah pengguna express. Minimalis karena hanya instal yang
          dibutuhkan saja
        </li>
        <li>
          Manfaat: berbasis routing dan middleware. Express itu semuanya middleware. Banyak suport template engine. Sangat
          populer dan bayak dipakai di industri. Menjadi dasar untuk mempelajari framework besar Js lainnya
        </li>
        <li>
          Install Express: unopinionated, tidak membawa struktur folder lengkap seperti laravel atau django, walaupun ada
          tools express-generator untuk membuat struktur folder dasar namun kebutuhan kita pada express hanya untuk membuat
          API maka tools itu tidakd dibutuhkan
        </li>
        <li>Lebih lanjut lihat bagian server di project ini</li>
        <li>
          Route bisa dibuat dengan app.use, tapi ada cara yang benar, app.use digunakan untuk memakai middleware, karena di
          express seuanya middleware maka jadi berhasil tidak error
        </li>
        <li>
          untuk membuat routing gunakan get, post, put, patch, delete (standard API). Parameter pertama itu url. Parameter
          kedua adalah callback yang menerima minimal 2 argument yaitu req dan res
        </li>
        <li>
          router itu middleware untuk menangani routing, sebaiknya dipisahkan ke file berbeda, untuk dynamic route tambahkan
          : pada nama parameter. untuk menangkap parameter gunakan req.params. adapun menangkap query bisa gunakan req.query
        </li>
        <li>
          Middleware adalah fungsi yang dijalankan di tengah tengah req dan res. Membuat mw sederhana, tangani error 404
        </li>
        <li>
          tangani req.body. Dulu cara tangani req.body kita harus menggunakan library body parser namun setelah versi 4.16
          library tersebut sudah dijadikan satu dengan express
        </li>
        <li>untuk file upload dibutuhkan library diantaranya multer</li>
        <li>
          untuk tangani file download bisa dengan res.sendFile. Menangani file static bisa dengan middleware static bawaan
          express
        </li>
      </ul>
    </section>
  );
};

export default Nodejs;
