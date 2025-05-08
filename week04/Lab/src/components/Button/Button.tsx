import { ButtonComponent } from "./Button.styles";
type ButtonProps = {
  text: string;
  disabled?: boolean;
  onClick: () => void;
};
export default function Button({
  text,
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <ButtonComponent disabled={disabled} onClick={onClick}>
      {text}
    </ButtonComponent>
  );
}
