import { categories } from "./categories";
import { users } from "./users";

export const polls: PollEntity[] = [
  {
    guid: "1",
    createDt: "2024-02-25 03:35",
    updateDt: "2024-02-25 03:35",
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.sportsmirchi.com%2Fwp-content%2Fuploads%2F2016%2F12%2Fheres-how-soccer-superstars-ronaldo-and-messi-match-up.jpg&f=1&nofb=1&ipt=73256327feb2a924469c136fbc1e88702ad807b8eb8660f7678413a4b5a1b4d2&ipo=images",
    content: "Qual é o melhor batedor de falta da história?",
    categories: [categories[0]],
    author: users[0],
    slug: "melhor-batedor-de-falta",
    options: [
      {
        guid: "1",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        label: "Lionel Messi",
      },
      {
        guid: "2",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        label: "Crisitano Ronaldo",
      },
    ],
    comments: [
      {
        author: users[1],
        guid: "cc1",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        content: "Obviamente, é o Pelé !",
      },
    ],
  },
  {
    guid: "2",
    createDt: "2024-02-25 03:35",
    updateDt: "2024-02-25 03:35",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fphantom-marca-us.unidadeditorial.es%2F94b21fcc3f9b410a7f3dc377f4950fe2%2Fresize%2F1200%2Ff%2Fjpg%2Fassets%2Fmultimedia%2Fimagenes%2F2022%2F12%2F29%2F16723452960636.jpg&f=1&nofb=1&ipt=2a2ad4bf0a9fd0ef763349f6127a6370f2299307a5e6dc69a51189e074684ac8&ipo=images",
    content: "Qual é o melhor jogador de futebol de todos os tempos?",
    categories: [categories[0]],
    author: users[0],
    slug: "melhor-jogador-de-futebol",
    options: [
      {
        guid: "3",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        label: "Pelé",
      },
      {
        guid: "4",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        label: "Diego Maradona",
      },
    ],
    comments: [
      {
        author: users[1],
        guid: "cc1",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        content: "PELÉ !!!!",
      },
    ],
  },
  {
    guid: "3",
    createDt: "2024-02-25 03:35",
    updateDt: "2024-02-25 03:35",
    image:
      "https://s2-ge.glbimg.com/VfCm6UxKZXXUW2jx28EjHnLMnhs=/0x0:1080x608/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2019/K/b/2s5XGFQxqHM4JMy1EJXA/carrossel-classicos.jpg",
    content: "Qual é o maior clássico do futebol brasileiro?",
    categories: [categories[0]],
    author: users[0],
    slug: "maior-classico-brasileiro",
    options: [
      {
        guid: "5",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        label: "Fla-Flu",
      },
      {
        guid: "6",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        label: "Grenal",
      },
      {
        guid: "7",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        label: "Majestoso",
      },
      {
        guid: "8",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        label: "Clássico Mineiro",
      },
    ],
    comments: [
      {
        author: users[2],
        guid: "cc1",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        content: 'O que cargas d\'água é uma "Majestoso" ???',
      },
    ],
  },
  {
    guid: "4",
    createDt: "2024-02-25 03:35",
    updateDt: "2024-02-25 03:35",
    image: "https://unsplash.com/photos/8rj4sz9YLCI",
    content: "Quem é o melhor tenista da atualidade?",
    categories: [categories[0]],
    author: users[0],
    slug: "melhor-tenista-atual",
    options: [
      {
        guid: "9",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        label: "Novak Djokovic",
      },
      {
        guid: "10",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        label: "Rafael Nadal",
      },
      {
        guid: "11",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        label: "Roger Federer",
      },
      {
        guid: "12",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        label: "Daniil Medvedev",
      },
    ],
  },
  {
    guid: "5",
    createDt: "2024-02-25 03:35",
    updateDt: "2024-02-25 03:35",
    image: "https://unsplash.com/photos/9gGvNWBeOq4",
    content: "Qual é o melhor estádio de futebol do mundo?",
    categories: [categories[0]],
    author: users[1],
    slug: "melhor-estadio-mundo",
    options: [
      {
        guid: "13",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        label: "Maracanã",
      },
      {
        guid: "14",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        label: "Camp Nou",
      },
      {
        guid: "15",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        label: "Santiago Bernabéu",
      },
      {
        guid: "16",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        label: "Old Trafford",
      },
    ],
  },
  {
    guid: "6",
    createDt: "2024-02-25 03:35",
    updateDt: "2024-02-25 03:35",
    image:
      "https://caminhoslanguages.com/wp-content/uploads/2021/03/most-popular-sports-in-brazil-2.jpg",
    content: "Qual é o esporte mais popular no Brasil, além do futebol?",
    categories: [categories[0]],
    author: users[1],
    slug: "esporte-popular-brasil",
    options: [
      {
        guid: "17",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        label: "Vôlei",
      },
      {
        guid: "18",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        label: "Basquete",
      },
      {
        guid: "19",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        label: "Futsal",
      },
      {
        guid: "20",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        label: "Natação",
      },
    ],
  },
  {
    guid: "7",
    createDt: "2024-02-25 03:35",
    updateDt: "2024-02-25 03:35",
    image:
      "https://s2.glbimg.com/1Zalta8hIsSEfOB2ODfv4eZ4jVQ=/smart/e.glbimg.com/og/ed/f/original/2015/10/26/hamilton-senna.jpg",
    content: "Quem é o melhor piloto de Fórmula 1 de todos os tempos?",
    categories: [categories[0]],
    author: users[1],
    slug: "melhor-piloto-f1",
    options: [
      {
        guid: "21",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        label: "Ayrton Senna",
      },
      {
        guid: "22",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        label: "Lewis Hamilton",
      },
    ],
  },
  {
    guid: "8",
    createDt: "2024-02-25 03:35",
    updateDt: "2024-02-25 03:35",
    image:
      "https://www.allog.com.br/wp-content/uploads/2022/10/selecoes-de-futebol_.jpg",
    content: "Qual seleção vencerá a próxima Copa do Mundo?",
    categories: [categories[0]],
    author: users[1],
    slug: "proxima-copa-mundo",
    options: [
      {
        guid: "23",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        label: "Brasil",
      },
      {
        guid: "24",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        label: "Alemanha",
      },
      {
        guid: "25",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        label: "França",
      },
      {
        guid: "26",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        label: "Argentina",
      },
    ],
  },
  {
    guid: "9",
    createDt: "2024-02-25 03:35",
    updateDt: "2024-02-25 03:35",
    image:
      "https://au.imgix.net/2024/01/WNBA_Partnership_Desktop.jpg?auto=format&fm=pjgp&w=1920&s=8702b9417823e60bcbee3c0983cd3eb4",
    content: "Quem é o melhor jogador de basquete da NBA atualmente?",
    categories: [categories[0]],
    author: users[1],
    slug: "melhor-jogador-nba",
    options: [
      {
        guid: "27",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        label: "LeBron James",
      },
      {
        guid: "28",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        label: "Kevin Durant",
      },
      {
        guid: "29",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        label: "Stephen Curry",
      },
      {
        guid: "30",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        label: "Giannis Antetokounmpo",
      },
    ],
  },
  {
    guid: "10",
    createDt: "2024-02-25 03:35",
    updateDt: "2024-02-25 03:35",
    image:
      "https://www.rhsmith.umd.edu/sites/default/files/research/featured/2022/11/soccer-player.jpg",
    content: "Qual é o melhor campeonato de futebol do mundo?",
    categories: [categories[0]],
    author: users[2],
    slug: "melhor-campeonato-futebol",
    options: [
      {
        guid: "31",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        label: "Premier League",
      },
      {
        guid: "32",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        label: "La Liga",
      },
      {
        guid: "33",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        label: "Serie A",
      },
      {
        guid: "34",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        label: "Bundesliga",
      },
    ],
  },
  {
    guid: "11",
    createDt: "2024-02-25 03:35",
    updateDt: "2024-02-25 03:35",
    image:
      "https://betterguards.com/cdn/shop/articles/volleyball-verletzungen-praevention.png?v=1677139337&width=2048",
    content: "Quem é o melhor jogador de vôlei do mundo?",
    categories: [categories[0]],
    author: users[2],
    slug: "melhor-jogador-volei",
    options: [
      {
        guid: "35",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        label: "Bruno Rezende",
      },
      {
        guid: "36",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        label: "Wilfredo León",
      },
      {
        guid: "37",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        label: "Maxim Mikhaylov",
      },
      {
        guid: "38",
        createDt: "2024-02-25 03:35",
        updateDt: "2024-02-25 03:35",
        label: "Earvin N'Gapeth",
      },
    ],
  },
];
