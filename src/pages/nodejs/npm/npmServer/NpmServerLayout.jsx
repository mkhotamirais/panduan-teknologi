import Layouts from "../../../../components/Layouts";

const menus = [
  { to: "", text: "home" },
  { to: "express", text: "express" },
];

const NpmServerLayout = () => {
  return <Layouts menus={menus} />;
};

export default NpmServerLayout;
