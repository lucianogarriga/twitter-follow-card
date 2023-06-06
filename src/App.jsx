 
import "./App.css";
import { TwFollowCard } from "./TwFollowCard";

export function App() {  
 
  return (
    <section className="follow-card-section"> 
    <div className="title-follow-box">
        <span className="title-follow-txt">A quién seguir</span>
    </div>
    <div>
        <TwFollowCard userName="sindresorhus" initialIsFollowing={false}>
          Sindre Sorhus
        </TwFollowCard>
        <TwFollowCard userName="pheralb" initialIsFollowing={false}>
          Pablo Hernandez
        </TwFollowCard>
        <TwFollowCard userName="joebiden" initialIsFollowing={true}>
          JOE 2020
        </TwFollowCard>
        <TwFollowCard userName="peterp" initialIsFollowing={false}>
          Peter Parker
        </TwFollowCard> 
    </div>  
    <a href="https://twitter.com/luchogarriga" className="tw-more-links-section">
      <div className="title-follow-more">
        <span className="tw-more-links-span">Mostrar más</span>
      </div>
    </a> 
    </section>
  );
}
