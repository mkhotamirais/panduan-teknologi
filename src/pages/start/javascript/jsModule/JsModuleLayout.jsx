import Layouts from "../../../../components/Layouts";

const menus = [
  { to: "", text: "Home" },
  { to: "es5ModuleIndex", text: "index.js" },
  { to: "es5Module1", text: "module1.js" },
  { to: "es5Module2", text: "module2.js" },
  { to: "es5Module3", text: "module3.js" },
  { to: "es6ModuleIndex", text: "index.mjs" },
  { to: "es6Module1", text: "module1.mjs" },
];

const JsModuleLayout = () => {
  return <Layouts menus={menus} className="hover:opacity-50" />;
};

export default JsModuleLayout;
