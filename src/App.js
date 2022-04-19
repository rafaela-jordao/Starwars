import React from 'react';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <span>Projeto Star Wars</span>
      <Table />
    </PlanetsProvider>
  );
}

export default App;
