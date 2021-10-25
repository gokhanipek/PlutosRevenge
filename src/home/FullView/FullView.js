import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
import { setPlanet } from '../../store/actions';
import { EARTH, JUPITER, MARS, MERCURY, NEPTUNE, PLUTO, SATURN, URANUS, VENUS } from '../../store/constants';
import './FullView.scss';

const FullView = () => {

    const dispatch = useDispatch();
    const planets = useSelector(state => state.planetsReducer);

    const history = useHistory();

    const planetInfo = (id) => {
        history.push(`./planetinfo/${id}`, {id})
        dispatch(setPlanet(id));
    }
    return (
        <div className="fullview"> 
            <div className="planets sun">
                <span className="heat-ring"></span>
                <span className="heat-ring"></span>
                <span className="heat-ring"></span>
            </div>
            {planets.planets[0].properties.size > 0 && <div className="planets mercury" onClick={() => planetInfo(MERCURY)}></div>}
            {planets.planets[1].properties.size > 0 && <div className="planets venus" onClick={() => planetInfo(VENUS)}></div>}
            {planets.planets[2].properties.size > 0 && <div className="planets earth" onClick={() => planetInfo(EARTH)}></div>}
            {planets.planets[3].properties.size > 0 && <div className="planets mars" onClick={() => planetInfo(MARS)}></div>}
            {planets.planets[4].properties.size > 0 && <div className="planets jupiter" onClick={() => planetInfo(JUPITER)}></div>}
            {planets.planets[5].properties.size > 0 && <div className="planets saturnus" onClick={() => planetInfo(SATURN)}></div>}
            {planets.planets[6].properties.size > 0 && <div className="planets uranus" onClick={() => planetInfo(URANUS)}></div>}
            {planets.planets[7].properties.size > 0 && <div className="planets neptune" onClick={() => planetInfo(NEPTUNE)}></div>}
            {planets.plutoStatus.properties.size > 0 && <div className="planets pluto" onClick={() => planetInfo(PLUTO)}></div>}
        </div>
    )
}

export default FullView;
