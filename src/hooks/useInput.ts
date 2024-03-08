import { ChangeEvent, useCallback, useState } from "react";

interface initialFormType {
  [key: string]: unknown;
}

const useInput = (initialForm: initialFormType) => {
  const [form, setForm] = useState<initialFormType>(initialForm);

  //onChange
  const onChange = useCallback(
    (
      e:
        | ChangeEvent<HTMLInputElement>
        | ChangeEvent<HTMLSelectElement>
        | ChangeEvent<HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setForm((preForm) => ({ ...preForm, [name]: value }));
    },
    []
  );
  const reset = useCallback(() => setForm(initialForm), [initialForm]);

  return [form, setForm, onChange, reset] as const;
};

export default useInput;
