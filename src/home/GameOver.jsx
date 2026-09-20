import React from 'react'
import { useHistory, withRouter } from 'react-router-dom'

const GameOver = () => {
    const history = useHistory();
    return (
        <div className="flex h-full w-full flex-col items-center justify-center gap-8 px-8 text-center">
            <h1 className="font-display text-5xl uppercase tracking-[0.3em] text-ember drop-shadow-[0_0_30px_rgba(255,122,69,0.4)]">
                Game Over
            </h1>
            <p className="prose-constrained text-canvas-sm text-muted">
                The dark got there first.
            </p>
            <button className="btn btn-primary btn-lg" onClick={() => history.push('/home')}>Another Round</button>
        </div>
    )
}

export default withRouter(GameOver);
