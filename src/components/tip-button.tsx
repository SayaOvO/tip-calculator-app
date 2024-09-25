import { Dispatch, memo, SetStateAction } from "react";

const TipButton = memo(
  ({
    value,
    selected,
    onSelectTip,
  }: {
    value: string;
    selected: boolean;
    onSelectTip: Dispatch<SetStateAction<string>>;
  }) => {
    return (
      <button
        className={`bill-info__tip ${selected && "selected"}`}
        onClick={() => onSelectTip(value)}
      >
        {value}%
      </button>
    );
  }
);

TipButton.displayName = "TipButton";

export { TipButton };
