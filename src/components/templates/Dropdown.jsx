import React from "react";

const Dropdown = ({ title, options ,func }) => {
  return (
    <div className="select w-[30%] xl:w-18 ">
      <select defaultValue="0" name="format" id="format" onChange={func}>
        <option value="0" disabled>
          {title}
        </option>
        {options.map((o, i) => {
          return (
            <option value={o} key={i}>
              {o}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Dropdown;
