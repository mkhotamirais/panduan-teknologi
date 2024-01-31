import Layouts from "../../../../components/Layouts";

const menus = [
  { to: "", text: "home" },
  { to: "reactRouterDom", text: "reactRouterDom" },
];

const NpmClientLayout = () => {
  return <Layouts menus={menus} />;
};

export default NpmClientLayout;
