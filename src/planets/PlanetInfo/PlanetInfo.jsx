import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useLocation, useHistory, useParams, Redirect } from 'react-router-dom';
import { setBattlePluto, setOpponent } from '../../store/actions';
import { WATER } from '../../store/constants';
import { planetTexture } from '../../utils/planetTexture';

const Stat = ({ label, value }) => (
    <>
        <dt className="font-display text-canvas-xs uppercase tracking-widest text-muted">{label}</dt>
        <dd className="text-canvas-sm text-chalk">{value}</dd>
    </>
);

const PlanetInfo = () => {
    const location = useLocation();
    const history = useHistory();
    const dispatch = useDispatch()
    const planetsReducer = useSelector(state => state.planetsReducer);
    const plutoStatus = useSelector(state => state.planetsReducer.plutoStatus);

    const orbit = {
        name: 'orbit',
        properties: {
            speed: 10,
            size: 20,
            attacks: [{
                name: 'Tidal Waves',
                damage: 10,
                type: WATER
            }]
        }
    }

    // The planet is identified by the URL, not by history state, so the route is
    // meaningful on its own. History state is only a fallback for older pushes.
    const { name } = useParams();
    const id = (name || (location.state && location.state.id) || '').toUpperCase();
    const textureUrl = planetTexture(id);

    const onClickHandler = (planet, type) => {
        if (type === 'planet') {
            dispatch(setOpponent(planet));
        }
        if (type === 'orbit') {
            // Store both the orbit opponent and which planet it belongs to
            dispatch(setOpponent({ ...orbit, relatedPlanetId: planet.id }));
        }
        dispatch(setBattlePluto(plutoStatus))
        history.push('/battle');
    }

    const planet = planetsReducer.planets.find(item => item.name === id);

    // A defeated body, or a name that is not in play, has no screen to show.
    if (!planet) {
        return <Redirect to="/fullview" />;
    }

    const isPluto = planet.name === 'PLUTO';
    const plutoInPlay = Boolean(planetsReducer.planets.find(item => item.name === 'PLUTO'));
    const size = isPluto ? plutoStatus.properties.size : planet.properties.size;
    const attacks = isPluto ? plutoStatus.properties.attacks : planet.properties.attacks;

    return (
        <div className="flex h-full w-full">
            <aside className="flex w-[286px] shrink-0 flex-col items-center gap-4 border-r border-edge/60 bg-abyss/60 p-5">
                <h1 className="font-display text-xl uppercase tracking-[0.25em] text-ice">{planet.name}</h1>
                <div className="planet-portrait">
                    <img alt={`Surface of ${planet.name}`} src={textureUrl} />
                </div>
                <div className="flex w-full flex-col gap-2">
                    <button className="btn" onClick={() => history.push('/fullview')}>Map</button>
                    {
                        isPluto
                            ? <button className="btn btn-primary" onClick={() => history.push('/wheel')}>Spin the wheel</button>
                            : plutoInPlay && (
                                <>
                                    <button className="btn btn-primary" onClick={() => onClickHandler(planet, 'planet')}>Attack!</button>
                                    {planetsReducer.orbitCounts && planetsReducer.orbitCounts[planetsReducer.planets.indexOf(planet)] > 0 && (
                                        <button className="btn" onClick={() => onClickHandler(planet, 'orbit')}>Attack its orbits</button>
                                    )}
                                </>
                            )
                    }
                </div>
            </aside>

            <section className="scroll-y flex-1 p-5">
                <dl className="grid grid-cols-[auto_1fr] items-baseline gap-x-5 gap-y-2">
                    <Stat label="Number" value={planet.id} />
                    <Stat label="Type" value={planet.type} />
                    <Stat label="Size" value={size} />
                    <Stat label="Speed" value={planet.properties.speed} />
                    <Stat label="Orbits" value={planet.properties.orbitCount} />
                </dl>

                <h2 className="mt-6 font-display text-canvas-sm uppercase tracking-widest text-muted">Character</h2>
                <ul className="mt-2 flex flex-wrap gap-2">
                    {planet.properties.character.map(item => (
                        <li
                            key={item.style}
                            className="rounded-full border border-edge/70 bg-panel px-3 py-1 text-canvas-xs text-chalk"
                        >
                            <span className="text-muted">{item.style}: </span>{item.level}
                        </li>
                    ))}
                </ul>

                <h2 className="mt-6 font-display text-canvas-sm uppercase tracking-widest text-muted">Attacks</h2>
                <ul className="mt-2 grid grid-cols-2 gap-2">
                    {attacks.map((item, index) => (
                        <li
                            key={`${item.name}-${index}`}
                            className="rounded-md border border-edge/70 bg-panel px-3 py-2"
                        >
                            <p className="font-display text-canvas-xs uppercase tracking-wide text-ice">{item.name}</p>
                            <p className="mt-1 text-canvas-xs text-muted">{item.type} &middot; {item.damage} damage</p>
                        </li>
                    ))}
                </ul>

                <h2 className="mt-6 font-display text-canvas-sm uppercase tracking-widest text-muted">Background</h2>
                <p className="prose-constrained mt-2 text-canvas-sm leading-relaxed text-chalk/90">
                    {planet.properties.background}
                </p>
            </section>
        </div>
    )
}

export default withRouter(PlanetInfo);
