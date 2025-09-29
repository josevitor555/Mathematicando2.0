// Interface para representar um artigo/submódulo
interface IArtigo {
    id: string;
    titulo: string;
    nivel: string;
    progresso: string;
}

// Interface para representar um módulo principal
export interface IModulo {
    id: number;
    titulo: string;
    artigos: IArtigo[];
}

// Data Mock - Exemplo de estrutura hierárquica
export const modulos: IModulo[] = [
    {
        id: 1,
        titulo: 'Funções',
        artigos: [
            {
                id: 'funcoes-afins',
                titulo: 'Funções Afins',
                nivel: 'Intermediário',
                progresso: '70% concluído',
            },
            {
                id: 'funcoes-quadraticas',
                titulo: 'Funções Quadráticas',
                nivel: 'Avançado',
                progresso: '45% concluído',
            },
            {
                id: 'funcoes-exponenciais',
                titulo: 'Funções Exponenciais',
                nivel: 'Intermediário',
                progresso: '30% concluído',
            },
        ],
    },
    {
        id: 2,
        titulo: 'Estatística',
        artigos: [
            {
                id: 'estatistica-descritiva',
                titulo: 'Estatística Descritiva',
                nivel: 'Básico',
                progresso: '90% concluído',
            },
            {
                id: 'probabilidade',
                titulo: 'Probabilidade',
                nivel: 'Intermediário',
                progresso: '60% concluído',
            },
        ],
    },
    {
        id: 3,
        titulo: 'Geometria',
        artigos: [
            {
                id: 'geometria-plana',
                titulo: 'Geometria Plana',
                nivel: 'Básico',
                progresso: '25% concluído',
            },
            {
                id: 'geometria-espacial',
                titulo: 'Geometria Espacial',
                nivel: 'Avançado',
                progresso: '10% concluído',
            },
        ],
    },
];