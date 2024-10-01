type TButtonProps = {
  text?: string;
  className?: string;
  children?: React.ReactNode;
};
const Button = ({ text, className, children }: TButtonProps) => {
  return (
    <button className={className}>
      {text}
      {children}
    </button>
  );
};

export default Button;
