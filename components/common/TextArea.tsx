import React from "react";
import { useController, FieldValues } from "react-hook-form";

type Props = {
  control: any;
  name: string;
  placeholder?: string;
  error?: string;
  children?: React.ReactNode;
};

const Textarea = (props: Props) => {
  const { control, name, placeholder = "", error = "", ...rest } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <textarea
      className={`w-full px-6 py-4 text-sm font-medium bg-transparent border rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white resize-none min-h-[140px] outline-none focus:border-primary ${
        error.length > 0 ? "border-error" : "border-text2"
      }`}
      placeholder={placeholder}
      {...field}
      {...rest}
    ></textarea>
  );
};

export default Textarea;
