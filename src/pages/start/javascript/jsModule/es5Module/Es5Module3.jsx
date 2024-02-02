import { Pre } from "../../../../../components/Tags";

const Es5Module3 = () => {
  return (
    <Pre>{`
const Fn = (param) => "Halo " + param;

const Obj = {
  nama: "ahmad",
  Panggil(param) {
    return "Halo " + param + " saya " this.nama;
  },
};

module.exports = { Fn, Obj };
    `}</Pre>
  );
};

export default Es5Module3;
