import classes from "./Button.module.css";
import styled from "styled-components";

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

export const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.main.filter.button.background};
  color: ${(props) => props.theme.main.filter.button.text};
  &:hover {
    background-color: ${(props) =>
      props.theme.main.filter.button.hover.background};
    border-color: ${(props) => props.theme.main.filter.button.hover.border};
    color: ${(props) => props.theme.main.filter.button.hover.text};
    transition-duration: 0.1s;
  }
`;
