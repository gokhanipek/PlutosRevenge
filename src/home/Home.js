import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom'
import { startGame } from '../store/actions';
import './BirdEyeView/Space.scss';

const Home = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startGame());
    }, [])

    const onClickHandler = () => {
        history.push('../fullview');
    }
    return (
        <div className="home-wrapper">
            <h1>Pluto's Revenge</h1>
            <button onClick={onClickHandler}>Start</button>
        </div>
    )
}

export default withRouter(Home)