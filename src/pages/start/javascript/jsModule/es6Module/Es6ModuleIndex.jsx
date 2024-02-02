import { Pre } from "../../../../../components/Tags";

const Es6ModuleIndex = () => {
  return (
    <Pre>{`
import asal, { nama, umur } from "./module.mjs";

console.log(nama, umur);
console.log(asal);
    `}</Pre>
  );
};

export default Es6ModuleIndex;
