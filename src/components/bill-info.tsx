import { Dispatch } from "react";
import { TipButton } from "./tip-button";
import { BillAmount } from "./bill-amount";
import { NumberOfPeople } from "./number-of-people";
import { SelectTip } from "./select-tip";

interface BillInfoProps {
  bill: string;
  onBillChange: Dispatch<React.SetStateAction<string>>;
  tip: string;
  onSelectTip: Dispatch<React.SetStateAction<string>>;
  people: string;
  onPeopleChange: Dispatch<React.SetStateAction<string>>;
  customTip: string;
  onCustomTipChange: Dispatch<React.SetStateAction<string>>;
}
export function BillInfo({
  bill,
  onBillChange,
  tip,
  onSelectTip,
  people,
  onPeopleChange,
  customTip,
  onCustomTipChange,
}: BillInfoProps) {
  return (
    <section className="bill-info">
      <BillAmount bill={bill} onBillChange={onBillChange} />
      <SelectTip
        tip={tip}
        onSelectTip={onSelectTip}
        customTip={customTip}
        onCustomTipChange={onCustomTipChange}
      />
      <NumberOfPeople people={people} onPeopleChange={onPeopleChange} />
    </section>
  );
}
