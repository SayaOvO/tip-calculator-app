import { Dispatch, memo, SetStateAction } from "react";
import { TipButton } from "./tip-button";

interface SelectTipProps {
  tip: string;
  onSelectTip: Dispatch<SetStateAction<string>>;
  customTip: string;
  onCustomTipChange: Dispatch<SetStateAction<string>>;
}
const SelectTip = memo(
  ({ tip, onSelectTip, customTip, onCustomTipChange }: SelectTipProps) => {
    return (
      <div className="bill-info__select-tip">
        <label htmlFor="tip" className="bill-info__label">
          Select Tip %
        </label>
        <div className="bill-info__tips">
          <TipButton
            value="5"
            selected={tip === "5"}
            onSelectTip={onSelectTip}
          />

          <TipButton
            value="10"
            selected={tip === "10"}
            onSelectTip={onSelectTip}
          />

          <TipButton
            value="15"
            selected={tip === "15"}
            onSelectTip={onSelectTip}
          />
          <TipButton
            value="25"
            selected={tip === "25"}
            onSelectTip={onSelectTip}
          />
          <TipButton
            value="50"
            selected={tip === "50"}
            onSelectTip={onSelectTip}
          />
          <input
            placeholder="Custom"
            type="text"
            className="bill-info__tip bill-info__custom-tip"
            id="tip"
            value={customTip}
            onChange={(e) => {
              onSelectTip("");
              onCustomTipChange(e.target.value);
            }}
          />
        </div>
      </div>
    );
  }
);

SelectTip.displayName = "SelectTip";

export { SelectTip };
