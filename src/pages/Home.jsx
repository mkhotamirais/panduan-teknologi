import { FaHome } from "react-icons/fa";
import { H1, Pre } from "../components/Tags";
import Resources from "./Home/Resources";

const Home = () => {
  return (
    <section>
      <H1 className={"text-center"}>
        <FaHome className="inline-block text-2xl sm:text-4xl" />
      </H1>
      <Pre>{`

diah sekar pramudita
nurazizah hidayah
dheka yusuf

budaya perusahaan
pengembangan skill
jenjang prospek karir
flow selanjutnya setelah interview init

saya mudah berkontribusi dan aktif menjadi relawan
kurangi gumaman
tidak ada info pribadi dan perusahaan
materi pembelajaran umum

idealis / pendirian yang kuat
mengapa berkarir di bidang ini
potensi diri kenapa cocok untuk di react
kalau ada case 

people pleasure good tapi hati hati

kekurangan lebih detail

sekedar bisa kerja sama dalam tim

kekurangan: ngetik masih sering typo, sering kali ada error padahal cuma karna salah ketik saja
      `}</Pre>
      <Resources />
    </section>
  );
};

export default Home;
