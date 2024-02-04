import Layouts from "../../../components/Layouts";

const menus = [
  { to: "", text: "home" },
  { to: "accordion", text: "accordion" },
  { to: "pagination", text: "pagination" },
];
const ComponentsLayout = () => {
  return <Layouts menus={menus} />;
};

export default ComponentsLayout;
