import React from "react";

export default function Modal({active, setActive, children, pad}) {
    return <>
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}  style={{padding: pad, borderRadius: pad}}>
                {children}
            </div>
        </div>
    </>;
}