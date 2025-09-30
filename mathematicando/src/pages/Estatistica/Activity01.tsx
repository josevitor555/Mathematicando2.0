import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faGlobe, faHashtag, faLink } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { InlineMath, BlockMath } from 'react-katex';

// Dados do autor (exemplo)
const authorData = {
    name: "Roberto Carlos",
    degree: "Mestre em Estatística pela UFSC, Bacharel em Matemática pela UFMG",
    avatarUrl: "https://i.pravatar.cc/150?img=4",
    postDate: "28 de Setembro de 2025",
    socialLinks: {
        website: "https://robertocarlos.com",
        twitter: "@robertocarlos_stats",
        linkedin: "linkedin.com/in/robertocarlos",
        github: "github.com/robertocarlos"
    }
};

const Activity01 = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // Volta para a página anterior
    };

    return (
        <div className="min-h-screen bg-accent-foreground p-4 md:p-6">
            {/* Botão de voltar */}
            <button
                onClick={handleGoBack}
                className="mb-4 flex items-center text-white hover:text-gray-300 transition-colors"
            >
                <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                <span>Voltar</span>
            </button>

            <div className="max-w-4xl mx-auto">
                {/* Banner do Blog Post */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-200/10 rounded-2xl p-6 mb-8"
                >
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        {/* Imagem do autor */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="flex-shrink-0"
                        >
                            <img
                                src={authorData.avatarUrl}
                                alt={authorData.name}
                                className="w-24 h-24 rounded-full object-cover border-4 border-gray-200/20"
                            />
                        </motion.div>

                        {/* Informações do autor */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-center md:text-left flex-1"
                        >
                            <h1 className="text-2xl font-bold text-white mb-2">{authorData.name}</h1>
                            <p className="text-gray-100 mb-3">{authorData.degree}</p>

                            {/* Links sociais */}
                            <div className="flex justify-center md:justify-start space-x-4 mb-3">
                                <a href={authorData.socialLinks.website} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                                    <FontAwesomeIcon icon={faGlobe} className="w-5 h-5" />
                                </a>
                                <a href={`https://twitter.com/${authorData.socialLinks.twitter}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                                    <FontAwesomeIcon icon={faHashtag} className="w-5 h-5" />
                                </a>
                                <a href={`https://linkedin.com/in/${authorData.socialLinks.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                                    <FontAwesomeIcon icon={faLink} className="w-5 h-5" />
                                </a>
                                <a href={`https://github.com/${authorData.socialLinks.github}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                                    <FontAwesomeIcon icon={faLink} className="w-5 h-5" />
                                </a>
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="flex items-center justify-center md:justify-start"
                            >
                                <span className="bg-gray-200/20 text-gray-300 px-3 py-1 rounded-full text-sm">
                                    Postado em: {authorData.postDate}
                                </span>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Conteúdo do Artigo */}
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="p-6 text-gray-100"
                >
                    <header className="mb-8">
                        <h1 className="mb-4 text-4xl font-extrabold leading-tight text-white lg:mb-6 lg:text-4xl">
                            Introdução à Estatística Descritiva
                        </h1>
                    </header>

                    <p className="lead mb-4 text-lg">
                        A estatística descritiva é a área da estatística responsável por resumir e organizar dados
                        de forma clara e concisa. Ela nos ajuda a entender melhor as características de um conjunto
                        de dados através de medidas e representações visuais.
                    </p>

                    <p className="mb-4 text-lg">
                        Neste artigo, vamos explorar os conceitos fundamentais da estatística descritiva, incluindo
                        medidas de tendência central, medidas de dispersão e representações gráficas.
                    </p>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">O que é Estatística Descritiva?</h2>

                    <p className="mb-4 text-lg">
                        A estatística descritiva é a primeira etapa na análise de dados. Seu objetivo é descrever,
                        organizar e resumir os dados de uma amostra ou população de forma compreensível. Ao contrário
                        da estatística inferencial, que busca fazer generalizações, a estatística descritiva foca
                        apenas nos dados disponíveis.
                    </p>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Medidas de Tendência Central</h2>

                    <p className="mb-4 text-lg">
                        As medidas de tendência central indicam onde os dados tendem a se concentrar. As três principais
                        medidas são:
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Média Aritmética</h3>

                    <p className="mb-4 text-lg">
                        A média é calculada somando todos os valores e dividindo pelo número total de valores:
                    </p>

                    <div className="bg-gray-200/10 rounded-2xl text-gray-200 p-4 overflow-x-auto mb-4 text-lg">
                        <BlockMath math="\text{Média} = \frac{\sum x}{n}" />
                        <p>Onde:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>Σx é a soma de todos os valores</li>
                            <li>n é o número total de valores</li>
                        </ul>
                    </div>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Mediana</h3>

                    <p className="mb-4 text-lg">
                        A mediana é o valor que divide os dados ordenados em duas partes iguais. Se o número de
                        observações for ímpar, a mediana é o valor central. Se for par, é a média dos dois valores
                        centrais.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Moda</h3>

                    <p className="mb-4 text-lg">
                        A moda é o valor que aparece com maior frequência em um conjunto de dados. Um conjunto pode
                        ter uma moda (unimodal), duas modas (bimodal) ou mais de duas modas (multimodal).
                    </p>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Medidas de Dispersão</h2>

                    <p className="mb-4 text-lg">
                        As medidas de dispersão indicam o quão espalhados os dados estão em relação à tendência central:
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Amplitude</h3>

                    <p className="mb-4 text-lg">
                        A amplitude é a diferença entre o maior e o menor valor do conjunto de dados:
                    </p>

                    <div className="bg-gray-200/10 rounded-2xl text-gray-200 p-4 overflow-x-auto mb-4 text-lg">
                        <BlockMath math="\text{Amplitude} = \text{Valor máximo} - \text{Valor mínimo}" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Variância</h3>

                    <p className="mb-4 text-lg">
                        A variância mede a média dos quadrados das diferenças entre cada valor e a média:
                    </p>

                    <div className="bg-gray-200/10 rounded-2xl text-gray-200 p-4 overflow-x-auto mb-4 text-lg">
                        <BlockMath math="\text{Variância} (\sigma^2) = \frac{\sum(x_i - \mu)^2}{N}" />
                        <p>Onde:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>x<sub>i</sub> são os valores individuais</li>
                            <li>μ é a média</li>
                            <li>N é o número total de valores</li>
                        </ul>
                    </div>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Desvio Padrão</h3>

                    <p className="mb-4 text-lg">
                        O desvio padrão é a raiz quadrada da variância e é expresso na mesma unidade dos dados:
                    </p>

                    <div className="bg-gray-200/10 rounded-2xl text-gray-200 p-4 overflow-x-auto mb-4 text-lg">
                        <BlockMath math="\text{Desvio Padrão} (\sigma) = \sqrt{\text{Variância}}" />
                    </div>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Representações Gráficas</h2>

                    <p className="mb-4 text-lg">
                        Os gráficos são ferramentas essenciais para visualizar dados. Alguns dos mais comuns são:
                    </p>

                    <ul className="list-disc list-inside mb-4 space-y-2 text-lg">
                        <li><strong className="text-white">Histogramas</strong>: Mostram a distribuição de frequência dos dados</li>
                        <li><strong className="text-white">Diagramas de caixa (box plots)</strong>: Exibem medidas de tendência central e dispersão</li>
                        <li><strong className="text-white">Gráficos de barras</strong>: Comparação entre diferentes categorias</li>
                        <li><strong className="text-white">Gráficos de dispersão</strong>: Mostram a relação entre duas variáveis</li>
                    </ul>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Exemplo Prático</h2>

                    <p className="mb-4 text-lg">
                        Considere as notas de 10 alunos em uma prova:
                    </p>

                    <table className="min-w-full border-collapse mb-4 text-lg">
                        <thead>
                            <tr className="bg-gray-200/20">
                                <th className="border border-gray-200/10 px-4 py-2 text-left">Aluno</th>
                                <th className="border border-gray-200/10 px-4 py-2 text-left">Nota</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-200/10 px-4 py-2">Ana</td>
                                <td className="border border-gray-200/10 px-4 py-2">8.5</td>
                            </tr>
                            <tr className="bg-gray-200/10">
                                <td className="border border-gray-200/10 px-4 py-2">Bruno</td>
                                <td className="border border-gray-200/10 px-4 py-2">7.2</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-200/10 px-4 py-2">Carlos</td>
                                <td className="border border-gray-200/10 px-4 py-2">9.0</td>
                            </tr>
                            <tr className="bg-gray-200/10">
                                <td className="border border-gray-200/10 px-4 py-2">Daniela</td>
                                <td className="border border-gray-200/10 px-4 py-2">6.8</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-200/10 px-4 py-2">Eduardo</td>
                                <td className="border border-gray-200/10 px-4 py-2">8.1</td>
                            </tr>
                            <tr className="bg-gray-200/10">
                                <td className="border border-gray-200/10 px-4 py-2">Fernanda</td>
                                <td className="border border-gray-200/10 px-4 py-2">7.9</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-200/10 px-4 py-2">Gabriel</td>
                                <td className="border border-gray-200/10 px-4 py-2">9.5</td>
                            </tr>
                            <tr className="bg-gray-200/10">
                                <td className="border border-gray-200/10 px-4 py-2">Helena</td>
                                <td className="border border-gray-200/10 px-4 py-2">6.5</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-200/10 px-4 py-2">Igor</td>
                                <td className="border border-gray-200/10 px-4 py-2">8.7</td>
                            </tr>
                            <tr className="bg-gray-200/10">
                                <td className="border border-gray-200/10 px-4 py-2">Juliana</td>
                                <td className="border border-gray-200/10 px-4 py-2">7.6</td>
                            </tr>
                        </tbody>
                    </table>

                    <p className="mb-4 text-lg">
                        Calculando as medidas descritivas:
                    </p>

                    <ul className="list-disc list-inside mb-4 space-y-2 text-lg">
                        <li><strong className="text-white">Média</strong>: 7.98</li>
                        <li><strong className="text-white">Mediana</strong>: 7.85</li>
                        <li><strong className="text-white">Moda</strong>: Não há moda (todos os valores são únicos)</li>
                        <li><strong className="text-white">Amplitude</strong>: 3.0 (9.5 - 6.5)</li>
                        <li><strong className="text-white">Desvio Padrão</strong>: ≈ 0.94</li>
                    </ul>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Conclusão</h2>

                    <p className="mb-4 text-lg">
                        A estatística descritiva é uma ferramenta fundamental para qualquer análise de dados.
                        Ela nos permite entender rapidamente as características principais de um conjunto de dados
                        e identificar padrões importantes. Dominar esses conceitos é essencial para avançar em
                        estudos mais complexos de estatística e análise de dados.
                    </p>

                    <p className="text-lg">
                        No próximo artigo, exploraremos a estatística inferencial e como fazer generalizações a
                        partir de amostras.
                    </p>
                </motion.article>
            </div>
        </div>
    );
};

export default Activity01;