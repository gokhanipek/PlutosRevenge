import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom'
import { startGame } from '../store/actions';
import { selectRunInProgress } from '../store/sessionReducer';

const Home = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const runInProgress = useSelector(selectRunInProgress);

    // Resetting on the action rather than on mount: landing on the home screen
    // must not silently destroy a run in progress.
    const onNewGame = () => {
        dispatch(startGame());
        history.push('/fullview');
    }

    return (
        <div className="flex h-full w-full flex-col items-center justify-center gap-8 px-8 text-center">
            <div>
                <h1 className="font-display text-5xl uppercase tracking-[0.3em] text-chalk drop-shadow-[0_0_25px_rgba(177,228,232,0.35)]">
                    Pluto's
                </h1>
                <h1 className="font-display text-6xl uppercase tracking-[0.35em] text-ice drop-shadow-[0_0_30px_rgba(177,228,232,0.45)]">
                    Revenge
                </h1>
            </div>
            <p className="prose-constrained text-canvas-sm text-muted">
                Not even a planet any more. Spin the wheel, pick your fights, and take the solar
                system apart one body at a time.
            </p>
            <div className="flex flex-col items-center gap-3">
                {runInProgress && (
                    <button className="btn btn-primary btn-lg" onClick={() => history.push('/fullview')}>
                        Continue
                    </button>
                )}
                <button
                    className={runInProgress ? 'btn' : 'btn btn-primary btn-lg'}
                    onClick={onNewGame}
                >
                    New Game
                </button>
                {runInProgress && (
                    <p className="text-canvas-xs text-muted">A new game discards the run in progress.</p>
                )}
            </div>
        </div>
    )
}

export default withRouter(Home)
