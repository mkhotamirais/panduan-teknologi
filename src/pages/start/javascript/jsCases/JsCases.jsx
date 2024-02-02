import { H2 } from "../../../../components/Tags";
import JsFilterArrayObject from "./JsFilterArrayObject";
import JsFilterSort from "./JsFilterSort";

const JsCases = () => {
  return (
    <article>
      <H2>JsCases</H2>
      <ul className="list-inside list-disc">
        <li>
          <b>filter duplicate and sorting</b> Sorting Array (When sort() compares two values, it sends the values to the
          compare function, and sorts the values according to the returned (negative, zero, positive) value.)
          <JsFilterSort />
        </li>
        <li>
          <b>filter array of object</b>
          <JsFilterArrayObject />
        </li>
      </ul>
    </article>
  );
};

export default JsCases;
