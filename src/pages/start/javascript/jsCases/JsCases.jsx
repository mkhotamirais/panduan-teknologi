import { H2 } from "../../../../components/Tags";

const JsCases = () => {
  return (
    <article>
      <H2>JsCases</H2>
      <ul className="list-inside list-disc">
        <li>filter duplicate</li>
        <li>
          contoh:
          <pre>{`
const arrDuplicate = ["a", "b", "c", "a", "d", "f", "b", "d"];
const arrSingle = arrDuplicate.filter((item, i) => arrDuplicate.indexOf(item) === i);
console.log(arrDuplicate, arrSingle);
`}</pre>
        </li>
        <li>
          Sorting Array (When sort() compares two values, it sends the values to the compare function, and sorts the values
          according to the returned (negative, zero, positive) value.)
        </li>
        <li>
          contoh:
          <pre>{`
const arrToSorting = [2, 10, 4, 30, 6, 50];
console.log(arrToSorting.sort());
arrToSorting.sort((a, b) => console.log(a, b, a - b));
const arrSort = arrToSorting.sort((a, b) => a - b);
console.log(arrSort);`}</pre>
        </li>
      </ul>
    </article>
  );
};

export default JsCases;
