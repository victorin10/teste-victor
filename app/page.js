import Welcome from './components/Welcome';
import Timeline from './components/Timeline';
import Letter from './components/Letter';
import FinalMessage from './components/FinalMessage';
import BackgroundMusic from './components/BackgroundMusic';

export default function Home() {
  return (
    <main>
      <Welcome />
      <Timeline />
      <Letter />
      <FinalMessage />
      <BackgroundMusic />
    </main>
  );
}
