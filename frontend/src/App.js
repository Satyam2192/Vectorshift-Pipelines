import React from 'react';
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';

function App() {
  return (
    <div className="max-h-screen bg-gray-50 flex flex-col max-w-10xl overflow-hidden">
      <main className="flex-grow flex flex-col">
        <div className=" w-full mx-auto px-4 sm:px-6 lg:px-8">
          <PipelineToolbar />
          <div className="mt-4 flex-grow">
            <PipelineUI />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;