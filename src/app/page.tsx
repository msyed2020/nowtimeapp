import Image from "next/image";
import AudioPlayer from "./components/AudioPlayer";

export default function Home() {
  return (
    <main className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-gray-900 via-slate-800 to-gray-700">
      <h1 className="text-white text-6xl md:text-8xl font-light">
        <span>The Time is </span>
        <span className="animate-pulse">Now.</span>
      </h1>
      <AudioPlayer />
    </main>
  );
}
// add audio file