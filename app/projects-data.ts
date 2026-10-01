import { publicAsset } from './public-asset';

export const projectCategories = ['Tecnologia', 'Conteúdo', 'Entretenimento'] as const;
export const projectStatuses = ['Ativo', 'Em desenvolvimento', 'Em planejamento'] as const;

export type ProjectCategory = (typeof projectCategories)[number];
export type ProjectStatus = (typeof projectStatuses)[number];

export type Project = {
  id: string;
  slug: string;
  name: string;
  category: ProjectCategory;
  status: ProjectStatus;
  featured?: boolean;
  shortDescription: string;
  description: string;
  coverImage?: string;
  logo?: string;
  tags: string[];
  links?: { label: string; href: string }[];
  externalUrl?: string;
  internalRoute: string;
};

export const projects: Project[] = [
  {
    id: 'crm',
    slug: 'crm',
    name: 'CRM',
    category: 'Tecnologia',
    status: 'Em desenvolvimento',
    featured: true,
    shortDescription: 'Uma ferramenta comercial construída para organizar relações e trabalho com clareza.',
    description: 'O CRM é o projeto prioritário da A Forja neste momento. Ele está em desenvolvimento e terá espaço para apresentar funcionalidades, imagens do produto e formas de conhecer a solução à medida que ganhar forma.',
    tags: ['Software', 'Produto', 'Relações'],
    internalRoute: '/projetos/crm',
  },
  {
    id: 'cafe-com-mattoso',
    slug: 'cafe-com-mattoso',
    name: 'Café com Mattoso',
    category: 'Conteúdo',
    status: 'Ativo',
    shortDescription: 'Conversas, vídeos, textos e reflexões sobre pessoas, trabalho, tecnologia e escolhas.',
    description: 'Café com Mattoso é um projeto de conteúdo da A Forja. Ele reúne conversas, episódios de Café, Pão e Milagre, histórias e ideias que mantêm as pessoas no centro.',
    coverImage: publicAsset('images/marcelo-cafe-hero.jpg'),
    tags: ['Vídeos', 'Textos', 'Palestras'],
    links: [{ label: 'Visitar o Café com Mattoso', href: '/cafe-com-mattoso' }],
    internalRoute: '/projetos/cafe-com-mattoso',
  },
  {
    id: 'ascensao-heroica',
    slug: 'ascensao-heroica',
    name: 'Ascensão Heróica',
    category: 'Entretenimento',
    status: 'Em desenvolvimento',
    shortDescription: 'Jogo e universo narrativo de heróis, escolhas, masmorras e histórias em expansão.',
    description: 'Ascensão Heróica reúne jogo, universo narrativo, HQs e conteúdos relacionados. O projeto segue em desenvolvimento como um espaço para explorar personagens, sistemas e consequências de cada escolha.',
    tags: ['Jogo', 'Narrativa', 'HQs'],
    internalRoute: '/projetos/ascensao-heroica',
  },
  {
    id: 'cronicas-cafe-pao-milagre',
    slug: 'cronicas-cafe-pao-milagre',
    name: 'Crônicas do Café, Pão e Milagre',
    category: 'Entretenimento',
    status: 'Ativo',
    shortDescription: 'Série literária sobre pessoas comuns, encontros, quedas e os milagres que cabem numa mesa.',
    description: 'Uma série literária publicada que amplia as conversas do Café por meio de ficção, personagens e histórias.',
    tags: ['Livros', 'Série literária'],
    links: [{ label: 'Ver os livros', href: '/historias' }],
    internalRoute: '/projetos/cronicas-cafe-pao-milagre',
  },
  {
    id: 'athos',
    slug: 'athos',
    name: 'Athos',
    category: 'Entretenimento',
    status: 'Em planejamento',
    shortDescription: 'Um projeto de jogo e universo para explorar, imaginar e construir.',
    description: 'Athos é uma frente autoral em planejamento, pensada como um mundo aberto à exploração, criação e participação.',
    tags: ['Jogo', 'Universo'],
    internalRoute: '/projetos/athos',
  },
  {
    id: 'thronus',
    slug: 'thronus',
    name: 'Thronus',
    category: 'Entretenimento',
    status: 'Em planejamento',
    shortDescription: 'Um universo futuro de fantasia, escolhas e consequências.',
    description: 'Thronus é um universo em planejamento. Por enquanto, ele existe como uma possibilidade criativa que poderá receber histórias, jogos e outras experiências.',
    tags: ['Universo', 'Histórias'],
    internalRoute: '/projetos/thronus',
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
