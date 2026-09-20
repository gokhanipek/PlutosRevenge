import React from 'react'
import { useHistory, withRouter } from 'react-router-dom'

const GameEnd = () => {
    const history = useHistory();
    return (
        <div className="scroll-y h-full w-full">
            <div className="flex min-h-full w-full flex-col items-center justify-center gap-5 px-10 py-8 text-center">
                <h1 className="font-display text-4xl uppercase tracking-[0.3em] text-ice drop-shadow-[0_0_30px_rgba(177,228,232,0.4)]">
                    Success
                </h1>
                <p className="prose-constrained text-canvas-sm text-chalk/90">
                    After a long, tiring but fulfilling quest, you managed to beat Earth and showed that
                    you are more than a DWARF planet, and changed PASA back to NASA. Unfortunately that
                    was the moment you realised you are alone now... and out of purposes.
                </p>
                <p className="prose-constrained text-canvas-sm text-chalk/90">
                    You realised that nobody belongs anywhere, nobody exists on purpose, and everybody's
                    going to die.
                </p>
                <p className="prose-constrained text-canvas-sm text-muted">
                    And your betting addiction got worse... oh god...
                </p>
                <button className="btn btn-primary btn-lg" onClick={() => history.push('/home')}>Home</button>
            </div>
        </div>
    )
}

export default withRouter(GameEnd);
