import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { withRouter, useLocation, useHistory } from 'react-router-dom';
import './PlanetInfo.scss';

const PlanetInfo = () => {
    const [image, setImage] = useState({
        default: './../../assets/images/mars.jpeg'
    })
    const location = useLocation();
    const history = useHistory();
    const planetsReducer = useSelector(state => state.planetsReducer);
    const plutoStatus = useSelector(state => state.planetsReducer.plutoStatus);

    const id = location.state.id;
    const planetLowerCase = planetsReducer.selectedPlanet || 'mars'

    useEffect(() => {
        import(`./../../assets/images/${planetLowerCase.toLowerCase()}.jpeg`).then(setImage)
    }, [planetsReducer.selectedPlanet])

    const planet = planetsReducer.planets.filter(item => item.name === id).reduce(x => x);
    return (
        <div className="planet-info-wrapper">
            <div className="left-side">
                <h1>{planet.name}</h1>
                <div className="planet-image">
                    <img alt="this is a planet" src={image.default} />
                </div>
            </div>
            <div className="right-side">
                planet page: {location.state.id}
                <span>Number: {planet.id}</span>
                <span>Type: {planet.type}</span>
                <span>Size: {plutoStatus.properties ? plutoStatus.properties.size : planet.properties.size}</span>
                <span>Speed: {planet.properties.speed}</span>
                <span>Number of orbits: {planet.properties.orbitCount}</span>
                <span>Character
                    {planet.properties.character.map(item => <span>{item.style}: {item.level}</span>)}
                </span>
                <span>Attacks
                    {plutoStatus.properties ? plutoStatus.properties.attacks.map(item => <span>Name: {item.name}, Type: {item.type}, Damage: {item.damage}</span>) : planet.properties.attacks.map(item => <span>Name: {item.name}, Type: {item.type}, Damage: {item.damage}</span>)}
                </span>
                <span>
                    Background: {planet.properties.background}
                </span>
            </div>
            <div className="actions-tab">
                <button onClick={() => history.push('../fullview')}>MAP</button>
            </div>
            {
            planetsReducer.selectedPlanet === "PLUTO" ? 
                <div className="actions-tab">
                    <button onClick={() => history.push('../wheel')}>Play Spin The Wheel</button>
                </div> : 
                plutoStatus.properties.size > 0 && <div className="actions-tab">
                    <button>Attack!</button>
                    {planet.properties.orbitCount > 0 && <button>Attack it's orbits!</button>}
                </div>
            }
        </div>
    )
}

export default withRouter(PlanetInfo);
