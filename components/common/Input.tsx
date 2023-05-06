import React from "react";
import { useController } from "react-hook-form";

interface InputProps {
  control: any;
  name: string;
  type?: string;
  error?: string;
  placeholder?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

const Input = (props: InputProps) => {
  const {
    control,
    name,
    type = "text",
    error = "",
    placeholder = "",
    children,
    ...rest
  } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <input
      id={name}
      type={type}
      className={`border focus:border-primary outline-none bg-transparent rounded-md caret-text2 text-text4 px-4 py-2 placeholder:text-text4 dark:placeholder:text-text2 ${
        error.length > 0 ? "border-error" : "border-text2"
      }`}
      placeholder={error.length <= 0 ? placeholder : ""}
      {...field}
      {...rest}
    />
  );
};

export default Input;
