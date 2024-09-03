import React, { useState, useEffect } from 'react';
import { BaseNode } from './BaseNode';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [inputHandles, setInputHandles] = useState([]);

  useEffect(() => {
    const regex = /\{\{(.*?)\}\}/g;
    let match;
    const newHandles = [];
    while ((match = regex.exec(currText)) !== null) {
      newHandles.push({ id: match[1].trim(), position: Position.Left });
    }
    setInputHandles(newHandles);
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode 
      id={id}
      data={data}
      label="Text Node"
      inputHandles={inputHandles}
      outputHandles={[{ id: 'output', position: Position.Right }]}
    >
      <textarea
        value={currText}
        onChange={handleTextChange}
        className="border rounded p-1 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
        style={{
          height: 'auto',
          minHeight: '60px',
          resize: 'none',
        }}
      />
    </BaseNode>
  );
};
