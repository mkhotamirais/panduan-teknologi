import { H2 } from "../../../components/Tags";

const Javascript = () => {
  return (
    <section>
      <H2>Javascript</H2>
      <p>Ada banyak cara mengetes syntax javascript, berikut beberapa caranya:</p>
      <ul className="list-inside list-disc">
        <li>di dalam html</li>
        <li>contoh:</li>
        <pre>{`
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>
  <body>
    <script>
      console.log('hello world')
    </script>
  </body>
</html>
`}</pre>
        <li>cara lainnya menyusul</li>
        <li>
          <b>promise</b>
        </li>
        <li>
          sebelumnya kita definisikan dahulu javascript: untuk pemula, javascript adalah bahasa pemrograman tingkat tinggi
          dan dinamis yang secara umum dapat berjalan pada browser. Sedangkan untuk lanjutan, Javascript adalah
          single-threade, non-bocking, asynchronous, concurent language
        </li>
        <li>
          Thread: urutan eksekusi kode yang dapat dilakukan secara bebas / independen satu sama lain. Karena javascript hanya
          punya satu thread maka javascrip hanya bisa melakukan satu hal / task pada satu waktu tertentu. Sederhanyanya
          javascript membaca baris per baris dari atas ke bawah dan menyelesaikannya
        </li>
        <li>
          Blocking: tidak menjalankan task selanjutnya jika task sebelumnya belum selesai. Non-blocking tetap menjalankan
          task selanjutnya walau task sebelumnya belum selesai
        </li>
        <li>Asynchronous: cara eksekusi program yang non-blocking; synchronous: cara eksekusi program yang blocking</li>
        <li>Asynchronous + Single thread = concurrency; Asynchronous + Multithreads = parallelism</li>
        <li>
          Kesimpulan: thread (lingkungan eksekusi task); blocking (IO related); async (http request related); concurrent
          (lingkungan eksekusi task)
        </li>
        <li>
          mesin yang menjalankan javascript adalah v8 engine. v8 terdiri dari 2 bagian heap dan stack. Heap digunakan untuk
          tempat alokasi memory, variable, function, hoisting. Stack digunakan untuk pemanggilan function dan eksekusi
          program
        </li>
      </ul>
    </section>
  );
};

export default Javascript;
