import React from "react";

interface Props {
  title: string;
  onChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  value: string;
  name: string;
}

const TextArea = ({ title, onChange, value, name }: Props) => {
  return (
    <>
      <label className="block text-sm font-medium text-gray-700">{title}</label>
      <div className="mt-1">
        <textarea
          onChange={onChange}
          value={value}
          name={name}
          rows={3}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
        ></textarea>
      </div>
      <p className="mt-2 text-sm text-gray-500">
        Brief description for your video
      </p>
    </>
  );
};

export default TextArea;
