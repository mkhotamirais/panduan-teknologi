import { useState } from "react";
import { data } from "./accordionData";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { H3 } from "../../../../components/Tags";

const AccAutoclose = () => {
  const [selected, setSelected] = useState(null);

  const openSelected = (i) => {
    if (selected === i) {
      setSelected(null);
    } else setSelected(i);
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
                selected === i ? "bg-blue-300" : "bg-slate-200"
              }`}
            >
              <span>{d.title}</span>
              <span>{selected === i ? <FaMinusCircle /> : <FaPlusCircle />}</span>
            </button>
            <p className={`p-2 bg-slate-100 ${selected === i ? "block" : "hidden"}`}>{d.content}</p>
          </div>
        ))}
      </article>
    </>
  );
};

export default AccAutoclose;
