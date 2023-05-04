import classes from "./Button.module.css";

export default function Button({ className, extraClasses, active, ...props }) {
  const classNames = `${
    extraClasses ? extraClasses : classes.btn
  } ${className}`;
  return (
    <button className={classNames} {...props}>
      {props.children}
    </button>
  );
}
