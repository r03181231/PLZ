import { ChangeEvent, useCallback, useState } from "react";

interface initialFormType {
  [key: string]: any;
}

const useInput = (initialForm: initialFormType) => {
  const [form, setForm] = useState(initialForm);

  //onChange
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((preForm) => ({ ...preForm, [name]: value }));
  }, []);
  const reset = useCallback(() => setForm(initialForm), [initialForm]);

  return [form, setForm, onChange, reset];
};

export default useInput;
