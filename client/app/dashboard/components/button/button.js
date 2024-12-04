import React from "react";

const Button = ({ title, type, customClass = "" }) => {
  return (
    <div>
      <button
        type={type}
        className={`me-1 mb-2 float-end btn btn-primary ${customClass}`}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
