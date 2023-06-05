import "./App.css";
import { TwFollowCard } from "./TwFollowCard";

export function App() {
  const format = (userName) => `@${userName}`;

  return (
    <section className="follow-card-section"> 
    <div className="title-follow-box">
        <span className="title-follow-txt">A quién seguir</span>
    </div>
    <div>
        <TwFollowCard format={format} userName="sindresorhus" isFollowing>
          Sindre Sorhus
        </TwFollowCard>
        <TwFollowCard format={format} userName="pheralb" isFollowing={false}>
          Pablo Hernandez
        </TwFollowCard>
        <TwFollowCard format={format} userName="joebiden" isFollowing={false}>
          JOE 2020
        </TwFollowCard>
        <TwFollowCard format={format} userName="peterp" isFollowing>
          Peter Parker
        </TwFollowCard> 
    </div> 
    <a href="https://twitter.com/home" className="tw-more-links-section">
      <div className="title-follow-more">
        <span className="tw-more-links-span">Mostrar mas</span>
      </div>
    </a> 
    </section>
  );
}
