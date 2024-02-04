import Layouts from "../../../components/Layouts";

const menus = [
  { to: "", text: "home" },
  { to: "http", text: "http" },
  { to: "os", text: "os" },
  { to: "fs", text: "fs" },
];

const NodemodulesLayout = () => {
  return <Layouts menus={menus} />;
};

export default NodemodulesLayout;
