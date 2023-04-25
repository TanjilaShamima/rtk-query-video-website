import React from "react";
interface Props {
  title: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  value: string;
  name: string;
}

const TextInput = ({ title, onChange, value, name }: Props) => {
  return (
    <>
      <label className="block text-sm font-medium text-gray-700">{title}</label>
      <input
        type="text"
        name={name}
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        onChange={onChange}
        value={value}
      />
    </>
  );
};

export default TextInput;
