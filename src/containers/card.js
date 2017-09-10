import React from 'react'

export const Card = ({ title, instructions, progress, children }) => (
    <div className="card">
        <h1  className="card__title">{title}</h1>
        <img className="card__progress" src={progress} alt="Progress" />
        <hr  className="card__divider"/>
        <h2  className="card__instructions">{instructions}</h2>
        <div className="card__content">{children}</div>
    </div>
)
