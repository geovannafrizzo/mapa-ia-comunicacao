// Para contribuir: adicione ou edite categorias e IAs aqui. Não precisa mexer no index.html.
// Pesquisa feita em 14/10/2026, a partir de comparativos publicados em 2026 (muitos são de fornecedores: confira nos sites oficiais).
const TERRITORIOS = [
  { nome: "Pensar e escrever", cor: "#3B4EFF", texto: "#fff", categorias: ["texto", "pesquisa", "docs", "reunioes"] },
  { nome: "Criar peças e mídia", cor: "#FF8A3D", texto: "#151232", categorias: ["imagem", "design", "video", "edicao", "avatar", "audio"] },
  { nome: "Divulgar e se relacionar", cor: "#FF6FA9", texto: "#151232", categorias: ["imprensa", "redes", "email"] },
  { nome: "Monitorar e medir", cor: "#2FD0AE", texto: "#151232", categorias: ["escuta", "geo"] }
];

const CATEGORIAS = [
  {
    id: "texto", nome: "Escrever e revisar",
    resumo: "Releases, legendas, e-mails, roteiros, notas e revisão de tom.",
    ias: [
      { nome: "Claude", forte: "Costuma ir bem em textos longos, controle de tom e leitura de documentos extensos.", atencao: "Tem menos integrações com ferramentas de terceiros que o ChatGPT." },
      { nome: "ChatGPT", forte: "Versátil: brainstorm, variações de copy, imagens e voz no mesmo lugar.", atencao: "Sem contexto, o texto tende a ficar genérico." },
      { nome: "Gemini", forte: "Integra com Gmail, Docs e outras ferramentas do Google.", atencao: "Alguns comparativos o colocam atrás em qualidade de escrita: teste com o seu caso." }
    ],
    dica: "Os comparativos divergem bastante, e a qualidade muda a cada atualização. Rode o mesmo briefing nas três e compare."
  },
  {
    id: "pesquisa", nome: "Pesquisar com fontes",
    resumo: "Entender um tema, um mercado ou o que se fala de uma marca.",
    ias: [
      { nome: "Perplexity", forte: "Responde com links para as fontes e tem pesquisa aprofundada (Deep Research) com relatório.", atencao: "As fontes citadas podem estar desatualizadas ou erradas: abra e confira." },
      { nome: "ChatGPT (busca e Deep Research)", forte: "Combina conversa e pesquisa na web, com relatórios mais analíticos.", atencao: "O limite de pesquisas aprofundadas varia por plano." },
      { nome: "NotebookLM", forte: "Passou a buscar fontes sozinho e a montar um caderno de pesquisa ao seu redor.", atencao: "É ótimo para amplitude, mas a análise crítica continua sendo sua." }
    ],
    dica: "Fluxo comum: descobrir fontes no Perplexity e estudá-las a fundo no NotebookLM."
  },
  {
    id: "docs", nome: "Estudar documentos",
    resumo: "Resumir relatórios, cruzar materiais e tirar dúvidas sobre arquivos seus.",
    ias: [
      { nome: "NotebookLM", forte: "Responde só com base nas fontes que você envia, com citações. Gera também resumos em áudio.", atencao: "Não escreve textos longos: use outra IA para redigir." },
      { nome: "Claude", forte: "Lê arquivos longos e compara documentos.", atencao: "Não envie arquivos confidenciais sem autorização." }
    ],
    dica: "Reúna os documentos de um mesmo assunto e pergunte também o que está faltando."
  },
  {
    id: "reunioes", nome: "Reuniões e transcrição",
    resumo: "Transformar conversa em ata, resumo e lista de tarefas.",
    ias: [
      { nome: "Fathom", forte: "Plano gratuito generoso, com gravação e transcrição ilimitadas.", atencao: "Recursos como itens de ação ficam no plano pago." },
      { nome: "Fireflies", forte: "Suporta mais de 100 idiomas e tem muitas integrações.", atencao: "Entra na reunião como convidado: avise os participantes." },
      { nome: "Otter.ai", forte: "Transcrição ao vivo e arquivo pesquisável de reuniões antigas.", atencao: "Confira se o português é suportado no seu plano." },
      { nome: "Granola", forte: "Não entra na chamada: você anota e a IA completa depois.", atencao: "Grava o áudio do seu computador: peça consentimento." }
    ],
    dica: "Peça sempre três coisas: decisões tomadas, responsáveis e prazos."
  },
  {
    id: "imagem", nome: "Imagens",
    resumo: "Ilustrações, conceitos visuais, moodboards e imagens para peças.",
    ias: [
      { nome: "ChatGPT (imagens)", forte: "Fácil de usar, edita por conversa e costuma acertar texto dentro da imagem.", atencao: "Revise letras e detalhes antes de publicar." },
      { nome: "Midjourney", forte: "Maior controle de estética e direção de arte, bom para imagem principal de campanha.", atencao: "Texto dentro da imagem ainda é pouco confiável." },
      { nome: "Gemini (Imagen)", forte: "Fotorrealismo e rapidez, integrado ao ecossistema Google.", atencao: "Cotas diárias variam por plano." },
      { nome: "Adobe Firefly", forte: "Voltado a uso comercial e ao fluxo do Creative Cloud.", atencao: "Alguns testes o veem atrás dos concorrentes em criatividade." },
      { nome: "Ideogram", forte: "Muito citado por acertar tipografia em imagens.", atencao: "É uma ferramenta de nicho: pense nela para peças com texto." }
    ],
    dica: "Muitas equipes usam uma ferramenta rápida para volume e outra, mais cuidadosa, para as poucas imagens que precisam funcionar. Confirme os direitos de uso antes de publicar."
  },
  {
    id: "design", nome: "Design e apresentações",
    resumo: "Posts, slides, banners e materiais prontos para publicar.",
    ias: [
      { nome: "Canva", forte: "Peças de redes sociais e slides, com IA dentro do editor.", atencao: "Os layouts gerados podem parecer 'a cara do Canva'." },
      { nome: "Gamma", forte: "Cria uma apresentação a partir de texto e exporta para PowerPoint e Google Slides.", atencao: "O layout bonito pode esconder erros: revise o conteúdo." },
      { nome: "Beautiful.ai", forte: "Layouts que se ajustam sozinhos e mantêm consistência visual.", atencao: "Foca em slides padrão, com menos liberdade criativa." },
      { nome: "Pitch", forte: "Pensado para decks em equipe, com edição em tempo real.", atencao: "Gera menos conteúdo com IA que o Gamma." }
    ],
    dica: "Comece pelo roteiro em texto e só depois peça o layout. Para quem vive no Microsoft 365, o Copilot no PowerPoint também entra na comparação."
  },
  {
    id: "video", nome: "Gerar vídeo",
    resumo: "Clipes curtos, conceitos e cenas a partir de texto ou imagem.",
    ias: [
      { nome: "Veo (Google)", forte: "Apontado em vários comparativos como o melhor equilíbrio de qualidade, com áudio sincronizado.", atencao: "Disponibilidade e preço variam por país e plano." },
      { nome: "Runway", forte: "Mais controle de câmera e edição: popular entre profissionais de marketing.", atencao: "Funciona por créditos: planeje antes de gerar." },
      { nome: "Kling", forte: "Bom em movimento e com custo mais baixo que outras opções premium.", atencao: "Confira termos de uso e privacidade de cada plano." }
    ],
    dica: "O Sora, da OpenAI, foi descontinuado em 2026 (app em abril, API em setembro): não monte fluxos de trabalho em cima dele. Vídeo gerado serve bem para conceito e planos de apoio."
  },
  {
    id: "edicao", nome: "Editar vídeo e podcast",
    resumo: "Cortes, legendas, limpeza de áudio e versões para redes.",
    ias: [
      { nome: "Descript", forte: "Você edita o vídeo ou o podcast editando a transcrição, como um documento.", atencao: "O plano gratuito é bem limitado." },
      { nome: "CapCut", forte: "Edição rápida para redes e legendas automáticas, com bons recursos no plano gratuito.", atencao: "Revise as legendas geradas." },
      { nome: "OpusClip", forte: "Transforma vídeos longos em cortes verticais com legendas animadas.", atencao: "O editor é limitado: o 'índice de viralidade' é só uma estimativa." }
    ],
    dica: "Limpe a gravação completa primeiro (Descript) e só depois gere os cortes."
  },
  {
    id: "avatar", nome: "Avatares e dublagem",
    resumo: "Apresentadores virtuais e tradução de vídeos com sincronia labial.",
    ias: [
      { nome: "HeyGen", forte: "Avatares realistas e tradução de vídeo com sincronia labial.", atencao: "A tradução consome muitos créditos." },
      { nome: "Synthesia", forte: "Foco em comunicação interna e treinamento, com controles de marca.", atencao: "Os avatares são mais 'corporativos' e menos realistas." }
    ],
    dica: "Se a mensagem for pública, avise que o apresentador é virtual. Para versões em outros idiomas, peça revisão a uma pessoa fluente."
  },
  {
    id: "audio", nome: "Voz e música",
    resumo: "Locução, dublagem, trilhas e músicas.",
    ias: [
      { nome: "ElevenLabs", forte: "Voz sintética natural, clonagem e dublagem em vários idiomas.", atencao: "Nunca clone a voz de alguém sem autorização." },
      { nome: "Suno", forte: "Gera músicas completas a partir de uma descrição.", atencao: "Os direitos mudaram em 2026 após acordos com gravadoras: leia os termos do seu plano." }
    ],
    dica: "Direitos de música gerada por IA ainda estão em disputa judicial. Para campanhas, confirme a licença por escrito."
  },
  {
    id: "imprensa", nome: "Assessoria de imprensa",
    resumo: "Relacionamento com jornalistas, listas de contatos e divulgação.",
    ias: [
      { nome: "Muck Rack", forte: "Base de jornalistas e mídia com recursos de IA para release e disparo.", atencao: "É uma plataforma paga e voltada a equipes: confira a cobertura de veículos brasileiros." },
      { nome: "Cision", forte: "Reúne monitoramento, análises e contato com jornalistas na mesma plataforma.", atencao: "Também é paga e pensada para empresas e agências." },
      { nome: "Prowly", forte: "Plataforma de PR com assistente de IA para rascunhos.", atencao: "Os modelos de e-mail têm pouca personalização." }
    ],
    dica: "Para estudar ou começar sozinha, use uma IA de texto para pauta e release e revise cada pitch à mão: disparo em massa sem personalização desgasta a relação com jornalistas."
  },
  {
    id: "redes", nome: "Redes sociais",
    resumo: "Conteúdo, calendário, publicação e relacionamento com a comunidade.",
    ias: [
      { nome: "Buffer", forte: "Agendamento simples, com assistente que adapta o texto a cada rede.", atencao: "Não tem escuta social." },
      { nome: "Hootsuite", forte: "Gestão completa para equipes, com o assistente OwlyWriter.", atencao: "A IA é secundária em relação à gestão." },
      { nome: "Sprout Social", forte: "Análise, escuta e relatórios, com IA para resumir e sugerir respostas.", atencao: "É mais pesada e cara que ferramentas de agendamento." }
    ],
    dica: "Segundo uma pesquisa da própria Sprout Social, metade da Geração Z já deixou de seguir marcas por conteúdo com cara de IA. Use a IA para o rascunho, mas mantenha voz e revisão humanas."
  },
  {
    id: "email", nome: "E-mail marketing",
    resumo: "Campanhas, assuntos, segmentação e testes A/B.",
    ias: [
      { nome: "Mailchimp", forte: "Opção conhecida: ajuda com assuntos, conteúdo e horário de envio.", atencao: "Os recursos mais avançados ficam em planos maiores." },
      { nome: "HubSpot", forte: "E-mail integrado ao CRM, com redação por IA.", atencao: "Pode ser complexo e caro para equipes pequenas." },
      { nome: "Klaviyo", forte: "Referência em e-mail e SMS para lojas virtuais.", atencao: "É voltado a e-commerce." },
      { nome: "Brevo", forte: "E-mail, SMS e WhatsApp com bom custo-benefício.", atencao: "O editor é menos polido que os concorrentes." }
    ],
    dica: "A IA é boa em primeiros rascunhos, assuntos alternativos e em separar listas. Teste os assuntos por um mês e compare as taxas de abertura."
  },
  {
    id: "escuta", nome: "Escuta e monitoramento",
    resumo: "Acompanhar menções, sentimento e sinais de crise.",
    ias: [
      { nome: "Brand24", forte: "Acessível, com alertas de picos de menções e análise de sentimento.", atencao: "Cobertura menor que as plataformas corporativas." },
      { nome: "Meltwater", forte: "Une monitoramento de mídia e redes, voltado a PR e crise.", atencao: "Plataforma corporativa, com preço alto." },
      { nome: "Brandwatch", forte: "Grande base histórica e análise de público, para grandes empresas.", atencao: "Pode ser mais do que uma equipe pequena precisa." },
      { nome: "Talkwalker", forte: "Escuta visual e detecção de tendências, hoje dentro do Hootsuite.", atencao: "Confira como fica a oferta após a integração." }
    ],
    dica: "Análise de sentimento erra ironia e gíria. Confira uma amostra manual das menções e veja se o português está bem coberto."
  },
  {
    id: "geo", nome: "Presença nas respostas de IA",
    resumo: "Ver como ChatGPT, Gemini e Perplexity citam e descrevem uma marca.",
    ias: [
      { nome: "Otterly.AI", forte: "Acompanha menções e citações em várias IAs.", atencao: "Ferramenta nova: o mercado ainda está se organizando." },
      { nome: "Peec AI", forte: "Visibilidade, posição e sentimento, com comparação entre concorrentes.", atencao: "Os dados vêm de perguntas pré-definidas por você." },
      { nome: "Semrush AI Visibility / Ahrefs Brand Radar", forte: "Ligam esse acompanhamento a ferramentas de SEO que muita equipe já usa.", atencao: "Costumam exigir assinatura da plataforma." }
    ],
    dica: "Segundo análise da Ahrefs, a maior parte das menções de marca em respostas de IA vem de sites de terceiros. Cobertura de imprensa e boa reputação online pesam aqui, e isso é trabalho de RP."
  }
];

const TAREFAS = [
  { texto: "Escrever um release", categoria: "texto" },
  { texto: "Resumir um relatório", categoria: "docs" },
  { texto: "Registrar uma reunião", categoria: "reunioes" },
  { texto: "Criar uma imagem para um post", categoria: "imagem" },
  { texto: "Montar uma apresentação", categoria: "design" },
  { texto: "Fazer cortes de um vídeo longo", categoria: "edicao" },
  { texto: "Enviar pauta a jornalistas", categoria: "imprensa" },
  { texto: "Agendar posts", categoria: "redes" },
  { texto: "Saber o que falam da marca", categoria: "escuta" },
  { texto: "Aparecer nas respostas de IA", categoria: "geo" }
];
