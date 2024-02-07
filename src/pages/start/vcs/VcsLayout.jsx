import Layouts from "../../../components/Layouts";

const menus = [
  { to: "", text: "home" },
  { to: "git", text: "git" },
  { to: "github", text: "github" },
];

const VcsLayout = () => {
  return <Layouts menus={menus} />;
};

export default VcsLayout;
