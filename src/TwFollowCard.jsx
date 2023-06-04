import React from 'react'

export const TwFollowCard = () => {
  return (
    <article className="tw-followCard">
    <header className="tw-followCard-header">
      <img
        className="tw-followCard-avatar"
        src="https://unavatar.io/sindresorhus@gmail.com"
        alt="El avatar de Sindresorhus"
      />
      <div className="tw-followCard-info">
        <strong>Sindre Sorhus</strong>
        <span className="tw-followCard-userName">@sindresor</span>
      </div>
    </header>

    <aside>
      <button className="tw-followCard-button">Seguir</button>
    </aside>
  </article>
  )
}
