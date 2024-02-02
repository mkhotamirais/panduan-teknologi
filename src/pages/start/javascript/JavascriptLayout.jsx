import Layouts from "../../../components/Layouts";

const menus = [
  { to: "", text: "home" },
  { to: "jsBasic", text: "jsBasic" },
  { to: "jsFunctions", text: "jsFunctions" },
  { to: "jsAdvance", text: "jsAdvance" },
  { to: "jsCases", text: "jsCases" },
  { to: "jsModule", text: "jsModule" },
];

const JavascriptLayout = () => {
  return <Layouts menus={menus} />;
};

export default JavascriptLayout;
