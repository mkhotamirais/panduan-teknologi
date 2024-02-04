import { useRef, useState } from "react";
import { data } from "./accordionData";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { H3 } from "../../../../components/Tags";

const AccAnimateAutoclose = () => {
  const [selected, setSelected] = useState(null);
  const accContentRef = useRef(null);
  const [accHeight, setAccHeight] = useState(null);

  const openSelected = (i) => {
    if (selected === i) {
      setSelected(null);
      setAccHeight(0);
      console.log(accHeight);
    } else {
      setAccHeight(accContentRef.current.scrollHeight);
      setSelected(i);
      console.log(accHeight);
    }
  };
  return (
    <>
      <H3>Accordion Autoclose</H3>
      <article className="">
        {data.map((d, i) => (
          <div key={i} className="">
            <button
              onClick={() => openSelected(i)}
              className={`flex hover:bg-slate-300 w-full p-2 items-center justify-between border-b border-slate-500 rounded overflow-hidden ${
                selected === i ? "bg-blue-3" : "bg-slate-200"
              }`}
            >
              <span>{d.title}</span>
              <span>{selected === i ? <FaMinusCircle /> : <FaPlusCircle />}</span>
            </button>
            <p
              ref={accContentRef}
              className={`bg-slate-100 overflow-hidden transition-all duration-500 ${selected === i ? "h- p-2" : "h-0 p-0"}`}
            >
              {d.content}
            </p>
          </div>
        ))}
      </article>
    </>
  );
};

export default AccAnimateAutoclose;
