import React from 'react'
import { useHistory, withRouter } from 'react-router-dom'
import './BirdEyeView/Space.scss'

const GameEnd = () => {
    const history = useHistory();
    return (
        <div className="game-over">
            <h1>Success</h1>
            <p>After a long, tiring but fulfilling quest, you managed to beat Earth and showed that you are more than a DWARF planet and changed PASA to NASA back. Unfortunately that was the time you realized you are alone now... And out of purposes.</p>
            <p>You realized that nobody belongs anywhere, nobody exists on purpose and everybody's going to die.</p>
            <p>And your betting addiction got worse... Oh god...</p>
            <button onClick={() => history.push('../home')}>Home</button>
        </div>               
    )
}

export default withRouter(GameEnd);
