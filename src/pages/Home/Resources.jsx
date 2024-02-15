import "react-icons/fa6";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFigma,
  SiCodepen,
  SiReact,
  SiBootstrap,
  SiTailwindcss,
  SiSass,
  SiNodedotjs,
  SiVuedotjs,
  SiAngular,
  SiPhp,
  SiLaravel,
  SiGit,
  SiGithub,
  SiGitlab,
  SiBitbucket,
  SiBulma,
  SiExpress,
  SiCodeigniter,
  SiBabel,
  SiJquery,
  SiAlpinedotjs,
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiLaragon,
  SiInsomnia,
  SiNextdotjs,
  SiVite,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

import { DiMaterializecss } from "react-icons/di";

const Resources = () => {
  return (
    <div className="flex flex-wrap gap-6 text-3xl">
      {externalLinks.map((el, i) => (
        <a key={i} href={el.url} title={el.title}>
          <div>{el.icon}</div>
        </a>
      ))}
    </div>
  );
};

export default Resources;

const externalLinks = [
  {
    icon: <SiHtml5 /> || "html",
    title: "html",
    category: "basic web programming",
    hex: "#e44d26",
    url: "https://www.w3schools.com/html/default.asp",
  },
  {
    icon: <SiCss3 /> || "css",
    title: "css",
    category: "basic web programming",
    hex: "#42a5f5",
    url: "https://www.w3schools.com/css/default.asp",
  },
  {
    icon: <SiJavascript /> || "javascript",
    title: "javascript",
    category: "basic web programming",
    hex: "#ffca28",
    url: "https://www.w3schools.com/js/default.asp",
  },
  {
    icon: <SiFigma /> || "figma",
    title: "figma",
    category: "web design",
    hex: "",
    url: "https://www.figma.com/",
  },
  {
    icon: <SiCodepen /> || "codepen",
    title: "codepen",
    category: "code editor",
    url: "https://codepen.io/",
  },
  {
    icon: <SiReact /> || "reactjs",
    title: "reactjs",
    category: "front-end javascript library",
    hex: "#00bcd4",
    url: "https://react.dev/",
  },
  {
    icon: <SiBootstrap /> || "bootstrap",
    title: "bootstrap",
    category: "css framework",
    hex: "#8212fa",
    url: "https://getbootstrap.com/",
  },
  {
    icon: <SiTailwindcss /> || "tailwind",
    title: "tailwind",
    category: "css framework",
    hex: "#38bdf8",
    url: "https://tailwindcss.com/",
  },
  {
    icon: <DiMaterializecss /> || "materialize",
    title: "materialize",
    category: "css framework",
    hex: "#eb7077",
    url: "https://materializecss.com/",
  },
  {
    icon: <SiBulma /> || "bulma",
    title: "bulma",
    category: "css framework",
    hex: "#00d1b2",
    url: "https://bulma.io/",
  },
  {
    icon: <SiSass /> || "sass",
    title: "sass",
    category: "css preprocessor",
    hex: "#cc6699",
    url: "https://sass-lang.com/",
  },
  {
    icon: <SiNodedotjs /> || "nodejs",
    title: "nodejs",
    category: "",
    hex: "#8bc34a",
    url: "https://nodejs.org/en",
  },
  {
    icon: <SiVuedotjs /> || "vuejs",
    title: "vuejs",
    category: "",
    hex: "#42b883",
    url: "https://vuejs.org/",
  },
  {
    icon: <SiAngular /> || "angularjs",
    title: "angularjs",
    category: "",
    hex: "#dd1b16",
    url: "https://angular.io/",
  },
  {
    icon: <SiExpress /> || "expressjs",
    title: "expressjs",
    category: "",
    hex: "",
    url: "https://expressjs.com/",
  },
  {
    icon: <SiPhp /> || "php",
    title: "php",
    category: "",
    hex: "#4f5b93",
    url: "https://www.php.net/",
  },
  {
    icon: <SiNextdotjs /> || "nextjs",
    title: "nextjs",
    category: "",
    hex: "",
    url: "https://nextjs.org/",
  },
  {
    icon: <SiLaravel /> || "laravel",
    title: "laravel",
    category: "",
    hex: "#fb635a",
    url: "https://laravel.com/",
  },
  {
    icon: <SiCodeigniter /> || "codeigniter",
    title: "codeigniter",
    category: "",
    hex: "#ed4b35",
    url: "https://www.codeigniter.com/",
  },
  {
    icon: <SiBabel /> || "babeljs",
    title: "babeljs",
    category: "",
    hex: "#f7da3d",
    url: "https://babeljs.io/",
  },
  {
    icon: <SiJquery /> || "jquery",
    title: "jquery",
    category: "",
    hex: "#1e6faa",
    url: "https://jquery.com/",
  },
  {
    icon: <SiAlpinedotjs /> || "alpinejs",
    title: "alpinejs",
    category: "",
    hex: "#77c1d2",
    url: "https://alpinejs.dev/",
  },
  {
    icon: <SiTypescript /> || "typescript",
    title: "typescript",
    category: "",
    hex: "#3278c6",
    url: "https://www.typescriptlang.org/",
  },
  {
    icon: <SiMongodb /> || "mongodb",
    title: "mongodb",
    category: "",
    hex: "#00f767",
    url: "https://www.mongodb.com/",
  },
  {
    icon: <SiMysql /> || "mysql",
    title: "mysql",
    category: "",
    hex: "#015b85",
    url: "https://www.mysql.com",
  },
  {
    icon: <SiGit /> || "git",
    title: "git",
    category: "",
    hex: "#f44d27",
    url: "https://git-scm.com/",
  },
  {
    icon: <SiGithub /> || "github",
    title: "github",
    category: "",
    url: "https://github.com/",
  },
  {
    icon: <SiGitlab /> || "gitlab",
    title: "gitlab",
    category: "",
    hex: "#fc6d26",
    url: "https://about.gitlab.com/why-gitlab/",
  },
  {
    icon: <SiBitbucket /> || "bitbucket",
    title: "bitbucket",
    category: "",
    hex: "#247ef2",
    url: "https://bitbucket.org/",
  },
  {
    icon: <SiPostman /> || "postman",
    title: "postman",
    category: "",
    hex: "#ff6c37",
    url: "https://www.postman.com/",
  },
  {
    icon: <SiInsomnia /> || "insomnia",
    title: "insomnia",
    category: "",
    hex: "#6200d5",
    url: "https://insomnia.rest/",
  },
  {
    icon: <SiLaragon /> || "laragon",
    title: "laragon",
    category: "",
    hex: "#38adff",
    url: "https://laragon.org/",
  },
  {
    icon: <SiVite /> || "vite",
    title: "vite",
    category: "",
    hex: "#fdcc24",
    url: "https://vitejs.dev/",
  },
  {
    icon: <SiVercel /> || "vercel",
    title: "vercel",
    category: "",
    hex: "",
    url: "https://vercel.com/",
  },
  {
    icon: <SiNetlify /> || "netlify",
    title: "netlify",
    category: "",
    hex: "#05bdba",
    url: "https://www.netlify.com/",
  },
  {
    icon: "",
    title: "",
    category: "",
    url: "",
  },
  {
    icon: "niagahoster",
    title: "niagahoster",
    category: "",
    hex: "",
    url: "https://www.niagahoster.co.id/",
  },
];
