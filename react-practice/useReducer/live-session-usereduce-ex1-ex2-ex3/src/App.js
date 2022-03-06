import "./styles.css";

export default function App() {
  // const array = [1, 3, 55, 22, 44];acc
  // const oddAndEvenSumReducer = (accumulator, value) =>
  //   value % 2 === 0
  //     ? { ...accumulator, evenSum: accumulator.evenSum + value }
  //     : { ...accumulator, oddSum: accumulator.oddSum + value };

  // const result = array.reduce(oddAndEvenSumReducer, { oddSum: 0, evenSum: 0 });
  // console.log(result);

  // ex 2
  const numList = [
    { type: "odd", payload: 1 },
    { type: "odd", payload: 3 },
    { type: "odd", payload: 55 },
    { type: "even", payload: 22 },
    { type: "even", payload: 44 }
  ];

  // const oddAndEvenSumReducer1 = (accumulator, { type, payload }) =>
  //   type === "even"
  //     ? { ...accumulator, evenSum: accumulator.evenSum + payload }
  //     : { ...accumulator, oddSum: accumulator.oddSum + payload };

  // const oddEvenSum = numList.reduce(oddAndEvenSumReducer1, {
  //   oddSum: 0,
  //   evenSum: 0
  // });

  // console.log(oddEvenSum);

  // ex3
  const oddAndEvenSumReducer2 = (acc, { type, payload }) => {
    switch (type) {
      case "odd": {
        return { ...acc, oddSum: acc.oddSum + payload };
      }
      case "even": {
        return { ...acc, evenSum: acc.evenSum + payload };
      }
      default:
        console.log("default case");
    }
  };

  const oddEvenSum2 = numList.reduce(oddAndEvenSumReducer2, {
    oddSum: 0,
    evenSum: 0
  });

  console.log(oddEvenSum2);

  return (
    <div className="App">
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
