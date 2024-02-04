import { useRef, useState } from "react";
import { data } from "./accordionData";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { H3 } from "../../../../components/Tags";

const AccAnimateManualclose = () => {
  return (
    <>
      <H3>Accordion Animate Manualclose</H3>
      <article>
        {data.map((d, i) => (
          <AccItem key={i} d={d} />
        ))}
      </article>{" "}
    </>
  );
};

const AccItem = ({ d }) => {
  const [isSelected, setIsSelected] = useState(false);
  const accContentRef = useRef(null);

  const openAcc = () => {
    setIsSelected(!isSelected);
    console.log(accContentRef.current.style.height);
  };
  return (
    <div>
      <button
        onClick={openAcc}
        className={`flex hover:bg-slate-300 w-full p-2 items-center justify-between border-b border-slate-500 rounded overflow-hidden ${
          isSelected ? "bg-blue-300" : "bg-slate-200"
        }`}
      >
        <span>{d.title}</span>
        <span className="duration-300">{isSelected ? <FaMinusCircle /> : <FaPlusCircle />}</span>
      </button>
      <p
        ref={accContentRef}
        className={`bg-slate-100 overflow-hidden transition-all duration-500 ${isSelected ? "h-16 p-2" : "h-0 p-0"}`}
      >
        {d.content}
      </p>
    </div>
  );
};
AccItem.propTypes;

export default AccAnimateManualclose;
