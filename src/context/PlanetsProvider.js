import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../api/planetsAPI';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState({ data: [] }); // [state, setter]

  async function getInfosPlanets() {
    const planetsResponse = await fetchPlanets();
    setPlanets((prevData) => ({ ...prevData, data: planetsResponse.results }));
  }

  useEffect(() => {
    getInfosPlanets();
  }, []);

  const contextValue = {
    planets,
    getInfosPlanets,
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
