import React from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

interface FromFieldProps<T extends FieldValues>{
  control: Control<T>,
  name: Path<T>,
  label : string,
  placeholder?: string,
  type : 'text' | 'email' | 'password' | 'file'
}
const FormField = ({control, name, label, placeholder, type = "text"}:FromFieldProps<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="label">{label}</FormLabel>
        <FormControl>
          <Input placeholder={placeholder} {...field} className="input" type={type}/>
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormField;
