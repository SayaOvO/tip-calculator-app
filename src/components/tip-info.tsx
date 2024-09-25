import { memo } from "react";

interface TipInfo {
  totalPP: number;
  tipPP: number;
  onReset: () => void;
}
const TipInfo = memo(({ totalPP, tipPP, onReset }: TipInfo) => {
  return (
    <section className="tip-info">
      <p className="tip-info__item">
        <label className="tip-info__label">
          <span>Tip Amount</span>
          <span>/ person</span>
        </label>
        <span className="tip-info__value">${tipPP.toFixed(2)}</span>
      </p>
      <p className="tip-info__item">
        <label className="tip-info__label">
          <span>Total</span>
          <span>/ person</span>
        </label>
        <span className="tip-info__value">${totalPP.toFixed(2)}</span>
      </p>
      <button
        onClick={onReset}
        className="tip-info__reset-btn"
        disabled={totalPP === 0 || tipPP === 0}
      >
        Reset
      </button>
    </section>
  );
});

TipInfo.displayName = "TipInfo";

export { TipInfo };
