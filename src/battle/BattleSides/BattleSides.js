import React from 'react'
import { useSelector } from 'react-redux';
import './BattleScreen.scss';

const BattleSides = () => {
    const opponent = useSelector(state => state.opponent);
    const pluto = useSelector(state => state.pluto);
    return (
        <div className="battle-wrapper">
            <div className="top"></div>
            <div className="bottom"></div>
            <div className="moves"></div>
        </div>
    )
}

export default BattleSides;
