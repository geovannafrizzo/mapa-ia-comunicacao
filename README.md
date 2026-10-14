# Mapa de IA para comunicação

Um mapa interativo que mostra onde a inteligência artificial pode ajudar em cada área da comunicação: assessoria de imprensa, redes sociais, e-mail marketing, eventos, gestão de crise e pesquisa.

Ao clicar numa área você vê usos práticos, ferramentas e prompts prontos para copiar. Também dá para começar pela tarefa ("escrever um release", "responder a uma polêmica") e o mapa leva você até a área certa.

## Como usar

Abra o arquivo `index.html` no navegador. Não precisa instalar nada.

## Publicar no GitHub Pages

1. Crie um repositório novo (sugestão de nome: `mapa-ia-comunicacao`) e envie estes arquivos.
2. Em **Settings → Pages**, escolha a branch `main` e a pasta `/ (root)`.
3. Aguarde alguns minutos: o site fica em `https://SEU-USUARIO.github.io/mapa-ia-comunicacao/`.

## Estrutura

```
mapa-ia-comunicacao/
├── index.html   # página, estilo e comportamento do mapa
├── dados.js     # áreas, ferramentas, prompts e tarefas
└── README.md
```

## Como contribuir

Todo o conteúdo está em `dados.js`. Para adicionar uma área nova, copie um bloco de `AREAS`, troque os textos e salve: o mapa redistribui os nós sozinho. Para incluir uma tarefa no seletor, adicione uma linha em `TAREFAS` apontando para o `id` da área.

Boas contribuições são prompts testados na prática, com campos entre `[colchetes]` para o usuário preencher.

## Boas práticas

- Revise sempre o que a IA produz: fatos, nomes, números e tom.
- Não cole dados sensíveis ou confidenciais em ferramentas externas.

## Ideias para as próximas versões

- Casos reais por área, com antes e depois do uso de IA
- Quiz de recomendação mais detalhado
- Busca por prompts
- Versão em inglês
