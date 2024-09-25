import { useCallback, useState } from "react";
import { BillInfo } from "./components/bill-info";
import { TipInfo } from "./components/tip-info";

export default function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");
  const [customTip, setCustomTip] = useState("");

  const reset = useCallback(() => {
    setBill("");
    setTip("");
    setPeople("");
    setCustomTip("");
  }, []);

  const b = Number(bill);
  const t = Number(customTip) ? Number(customTip) : Number(tip);
  const p = Number(people);

  console.log("T:", t);
  let totalPP = 0;
  let tipPP = 0;

  if (
    bill &&
    t &&
    people &&
    !Number.isNaN(b) &&
    !Number.isNaN(t) &&
    !Number.isNaN(p)
  ) {
    totalPP = (b * (1 + t / 100)) / p;
    tipPP = (b * t) / 100 / p;
  }

  // const totalPP = (Number(bill) * (1 + tip / 100)) / people;
  // const tipPP = (bill * tip) / 100 / people;
  return (
    <>
      <h1 className="title">
        split
        <br />
        tter
      </h1>
      <main className="container">
        <BillInfo
          bill={bill}
          onBillChange={setBill}
          tip={tip}
          onSelectTip={setTip}
          people={people}
          onPeopleChange={setPeople}
          customTip={customTip}
          onCustomTipChange={setCustomTip}
        />
        <TipInfo totalPP={totalPP} tipPP={tipPP} onReset={reset} />
      </main>
    </>
  );
}
