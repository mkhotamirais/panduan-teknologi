import { H1, H2, H3, Pre } from "../../../components/Tags";

const EduworkExam = () => {
  return (
    <div>
      <H1>Eduwork Exam</H1>
      <H2>All weekly task</H2>
      <ul className="list-inside list-disc" id="tugasPembelajaran">
        <li>
          html:{" "}
          <a href="../simple-webpage-tasks/tugas1-html/index.html" target="blank" rel="noopener">
            hasil tugas html
          </a>{" "}
          | bootstrap:{" "}
          <a href="../simple-webpage-tasks/tugas2-bootstrap/BootstrapStudiKasus.html" target="blank" rel="noopener">
            hasil tugas bootstrap
          </a>
          gunakan lightshoot | control flow{" "}
          <a href="../simple-webpage-tasks/tugas3-jsTebakAngka/index.html" target="blank" rel="noopener">
            hasil tugas tebak angka
          </a>{" "}
          | conditional map filter reducer | destructuring array dan obejek | oop, mini librari seperti{" "}
          <a href="https://gridjs.io/" target="blank" rel="noopener">
            grid.js
          </a>{" "}
          atau{" "}
          <a href="https://datatables.net/" target="blank" rel="noopener">
            datatables.js
          </a>
          ?{" "}
          <a href="../simple-webpage-tasks/tugas4-miniLibrary/index.html" target="blank" rel="noopener">
            hasil mini library
          </a>{" "}
          | buat modular | callback: buat tabel seperti{" "}
          <a href="https://uci31.csb.app/" target="blank" rel="noopener">
            uci31.app
          </a>{" "}
          datanya dari{" "}
          <a href="https://jsonplaceholder.typicode.com/users" target="blank" rel="noopener">
            jsonplaceholder user, pastikan menggunakan callback
          </a>
          ?{" "}
          <a href="../simple-webpage-tasks/tugas6-jsonplaceholder/index.html" target="blank" rel="noopener">
            hasil data jsonplaceholder
          </a>{" "}
          | promise, portal berita dari{" "}
          <a href="" target="blank" rel="noopener">
            news api
          </a>
          ?{" "}
          <a href="../simple-webpage-tasks/tugas7-portalBeritaPromise/index.html" target="blank" rel="noopener">
            hasil newsapi
          </a>{" "}
          | deploy vercel | form validasi | lifecycle class component/statefull | stateless | rest api sequelize/mysql2 |
          rest api mongodb{" "}
          <a href="https://github.com/eduwork2021/react-express-cruds-template" target="blank" rel="noopener">
            eduwork template
          </a>{" "}
          | toko online fullstack | front-end sisko dari{" "}
          <a
            href="../https://documenter.getpostman.com/view/966202/2s9Xy2PsAa#69422121-97fc-4cc7-8845-2fcec8f257b5"
            target="blank"
            rel="noopener"
          >
            sistem toko
          </a>
        </li>
      </ul>
      <H2>Last exam</H2>
      <H3>Kisi-kisi</H3>
      <UjianAkhirKisiKisi />
      <H3>Jawaban</H3>
      <UjianAkhirJawaban />
    </div>
  );
};

export default EduworkExam;

const JawabAsynchronous = () => (
  <ul className="list-disc list-inside">
    <li>Asynchronous: cara eksekusi program yang non-blocking; synchronous: cara eksekusi program yang blocking</li>
    <li>
      Blocking: tidak menjalankan task selanjutnya jika task sebelumnya belum selesai. Non-blocking tetap menjalankan task
      selanjutnya walau task sebelumnya belum selesai
    </li>
    <li>
      untuk melihat visualisasinya, jalankan codenya di{" "}
      <a href="https://www.jsv9000.app/" className="underline">
        Js Visualizer
      </a>
    </li>
    <li>base</li>
    <Pre>{`
  console.log("task1")
  console.log("task2")
  console.log("task3")
  `}</Pre>
    <li>call stack</li>
    <Pre>{`
  function Fn1(){
  console.log('my task')
  }
  function Fn2(){
  return Fn1()
  }
  function Fn3(){
  return Fn2()
  }
  Fn3()`}</Pre>
    <li>task queue</li>
    <Pre>{`
  setTimeout(function Fn1(){
  console.log("task1")
  }, 3000)
  setTimeout(function Fn2(){
  console.log("task2")
  }, 1000)
  setTimeout(function Fn3(){
  console.log("task3")
  }, 2000)
  function Fn4(){
  console.log('task4')
  }
  Fn4()`}</Pre>
    <li>microtask queue</li>
    <Pre>{`
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((res) => res.json())
  .then((data) => console.log(data))
  Promise.resolve().then(function Fn1() {
  console.log('ditepati')
  });
  Promise.reject().catch(function Fn3() {
  console.log('ingkar')
  });`}</Pre>
    <li>task vs microtask</li>
    <Pre>{`
  setTimeout(function Fn1() {
  console.log('task1')
  }, 0);
  Promise.resolve().then(function Fn2() {
  console.log('ditepati')
  })
  `}</Pre>
  </ul>
);

