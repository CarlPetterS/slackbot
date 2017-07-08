import React from 'react'

export const Card = ({ title, instructions, progress, children }) => (
    <div className="card">
        <h1>{title}</h1>
        <img src={progress} alt="Progress" />
        <hr/>
        <h2>{instructions}</h2>
        <div className="card__content">{children}</div>
    </div>
)
