interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, onChange, ...inputProps }) => {
  return (
    <div>
      <label style={{ color: "white" }}>{label}</label>
      <input {...inputProps} />
    </div>
  );
};

export default Input;
