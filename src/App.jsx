import "./App.css";
import { TwFollowCard } from "./TwFollowCard";


export function App() {
  return (
    <section className="follow-card-section">
        <TwFollowCard userName="sindresorhus" name="Sindre Sorhus" isFollowing="Follow"/>
        <TwFollowCard userName="pheralb" name="Pablo Hernandez" isFollowing="Follow"/>
        <TwFollowCard userName="joebiden" name="JOE 2020" isFollowing="Follow"/>
    </section>
  );
}
