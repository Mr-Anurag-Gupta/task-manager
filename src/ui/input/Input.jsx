import React, { useImperativeHandle, useRef } from "react";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef(null);

  // We don't require to expose the whole input DOM node.
  // Therefore, exposing only focus function to parent.
  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current.focus();
        },
      };
    },
    []
  );

  return (
    <div>
      <label htmlFor={props.name} aria-label={props.label}>
        <input
          ref={inputRef}
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
