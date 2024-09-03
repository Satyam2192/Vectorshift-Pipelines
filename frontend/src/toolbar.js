import React from 'react';
import { DraggableNode } from './draggableNode';
import { SubmitButton } from './submit';
// import { LLMNode } from './nodes/LLMNode'; 
export const PipelineToolbar = () => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex justify-between">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Toolbox</h2>
      <SubmitButton /></div>
      <div className="flex flex-wrap gap-4">
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="custom" label="Custom" />
      </div>
    </div>
  );
};

