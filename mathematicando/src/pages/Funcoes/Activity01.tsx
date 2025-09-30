import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faGlobe, faHashtag, faLink } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { InlineMath, BlockMath } from 'react-katex';

// Dados do autor (exemplo)
const authorData = {
    name: "George Lucas",
    degree: "Doutor em Matemática pela USP, Mestre em Educação Matemática pela UNICAMP",
    avatarUrl: "https://i.pravatar.cc/150?img=1",
    postDate: "25 de Setembro de 2025",
    socialLinks: {
        website: "https://georgelucas.com",
        twitter: "@georgelucas_math",
        linkedin: "linkedin.com/in/georgelucas",
        github: "github.com/georgelucas"
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
                            Funções Afins: Conceitos e Aplicações
                        </h1>
                    </header>

                    <p className="lead mb-4 text-lg">
                        As funções afins são um dos conceitos fundamentais da matemática, com aplicações em diversas áreas
                        do conhecimento. Neste artigo, vamos explorar suas propriedades, representações gráficas e aplicações práticas.
                    </p>

                    <p className="mb-4 text-lg">
                        Uma função afim é uma função polinomial de grau no máximo um, que pode ser escrita na forma:
                    </p>

                    <div className="bg-gray-200/10 rounded-lg text-gray-200 p-4 overflow-x-auto mb-4 text-lg">
                        <BlockMath math="f(x) = ax + b" />
                        <p>Onde:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>a e b são números reais chamados coeficientes</li>
                            <li>a é o coeficiente angular</li>
                            <li>b é o coeficiente linear</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Características das Funções Afins</h2>

                    <p className="mb-4 text-lg">
                        As funções afins possuem várias propriedades importantes:
                    </p>

                    <ul className="list-disc list-inside mb-4 space-y-2 text-lg">
                        <li><strong className="text-white">Domínio e contradomínio</strong>: <InlineMath math="\mathbb{R}" /> (números reais)</li>
                        <li><strong className="text-white">Gráfico</strong>: Uma reta não vertical</li>
                        <li><strong className="text-white">Crescimento/Decrescimento</strong>: Determinado pelo sinal do coeficiente angular</li>
                        <li><strong className="text-white">Continuidade</strong>: São funções contínuas em todo o seu domínio</li>
                    </ul>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Coeficiente Angular (a)</h2>

                    <p className="mb-4 text-lg">
                        O coeficiente angular determina a inclinação da reta:
                    </p>

                    <ul className="list-disc list-inside mb-4 space-y-2 text-lg">
                        <li>Se <strong className="text-white">a <InlineMath math=" > 0" /></strong>, a função é crescente</li>
                        <li>Se <strong className="text-white">a <InlineMath math=" < 0" /></strong>, a função é decrescente</li>
                        <li>Se <strong className="text-white">a = 0</strong>, a função é constante</li>
                    </ul>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Coeficiente Linear (b)</h2>

                    <p className="mb-4 text-lg">
                        O coeficiente linear indica o ponto onde a reta intersecta o eixo y (ordenada do ponto onde x = 0).
                    </p>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Gráfico de uma Função Afim</h2>

                    <p className="mb-4 text-lg">
                        Para construir o gráfico de uma função afim, basta encontrar dois pontos e traçar a reta que os contém:
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Exemplo</h3>

                    <p className="mb-4 text-lg">
                        Vamos construir o gráfico da função f(x) = 2x + 3:
                    </p>

                    <ol className="list-decimal list-inside mb-4 space-y-2 text-lg">
                        <li>Encontrar dois pontos:
                            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                                <li>Para x = 0: f(0) = 2(0) + 3 = 3 → Ponto <InlineMath math="(0, 3)" /></li>
                                <li>Para x = 1: f(1) = 2(1) + 3 = 5 → Ponto <InlineMath math="(1, 5)" /></li>
                            </ul>
                        </li>
                        <li>Plotar os pontos no plano cartesiano</li>
                        <li>Traçar a reta que passa por esses pontos</li>
                    </ol>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Aplicações Práticas</h2>

                    <p className="mb-4 text-lg">
                        As funções afins aparecem em diversas situações do cotidiano:
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Tarifas de Serviços</h3>

                    <p className="mb-4 text-lg">
                        Muitas tarifas seguem o modelo de função afim. Por exemplo, uma empresa de táxi que cobra:
                    </p>

                    <div className="bg-gray-200/10 text-gray-200 p-4 rounded-lg overflow-x-auto mb-4 text-lg">
                        <BlockMath math="\text{Valor da corrida} = 5 + 2{,}5 \times \text{distância (em km)}" />
                        <p>Onde:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>5 é a bandeirada (coeficiente linear)</li>
                            <li>2,5 é o custo por km (coeficiente angular)</li>
                        </ul>
                    </div>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Conversão de Unidades</h3>

                    <p className="mb-4 text-lg">
                        A conversão entre escalas de temperatura segue uma função afim:
                    </p>

                    <div className="bg-gray-200/10 text-gray-200 p-4 rounded-lg overflow-x-auto mb-4 text-lg">
                        <BlockMath math="{}^\circ F = 1{,}8 \times {}^\circ C + 32" />
                        <p>Onde:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>1,8 é o coeficiente angular</li>
                            <li>32 é o coeficiente linear</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Zero da Função Afim</h2>

                    <p className="mb-4 text-lg">
                        O zero da função afim é o valor de x para o qual f(x) = 0. Ele pode ser encontrado resolvendo a equação:
                    </p>

                    <div className="bg-gray-200/10 text-gray-200 p-4 rounded-lg overflow-x-auto mb-4 text-lg">
                        <BlockMath math="ax + b = 0" />
                        <BlockMath math="x = -\frac{b}{a} \quad (\text{quando } a \neq 0)" />
                    </div>

                    <p className="mb-4 text-lg">
                        Geometricamente, o zero da função é o ponto onde a reta intersecta o eixo x.
                    </p>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Sinal da Função Afim</h2>

                    <p className="mb-4 text-lg">
                        O sinal da função afim depende do coeficiente angular:
                    </p>

                    <ul className="list-disc list-inside mb-4 space-y-2 text-lg">
                        <li>Se <strong className="text-white">a <InlineMath math=" > 0" /></strong> (função crescente):
                            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                                <li>f(x) <InlineMath math=" < 0" /> para x <InlineMath math=" < -\frac{b}{a}" /></li>
                                <li>f(x) = 0 para x = <InlineMath math=" -\frac{b}{a}" /></li>
                                <li>f(x) <InlineMath math=" > 0" /> para x <InlineMath math=" > -\frac{b}{a}" /></li>
                            </ul>
                        </li>
                        <li>Se <strong className="text-white">a <InlineMath math=" < 0" /></strong> (função decrescente):
                            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                                <li>f(x) <InlineMath math=" > 0" /> para x <InlineMath math=" < -\frac{b}{a}" /></li>
                                <li>f(x) = 0 para x = <InlineMath math=" -\frac{b}{a}" /></li>
                                <li>f(x) <InlineMath math=" < 0" /> para x <InlineMath math=" > -\frac{b}{a}" /></li>
                            </ul>
                        </li>
                    </ul>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Conclusão</h2>

                    <p className="mb-4 text-lg">
                        As funções afins são ferramentas matemáticas poderosas e versáteis, presentes em diversas áreas da ciência
                        e do cotidiano. Compreender suas propriedades e aplicações é fundamental para avançar em estudos mais
                        complexos de matemática e suas aplicações.
                    </p>

                    <p className="text-lg">
                        No próximo artigo, exploraremos as funções quadráticas e suas particularidades.
                    </p>
                </motion.article>
            </div>
        </div>
    );
};

export default Activity01;