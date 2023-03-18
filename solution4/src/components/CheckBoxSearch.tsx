import { useState } from "react";
import styled from "styled-components";
import CheckBox from "./CheckBox";

interface SearchProps {
  setSearchUrl: React.Dispatch<React.SetStateAction<string>>;
  searchUrl: string;
  onSearchUrlChange: (searchUrl: string) => void;
}

const url = "https://mintalk.duckdns.org/counselors";
function Search(props: SearchProps) {
  const [field, setField] = useState<string[]>([]);
  const [gender, setGender] = useState<string[]>([]);

  const handleGenderChange = (value: string, checked: boolean) => {
    if (checked) {
      if (!gender.includes(value) && gender.length < 1) {
        setGender([...gender, value]);
      }
    } else {
      setGender(gender.filter((v) => v !== value));
    }
  };

  const handleFieldChange = (value: string, checked: boolean) => {
    if (checked) {
      if (!field.includes(value) && field.length < 1) {
        setField([...field, value]);
      } // 중복 방지
    } else {
      setField(field.filter((v) => v !== value));
    }
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let queryParams = "";

    if (field.length > 0) {
      queryParams += `field=${field.join(",")}`;
    }

    if (gender.length > 0) {
      if (queryParams.length > 0) {
        queryParams += "&";
      }
      queryParams += `gender=${gender.join(",")}`;
    }

    const newSearchUrl = queryParams ? `${url}?${queryParams}` : url;

    props.setSearchUrl(newSearchUrl);
    props.onSearchUrlChange(newSearchUrl);
    console.log(newSearchUrl);
  };

  const reset = () => {
    setField([]);
    setGender([]);

    console.log(field, gender);
  };

  return (
    <SearchForm onSubmit={handleSearch}>
      Gender
      <Gender>
        <CheckBox
          label="Male"
          value="male"
          checked={gender.includes("male")}
          onChange={handleGenderChange}
        />
        <CheckBox
          label="Female"
          value="female"
          checked={gender.includes("female")}
          onChange={handleGenderChange}
        />
      </Gender>
      Field
      <Field>
        <CheckBox
          label="Elder"
          value="elder"
          checked={field.includes("elder")}
          onChange={handleFieldChange}
        />
        <CheckBox
          label="Depression"
          value="depression"
          checked={field.includes("depression")}
          onChange={handleFieldChange}
        />
        <CheckBox
          label="Relationship"
          value="relationship"
          checked={field.includes("relationship")}
          onChange={handleFieldChange}
        />
        <CheckBox
          label="Youth"
          value="youth"
          checked={field.includes("youth")}
          onChange={handleFieldChange}
        />
        <CheckBox
          label="Anxiety"
          value="anxiety"
          checked={field.includes("anxiety")}
          onChange={handleFieldChange}
        />
      </Field>
      <button onClick={reset}>초기화</button>
      <button>검색</button>
    </SearchForm>
  );
}

export default Search;

const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Gender = styled.div`
  display: flex;
`;

const Field = styled.div`
  display: flex;
`;
