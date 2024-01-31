import { H2 } from "../../../components/Tags";

const Javascript = () => {
  return (
    <section>
      <H2>Javascript</H2>
      <p>Ada banyak cara mengetes syntax javascript, berikut beberapa caranya:</p>
      <ul className="list-inside list-disc">
        <li>di dalam html</li>
        <li>contoh:</li>
        <pre>{`
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>
  <body>
    <script>
      console.log('hello world')
    </script>
  </body>
</html>
`}</pre>
        <li>cara lainnya menyusul</li>
      </ul>
    </section>
  );
};

export default Javascript;
