import React from 'react'
import { useSelector } from 'react-redux';
import { withRouter, useLocation } from 'react-router-dom';

const PlanetInfo = () => {

    const location = useLocation();
    const state = useSelector(state => state.planets)
    const id = location.state.id;
    const planet = state.planets.filter(item => item.name === id).reduce(x => x);
    return (
        <div className="planet-info-wrapper">
            planet page: {location.state.id}
            {planet.properties.character.map(item => <p>{Object.keys(item)}: {Object.values(item)}</p>)}
        </div>
    )
}

export default withRouter(PlanetInfo);
