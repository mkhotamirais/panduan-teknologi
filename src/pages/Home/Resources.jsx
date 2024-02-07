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
    titie: "html",
    url: "https://www.w3schools.com/html/default.asp",
  },
  {
    icon: <SiCss3 /> || "css",
    title: "css",
    url: "https://www.w3schools.com/css/default.asp",
  },
  {
    icon: <SiJavascript /> || "javascript",
    title: "javascript",
    url: "https://www.w3schools.com/js/default.asp",
  },
  {
    icon: <SiFigma /> || "figma",
    title: "figma",
    url: "https://www.figma.com/",
  },
  {
    icon: <SiCodepen /> || "codepen",
    title: "codepen",
    url: "https://codepen.io/",
  },
  {
    icon: <SiReact /> || "reactjs",
    title: "reactjs",
    url: "https://react.dev/",
  },
  {
    icon: <SiBootstrap /> || "bootstrap",
    title: "bootstrap",
    url: "https://getbootstrap.com/",
  },
  {
    icon: <SiTailwindcss /> || "tailwind",
    title: "tailwind",
    url: "https://tailwindcss.com/",
  },
  {
    icon: <DiMaterializecss /> || "materialize",
    title: "materialize",
    url: "https://materializecss.com/",
  },
  {
    icon: <SiBulma /> || "bulma",
    title: "bulma",
    url: "https://bulma.io/",
  },
  {
    icon: <SiSass /> || "sass",
    title: "sass",
    url: "https://sass-lang.com/",
  },
  {
    icon: <SiNodedotjs /> || "nodejs",
    title: "nodejs",
    url: "https://nodejs.org/en",
  },
  {
    icon: <SiVuedotjs /> || "vuejs",
    title: "vuejs",
    url: "https://vuejs.org/",
  },
  {
    icon: <SiAngular /> || "angularjs",
    title: "angularjs",
    url: "https://angular.io/",
  },
  {
    icon: <SiExpress /> || "expressjs",
    title: "expressjs",
    url: "https://expressjs.com/",
  },
  {
    icon: <SiPhp /> || "php",
    title: "php",
    url: "https://www.php.net/",
  },
  {
    icon: <SiNextdotjs /> || "nextjs",
    title: "nextjs",
    url: "",
  },
  {
    icon: <SiLaravel /> || "laravel",
    title: "laravel",
    url: "https://laravel.com/",
  },
  {
    icon: <SiCodeigniter /> || "codeigniter",
    title: "codeigniter",
    url: "https://www.codeigniter.com/",
  },
  {
    url: <SiBabel /> || "babeljs",
    title: "babeljs",
    icon: "https://babeljs.io/",
  },
  {
    icon: <SiJquery /> || "jquery",
    title: "jquery",
    url: "https://jquery.com/",
  },
  {
    icon: <SiAlpinedotjs /> || "alpinejs",
    title: "alpinejs",
    url: "https://alpinejs.dev/",
  },
  {
    icon: <SiTypescript /> || "typescript",
    title: "typescript",
    url: "https://www.typescriptlang.org/",
  },
  {
    icon: <SiMongodb /> || "mongodb",
    title: "mongodb",
    url: "https://www.mongodb.com/",
  },
  {
    icon: <SiMysql /> || "mysql",
    title: "mysql",
    url: "https://www.mysql.com",
  },
  {
    icon: <SiGit /> || "git",
    title: "git",
    url: "https://git-scm.com/",
  },
  {
    icon: <SiGithub /> || "github",
    title: "github",
    url: "https://github.com/",
  },
  {
    icon: <SiGitlab /> || "gitlab",
    title: "gitlab",
    url: "https://about.gitlab.com/why-gitlab/",
  },
  {
    icon: <SiBitbucket /> || "bitbucket",
    title: "bitbucket",
    url: "https://bitbucket.org/",
  },
  {
    icon: <SiPostman /> || "postman",
    title: "postman",
    url: "",
  },
  {
    icon: <SiInsomnia /> || "insomnia",
    title: "insomnia",
    url: "",
  },
  {
    icon: <SiLaragon /> || "laragon",
    title: "laragon",
    url: "",
  },
  {
    icon: <SiVite /> || "vite",
    title: "vite",
    url: "https://vitejs.dev/",
  },
  {
    icon: <SiVercel /> || "vercel",
    title: "vercel",
    url: "https://vercel.com/",
  },
  {
    icon: <SiNetlify /> || "netlify",
    title: "netlify",
    url: "https://www.netlify.com/",
  },
  {
    icon: "",
    title: "",
    url: "",
  },
  {
    icon: "niagahoster",
    title: "niagahoster",
    url: "https://www.niagahoster.co.id/",
  },
];
