import { H2 } from "../../../../components/Tags";
import HttpBasic from "./HttpBasic";
import HttpDavegray from "./HttpDavegray";

const Http = () => {
  return (
    <div>
      <H2>Http</H2>
      <ul>
        <li>
          <b>http basic</b> <HttpBasic />
        </li>
        <li>
          <b>http davegray</b> <HttpDavegray />
        </li>
      </ul>
    </div>
  );
};

export default Http;
