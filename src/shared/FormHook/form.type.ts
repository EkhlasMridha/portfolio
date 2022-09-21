export type ErrorRecord<T> = Partial<Record<keyof T, string>>;

type ValidationType<T extends {}> = Partial<Record<keyof T, Validation>>;

interface Validation {
  required?: {
    value: boolean;
    message: string;
  };
  pattern?: {
    value: string;
    message: string;
  };
  custom?: {
    isValid: (value: string) => boolean;
    message: string;
  };
}

export interface FormHookType<T extends {}> {
  onSubmit: (data: T) => void;
  initialValues?: Partial<T>;
  validations?: ValidationType<T>;
}
