interface CheckBoxProps {
  label: string;
  checked: boolean;
  onChange: (value: string, cheched: boolean) => void;
  value: string;
}

function CheckBox({ label, value, checked, onChange }: CheckBoxProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    onChange(value, checked);
  };

  return (
    <div>
      <label>
        {label}
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          value={value}
        ></input>
      </label>
    </div>
  );
}

export default CheckBox;
