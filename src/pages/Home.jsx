import { FaHome } from "react-icons/fa";
import { H1 } from "../components/Tags";
import Resources from "./Home/Resources";

const Home = () => {
  return (
    <section>
      <H1 className={"text-center"}>
        <FaHome className="inline-block text-2xl sm:text-4xl" />
      </H1>
      <Resources />
    </section>
  );
};

export default Home;
