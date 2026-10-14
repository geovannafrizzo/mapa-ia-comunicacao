// Para contribuir: adicione ou edite áreas e tarefas aqui. Não precisa mexer no index.html.
const AREAS = [
  {
    id: "imprensa",
    nome: "Assessoria de imprensa",
    resumo: "Relacionamento com jornalistas e construção de pauta.",
    usos: ["Rascunhar releases e sugestões de pauta", "Adaptar um mesmo fato para veículos diferentes", "Preparar porta-vozes com perguntas difíceis"],
    ferramentas: ["Assistentes de texto (Claude, ChatGPT, Gemini)", "NotebookLM para estudar um material antes da pauta"],
    prompts: [
      { titulo: "Primeiro rascunho de release", texto: "Escreva um press release em português do Brasil, em formato jornalístico (título, linha fina, lide e 3 parágrafos). Fato: [descreva]. Público: [quem]. Cite como fonte: [porta-voz e cargo]. Tom: informativo, sem adjetivos de propaganda." },
      { titulo: "Treino de porta-voz", texto: "Atue como jornalista de [veículo]. Faça 8 perguntas difíceis sobre [tema/organização], uma de cada vez, e depois avalie minhas respostas." }
    ]
  },
  {
    id: "redes",
    nome: "Redes sociais",
    resumo: "Conteúdo, calendário e relacionamento com a comunidade.",
    usos: ["Gerar ideias de pauta e formatos", "Montar calendário editorial", "Resumir comentários e identificar temas recorrentes"],
    ferramentas: ["Assistentes de texto para roteiro e legenda", "Canva para peças visuais"],
    prompts: [
      { titulo: "Calendário editorial", texto: "Crie um calendário de 4 semanas para [marca] no [rede social], com 3 posts por semana. Para cada post: tema, formato, objetivo e uma ideia de chamada. Público: [descreva]. Tom de voz: [descreva]." },
      { titulo: "Leitura de comentários", texto: "Segue uma lista de comentários do post: [cole]. Agrupe por tema, aponte o sentimento predominante e sugira 3 respostas-modelo no tom da marca." }
    ]
  },
  {
    id: "email",
    nome: "E-mail marketing",
    resumo: "Campanhas por e-mail, de assunto a teste A/B.",
    usos: ["Criar variações de assunto para teste A/B", "Reescrever textos para ficarem mais curtos e claros", "Segmentar mensagens por perfil de público"],
    ferramentas: ["Assistentes de texto", "Seu editor de HTML preferido para o layout final"],
    prompts: [
      { titulo: "Assuntos para teste A/B", texto: "Crie 8 opções de assunto (até 50 caracteres) para um e-mail sobre [campanha], para [público]. Varie as abordagens: curiosidade, benefício, urgência e pergunta. Explique em uma linha a lógica de cada uma." }
    ]
  },
  {
    id: "eventos",
    nome: "Eventos",
    resumo: "Planejamento, convites e comunicação antes, durante e depois.",
    usos: ["Montar cronograma reverso de produção", "Redigir convites e roteiros de cerimonial", "Criar o texto de follow-up pós-evento"],
    ferramentas: ["Assistentes de texto", "Planilhas e Notion para organizar o cronograma"],
    prompts: [
      { titulo: "Cronograma reverso", texto: "Monte um cronograma reverso para um evento de [tipo] com [nº] pessoas, em [data]. Liste tarefas por semana, responsável sugerido e pontos de atenção. Orçamento aproximado: [valor]." }
    ]
  },
  {
    id: "crise",
    nome: "Gestão de crise",
    resumo: "Preparação e resposta quando algo sai do controle.",
    usos: ["Mapear cenários de risco antes da crise", "Preparar perguntas e respostas (Q&A)", "Revisar um posicionamento em busca de pontos frágeis"],
    ferramentas: ["Assistentes de texto para simulações", "Planilha de riscos compartilhada com a equipe"],
    prompts: [
      { titulo: "Mapa de cenários de risco", texto: "Liste 10 cenários de crise plausíveis para [organização/setor], classifique por probabilidade e impacto e sugira uma ação preventiva para cada." },
      { titulo: "Revisão de posicionamento", texto: "Leia este rascunho de nota pública: [cole]. Aponte trechos que podem soar defensivos, vagos ou insensíveis e proponha uma versão mais clara e responsável." }
    ]
  },
  {
    id: "pesquisa",
    nome: "Pesquisa e monitoramento",
    resumo: "Entender público, concorrência e o que se fala da marca.",
    usos: ["Resumir relatórios e artigos longos", "Organizar achados de entrevistas", "Comparar o posicionamento de concorrentes"],
    ferramentas: ["Perplexity e buscadores com IA (sempre confira as fontes)", "NotebookLM para trabalhar sobre seus próprios documentos"],
    prompts: [
      { titulo: "Síntese de material", texto: "Resuma o texto a seguir em 5 pontos principais, depois liste 3 perguntas que ele deixa sem resposta: [cole]." }
    ]
  }
];

const TAREFAS = [
  { texto: "Escrever um release", area: "imprensa" },
  { texto: "Preparar alguém para uma entrevista", area: "imprensa" },
  { texto: "Planejar posts do mês", area: "redes" },
  { texto: "Entender os comentários de um post", area: "redes" },
  { texto: "Melhorar o assunto de um e-mail", area: "email" },
  { texto: "Organizar um evento", area: "eventos" },
  { texto: "Responder a uma polêmica", area: "crise" },
  { texto: "Estudar o público ou a concorrência", area: "pesquisa" }
];
