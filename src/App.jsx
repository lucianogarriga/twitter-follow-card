import "./App.css";
import { TwFollowCard } from "./TwFollowCard";

export function App() {
  const format = (userName) => `@${userName}`;

  return (
    <section className="follow-card-section">
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
    </section>
  );
}
