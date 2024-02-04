import Layouts from "../../../components/Layouts";

const menus = [
  { to: "", text: "home" },
  { to: "muitypography", text: "typography" },
  { to: "muibutton", text: "button" },
  { to: "muitextfield", text: "textfield" },
  { to: "muiselect", text: "select" },
  { to: "muiradio", text: "radio" },
  { to: "muicheckbox", text: "checkbox" },
  { to: "muiswitch", text: "switch" },
  { to: "muirating", text: "rating" },
  { to: "muiautocomplete", text: "autocomplete" },
  { to: "muibox", text: "box" },
  { to: "muigrid", text: "grid" },
];
const MuiLayout = () => {
  return <Layouts menus={menus} />;
};

export default MuiLayout;
