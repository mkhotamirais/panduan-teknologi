import Layouts from "../../components/Layouts";

const menus = [
  { to: "", text: "home" },
  { to: "components", text: "components" },
  { to: "mui", text: "mui" },
  { to: "hooks", text: "hooks" },
];

const ReactjsLayout = () => {
  return <Layouts menus={menus} />;
};

export default ReactjsLayout;
