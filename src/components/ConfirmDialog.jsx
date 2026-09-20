import React, { useEffect, useRef } from 'react';

/**
 * Modal confirmation over the game canvas. Keyboard operable: focus moves to the
 * confirming action on open, Tab cycles within the dialog, Escape cancels.
 */
const ConfirmDialog = ({
    title,
    message,
    confirmLabel = 'Confirm',
    cancelLabel = 'Cancel',
    onConfirm,
    onCancel,
}) => {
    const dialogRef = useRef(null);
    const confirmRef = useRef(null);

    useEffect(() => {
        confirmRef.current?.focus();
    }, []);

    useEffect(() => {
        const onKeyDown = event => {
            if (event.key === 'Escape') {
                event.preventDefault();
                onCancel?.();
                return;
            }
            if (event.key !== 'Tab' || !dialogRef.current) return;
            const focusable = dialogRef.current.querySelectorAll('button:not([disabled])');
            if (!focusable.length) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [onCancel]);

    return (
        <div className="absolute inset-0 z-[1000] flex items-center justify-center bg-abyss/85 px-8">
            <div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="confirm-dialog-title"
                aria-describedby="confirm-dialog-message"
                className="w-full max-w-[520px] rounded-lg border border-edge bg-panel p-6 text-center shadow-panel"
            >
                <h2
                    id="confirm-dialog-title"
                    className="font-display text-canvas-sm uppercase tracking-widest text-ice"
                >
                    {title}
                </h2>
                <p id="confirm-dialog-message" className="mt-3 text-canvas-sm leading-relaxed text-chalk/90">
                    {message}
                </p>
                <div className="mt-6 flex justify-center gap-3">
                    <button ref={confirmRef} className="btn btn-primary" onClick={onConfirm}>
                        {confirmLabel}
                    </button>
                    <button className="btn" onClick={onCancel}>
                        {cancelLabel}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDialog;
