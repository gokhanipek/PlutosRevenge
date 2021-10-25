import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
import { setPlanet } from '../../store/actions';
import { EARTH, JUPITER, MARS, MERCURY, NEPTUNE, PLUTO, SATURN, URANUS, VENUS } from '../../store/constants';
import './FullView.scss';

const FullView = () => {

    const dispatch = useDispatch();
    const planets = useSelector(state => state.planetsReducer.planets);

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
            {
                planets.map(planet => <div className={`planets ${planet.name.toLowerCase()}`} onClick={() => planetInfo(planet.name)}></div>)
            }
        </div>
    )
}

export default FullView;
