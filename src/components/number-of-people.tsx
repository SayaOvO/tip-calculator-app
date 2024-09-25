import { Dispatch, memo, SetStateAction } from "react";

interface NumberOfPeopleProps {
  people: string;
  onPeopleChange: Dispatch<SetStateAction<string>>;
}
const NumberOfPeople = memo(
  ({ people, onPeopleChange }: NumberOfPeopleProps) => {
    return (
      <div className="bill-info__number-of-people">
        <label htmlFor="nop" className="bill-info__label">
          Number of People
        </label>
        <div className="bill-info__input-container">
          <input
            placeholder="0"
            className="bill-info__input"
            id="nop"
            value={people}
            onChange={(e) => onPeopleChange(e.target.value)}
          />
          <img
            src="./assets/images/icon-person.svg"
            alt="person icon"
            className="bill-info__input-decorator"
          />
        </div>
      </div>
    );
  }
);

NumberOfPeople.displayName = "NumberOfPeople";

export { NumberOfPeople };
