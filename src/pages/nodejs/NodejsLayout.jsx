import Layouts from "../../components/Layouts";

const menus = [
  { to: "", text: "home" },
  { to: "nodemodules", text: "nodemodules" },
  { to: "npm", text: "npm" },
];

const NodejsLayout = () => {
  return (
    <>
      <Layouts menus={menus} />
    </>
  );
};

export default NodejsLayout;
