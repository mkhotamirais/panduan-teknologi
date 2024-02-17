import { H1, H2, H3 } from "../../components/Tags";

const portoData = [
  { href: "../porto/nuruliman/index.html", src: "../images/manuruliman.jpg", title: "nurul iman" },
  { href: "../porto/wpu-bs1/index.html", src: "../images/wpu-bs1.jpg", title: "wpu bootstrap 1" },
  { href: "../porto/wpu-bs2/index.html", src: "../images/wpu-bs2.jpg", title: "wpu bootstrap 2" },
  { href: "../porto/wpu-mtrz1/index.html", src: "../images/wpu-mtrz1.jpg", title: "wpu materialize 1" },
  { href: "../porto/mrwd2/index.html", src: "../images/mrwd2.jpg", title: "MrWebdesigner 2" },
  { href: "../porto/mrwd1/index.html", src: "../images/mrwd1.jpg", title: "MrWebdesigner 1" },
];

const portoHosting = [{ href: "https://hadinalmusri.com/", src: "../images/hadinalmusri.jpg", title: "hadin almusri" }];

const portoFreeHosting = [
  { href: "https://eduwork-fesisko.vercel.app/", src: "../images/eduwork-fesisko.jpg", title: "eduwork fe-sisko" },
];

const Porto = () => {
  return (
    <div>
      <H1>Porto</H1>
      <H2>Hosting Niagahoster</H2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
        {portoHosting.map((p, i) => (
          <a key={i} href={p.href} target="blank" rel="noopener" className="border rounded p-2">
            <img src={p.src} alt={p.title} />
            <H3>{p.title}</H3>
          </a>
        ))}
      </div>
      <H2>Hosting Vercel</H2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
        {portoFreeHosting.map((p, i) => (
          <a key={i} href={p.href} target="blank" rel="noopener" className="border rounded p-2">
            <img src={p.src} alt={p.title} />
            <H3>{p.title}</H3>
          </a>
        ))}
      </div>
      <H2>Simple Html</H2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
        {portoData.map((p, i) => (
          <a key={i} href={p.href} target="blank" rel="noopener" className="border rounded p-2">
            <img src={p.src} alt={p.title} />
            <H3>{p.title}</H3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Porto;
