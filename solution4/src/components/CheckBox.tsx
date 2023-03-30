import styled from "styled-components";

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
        <StyledP>
          {label}
          <StyledInput
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            value={value}
          />
        </StyledP>
      </label>
    </div>
  );
}

export default CheckBox;

const StyledP = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;

const StyledInput = styled.input`
  margin-left: 0.5rem;

  display: inline-block;
  border: 2px solid #bcbcbc;
  cursor: pointer;
`;