const JawabHook = () => (
  <ul className="list-inside list-disc">
    <li>
      Hook adalah cara agar functional component bisa akses state dan lifecycle yang dimiliki class component. Sebenarya Hook
      tidak punya lifecycle tapi punya side effect (efek samping). dengan efek samping itu kita bisa membuat seolah olah
      functional komponen itu bersifat seperti class component
    </li>
    <li>
      Manfaatnya, performa lebih cepat. Aturannya: hanya boleh dipanggi di top level function, harus dipanggil dari fungsi
      component / custom hook, tidak bisa dipakai di class component
    </li>
  </ul>
);

const JawabHookThree = () => (
  <>
    <p>jawab hook three</p>
  </>
);

const JawabMiddleware = () => (
  <ul className="list-inside list-disc">
    <li>
      Pada dasarnya express adalah serangkaian fungsi middleware. fungsi middleware adalah fungsi yang mempunyai akses ke
      objek reqest, response dan fungsi middleware berikutnya dalam siklus request-response. Jadi middleware adalah fungsi
      yang berjalan di antara request dan response
    </li>
    <li>disebut middleware karena dieksekusi di tengah antara mengirim request dan menerima response</li>
    <li>Tipe middleware: application-level, router-level, error-handling, built-in, third-party</li>
  </ul>
);

const JawabNosql = () => (
  <ul className="list-inside list-disc">
    <li>
      NoSql (not only sql) yakni database selain sql, tentu sangat banyak jenisnya / tipenya: key-value store ex redis;
      document base ex mongodb; coulumn-oriented db ex Cassandra; graph db ex neo4j
    </li>
    <li>
      NoSql: scheemaless/flexible schema yakni blueprint database yang menentukan bagaimana data akan disimpan;
      denormalizatin; non-relational database (tidak menganut primary key, foreign key dll); unstructured, semi-structured,
      structured data.
    </li>
    <li>
      konsep denormalization (embedded document), misal data pertama ada 2 fileld (nama, umur) data kedua ada 3 field (nama,
      umur, asal).{" "}
    </li>
    <li>terminologi: sql/nosql; db/db; table/collection;row or record/document; column or field/field</li>
    <li>
      MongoDb adalah db berbasis document yang memiliki skalabilitas dan fleksibilitas yang kita inginkan dan vitur query dan
      indexing yang kita butuhkan
    </li>
    <li>
      alasan menggunakan mongodb: format datanya JSON (BSON) binary json; kareja json itu javascript; sebagai teknologi
      pendukung MERN, MEVN, MEAN
    </li>
  </ul>
);

const JawabRdbms = () => (
  <ul className="list-inside list-disc">
    <li>relasi sql</li>
  </ul>
);

const JawabAxios = () => (
  <ul className="list-inside list-disc">
    <li>Axios merupakan library opensource yang digunakan untuk request data melalui http</li>
    <li>
      axios adalah promise-based http client for node.js and the browser. Isomorphic dapat berjalan di browser dan nodejs
      dengan codebase yang sama. Fungsinya, di server menggunakan native node.js http module, di client menggunakan
      XMLHttpRequest, intersep dan transformasi request dan response, cancel request
    </li>
  </ul>
);

const JawabCasl = () => (
  <ul className="list-inside list-disc">
    <li>
      adalah pustaka JavaScript otorisasi isomorfik yang membatasi sumber daya apa yang boleh diakses oleh klien tertentu.
    </li>
  </ul>
);

