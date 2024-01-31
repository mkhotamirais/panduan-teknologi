import Layouts from "../../components/Layouts";

const menus = [
  { to: "", text: "home" },
  { to: "mysql", text: "mysql" },
  { to: "mongodb", text: "mongodb" },
];

const DatabasesLayout = () => {
  return <Layouts menus={menus} />;
};

export default DatabasesLayout;
