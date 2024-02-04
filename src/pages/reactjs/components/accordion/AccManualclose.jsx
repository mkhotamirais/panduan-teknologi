import { useState } from "react";
import { data } from "./accordionData";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { H3 } from "../../../../components/Tags";

const AccManualclose = () => {
  return (
    <>
      <H3>Accordion Manualclose</H3>
      <article>
        {data.map((d, i) => (
          <AccItem key={i} d={d} />
        ))}
      </article>
    </>
  );
};

const AccItem = ({ d }) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsSelected(!isSelected)}
        className={`flex hover:bg-slate-300 w-full p-2 items-center justify-between border-b border-slate-500 rounded overflow-hidden ${
          isSelected ? "bg-blue-300" : "bg-slate-200"
        }`}
      >
        <span>{d.title}</span>
        <span>{isSelected ? <FaMinusCircle /> : <FaPlusCircle />}</span>
      </button>
      <p className={`p-2 bg-slate-100 ${isSelected ? "block" : "hidden"}`}>{d.content}</p>
    </div>
  );
};
AccItem.propTypes;

export default AccManualclose;
