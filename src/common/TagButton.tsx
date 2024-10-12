import classNames from "classnames";
import { FC } from "react";

interface TagButton {
  selected?: boolean;
  children: string;
  id: string;
  onSelect: (id: string) => void;
}

const TagButton: FC<TagButton> = ({ onSelect, selected, children, id }) => {
  const className = classNames(
    "py-2.5 px-4 bg-slate-800 md:bg-inherit text-sm rounded-lg capitalize",
    selected ? "font-bold md:bg-slate-800" : "opacity-70",
  );
  return (
    <>
      <input
        className="hidden"
        type="radio"
        checked={!!selected}
        autoComplete="off"
        id={id}
        onChange={() => onSelect(id)}
      />
      <label className={className} htmlFor={id}>
        {children}
      </label>
    </>
  );
};

export default TagButton;
