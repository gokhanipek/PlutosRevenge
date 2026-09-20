import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setPlanet } from '../../store/actions';
import { planetTextureCss } from '../../utils/planetTexture';

// Drawn diameters, in canvas pixels. These are map presentation only — the
// `size` in the store is a combat stat and is orders of magnitude larger.
const MAP_DIAMETERS = {
    MERCURY: 20,
    VENUS: 30,
    EARTH: 40,
    MARS: 46,
    JUPITER: 90,
    SATURN: 80,
    URANUS: 75,
    NEPTUNE: 60,
    PLUTO: 10,
};

const FullView = () => {

    const dispatch = useDispatch();
    const planets = useSelector(state => state.planetsReducer.planets);

    const history = useHistory();

    const planetInfo = (id) => {
        history.push(`/planetinfo/${id}`, { id })
        dispatch(setPlanet(id));
    }
    return (
        <div className="flex h-full w-full items-center justify-around">
            {/* The sun anchors the lighting for every body on the map, and sits
                half off-canvas at the left. It is not a target. */}
            <div
                className="sun-body -ml-[100px] shrink-0"
                style={{ '--planet-size': '200px' }}
                aria-hidden="true"
            />
            {
                planets.map(planet => (
                    <button
                        key={planet.name}
                        type="button"
                        className="planet shrink-0 cursor-pointer transition-transform duration-300 hover:scale-125 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ice focus-visible:ring-offset-2 focus-visible:ring-offset-void"
                        style={{
                            '--planet-size': `${MAP_DIAMETERS[planet.name] || 20}px`,
                            '--planet-texture': planetTextureCss(planet.name),
                        }}
                        onClick={() => planetInfo(planet.name)}
                        aria-label={`Open ${planet.name} details`}
                    />
                ))
            }
        </div>
    )
}

export default FullView;