const JawabPropComponent = () => (
  <ul className="list-inside list-disc">
    <li>
      <b>props</b>: komponen menggunakan props untuk saling berkomunikasi
    </li>
    <li>useContext</li>
    <li>library, salah satunya Redux</li>
  </ul>
);

const JawabFlexGridCondition = () => (
  <ul className="list-inside list-disc">
    <li>
      flex: adalah model layout 1 dimensi (baris atau kolom) yang dapat mengatur jarak dan penjajaran antar item dalam sebuah
      kontainer.
    </li>
    <li>
      kondisi flex dimungkinkan jika terdapat container (parent) dan item-itemnya (child). ketika items diatur secara
      horizontal disebut main-axis. vertical cross-axis. lebar container main size. tingginya cross size. titik awal kiri itu
      main start. akhir kanan main end. titik awal atas cross start. titik akhir bawah cross end. Container inilah yang
      diberi display flex
    </li>
    <li>grid: adalah model layout berbentuk grid 2 dimensi (baris dan kolom)</li>
    <li>
      kondisi grid dimungkinkan jika terdapat container (parent) dan item-itemnya (child). container inilah yang diberi
      display grid
    </li>
  </ul>
);

const JawabReqRes = () => (
  <ul className="list-inside list-disc">
    <li>siklus reqeust-response dimulai ketika user mengirim Request ke server</li>
    <li>express app akan menerima request sehingga menciptakan object req dan res</li>
    <li>lalu fungsi middleware dieksekusi sehingga dapat memanipulasi data sesuai kebutuhan</li>
    <li>urutan eksekusinya: express.json() - customMiddleware - Route handler</li>
  </ul>
);

const JawabOpsiSelainExpress = () => (
  <ul className="list-inside list-disc">
    <li>
      beberapa framework yang digunakan di atas nodejs: <a href="https://expressjs.com/">express</a>,{" "}
      <a href="https://koajs.com/">koa</a>, <a href="https://sailsjs.com/">sails</a>,{" "}
      <a href="https://loopback.io/">loopback</a>, <a href="https://hapi.dev/">hapi</a>,{" "}
      <a href="https://nestjs.com/">nest</a>, <a href="https://adonisjs.com/">adonis</a>
    </li>{" "}
  </ul>
);

const JawabClientServer = () => (
  <ul className="list-inside list-disc">
    <li>halo</li>
  </ul>
);

const JawabSpa = () => (
  <ul className="list-inside list-disc">
    <li>spa adalah web app dengan satu halaman</li>
  </ul>
);

const JawabFungsiRedux = () => (
  <ul className="list-inside list-disc">
    <li>
      Redux adalah wadah state yang dapat diprediksi untuk javascript app. Membantu menulis aplikasi yang prilakunya
      konsisten
    </li>
    <li>
      Fungsinya untuk mengelola state (state management) dengan mengumpulkannya di global state, controlnya terpusat, juga
      memisahkan antara logic dan view agar reusable. dibutuhkan saat aplikasi semakin besar dan kompleks
    </li>
    <li>modern web app direpresentasikan dengan pohon komponen kompleks yang membagi dan membuat data</li>
  </ul>
);

const JawabAuth2 = () => (
  <ul className="list-inside list-disc">
    <li>
      <b>davegray</b> authentication refers to the process of verifying who someone is. authorization is the process of
      virifying what resources a user has access to
    </li>
    <li>verifikasi adalah pemeriksaan tentang kebenaran laporan, pernyataan, perhitungan uang, dan sebagainya</li>
    <li>ketika kita login dengan username dan password kita mengverifikasi siapa kita, itu lah proses authentikasi</li>
    <li>
      setelah login berhasil, express api membuat jwt untuk konfirmasi proses otentikasi. yang memberi akses kepada api
      endpoin yang berisi sumber data. menggunakan authorization header
    </li>
  </ul>
);

const JawabLibraryOtorisasi = () => (
  <ul className="list-inside list-disc">
    <li>halo</li>
  </ul>
);

