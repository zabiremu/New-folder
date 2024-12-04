import React from "react";

const Thead = ({ ths }) => {
  return (
    <thead>
      <tr>
        {ths.map((th, index) => (
          <th key={index} className="text-center" scope="col">
            {th}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default Thead;
