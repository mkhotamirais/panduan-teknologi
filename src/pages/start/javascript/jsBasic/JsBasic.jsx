import { H2, H3 } from "../../../../components/Tags";

const JsBasic = () => {
  return (
    <article>
      <H2>JsBasic</H2>
      <H3>Materi 1</H3>
      <ul className="list-inside list-disc">
        <li>data types: (string, number, boolean, undefined, null, symbol, object (array, function, date))</li>
        <li>variable (let, const, var)</li>
        <li>compiler vs interpreter</li>
        <li>language (computer language, programming language, human language)</li>
        <li>falsy (0,emptyString,null,,undefined,NaN), truthy</li>
        <li>unicode, excape character, regex</li>
        <li>cari tahu istilah istilah di atas dan perbedaannya</li>
      </ul>
      <pre>{`
let str = "ahmad";
let num = 20;
let bool = false;
let obj = { name: "ahmad", age: 20 };
let arr = ["ahmad", "abdul", "siti"];
let und;
let nl = null;
console.log(typeof str, typeof num, typeof bool, typeof obj, typeof arr, typeof und, typeof nl);
const falseTruth = 0 ? true : false;
console.log(falseTruth);

console.log("1. for");
for (let i = 0; i < 3; i++) console.log(i);
let i = 0;
console.log("2. while");
while (i < 3) {
  console.log(i);
  i++;
}
let j = 0;
console.log("3. do while");
do {
  console.log(j);
  j++;
} while (j < 3);
console.log("4. break");
for (let i = 0; i < 5; i++) {
  if (i > 3) break;
  console.log(i);
}
console.log("5. continue");
for (let i = 0; i < 5; i++) {
  if (i % 2) continue;
  console.log(i);
}
console.log("6. switch case");
const sc = 4;
switch (sc) {
  case 1:
  case 2:
  case 3:
    console.log("sangat kurang");
    break;
  case 4:
    console.log("sedikit lagi");
    break;
  case 5:
    console.log("betul");
    break;
  default:
    console.log("salah atau bukan angak");
}
console.log("7. for of");
const strFor = "aku";
const arrFor = ["a", "b", "c"];
const objFor = { name: "ahmad", age: 10 };
for (let i of strFor) console.log(i);
for (let i in strFor) console.log(i);
for (let i of arrFor) console.log(i, arrFor[i]);
for (let i in arrFor) console.log(i, arrFor[i]);
for (let i in objFor) console.log(i, objFor[i]);
      `}</pre>
    </article>
  );
};

export default JsBasic;
