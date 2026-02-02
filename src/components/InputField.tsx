import { UseFormRegister } from "react-hook-form";

interface InputFieldProps {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
}

const InputField = ({ name, type, label, placeholder, register }: InputFieldProps) => {
  return (
    <div>
      <label htmlFor={name} className="text-gray-700 text-sm font-bold mb-1 block mt-4">
        {label}
      </label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        className="border rounded w-full shadow py-3 px-4 text-gray-700 leading-tight focus:outline-none"
        {...register(name, { required: "この項目は必須です。" })}
      />
    </div>
  )
}

export default InputField;