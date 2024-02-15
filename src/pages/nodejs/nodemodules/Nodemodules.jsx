import { H2, H3 } from "../../../components/Tags";

const Nodemodules = () => {
  return (
    <div>
      <H2>Nodemodules</H2>
      <H3>nodejs doc</H3>
      <ul className="list-inside list-disc">
        <li>
          mulai{" "}
          <a href="https://nodejs.org/en/learn/getting-started/introduction-to-nodejs" className="underline">
            dokumentasi nodejs
          </a>
          , coba jalankan proses sederhana di{" "}
          <a href="https://codesandbox.io/dashboard/recent" className="underline">
            codesandbox.io
          </a>
        </li>
        <li>
          <a href=""></a>
        </li>
      </ul>
      <H3>yt Davegray</H3>
      <ul className="list-inside list-disc">
        <li>Belajar nodejs syaratnya: html, css, js, opsi framework atau librari lain, </li>
        <li>
          perbedaan dengan js murni: nodejs berjalan di server, maka consolenya di terminal window, bukan console browser,
          objek global bukan objek window (console.log(global)), ada common core module, commonjs atau es6, tidak bisa fetch,
        </li>
        <li>
          __dirname, filename; [os]: type, version, homedir; [path] dirname, basename, extname, parse, join; filesystem [fs]
          readFile, writeFile, appendFile, rename, unlink, createReadStream, createWriteStream, mkdir, existsSync; [process]
          on; []
        </li>
      </ul>
    </div>
  );
};

export default Nodemodules;
