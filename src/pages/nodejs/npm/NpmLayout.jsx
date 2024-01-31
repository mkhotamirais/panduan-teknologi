import Layouts from "../../../components/Layouts";

const menus = [
  { to: "", text: "home" },
  { to: "npmclient", text: "npmclient" },
  { to: "npmserver", text: "npmserver" },
];

const NpmLayout = () => {
  return <Layouts menus={menus} />;
};

export default NpmLayout;
