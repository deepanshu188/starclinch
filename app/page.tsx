import { ActivitySlider } from './components/ActivitySlider';
import { GallerySection } from './components/GallerySection';
import { HeroSection } from './components/HeroSection';
import { JoinTeam } from './components/JoinTeam';
import { RecentShows } from './components/RecentShows';

export default function Home() {
  return (
    <>
      <HeroSection />
      <GallerySection />
      <ActivitySlider />
      <RecentShows />
      <JoinTeam />
    </>
  );
}