const JawabErrorStatus = () => (
  <ul className="list-inside list-disc">
    <li>
      401: unauthorized: menunjukan permintaan user belum selesai karena tidak memiliki kredensial otentikasi yang valid
      untuk sumber daya yang diminta.
    </li>
    <li>409: conflict</li>
    <li>500: internal server error</li>
  </ul>
);

const JawabLocalStorage = () => (
  <ul className="list-inside list-disc">
    <li>salah satu caranya adalah dimasukan ke localstorage</li>
  </ul>
);

const JawabFileUploadLibrary = () => (
  <ul className="list-inside list-disc">
    <li>multer</li>
  </ul>
);

const KisiKisi = [
  {
    href: "asynchronous",
    kisi: "Jelaskan pengertian asynchronous dan synchronous",
    jawab: <JawabAsynchronous />,
  },
  { href: "hook", kisi: "Jelaskan pengertian hook di react", jawab: <JawabHook /> },
  { href: "hookthree", kisi: "Jelaskan cara menggunkan use effect, use state ,use reducer", jawab: <JawabHookThree /> },
  { href: "middleware", kisi: "Apa yang anda ketahui tentang middleware di expresses", jawab: <JawabMiddleware /> },
  { href: "nosql", kisi: "Apa pertimbangan menggunakan no sql", jawab: <JawabNosql /> },
  { href: "rdbms", kisi: "Sebutkan dan jelaskan tipe tipe relasi yang ada di sql database", jawab: <JawabRdbms /> },
  { href: "axios", kisi: "Apa fungsi dari axios", jawab: <JawabAxios /> },
  { href: "casl", kisi: "Apa fungsi dari library casl", jawab: <JawabCasl /> },
  {
    href: "propcomponent",
    kisi: "Sebutkan cara2 yang dapat digunakan agar antar component di react saling bertukar data",
    jawab: <JawabPropComponent />,
  },
  {
    href: "flexgridcondition",
    kisi: "Jelaskan kondisi yang mana style flex dan grid memungkinkan digunakan?",
    jawab: <JawabFlexGridCondition />,
  },
  { href: "reqres", kisi: "Jelas alur request - response yang digunakan di express", jawab: <JawabReqRes /> },
  {
    href: "opsiselainexpress",
    kisi: "Sebutkan framework yang bisa dijadikan opsi untuk dipakai selain expressjs",
    jawab: <JawabOpsiSelainExpress />,
  },
  { href: "clientserver", kisi: "Jelaskan apa itu client side dan server side", jawab: <JawabClientServer /> },
  { href: "spa", kisi: "Jelaskan bagaimana single page application bekerja", jawab: <JawabSpa /> },
  { href: "fungsiredux", kisi: "Apa fungsi dari redux", jawab: <JawabFungsiRedux /> },
  { href: "auth2", kisi: "Jelaskan pengertian authentication dan authorization", jawab: <JawabAuth2 /> },
  {
    href: "libraryotorisasi",
    kisi: "Sebutkan salah salah satu library di javascript untuk mendukung authorization",
    jawab: <JawabLibraryOtorisasi />,
  },
  { href: "errorstatus", kisi: "Jelaskan jenis error http 409, 500 dan 401", jawab: <JawabErrorStatus /> },
  {
    href: "localstorage",
    kisi: "Misalkan suatu web dengan fitur bisa memasukkan barang ke keranjang, apa cara yang dapat dilakukan ketika user pindah browser keranjang tetap terupdate spt terkahir kali diupdate",
    jawab: <JawabLocalStorage />,
  },
  {
    href: "fileuploadlibrary",
    kisi: "Sebutkan salah satu libary untuk membantu upload file via expressjs",
    jawab: <JawabFileUploadLibrary />,
  },
];

const UjianAkhirKisiKisi = () => (
  <ol className="list-decimal list-inside">
    {KisiKisi.map((k, i) => (
      <li key={i} href="#satu">
        <a href={`#${k.href}`}>{k.kisi}</a>
      </li>
    ))}
  </ol>
);

const UjianAkhirJawaban = () => (
  <ol className="list-decimal list-inside">
    {KisiKisi.map((k, i) => (
      <li key={i} id={k.href} className="scroll-mt-28">
        <span>{k.kisi}</span>
        <div>
          <b>jawab</b>
        </div>
        <div>{k.jawab}</div>
      </li>
    ))}
  </ol>
);
