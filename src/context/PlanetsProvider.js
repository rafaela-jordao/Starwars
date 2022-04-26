import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../api/planetsAPI';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState({ data: [] }); // [state, setter]

  // estado para o input 'name'
  const [filterByName, setFilterByName] = useState({ name: '' });

  // estado para os inputs (opção coluna, comparação e valor)
  const [filterByNumeric, setFilterByNumeric] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  // estado para o array de filtros (filter numeric)
  const [selectedFilters, setSelectedFilters] = useState([]);

  async function getInfosPlanets() {
    const planetsResponse = await fetchPlanets();
    setPlanets((prevData) => ({ ...prevData, data: planetsResponse.results }));
  }

  useEffect(() => {
    getInfosPlanets();
  }, []);

  useEffect(() => {
    console.log(selectedFilters);
  }, [selectedFilters]);

  // req.3 - essa função recebe linha a linha do array de dados
  const handleFilters = (el) => {
    const rows = [];

    selectedFilters.forEach((filter) => {
      switch (filter.comparison) {
      case 'maior que':
        rows.push(Number(el[filter.column]) > Number(filter.value));
        break;
      case 'menor que':
        rows.push(Number(el[filter.column]) < Number(filter.value));
        break;
      case 'igual a':
        rows.push(el[filter.column] === filter.value);
        break;
      default:
        return true;
      }
    });
    // são retornados os valores boleanos (true para quem passou no teste e false p/ quem não passou)
    return rows.every((item) => item);
  };

  // req.3 - função disparada através do onclick, responsável por filtrar os dados selecionados.
  const handleClick = () => {
    setSelectedFilters([...selectedFilters, filterByNumeric]);
    setFilterByNumeric({
      column: '',
      comparison: '',
      value: '0',
    });
  };

  // dados compartilhados através do provider
  const contextValue = {
    planets,
    getInfosPlanets,
    filterByName,
    setFilterByName,
    filterByNumeric,
    setFilterByNumeric,
    selectedFilters,
    setSelectedFilters,
    handleFilters,
    handleClick,

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

// requisito 3 desenvolvido a partir da revisão de filtros realizada no dia 25/04 (Thiago Braddock).
