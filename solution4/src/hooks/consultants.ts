import { use, useCallback, useEffect, useState } from "react";
import { instance } from "../libs/api";

interface Record {
  id: string;
  createdTime: string;
  fields: {
    name: string;
    id: string;
    age: number;
    gender: string;
    phonenumber: number;
    email: string;
    career: string[];
  };
  deleted: boolean;
}

interface Response {
  records: Record[];
}

const consultants = () => {
  const [consultants, setConsultants] = useState<Record[]>([]);

  const saveConsultants = useCallback(async () => {
    const response = await instance.get<Response>("/profile");
    setConsultants(response.data.records);
  }, []);

  useEffect(() => {
    saveConsultants();
  }, [saveConsultants]);
  return { consultants, saveConsultants };
};

export default consultants;
