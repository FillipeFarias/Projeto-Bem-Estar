import { useState } from "react";
import { MemphisCard } from "./components/ui/MemphisCard";
import { MoodDetails } from "./components/ui/MoodDetails";
import { useMoods } from "./data/moods";

export default function App() {
  const moods = useMoods();
  const [selectedMood, setSelectedMood] = useState(null);

  return (
    <div className="min-h-screen bg-[#FFFAF0] bg-[radial-gradient(circle_at_top_left,_#FFB7C5_0%,_transparent_50%),_radial-gradient(circle_at_bottom_right,_#B5E8FF_0%,_transparent_50%)] relative overflow-x-hidden">

      {/* DECORAÇÕES */}
      <div className="absolute top-10 left-10 rotate-12">
        <span className="text-6xl">✨</span>
      </div>
      <div className="absolute bottom-10 right-10 -rotate-12">
        <span className="text-6xl">💖</span>
      </div>

      {/* HEADER */}
      <header className="text-center py-16 px-6">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 drop-shadow-[3px_3px_0px_#FF69B4]">
          Como você está se sentindo hoje?
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Escolha abaixo a opção que melhor representa seu mood no momento. Cada escolha revela um card único para te ajudar 💛
        </p>
      </header>

      {/* GRID DE MOODS */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 max-w-6xl mx-auto">
        {moods.map((mood) => (
          <button
            key={mood.id}
            onClick={() => setSelectedMood(mood)}
            className="text-left"
            aria-label={`Abrir plano para ${mood.title}`}
          >
            <MemphisCard {...mood} />
          </button>
        ))}
      </section>

      {/* DETALHES DO MOOD */}
      <MoodDetails mood={selectedMood} onClose={() => setSelectedMood(null)} />

      {/* SPOTIFY */}
      <section className="mb-24 mt-10 bg-white border-4 border-black rounded-3xl p-8 max-w-3xl mx-auto text-center shadow-[8px_8px_0px_#000] relative">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#1DB954] text-white px-6 py-2 rounded-full border-2 border-black shadow-[4px_4px_0px_#000]">
          Links Spotify
        </div>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed mb-6">
          Playlists selecionadas para ajudar você a relaxar, respirar fundo e reduzir a ansiedade.
        </p>

        <div className="flex flex-col gap-4">
          <a href="https://open.spotify.com/playlist/6XaWeLI1dqrJ2lP60oOJFT?si=ctqykQEfTh2Eq9nXtFJkbw" target="_blank" rel="noreferrer" className="block bg-[#E8FFE8] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#1DB954] hover:scale-[1.02] transition-transform font-bold">
            🌿 Playlist para Respiração
          </a>

          <a href="https://open.spotify.com/playlist/3RuL2JFVbgMzAxq" target="_blank" rel="noreferrer" className="block bg-[#FFF6E8] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#FFA600] hover:scale-[1.02] transition-transform font-bold">
            😌 Playlist para Ansiedade em Geral
          </a>
        </div>
      </section>

      {/* SOBRE */}
      <section className="mt-24 bg-white border-2 border-black rounded-2xl p-8 max-w-3xl mx-auto text-center relative">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-2 rounded-full shadow-md">
          Sobre o Projeto
        </div>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Este projeto foi criado para ajudar você a identificar seus sentimentos e receber orientações.
        </p>
      </section>

      <footer className="text-center py-12 text-gray-700 text-sm">
        Feito com carinho ✨
      </footer>
    </div>
  );
}
