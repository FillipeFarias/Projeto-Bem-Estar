export const useMoods = () => [
  {
    id: 1,
    title: "Feliz",
    emoji: "😄",
    color: "bg-yellow-200",
    manter: [
      "Compartilhe sua alegria com alguém querido.",
      "Liste 3 coisas pelas quais você é grato hoje.",
      "Faça algo que você gosta.",
      "Mantenha seu espaço organizado e limpo.",
      "Realize uma tarefa pendente.",
      "Aproveite para planejar sua semana com otimismo."
    ],
    praticas: [
      { label: "Ouça uma playlist animada", url: "#" },
      { label: "Faça uma pausa leve", url: "#" },
      { label: "Hidrate-se", url: "#" },
      { label: "Caminhada leve de 10 minutos", url: "#" },
      { label: "Alongue o corpo por 5 minutos", url: "https://www.youtube.com/watch?si=to3p0BVqtWOEvUbM&v=4-4f10fL1pw" },
      { label: "Pausa de 10 min longe das telas", url: "#" }
    ]
  },

  {
    id: 2,
    title: "Triste",
    emoji: "😢",
    color: "bg-blue-200",
    manter: [
      "Escreva como você se sente por 2 minutos.",
      "Fale com alguém de confiança.",
      "Veja um vídeo leve que te faz bem.",
      "Permita-se chorar e tome um banho quente.",
      "Seja gentil consigo mesmo.",
      "Realize apenas uma pequena tarefa."
    ],
    praticas: [
      { label: "Tome algo quente", url: "#" },
      { label: "Escute música reconfortante", url: "#" },
      { label: "Exercício de respiração para acalmar a tristeza", url: "https://www.youtube.com/watch?si=aKLPuo-Oqyplwx3y&v=1VOzlgeRcm4" },
      { label: "Faça uma pequena caminhada", url: "#" },
      { label: "Vídeo curto motivacional", url: "https://www.youtube.com/watch?si=_YsbfcLMfVKvzbrM&v=1yojvE41-Ms" }
    ]
  },

  {
    id: 3,
    title: "Ansioso",
    emoji: "😰",
    color: "bg-green-200",
    manter: [
      "Divida a tarefa em partes menores.",
      "Fale com alguém que te acalma.",
      "Reduza estímulos por 10 minutos.",
      "Afastar-se da situação por alguns minutos.",
      "Evite cafeína e energéticos por agora.",
      "Não tome decisões importantes agora.",
      "Foque no presente: 'O que posso resolver agora?'"
    ],
    praticas: [
      { label: "Vídeo de respiração guiada", url: "https://www.youtube.com/watch?si=yo15AFlCMQEdWuiP&v=B2O6-EWJLJA" },
      { label: "Escute algo relaxante", url: "#" },
      { label: "Tome um chá quente ou água fresca", url: "#" },
      { label: "Alongamento de pescoço e ombros", url: "https://youtube.com/watch?si=aKhOebTFqeBALCBs&v=kxfQD9Q56xE" },
      { label: "Caminhada leve ao ar livre", url: "#" },
      { label: "Observe uma paisagem", url: "#" },
      { label: "Sente-se em um lugar mais calmo", url: "#" }
    ]
  },

  {
    id: 4,
    title: "Calmo",
    emoji: "😌",
    color: "bg-purple-200",
    manter: [
      "Desligue notificações por 1 hora.",
      "Momento perfeito para leitura ou estudo leve.",
      "Mantenha seu espaço organizado.",
      "Execute tarefas tranquilas.",
      "Preserve esse estado de paz.",
      "Planeje prioridades do dia."
    ],
    praticas: [
      { label: "Música suave", url: "https://open.spotify.com/playlist/3WlAfHbriUPICeO5CfACnt?si=PfwBPkqbQ2Sh3B12-_eW3Q" },
      { label: "Pequena caminhada", url: "#" },
      { label: "Alongamento lento", url: "https://youtube.com/watch?si=vY2UHdcPMQbC05Zf&v=xfF6WV_cDgU" },
      { label: "Hidratação", url: "#" },
      { label: "Pausa das telas", url: "#" },
      { label: "Respiração guiada", url: "https://www.youtube.com/watch?si=M2dPq5X8nKTrDGYD&v=inpok4MKVLM" }
    ]
  },

  {
    id: 5,
    title: "Energético",
    emoji: "⚡",
    color: "bg-orange-200",
    manter: [
      "Faça coisas que gosta após o expediente.",
      "Conclua tarefas rápidas.",
      "Mantenha o corpo ativo.",
      "Use a motivação para produtividade.",
      "Equilibre energia e calma.",
      "Alimente-se bem."
    ],
    praticas: [
      { label: "Pausa rápida das telas", url: "#" },
      { label: "Hidrate-se", url: "#" },
      { label: "Playlist animada", url: "#" },
      { label: "Alongamento dinâmico", url: "https://www.youtube.com/watch?si=3_9xhGM0Bd6psI8_&v=5oYEGU_FcBI" },
      { label: "Caminhada rápida", url: "#" }
    ]
  },

  {
    id: 6,
    title: "Irritado",
    emoji: "😠",
    color: "bg-red-200",
    manter: [
      "Afastar-se da fonte da irritação.",
      "Identifique o gatilho.",
      "Evite discussões enquanto está irritado.",
      "Fale com alguém que te acalma.",
      "Evite responder de imediato.",
      "Não tome decisões importantes agora."
    ],
    praticas: [
      { label: "Beba um copo de água", url: "#" },
      { label: "Escreva o que sente e descarte", url: "#" },
      { label: "Respiração para raiva", url: "https://www.youtube.com/watch?v=4n3EBeBEe44&t=150s" },
      { label: "Yoga para acalmar", url: "https://www.youtube.com/watch?v=tlxbHGGABdE" },
      { label: "Distraia-se", url: "#" }
    ]
  },

  {
    id: 7,
    title: "Nervoso",
    emoji: "😬",
    color: "bg-pink-200",
    manter: [
      "Fale com alguém que transmite segurança.",
      "Evite sobrecarga de estímulos.",
      "Use música suave.",
      "Visualize um resultado positivo.",
      "Lembre-se de momentos difíceis que superou.",
      "Escreva o motivo da tensão."
    ],
    praticas: [
      { label: "Respirações profundas", url: "https://www.youtube.com/watch?v=Ghbhtri8em4" },
      { label: "Sente-se em um lugar calmo", url: "#" },
      { label: "Movimente o corpo por 1–2 minutos", url: "#" },
      { label: "Alongamento de costas e pescoço", url: "#" },
      { label: "Tome ar fresco", url: "#" }
    ]
  },

  {
    id: 8,
    title: "Apático",
    emoji: "😐",
    color: "bg-gray-200",
    manter: [
      "Organize algo pequeno.",
      "Faça algo que te diverte.",
      "Defina uma meta pequena.",
      "Experimente algo novo.",
      "Mude de ambiente."
    ],
    praticas: [
      { label: "Assista algo alegre", url: "#" },
      { label: "Playlist leve energia", url: "#" },
      { label: "Caminhada ou exercício leve", url: "#" },
      { label: "Pausa das telas", url: "#" },
      { label: "Música nostálgica", url: "#" },
      { label: "Lave o rosto com água fria", url: "#" }
    ]
  },

  {
    id: 9,
    title: "Depressivo",
    emoji: "😖",
    color: "bg-indigo-200",
    manter: [
      "Realize apenas uma tarefa pequena.",
      "Escute música calma.",
      "Fale com alguém de confiança.",
      "Tome um banho relaxante.",
      "Seja gentil consigo mesmo.",
      "Lembre-se de que sentimentos são temporários.",
      "Busque ajuda profissional se persistir."
    ],
    praticas: [
      { label: "Tome sol por 5 minutos", url: "#" },
      { label: "Meditação para baixa energia", url: "https://www.youtube.com/watch?si=YxwIBCzU6Pc7fi8F&v=meeJmnFy9_s" },
      { label: "Vídeo leve de conforto emocional", url: "#" },
      { label: "Alongamento de 3 minutos", url: "#" },
      { label: "Caminhada breve", url: "#" },
      { label: "Faça algo simples que gosta", url: "#" },
      { label: "CVV – 188", url: "https://cvv.org.br" }
    ]
  }
];
