import { H2 } from "../../../../../components/Tags";

const Express = () => {
  return (
    <article className="mt-3">
      <H2>Express</H2>
      <ul className="list-inside list-disc">
        <li>Tagline: Fast, unopinionated, minimalist web framework form nodejs</li>
        <li>
          Web app framework yang dibuat di atas nodejs, menyediakan antarmuka minimal untuk kakas yang diperlukan dalam
          membuat web app, kelola data dari server ke app, MERN, MEAN, MEVN, oleh TJ Holowaychuck 22 Mei 2010.
        </li>
        <li>
          Fitur: tangani request berbagai metoda HTTP (routing system), MVC (model, view, controller), templating engine,
          middleware
        </li>
        <li>
          dunia framework ada dua (opinionated dan unopinionated) framework opinionated adalah framework yang memberitahu
          semua aturan dan tatacara penggunaan contoh Ruby. framework unopinionated adalah framework yang tidak ada aturan
          baku, pengguna lebih diberi kebebasan, flexibel, menentukan sendiri struktur app, bongkar pasang middleware
        </li>
      </ul>
    </article>
  );
};

export default Express;
