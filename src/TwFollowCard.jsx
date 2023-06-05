export const TwFollowCard = ({ children, format, userName = 'unknown', isFollowing }) => {
 const text = isFollowing ? 'Siguiendo' : 'Seguir'

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt="El avatar de Sindresorhus"
        />
        <div className="tw-followCard-name">
          <strong>{children}</strong>
          <span className="tw-followCard-userName">{format(userName)}</span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-button">
          {text}
        </button>
      </aside>
    </article>
  );
};
