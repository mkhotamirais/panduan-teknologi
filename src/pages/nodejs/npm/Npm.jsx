import { H2, H3, Pre } from "../../../components/Tags";

const Npm = () => {
  return (
    <div>
      <H2>Npm</H2>
      <H3>Frequenty Used</H3>
      <p>date-fns | uuid | nodemon | </p>
      <H3>package.json</H3>
      <ul className="list-inside list-disc">
        <li>lihat pada key dependency dan devDependencies</li>
        <li>
          <a href="https://docs.npmjs.com/about-semantic-versioning" className="underline">
            semantic version
          </a>
          <Pre>{`
"dependencies": {
  "package-name": "^1.0.0",
  (penjelasan: ^1.0.0 =  ^ bisa diubah jadi ~ dan *. ~ update patch saja, ^ update minor dan patch saja, * update semua)
  (jika tanpa pendnda 1.0.0 maka aplikasi berjalan pada versi itu saja dan tak akan diupdate)
},
"devDependencies": {
  "@types/react": "^18.2.43",
}
terminal:
npm i package-name -D (install/update )
npm i package-name 
npm update (npm mencari semua package yang tersedia update nya)
i == i/install/un/uninstall/rm
-D == -D/-g (dependensi/global)
`}</Pre>
        </li>
      </ul>
    </div>
  );
};

export default Npm;
