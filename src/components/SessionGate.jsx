import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import ConfirmDialog from './ConfirmDialog';
import { abandonSession, discardRemoteSession, restoreSession } from '../store/actions';
import { selectRemoteOffer, selectRunInProgress } from '../store/sessionReducer';
import { IN_PROGRESS } from '../store/constants';

const HOME_PATHS = ['/', '/home'];

/**
 * Stands between a typed URL and a screen that was never set up for it.
 *
 * In react-router v5 the location a page load starts on has no `key`, while
 * every location created by an in-app `push` does. That is the whole signal: no
 * "came from inside" flag to keep in sync, and a refresh can never be mistaken
 * for navigation.
 */
const SessionGate = ({ children }) => {
    const location = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();
    const runInProgress = useSelector(selectRunInProgress);
    const remoteOffer = useSelector(selectRemoteOffer);

    // Evaluated once, on mount, against the location the page loaded with.
    const [wasDirectEntry] = useState(
        () => location.key === undefined && !HOME_PATHS.includes(location.pathname)
    );
    const [resolved, setResolved] = useState(false);

    const resumeRemote = () => {
        const row = remoteOffer;
        dispatch(
            restoreSession({
                session: {
                    id: row.id,
                    status: IN_PROGRESS,
                    startedAt: row.started_at,
                    endedAt: null,
                    spins: row.spins || 0,
                    planetsDefeated: row.planets_defeated || 0,
                    orbitsDefeated: row.orbits_defeated || 0,
                },
                planets: row.state.planets,
                awards: row.state.awards,
            })
        );
        setResolved(true);
        history.replace('/fullview');
    };

    // An unfinished run found in the backend, offered before anything else so the
    // player is not asked two questions at once.
    if (remoteOffer) {
        return (
            <ConfirmDialog
                title="Unfinished business"
                message="You left a run going. Pick it back up, or leave it behind and start fresh from the home screen."
                confirmLabel="Resume run"
                cancelLabel="Leave it"
                onConfirm={resumeRemote}
                onCancel={() => dispatch(discardRemoteSession())}
            />
        );
    }

    if (wasDirectEntry && !resolved) {
        // Nothing to protect: send them to the front door.
        if (!runInProgress) return <Redirect to="/" />;

        return (
            <ConfirmDialog
                title="You have a game in progress"
                message="Jumping straight to this screen would mean starting a new game, and your current run would be lost. Continue where you left off, or start a new game from the home screen."
                confirmLabel="Continue run"
                cancelLabel="New game"
                onConfirm={() => {
                    setResolved(true);
                    history.replace('/fullview');
                }}
                onCancel={() => {
                    dispatch(abandonSession());
                    setResolved(true);
                    history.replace('/');
                }}
            />
        );
    }

    return children;
};

export default SessionGate;
