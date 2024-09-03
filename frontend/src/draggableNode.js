

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType }
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className="cursor-grab bg-white border border-indigo-500 rounded-lg shadow-sm p-3 text-center transition-all duration-200 ease-in-out transform hover:shadow-md hover:-translate-y-1"
      draggable
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
    >
      <span className="text-gray-700 font-medium">{label}</span>
    </div>
  );
};