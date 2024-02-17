import Layouts from "../../components/Layouts";

const menus = [
  { to: "", text: "home" },
  { to: "eduworkExam", text: "eduworkExam" },
  { to: "penyaluran", text: "penyaluran" },
];

const TasksLayout = () => {
  return <Layouts menus={menus} />;
};

export default TasksLayout;
