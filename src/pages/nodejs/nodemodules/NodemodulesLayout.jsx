import Layouts from "../../../components/Layouts";

const menus = [
  { to: "", text: "home" },
  { to: "http", text: "http" },
];

const NodemodulesLayout = () => {
  return <Layouts menus={menus} />;
};

export default NodemodulesLayout;
