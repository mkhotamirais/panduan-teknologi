import { Pre } from "../../../../../components/Tags";

const Es5ModuleIndex = () => {
  return (
    <Pre>{`
const module1 = require("./module1");
const { nama, umur } = require("./module1");
const { nama: n, umur: u } = require("./module1");
const module2 = require("./module2");
const { nama: n2, umur: u2 } = require("./module2");
const { Fn, Obj } = require("./module3");

console.log("moduleEs5");

console.log(module1);
console.log(module1.nama, module1.umur);
console.log(nama, umur);
console.log(n, u);

console.log(module2);
console.log(module2.nama, module2.umur);
console.log(n2, u2);

console.log(Fn("ahmad"));
console.log(Obj.nama, Obj.Panggil("ayu"));
    `}</Pre>
  );
};

export default Es5ModuleIndex;
