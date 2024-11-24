
import ChatInfo from "./components/ChatInfo";
import Hero from "./components/Hero";
import Why from "./components/Why";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero/>
      <Why/>
      <ChatInfo/>
    </div>
  );
}
