import "./App.css";
import { TwFollowCard } from "./TwFollowCard";

export function App() {
  const users = [
    {
      name: "Sindre Sorhus",
      userName: "sindresorhus",
      isFollowing: true,
    },
    {
      name: "Pablo Hernandez",
      userName: "pheralb",
      isFollowing: false,
    },
    {
      name: "JOE 2020",
      userName: "joebiden",
      isFollowing: true,
    },
    {
      name: "Peter Parker",
      userName: "peterp",
      isFollowing: false,
    },
  ];

  return (
    <section className="follow-card-section">
      <div className="title-follow-box">
        <span className="title-follow-txt">A quién seguir</span>
      </div>
      <div>
        {users.map((user) => {
          const { userName, name, isFollowing } = user

          return (
            <TwFollowCard 
              key={userName}
              userName={userName} 
              initialIsFollowing={isFollowing}
              >
                {name}
            </TwFollowCard>
          );
        })}
      </div>
      <a
        href="https://twitter.com/i/connect_people"
        className="tw-more-links-section"
      >
        <div className="title-follow-more">
          <span className="tw-more-links-span">Mostrar más</span>
        </div>
      </a>
    </section>
  );
}
