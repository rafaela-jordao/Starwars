import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { planets: { data },
    filterByName,
    setFilterByName,
  } = useContext(PlanetsContext);

  const { name } = filterByName;

  return (
    <>
      <div className="filterPlanet">
        <input
          data-testid="name-filter"
          type="text"
          value={ name }
          onChange={ (e) => setFilterByName({ name: e.target.value }) }
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation period</th>
            <th>Orbital period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          { data
            .filter((planet) => planet.name.toLowerCase().includes(filterByName.name))
            .map((item) => (
              <tr key={ item.name }>
                <td>{ item.name }</td>
                <td>{ item.rotation_period }</td>
                <td>{ item.orbital_period }</td>
                <td>{ item.diameter }</td>
                <td>{ item.climate }</td>
                <td>{ item.gravity }</td>
                <td>{ item.terrain }</td>
                <td>{ item.surface_water }</td>
                <td>{ item.population }</td>
                <td>{ item.films }</td>
                <td>{ item.created }</td>
                <td>{ item.edited }</td>
                <td>{ item.url }</td>
              </tr>

            ))}
        </tbody>

      </table>
    </>

  );
}

export default Table;
