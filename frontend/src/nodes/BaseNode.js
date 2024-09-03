import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, data, label, inputHandles, outputHandles, children }) => {
  return (
    <div className="bg-white border border-indigo-500 rounded-lg shadow-sm p-3 min-w-[200px]">
      <div className="text-center font-semibold text-gray-700 mb-2">{label}</div>
      {children}
      {inputHandles && inputHandles.map((handle) => (
        <Handle
          key={`input-${handle.id}`}
          type="target"
          position={handle.position || Position.Left}
          id={`${id}-${handle.id}`}
          style={{top: `${handle.sty || 50}%`, left:"-6px" , width: "13px", height: "13px",border: "1px solid #6366f1", background: "#fff",}}
        />
      ))}
      {outputHandles && outputHandles.map((handle) => (
        <Handle
          key={`output-${handle.id}`}
          type="source"
          position={handle.position || Position.Right}
          id={`${id}-${handle.id}`}
          style={{right:"-6px" , width: "13px", height: "13px",border: "1px solid #6366f1", background: "#fff",}}
        />
      ))}
    </div>
  );
};