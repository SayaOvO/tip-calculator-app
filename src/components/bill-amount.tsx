import { Dispatch, memo, SetStateAction, useState } from "react";

interface BillAmount {
  bill: string;
  onBillChange: Dispatch<SetStateAction<string>>;
}
const BillAmount = memo(({ bill, onBillChange }: BillAmount) => {
  return (
    <div className="bill-info__amount">
      <label htmlFor="bill" className="bill-info__label">
        Bill
      </label>
      <div className="bill-info__input-container">
        <input
          className="bill-info__input"
          placeholder="0"
          id="bill"
          value={bill}
          onChange={(e) => onBillChange(e.target.value)}
        />
        <img
          src="./assets/images/icon-dollar.svg"
          alt="dollar icon"
          className="bill-info__input-decorator"
        />
      </div>
    </div>
  );
});

BillAmount.displayName = "BillAmount";

export { BillAmount };
