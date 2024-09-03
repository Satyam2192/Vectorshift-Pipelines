import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      label="Input"
      inputHandles={[]}
      outputHandles={[{ id: 'value' }]}
    >
      <div className="space-y-2 mb-2">
        <div className="">
          <p className=" text-[12px] text-gray-600">Name</p>
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
            className="w-full flex-grow border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="">
          <p className=" text-[12px] text-gray-600">Type</p>
          <select
            value={inputType}
            onChange={handleTypeChange}
            className="w-full flex-grow border bg-white border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </div>
      </div>

    </BaseNode>
  );
};
