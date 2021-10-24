import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
import { setPlanet } from '../../store/actions';
import { EARTH, JUPITER, MARS, MERCURY, NEPTUNE, PLUTO, SATURN, URANUS, VENUS } from '../../store/constants';
import './FullView.scss';

const FullView = () => {

    const dispatch = useDispatch()

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
            <div className="planets mercury" onClick={() => planetInfo(MERCURY)}></div>
            <div className="planets venus" onClick={() => planetInfo(VENUS)}></div>
            <div className="planets earth" onClick={() => planetInfo(EARTH)}></div>
            <div className="planets mars" onClick={() => planetInfo(MARS)}></div>
            <div className="planets jupiter" onClick={() => planetInfo(JUPITER)}></div>
            <div className="planets saturnus" onClick={() => planetInfo(SATURN)}></div>
            <div className="planets uranus" onClick={() => planetInfo(URANUS)}></div>
            <div className="planets neptune" onClick={() => planetInfo(NEPTUNE)}></div>
            <div className="planets pluto" onClick={() => planetInfo(PLUTO)}></div>
        </div>
    )
}

export default FullView;
