import { H2 } from "../../../../components/Tags";
import AccAnimateAutoclose from "./AccAnimateAutoclose";
import AccAnimateManualclose from "./AccAnimateManualclose";
import AccAutoclose from "./AccAutoclose";
import AccManualclose from "./AccManualclose";

const Accordion = () => {
  return (
    <section id="accordion">
      <H2>Accordion</H2>
      <AccAutoclose />
      <AccManualclose />
      <AccAnimateManualclose />
      <AccAnimateAutoclose />
    </section>
  );
};

export default Accordion;
