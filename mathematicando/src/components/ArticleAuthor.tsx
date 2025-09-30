interface ArticleAuthorProps {
  autor: {
    nome: string;
    username: string;
    avatarUrl: string;
  };
}

export function ArticleAuthor({ autor }: ArticleAuthorProps) {
  // Mapeamento de formações detalhadas para cada autor
  const authorDegrees: Record<string, string> = {
    'George Lucas': 'Doutor em Matemática pela USP, Mestre em Educação Matemática pela UNICAMP',
    'Matheus Oliveira': 'Mestre em Matemática Aplicada pelo IMPA, Bacharel em Matemática pela UFRJ',
    'Ana Carla': 'Especialista em Ensino de Matemática, Licenciada em Matemática pela UFPI',
    'Roberto Carlos': 'Mestre em Estatística pela UFSC, Bacharel em Matemática pela UFMG',
    'Larissa Santos': 'Doutora em Probabilidade e Estatística, Mestre em Matemática Aplicada',
    'Pedro Almeida': 'Mestre em Geometria Computacional, Licenciado em Matemática pela UFC',
    'Juliana Martins': 'Doutora em Topologia, Mestre em Geometria Diferencial pela UFRGS'
  };

  const degree = authorDegrees[autor.nome] || 'Professor Bacana';

  return (
    <div className="flex items-center">
      <div className="w-8 h-8 mr-3 rounded-full overflow-hidden">
        <img 
          src={autor.avatarUrl} 
          alt={autor.nome} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col">
        <span className="font-medium text-white">Prof. {autor.nome}</span>
        <span className="text-sm text-gray-200">{degree}</span>
      </div>
    </div>
  );
}