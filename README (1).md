# Mapa de IAs para comunicação

Um mapa interativo que mostra, para cada tarefa da comunicação, quais IAs costumam funcionar melhor, o que cada uma faz bem e onde ter cuidado.

O mapa tem quatro territórios e 15 tarefas:

- **Pensar e escrever:** escrever e revisar, pesquisar com fontes, estudar documentos, reuniões e transcrição
- **Criar peças e mídia:** imagens, design e apresentações, gerar vídeo, editar vídeo e podcast, avatares e dublagem, voz e música
- **Divulgar e se relacionar:** assessoria de imprensa, redes sociais, e-mail marketing
- **Monitorar e medir:** escuta e monitoramento, presença nas respostas de IA

Dá para começar por uma situação ("enviar pauta a jornalistas") ou buscar uma IA pelo nome para ver em quais tarefas ela aparece.

## Como usar

Abra o `index.html` no navegador. Não precisa instalar nada.

## Publicar no GitHub Pages

1. Crie um repositório (sugestão: `mapa-ia-comunicacao`) e envie os arquivos.
2. Em **Settings → Pages**, escolha a branch `main` e a pasta `/ (root)`.
3. O site fica em `https://SEU-USUARIO.github.io/mapa-ia-comunicacao/`.

## Estrutura

```
├── index.html   # página, estilo e comportamento do mapa
├── dados.js     # territórios, categorias, IAs e tarefas
└── README.md
```

## Como contribuir

Todo o conteúdo está em `dados.js`:

- Para incluir uma IA, adicione um item em `ias` dentro da categoria, com `nome`, `forte` e `atencao`.
- Para criar uma categoria, copie um bloco de `CATEGORIAS` e inclua o `id` dela em um dos `TERRITORIOS`.
- Para sugerir um atalho de tarefa, adicione uma linha em `TAREFAS`.

Ferramentas de IA mudam rápido. Toda contribuição deve trazer a data da revisão e, de preferência, um teste feito na prática ou uma fonte que não seja do próprio fornecedor.

## Sobre a pesquisa

O conteúdo foi levantado em 14/10/2026 a partir de comparativos publicados em 2026. Muitos são de fornecedores das próprias ferramentas, então trate as indicações como ponto de partida e teste com o seu caso. Ainda não foram incluídas ferramentas específicas do mercado brasileiro nem atendimento ao público (chatbots).

## Aviso

As indicações são orientações gerais. Confira recursos, preços e termos de uso nos sites oficiais, revise tudo o que a IA produzir e não envie dados sensíveis ou confidenciais.

## Ideias para as próximas versões

- Ferramentas brasileiras e atendimento (chatbots)
- Filtro por gratuito ou pago
- Exemplos reais de uso em cada categoria
- Versão em inglês
