 
export const TwFollowCard = ({userName, name, isFollowing}) => { 
  
    return (
    <article className="tw-followCard">
    <header className="tw-followCard-header">
      <img
        className="tw-followCard-avatar"
        src={`https://unavatar.io/${userName}`}
        alt="El avatar de Sindresorhus"
      />
      <div className="tw-followCard-info">
        <strong>{name}</strong>
        <span className="tw-followCard-userName">@{userName}</span>
      </div>
    </header>

    <aside>
      <button className="tw-followCard-button">{isFollowing}</button>
    </aside>
  </article>
  )
}
