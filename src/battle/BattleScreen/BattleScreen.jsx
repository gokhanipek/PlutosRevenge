import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import plutoImage from './../../assets/images/pluto.jpeg';
import { removePlanet, setLastPlayed, setOpponentAttack, setPlutoStatus, recordPlanetDefeated, recordOrbitDefeated, endSession, decrementOrbitCount, setTurn } from '../../store/actions';
import { LOST, WON, TURN_PLUTO, TURN_OPPONENT, TURN_RESOLVING } from '../../store/constants';
import { useHistory } from 'react-router-dom';
import { planetTexture } from '../../utils/planetTexture';

const BattleScreen = () => {

    const opponent = useSelector(state => state.battleReducer.opponent);
    const pluto = useSelector(state => state.battleReducer.pluto);
    const planetsReducer = useSelector(state => state.planetsReducer);
    const turn = useSelector(state => state.battleReducer.turn);
    // const lastPlayer = useSelector(state => state.battleReducer.lastPlayer);
    const dispatch = useDispatch();
    const infoRef = useRef()
    const hpRef = useRef(0);
    const plutoHpRef = useRef();
    const awardRef = useRef();  
    const turnBgRef = useRef();
    const history = useHistory();

    const [opponentHP, setOpponentHP] = useState(opponent.properties.size || 0);
    const [plutoHP, setPlutoHP] = useState(pluto.properties.size || 0);
    const [lastAttack, setLastAttack] = useState({});
    

    const opponentTexture = planetTexture(opponent.name);

    // Main turn flow effect: coordinates all battle state transitions
    useEffect(() => {
        if (turn === TURN_PLUTO) {
            // Pluto's turn: buttons enabled, ready for player input (no action needed here)
            return;
        }

        if (turn === TURN_RESOLVING) {
            // Resolving state: button is disabled, waiting for animation
            return;
        }

        if (turn === TURN_OPPONENT && opponentHP > 0) {
            // Opponent's turn: execute opponent attack after a delay
            const opponentAttackTimer = setTimeout(() => {
                const attack = opponent.properties.attacks[Math.floor(Math.random() * opponent.properties.attacks.length)];
                setLastAttack(attack);
                infoRef.current.classList.add('visible');
                
                const newHP = Math.max(0, plutoHP - attack.damage);
                setPlutoHP(newHP);

                // Show attack banner, then update HP bar
                setTimeout(() => {
                    infoRef.current.classList.remove('visible');
                    if (plutoHpRef.current) {
                        const plutoBarLength = (newHP / pluto.properties.size) * 100;
                        plutoHpRef.current.style.width = `${plutoBarLength}%`;
                    }
                    // Return to Pluto's turn
                    dispatch(setTurn(TURN_PLUTO));
                }, 2000);
            }, 1000);

            return () => clearTimeout(opponentAttackTimer);
        }
    }, [turn, opponentHP, plutoHP, opponent, pluto, dispatch]);

    // Handle HP bar updates for opponent
    useEffect(() => {
        if (hpRef.current && turn === TURN_OPPONENT) {
            const barLength = (opponentHP / opponent.properties.size) * 100;
            hpRef.current.style.width = `${barLength}%`;
        }
    }, [opponentHP, turn, opponent]);

    // Handle battle end conditions
    useEffect(() => {
        if (opponentHP <= 0) {
            const newsize = plutoHP + opponent.properties.size;
            const newPluto = {
                ...pluto,
                properties: {
                    ...pluto.properties,
                    size: newsize
                }
            };
            dispatch(setPlutoStatus(newPluto));
            setTimeout(() => awardRef.current.classList.add('visible'), 500);
        }
        if (plutoHP <= 0) {
            setTimeout(() => awardRef.current.classList.add('visible'), 500);
        }
    }, [opponentHP, plutoHP, opponent, pluto, dispatch]);

    const plutoAttackHandler = (attack) => {
        // Lock turn immediately on click (before any async operations)
        dispatch(setTurn(TURN_RESOLVING));
        
        turnBgRef.current.classList.add('visible');
        setTimeout(() => turnBgRef.current.classList.remove('visible'), 6500);
        
        setLastAttack(attack);
        infoRef.current.classList.add('visible');
        
        const newOpponentHP = Math.max(0, opponentHP - attack.damage);
        
        setTimeout(() => {
            infoRef.current.classList.remove('visible');
            setOpponentHP(newOpponentHP);
            if (hpRef.current) {
                const barLength = (newOpponentHP / opponent.properties.size) * 100;
                hpRef.current.style.width = `${barLength}%`;
            }
            // Transition to opponent's turn
            dispatch(setTurn(TURN_OPPONENT));
        }, 2000);
    }

    const battleEndHandler = (result) => {
        // Progress is counted here rather than in the HP effect: one click is
        // one outcome, so nothing can be counted twice.
        if (result === 'win') {
            dispatch(opponent.name === 'orbit' ? recordOrbitDefeated() : recordPlanetDefeated());
            // Decrement the orbit count for the planet being attacked
            if (opponent.name === 'orbit' && opponent.relatedPlanetId) {
                const planetIndex = planetsReducer.planets.findIndex(p => p.id === opponent.relatedPlanetId);
                if (planetIndex >= 0) {
                    dispatch(decrementOrbitCount(planetIndex));
                }
            }
        }
        if (result === 'win' && opponent.name === 'EARTH') {
            dispatch(endSession(WON));
            history.push('/endofstory');
        } else if (result === 'win') {
            history.push('/fullview');
        }
        if (result === 'lose') {
            dispatch(endSession(LOST));
            history.push('/deepdarkness');
        }
        dispatch(removePlanet(plutoHP > 0 ? opponent : pluto));
        dispatch(setTurn(TURN_PLUTO)); // Reset turn state
    }


    return (
        <div className="relative flex h-full w-full flex-col">
            <div className="overlay-card border-y border-edge bg-abyss/95" ref={awardRef}>
                {plutoHP > 0 ? (
                    <>
                        <h2 className="prose-constrained text-center text-canvas-sm text-chalk">
                            Revenge is a dish best served cold. Have no mercy for the ones that stand in my way.
                        </h2>
                        <button className="btn btn-primary" onClick={() => battleEndHandler('win')}>Back to map</button>
                    </>
                ) : (
                    <>
                        <h2 className="prose-constrained text-center text-canvas-sm text-chalk">
                            No! God! Oh God, what is life? How can someone so talented die so young? What's being young? I'm not young, I'm old!
                        </h2>
                        <button className="btn" onClick={() => battleEndHandler('lose')}>Game over</button>
                    </>
                )}
            </div>

            <div
                className="turn-banner font-display text-lg uppercase tracking-widest text-abyss"
                ref={infoRef}
            >
                {turn === TURN_PLUTO ? 'Pluto used ' : `${opponent.name} used `}{lastAttack.name}
            </div>
            <div className="turn-flash" ref={turnBgRef}></div>

            <div className="relative h-[calc(50%-70px)] w-full p-2.5">
                <div className="absolute left-7 top-9 z-[3] w-52">
                    <p className="font-display text-canvas-xs uppercase tracking-widest text-chalk">{opponent.name}</p>
                    <div className="hp-track mt-1.5">
                        <div className="hp-fill" ref={hpRef} style={{ width: '100%', transition: '1s' }}></div>
                    </div>
                </div>
                <img
                    className={`combatant combatant-opponent ${opponentHP <= 0 ? 'fainted' : ''}`}
                    src={opponentTexture}
                    alt={`${opponent.name} facing Pluto`}
                />
                <div className="body-shadow -bottom-[186px] -right-20 h-[75px] w-[540px]"></div>
            </div>

            <div className="relative h-[calc(50%-70px)] w-full">
                <div className="absolute left-7 top-9 z-[3] w-52">
                    <p className="font-display text-canvas-xs uppercase tracking-widest text-chalk">Pluto</p>
                    <div className="hp-track mt-1.5">
                        <div className="hp-fill" ref={plutoHpRef} style={{ width: '100%', transition: '1s' }}></div>
                    </div>
                </div>
                <img
                    className={`combatant combatant-pluto ${plutoHP <= 0 ? 'fainted' : ''}`}
                    src={plutoImage}
                    alt="Pluto, standing her ground"
                />
                <div className="body-shadow -bottom-10 -left-20 h-20 w-[500px]"></div>
            </div>

            <div className="grid h-[140px] w-full grid-cols-4 border-t border-edge bg-panel">
                {pluto.properties.attacks.map((attack, index) => (
                    <button
                        key={`${attack.name}-${index}`}
                        type="button"
                        onClick={() => plutoAttackHandler(attack)}
                        disabled={turn !== TURN_PLUTO}
                        className="flex flex-col items-center justify-center gap-1 border-r border-edge/70 px-2 text-center transition-colors last:border-r-0 hover:bg-edge focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ice disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <span className="font-display text-canvas-xs uppercase leading-tight tracking-wide text-ice">{attack.name}</span>
                        <span className="text-canvas-xs text-muted">{attack.damage} damage</span>
                        <span className="text-canvas-xs text-muted">{attack.type}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default BattleScreen
