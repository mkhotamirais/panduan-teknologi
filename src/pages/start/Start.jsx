import { H1, H2, H3 } from "../../components/Tags";

const Start = () => {
  return (
    <div>
      <H1>Start</H1>
      <H2>Dari Eduwork</H2>
      <H3>Website</H3>
      <ul className="list-disc list-inside">
        <li>
          website: kumpulan halaman pada suatu domain (alamat url web misal: http://www.google.com) di internet berisi
          informasi. Jenisnya: company profile, toko online, blog dll. Manfaatnya memperluas jangkauan promosi, media tanpa
          batas dll
        </li>
        <li>
          Ada 2 bagian utama web: Client dan Server. Client mengakses web app melalui web browser seperti chrome. Server
          adalah perangkat komputer tempat menyimpan data web app dan database server yang siap untuk diakses client.
          Misalnya user mengetik google.com di chrome lalu enter, artinya Client akan request ke server dan server memproses
          request client dan meresponse sesuai request tersebut, dalam kasus ini Client mendapat tampilan google.com di web
          browser. Simpulannya client request ke server, server meresponse request dari client Halaman yang ditampilkan
          merupakan terjemahan dari kode kode
        </li>
        <li>
          server ada yang offline (localhost) dan online (hosting). Data local hanya bisa diakses komputer itu saja tanpa
          internet, sedangkan data Cloud bisa diakses di manapun lewat internet Salah satu contoh server offline adalah{" "}
          <a href="https://www.apachefriends.org/">xampp</a>, cara aksesnya adalah jalankan apache pada xampp pada control
          panel, buat file di folder htdoc yang ada di tempat penyimpanan xampp`, salah satu contoh server online adalah
          niagahoster, adapun file managernya adalah c-panel
        </li>
        <li>
          <b>database</b> kumpulan data yang dapat dikelola berdasarkan ketentuan dan saling berkaitan. akses xampp database
          melalui https://localhost/phpmyadmin. hosting cpanel phpmyadmin. <b>web server</b> software yang menyimpan,
          mengelola, mengirim konten website. fungsinya terima perintaan HTTP/HTTPS dari client/web browser.{" "}
          <b>text editor</b> software untuk membuat, mengubah atau mengedit file text berupa plain text, manfaatnya search,
          autocomplete, folder structure
        </li>
        <li>
          <b>html</b> hypertext markup language, yakni bahasa markup standar untuk membuat web app contoh membuat heading,
          paragraf dll. <b>css</b> adalah kumpulan perintah untuk memperindah halaman web, penerapannya ada 3 cara: inline,
          internal, external (cari tahu sendiri)`,
        </li>
      </ul>
      <H3>git</H3>
      <ul className="list-disc list-inside">
        <li>
          git: salah satu version control system (vcs) oleh Linus Torvadus, Manfaat: mencatat setiap perubahan file
          sourcecode, menyimpan semua fersi, mudah kolaborasi, kontribusi di project open source, mudah tracking perubahan,
          paham cara deploy modern, dsb. Dibutuhkan saat: membangun sistem bersama, buat versi dari sistem, backup
          sourcecode, kolaborasi dengan programmer dunia`
        </li>
        <li>
          Git adalah program/engine yang dapat terhubung dengan layanan cloud (gitlab, github, bitbucket dll). Tolls:{" "}
          <a href="https://git-scm.com/">unduh git</a>, <a href="https://about.gitlab.com/">gitlab</a> /
          <a href="https://github.com/">github</a>, <a href="https://www.sourcetreeapp.com/">unduk Git GUI (opsional)</a>,
          <a href="https://app.prntscr.com/en/index.html">undul lightshoot (screenshoot cloud)</a>,
          <a href="https://chromewebstore.google.com/detail/grepper/amaaokahonnfjjemodnpmeenfpnnbkco">
            grepper (extensi chrome untuk rekomendasi pencarian)
          </a>
          , <a href="https://screenpal.com/screen-recorder">screen o matic (recorder anything on cloud)</a>
        </li>
      </ul>
      <H3>git commands</H3>
      <ul className="list-disc list-inside">
        <li>
          git init (inisialisasi repo yakni membuat folder menjadi repositori/repo. setelah inisialisasi buka file explorer,
          arahkan ke reponya lalu view - centang hidden file maka akan terlihat folder .git)
        </li>
        <li>
          git config (konfigurasi email dan username, biasanya disamakan dengan akun github, config global untuk konfigurasi
          ke server, adapun config local untuk konfigurasi local)
        </li>
        <li>git config --list</li>
        <li>git config --global user.name (melihat username saat ini)</li>
        <li>git config --global user.email (melihat email saat ini)</li>
        <li>git config --global user.email `email@gmail.com` (mengganti email saat ini)</li>
        <li>git status (mengetahui status file, untracked, staging area atau modified)</li>
        <li>git log (lihat riwayat commit, key q untuk keluar log)</li>
        <li>git add (memindahkan file dari untracked ke staging area)</li>
        <li>git add . (memindah semua file baru)</li>
        <li>git add index.html (memihnda hanya file index.html)</li>
        <li>git commit (mencatat perubahan yang dilakukan)</li>
        <li>git commit -m `pesan commit`</li>
        <li>
          git commit -am `pesan commit`` (mencatat file yang berubah di staging area sekaligus commit, jika ada file baru
          maka lakukan `git add`` dahulu)
        </li>
        <li>git reset --hard (mengembalikan ke commit terakhir)</li>
        <li>git clone (copy repo dari server)</li>
        <li>git clone url</li>
        <li>git clone https://github.com/mkhotamirais/eduwork.git (maka reponya akan diclone ke local)</li>
        <li>git remote (semacam api untuk berinteraksi dari client dengan server)</li>
        <li>git push (kirim commit ke server, agar perubahan di server sama dengan perubahan di local)</li>
        <li>git pull (mengambil commit dari server jika ada perubahan dari server yang dibuat oleh branch lain)</li>
      </ul>
      <H2>Asynchronous</H2>
      <ul className="list-disc list-inside">
        <li>
          adalah cara eksekusi program untuk menghasilkan output tanpa melihat urutan eksekusi. Manfaatnya pelajari cara
          kerja js modern dan digunakan secara umum di nodejs, dibutuhkan saat membuat proses yang bisa berjalan secara
          bersama
        </li>
        <li>
          synchronous artinya eksekusi kode berurutan dari atas ke bawah satu per satu, jika proses sebelumnya belum selesai
          maka proses setelahnya akan menunggu sampai proses sebelumnya selesai sampai proses akhir
        </li>
        <li>
          asynchronous artinya eksekusi kode bersamaan. saat client request server, client tidak akan menunggu sever memberi
          response tapi akan menjalankan perintah-perintah selanjutnya, setelah server memberi response lalu perintah
          tersebut dieksekusi terakhir.
        </li>
        <li>
          javascript itu single-thread artinya hanya menggunakan satu core saja untuk menjalankan semua tugas, agar prosesnya
          cepat maka, memanfaatkan fitur asynchronous. bayangkan jika asynchronous digabungkan dengan multi-threads, itu akan
          sangat cepat
        </li>
        <li>
          TANYA: Apa metode eksekusi default javascript? JAWAB: Defaultnya synchronous kecuali beberapa hal seperti ajax,
          websocket, worker, file, database, animasi dan beberap hal lainnya
        </li>
        <li>
          TANYA: Bisakah kita buat proses asynchronous? JAWAB: Kita tidak bisa membuat proses asynchronous murni. Tapi untuk
          simulasi bisa memanfaatkan setTimeout atau setInterval
        </li>
        <li>
          TANYA: Dalam kasus apa asynchronous digunakan? JAWAB: mengelola komunikasi yang tidak mungkin sinkron atau harus
          menunggu seperti request ajax, operasi file, real time communication seperti pada chatting app dll
        </li>
      </ul>
      <H3>Callback</H3>
      <ul className="list-disc list-inside">
        <li>
          fungsi yang dieksekusi melalui paramter, untuk menggunakan fitur asynchronous dan mempercepat performance,
          dibutuhkan saat injeksi atau modifikasi hasil eksekusi sebuah function, event listener dan tangani proses
          asynchronous
        </li>
        <li>
          callback disebut juga higher-order-function. function umumnya dieksekusi secara langsung, sedangkan callback
          dieksekusi melalui parameter.
        </li>
        <li>
          mengapa di parameter: function dalam js adalah object atau sering disebut first class object. yang artinya bisa
          dijadikan parameter, disimpan ke dalam variabel, bisa memiliki property dan method seperti objek pada umumnya,
          dapat mengembalikan value dalam bentuk function
        </li>
      </ul>
      <H3>Promise</H3>
      <ul>
        <li>
          Promise: objek yang merepresentasi hasil dari proses, hasil bisa berupa pending, terpenuhi atau gagal. Manfaat
          mengatasi callback hell (cb di dalam cb), kode lebih rapi, alternatif callback
        </li>
        <li>
          Async await: cara membuat kode yang asynchronous seolah olah menjadi synchronous. Syaratnya return dari function
          harus berupa promise, tidak dapat digunakan di top level kode, hanya bisa digunakan bersamaan pembuatan function.
        </li>
      </ul>
      <H2>Javascript</H2>
      <H3>Synchronous</H3>
      <p>
        <b>Key words</b>: variable, data types, scope, hoisting, arguments, refactoring, self-invoking, recursive, closure,
        hingher-order-function, callback, destructuring, spread operator, rest parameter, class, prototype, promise,
        asynchronous, synchronous, async, await, fetch
      </p>

      <ul className="list-disc list-inside">
        <li>
          Js adalah bahasa pemrograman untuk membuat web jadi interaktif. bahasa serbaguna untuk membangun software / app
          yang dapat berjalan di berbagai platform. dibutuhkan saat: membuat web dinamis, interaktif dan cepat; membuat web
          app, mobile atau desktop
        </li>
        <li>
          Destructiring: fitur untuk mengambil value dari array atau object ke dalam variabel2 baru. Spread Operator:
          Operator untuk memecah / ekstraksi item dari object, arrau atu string. dibutuhkan saat mengambil suatu comonent di
          react dll. notasinya titik tiga (...iterableValue)
        </li>
        <li>conditional variable, ternary, map, filter, reduce</li>
        <li>
          control flow: adalah cara untuk manipulasi alur program, untuk tentukan proses mana yang dieksekusi, validasi,
          mempercepat dan mebuat program dinamis. dibutuhkan ketika akan mengeksekusi perintah berdasar kondisi tertentu,
          membutuhkan proses berulang, manipulasi data
        </li>
        <li>percabangan, if, else if, else, switch, case</li>
        <li>loop: for, for in, for of, while</li>
        <li>sub-program yang bisa digunakan kembali, baik dalam program itu sendiri atau lainnya.</li>
        <li>di js, function = object, dari sini lah kenapa fungsi js disebut first class function</li>
        <li>bisa dibilang semua yang membentuk javascript adalah function</li>
        <li>
          manfaat: menghemat ukuran program, kode jadi modular, kurangi duplikasi kode, memecah program jadi bagian kecil,
          program mudah debug, amankan data, maksimalkan fitur asynchronous
        </li>
        <li>function jenisnya: function declaration, function expression, arrow function, function constructor</li>
        <li>parameter: variabel yang menyimpan nilai yang diteruskan ke dalam function untuk diproses di dalam function</li>
        <li>
          isolasi kode antar file, manfaatnya modularitas, keamanan, kerapian. Dibutuhkan saat membuat libarary, module
          system, hanya suport browser modern es6
        </li>
        <li>import: mengambil function/module; export: visibiliting function/module untuk diambil</li>
      </ul>
    </div>
  );
};

export default Start;
