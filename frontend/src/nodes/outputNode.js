import React, { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      label="Output"
      inputHandles={[{ id: 'value', position: Position.Left }]}
      outputHandles={[]}
    >
      <div className="space-y-2 mb-2">
        <div>
          <label htmlFor={`${id}-name`} className="">
            <p className=" text-[12px] text-gray-600">Name</p>
            <input
              id={`${id}-name`}
              type="text"
              value={currName}
              onChange={handleNameChange}
              className="w-full flex-grow border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>
        </div>
        <div>
          <label htmlFor={`${id}-type`} className="">
            <p className=" text-[12px] text-gray-600">Type</p>
            <select
              id={`${id}-type`}
              value={outputType}
              onChange={handleTypeChange}
              className="w-full flex-grow border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="Text">Text</option>
              <option value="File">Image</option>
            </select>
          </label>
        </div>
      </div>
    </BaseNode>
  );
};