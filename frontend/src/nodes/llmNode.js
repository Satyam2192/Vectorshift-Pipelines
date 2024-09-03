import React from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  const inputHandles = [
    { id: 'system', position: Position.Left, sty: 100/3 },
    { id: 'prompt', position: Position.Left, sty: 200/3 }
  ];

  const outputHandles = [
    { id: 'response', position: Position.Right }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      label="OpenAI LLM"
      inputHandles={inputHandles}
      outputHandles={outputHandles}
    >
      <div className="space-y-2">
        <div className="">
          <p className=" text-[12px] text-gray-600">System</p>
          <input
            type="text"
            className="w-full flex-grow border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="">
          <p className=" text-[12px] text-gray-600">Prompt</p>
          <input
            type="text"
            className="w-full flex-grow border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="">
        <p className=" text-[12px] text-gray-600">Model</p>
          <select className="bg-white text-xs w-full flex-grow rounded px-1 py- focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>gpt-4-turbo-2024-04-09</option>
          </select>
        </div>
        <label className="flex items-center space-x-2 p-3">
          <input type="checkbox" className="form-checkbox" />
          <span className="text-xs">Use Personal API Key</span>
        </label>
      </div>
    </BaseNode>
  );
};