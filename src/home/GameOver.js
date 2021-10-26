import React from 'react'
import { useHistory, withRouter } from 'react-router-dom'
import './BirdEyeView/Space.scss'

const GameOver = () => {
    const history = useHistory();
    return (
        <div className="game-over">
            <h1>GAME OVER</h1>
            <button onClick={() => history.push('../home')}>Another Round</button>
        </div>               
    )
}

export default withRouter(GameOver);
