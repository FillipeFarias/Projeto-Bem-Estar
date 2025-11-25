import React from "react";

export function MoodDetails({ mood, onClose }) {
  if (!mood) return null;

  return (
    <section className="max-w-5xl mx-auto mt-12 mb-24 p-10 bg-white border-4 border-black rounded-3xl shadow-[10px_10px_0px_#000] transition-all duration-300">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <span className="text-4xl">{mood.emoji}</span>
          <h2 className="text-3xl font-bold">
            Plano para:{" "}
            <span className="bg-yellow-300 px-3 py-1 rounded-xl border-2 border-black">
              {mood.title}
            </span>
          </h2>
        </div>

        <button onClick={onClose} aria-label="Fechar" className="px-3 py-1 border-2 border-black rounded-md bg-black text-white">
          Fechar
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Coluna 1 */}
        <div>
          <h3 className="text-xl font-bold flex gap-2 items-center mb-4">💚 Auxiliar e Melhorar</h3>
          <div className="flex flex-col gap-4">
            {mood.manter.map((t, i) => (
              <div key={i} className="bg-green-50 border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#00A884]">
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Coluna 2 */}
        <div>
          <h3 className="text-xl font-bold flex gap-2 items-center mb-4">💡 Recomendações Práticas</h3>
          <div className="flex flex-col gap-4">
            {mood.praticas.map((item, i) => (
              <div key={i} className="bg-yellow-50 border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_#E7C000]">
                {item.url && item.url !== "#" ? (
                  <a href={item.url} target="_blank" rel="noreferrer" className="underline font-bold text-blue-700">
                    {item.label}
                  </a>
                ) : (
                  <span>{item.label}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
