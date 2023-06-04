 
export const TwFollowCard = ({children, format, userName, name, isFollowing}) => { 
  
    console.log(isFollowing);

    
    // const isFollowing = () => {
    //     if (isFollowing == true) {
    //         return "Seguir"
    //     } else {
    //         return false
    //     }
    // }

    return (
    <article className="tw-followCard">
    <header className="tw-followCard-header">
      <img
        className="tw-followCard-avatar"
        src={`https://unavatar.io/${userName}`}
        alt="El avatar de Sindresorhus"
      />
      <div className="tw-followCard-info">
        <strong>{name} {children}</strong>
        <span className="tw-followCard-userName">{format(userName)}</span>
      </div>
    </header>

    <aside>
      <button className="tw-followCard-button">{isFollowing}</button>
    </aside>
  </article>
  )
}
