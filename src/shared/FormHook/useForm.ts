import { ChangeEvent, FormEvent, useState } from "react";
import { ErrorRecord, FormHookType } from "./form.type";

export const useForm = <T extends Record<keyof T, any> = {}>(
  options: FormHookType<T>
) => {
  const [data, setData] = useState<T>((options?.initialValues || {}) as T);
  const [errors, setErrors] = useState<ErrorRecord<T>>({});

  const handleChange = <S extends unknown>(
    e: ChangeEvent<HTMLInputElement & HTMLSelectElement & HTMLTextAreaElement>,
    sanitizeFn?: (value: any) => S
  ) => {
    const value = sanitizeFn ? sanitizeFn(e.target?.value) : e.target?.value;
    const key = e.target?.name as Extract<keyof T, string>;

    validateSingleField(key, value);

    setData((data) => {
      let newData = {
        ...data,
        [key]: value,
      };

      return newData;
    });
  };

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const isValid = validateFiled(data);
    if (!isValid) return;

    setErrors({});

    if (options?.onSubmit) {
      options?.onSubmit({ ...data });
    }
  }

  function validateSingleField(key: Extract<keyof T, string>, value: any) {
    if (options?.validations) {
      let valid = true;
      const newErrors: any = {};
      const validation = options?.validations[key];
      if (validation?.required?.value && !value) {
        valid = false;
        newErrors[key] = validation?.required?.message;
      }

      const pattern = validation?.pattern;
      if (pattern?.value && !RegExp(pattern.value).test(value)) {
        valid = false;
        newErrors[key] = pattern.message;
      }

      const custom = validation?.custom;
      if (custom?.isValid && !custom.isValid(value)) {
        valid = false;
        newErrors[key] = custom.message;
      }

      setErrors((preErrors) => {
        let newData = {
          ...preErrors,
          [key]: newErrors[key],
        };
        return newData;
      });
      return valid;
    }
    return true;
  }

  function validateFiled(formData: T) {
    if (options?.validations) {
      let valid = true;
      for (const key in options?.validations) {
        const value = formData[key];
        valid = validateSingleField(key, value);
      }

      return valid;
    }
  }

  return { handleChange, handleSubmit, errors };
};
