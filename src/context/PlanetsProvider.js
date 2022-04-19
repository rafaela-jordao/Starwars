import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../api/planetsAPI';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState({ data: [] }); // [state, setter]
  const [filterByName, setFilterByName] = useState({ name: '' });

  async function getInfosPlanets() {
    const planetsResponse = await fetchPlanets();
    setPlanets((prevData) => ({ ...prevData, data: planetsResponse.results }));
  }

  useEffect(() => {
    getInfosPlanets();
  }, []);

  // valores provider
  const contextValue = {
    planets,
    getInfosPlanets,
    filterByName,
    setFilterByName,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
