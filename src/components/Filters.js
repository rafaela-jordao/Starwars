import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filters() {
  const { filterByNumeric,
    setFilterByNumeric,
    handleClick,
  } = useContext(PlanetsContext);

  const { column, comparison, value } = filterByNumeric;

  return (
    <form>
      <label htmlFor="column">
        Colunas
        <select
          data-testid="column-filter"
          name="column"
          id="column"
          value={ column }
          onChange={ ({ target }) => setFilterByNumeric({
            ...filterByNumeric, column: target.value }) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>

      <label htmlFor="comparison">
        Operador
        <select
          data-testid="comparison-filter"
          name="comparison"
          id="comparison"
          value={ comparison }
          onChange={ ({ target }) => setFilterByNumeric({
            ...filterByNumeric, comparison: target.value }) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a ">igual a</option>
        </select>
      </label>

      <input
        data-testid="value-filter"
        type="number"
        id="value-filter"
        name="value"
        value={ value }
        onChange={ ({ target }) => setFilterByNumeric({
          ...filterByNumeric, value: target.value }) }

      />

      <button
        data-testid="button-filter"
        type="button"
        id="button-filter"
        name="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>

    </form>
  );
}

export default Filters;
