import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './BattleScreen.scss';
import plutoImage from './../../assets/images/pluto.jpeg';
import { removePlanet, setLastPlayed,setOpponentAttack, setPlutoStatus } from '../../store/actions';
import { useHistory } from 'react-router-dom';

const BattleScreen = () => {

    const [image, setImage] = useState({
        default: './../../assets/images/mars.jpeg'
    })
    const opponent = useSelector(state => state.battleReducer.opponent);
    const pluto = useSelector(state => state.battleReducer.pluto);
    // const lastPlayer = useSelector(state => state.battleReducer.lastPlayer);
    const dispatch = useDispatch();
    const infoRef = useRef()
    const hpRef = useRef(0);
    const plutoHpRef = useRef();
    const awardRef = useRef();  
    const history = useHistory();

    const [opponentHP, setOpponentHP] = useState(opponent.properties.size || 0);
    const [plutoHP, setPlutoHP] = useState(pluto.properties.size || 0);
    const [lastAttack, setLastAttack] = useState({});
    const [lastPlayer, setLastPlayer] = useState('');
    

    useEffect(() => {
        import(`./../../assets/images/${opponent.name.toLowerCase()}.jpeg`).then(setImage)
    }, [opponent.name])

    useEffect(() => {
        if(lastPlayer === 'pluto' && opponentHP > 0) {
            const attack = opponent.properties.attacks[Math.floor(Math.random() * opponent.properties.attacks.length)]
            setLastAttack(attack);
            infoRef.current.classList.add('visible');
            setTimeout(() => infoRef.current.classList.remove('visible'), 2000)
            setPlutoHP(plutoHP - attack.damage > 0 ? plutoHP - attack.damage : 0 );
            setTimeout(() => setLastPlayer('opponent'), 4000)
        }

    }, [lastPlayer])
    
    
    useEffect(() => {
        if(lastPlayer !== 'pluto'){
            const barLength = (opponentHP / opponent.properties.size) * 100;  
            setTimeout(() => hpRef.current.style.width = `${barLength}%`, 3000)
        }
    
        if(lastPlayer === 'pluto') {
            const plutoBarLength = (plutoHP / pluto.properties.size) * 100;  
            setTimeout(() => plutoHpRef.current.style.width = `${plutoBarLength}%`, 3000)
        }

        if(opponentHP <= 0){
            const newsize = plutoHP + opponent.properties.size;
            const newPluto = {
                ...pluto,
                properties: {
                    ...pluto.properties,
                    size: newsize
                }
            }
            dispatch(setPlutoStatus(newPluto));
            dispatch(removePlanet(opponent));
            setTimeout( ()=> awardRef.current.classList.add('visible'), 4000);
        }
        if(plutoHP <= 0){
            setTimeout( ()=> awardRef.current.classList.add('visible'), 4000);
        }
        
    }, [opponentHP, plutoHP])

    const plutoAttackHandler = (attack) => {
        if(lastPlayer !== 'pluto') {
            setLastAttack(attack);
            infoRef.current.classList.add('visible');
            setTimeout(() => infoRef.current.classList.remove('visible'), 2000)
            setOpponentHP(opponentHP - attack.damage > 0 ? opponentHP - attack.damage : 0);
            setTimeout(() => setLastPlayer('pluto'), 4000);
        }
    }

    const battleEndHandler = (result) => {
        result === 'win' && opponent.name === 'EARTH' ? history.push('../endofstory') : history.push('../fullview');
        result === 'lose' && history.push('../deepdarkness')
        dispatch(removePlanet(plutoHP > 0 ? opponent : pluto))
        setLastPlayer('');
    }


    return (
        <div className="battle-wrapper">
            <div className="award-screen" ref={awardRef}>
                <>
                    {plutoHP > 0 ? <>
                        <h2>Revenge is a dish best served cold. Have no mercy for the ones that stand in my way.</h2>
                        <button onClick={() => battleEndHandler('win')}>Go back to map</button>
                        </> : <>
                        <h2>No! God! Oh God, what is life? How can someone so talented die so young? What's being young? I'm not young, I'm old! </h2>
                        <button onClick={() => battleEndHandler('lose')}>Game Over</button>
                        </> 
                    }
                </>
            </div>
            <div className="turn-info" ref={infoRef}>{lastPlayer !== 'pluto' ? 'PLUTO used ' : `${opponent.name} used `}{lastAttack.name}</div>
            <div className="top">
                <div className="info">
                    <p className="battle-member">{opponent.name}</p>
                    <div className="status-bar">
                        <div className="status-bar-left" ref={hpRef} style={{width: '100%', transition: '1s'}}></div>
                    </div>
                </div>
                <img className={`opponent-wrapper ${opponentHP <= 0 ? 'fainted' : ''}`} src={image.default} height={opponent.properties.size * 5} width={opponent.properties.size * 5} alt={`${opponent.name} standing on the left side`} />
                <div className="opponent-shadow"></div>
            </div>
            <div className="bottom">
                <div className="info">
                    <p className="battle-member">Pluto</p>
                    <div className="status-bar">
                        <div className="status-bar-left" ref={plutoHpRef} style={{width: '100%', transition: '1s'}}></div>
                    </div>
                </div>
                <img className={`pluto-wrapper ${plutoHP <= 0 ? 'fainted' : ''}`} src={plutoImage} height={pluto.properties.size} width={pluto.properties.size} alt="Pluto standing on the left side" />
                <div className="pluto-shadow"></div>
            </div>
            <div className="moves">
                {pluto.properties.attacks.map(attack => <>
                    <div onClick={() => plutoAttackHandler(attack)} className="move-wrapper">
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
