import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import './BattleScreen.scss';
import plutoImage from './../../assets/images/pluto.jpeg';

const BattleScreen = () => {

    const [image, setImage] = useState({
        default: './../../assets/images/mars.jpeg'
    })
    const opponent = useSelector(state => state.battleReducer.opponent);
    const pluto = useSelector(state => state.battleReducer.pluto);

    useEffect(() => {
        import(`./../../assets/images/${opponent.name.toLowerCase()}.jpeg`).then(setImage)
    }, [opponent.name])


    return (
        <div className="battle-wrapper">
            <div className="top">
                <div className="status-bar"><span></span></div>
                <img className="opponent-wrapper" src={image.default} height={opponent.properties.size * 5} width={opponent.properties.size * 5} alt={`${opponent.name} standing on the left side`} />
                <div className="opponent-shadow"></div>
            </div>
            <div className="bottom">
                <div className="status-bar"><span></span></div>
                <img className="pluto-wrapper" src={plutoImage} height={pluto.properties.size} width={pluto.properties.size} alt="Pluto standing on the left side" />
                <div className="pluto-shadow"></div>
            </div>
            <div className="moves">
                {pluto.properties.attacks.map(attack => <>
                    <div className="move-wrapper">
                        <div>{attack.name}</div>
                        <div>Damage: {attack.damage}</div>
                        <div>Type: {attack.type}</div>
                    </div>
                </>)}
            </div>
        </div>
    )
}

export default BattleScreen
