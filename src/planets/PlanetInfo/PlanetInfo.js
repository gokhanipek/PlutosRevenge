import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useLocation, useHistory } from 'react-router-dom';
import { setBattlePluto, setOpponent, setOrbit } from '../../store/actions';
import { WATER } from '../../store/constants';
import './PlanetInfo.scss';

const PlanetInfo = () => {
    const [image, setImage] = useState({
        default: './../../assets/images/mars.jpeg'
    })
    const location = useLocation();
    const history = useHistory();
    const dispatch = useDispatch()
    const planetsReducer = useSelector(state => state.planetsReducer);
    const plutoStatus = useSelector(state => state.planetsReducer.plutoStatus);

    const orbit = {
        name: 'orbit',
        properties: {
            speed: 10,
            size: 20,
            attacks:[{
                name: 'Tidal Waves',
                damage: 10,
                type: WATER
            }]
        }
    }

    const id = location.state.id;
    const planetLowerCase = planetsReducer.selectedPlanet || 'mars'

    useEffect(() => {
        import(`./../../assets/images/${planetLowerCase.toLowerCase()}.jpeg`).then(setImage)
    }, [planetsReducer.selectedPlanet])

    const onClickHandler = (planet, type) => {
        if(type === 'planet') {
            dispatch(setOpponent(planet));
        }
        if(type === 'orbit') {
            dispatch(setOpponent(orbit));
        }
        dispatch(setBattlePluto(plutoStatus))
        history.push('../battle');
    }

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
                <span>Size: {planet.name === 'PLUTO' ? plutoStatus.properties.size : planet.properties.size}</span>
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
                planetsReducer.planets.find(item => item.name === 'PLUTO') && <div className="actions-tab">
                    <button onClick={() => onClickHandler(planet, 'planet')}>Attack!</button>
                    {planet.properties.orbitCount > 0 && <button onClick={() => onClickHandler(planet, 'orbit')}>Attack it's orbits!</button>}
                </div>
            }
        </div>
    )
}

export default withRouter(PlanetInfo);
