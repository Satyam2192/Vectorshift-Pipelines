import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const CustomNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data.operation || 'API Call');
  const [apiEndpoint, setApiEndpoint] = useState(data.apiEndpoint || '');
  const [method, setMethod] = useState(data.method || 'GET');
  const [customCode, setCustomCode] = useState(data.customCode || '');

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'operation':
        setOperation(value);
        break;
      case 'apiEndpoint':
        setApiEndpoint(value);
        break;
      case 'method':
        setMethod(value);
        break;
      case 'customCode':
        setCustomCode(value);
        break;
      default:
        break;
    }
  };

  const renderOperationFields = () => {
    switch (operation) {
      case 'API Call':
        return (
          <>
            <input
              type="text"
              name="apiEndpoint"
              value={apiEndpoint}
              onChange={handleChange}
              placeholder="API Endpoint"
              className="border rounded px-2 py-1 mt-1 w-full"
            />
            <select
              name="method"
              value={method}
              onChange={handleChange}
              className="border rounded px-2 py-1 mt-1 w-full"
            >
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
            </select>
          </>
        );
      case 'Custom Code':
        return (
          <textarea
            name="customCode"
            value={customCode}
            onChange={handleChange}
            placeholder="Enter your custom code here..."
            className="border rounded px-2 py-1 mt-1 w-full h-20"
          />
        );
      default:
        return null;
    }
  };

  const content = (
    <div className="flex flex-col">
      <select
        name="operation"
        value={operation}
        onChange={handleChange}
        className="border rounded px-2 py-1 w-full"
      >
        <option value="API Call">API Call</option>
        <option value="Custom Code">Custom Code</option>
      </select>
      {renderOperationFields()}
    </div>
  );

  const inputHandles = [
    { id: 'input', position: Position.Left },
  ];

  const outputHandles = [
    { id: 'output', position: Position.Right },
  ];

  return (
    <BaseNode 
      id={id} 
      data={data} 
      label="Custom Node" 
      inputHandles={inputHandles} 
      outputHandles={outputHandles}
    >
      {content}
    </BaseNode>
  );
};