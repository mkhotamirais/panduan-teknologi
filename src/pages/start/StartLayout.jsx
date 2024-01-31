import Layouts from "../../components/Layouts";
const menus = [
  { to: "", text: "home" },
  { to: "html", text: "html" },
  { to: "css", text: "css" },
  { to: "javascript", text: "javascript" },
];

const StartLayout = () => {
  return <Layouts menus={menus} />;
};

export default StartLayout;
