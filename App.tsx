
import React from 'react';
import Dashboard from './components/Dashboard.tsx';

function App() {
  return (
    <div className="bg-light-bg min-h-screen font-sans text-dark-text">
      <main className="p-4 sm:p-6 lg:p-8">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;