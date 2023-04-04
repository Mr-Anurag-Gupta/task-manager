import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div>
      <label htmlFor={props.name} aria-label={props.label}>
        <input
          ref={ref}
          className={props.className}
          type={props.type}
          name={props.name}
          value={props.value}
          {...props}
        />
      </label>
    </div>
  );
});

export default Input;
