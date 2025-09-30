import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faGlobe, faHashtag, faLink } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { InlineMath, BlockMath } from 'react-katex';

// Dados do autor (exemplo)
const authorData = {
    name: "Pedro Almeida",
    degree: "Mestre em Geometria Computacional, Licenciado em Matemática pela UFC",
    avatarUrl: "https://i.pravatar.cc/150?img=6",
    postDate: "30 de Setembro de 2025",
    socialLinks: {
        website: "https://pedroalmeida.com",
        twitter: "@pedroalmeida_geom",
        linkedin: "linkedin.com/in/pedroalmeida",
        github: "github.com/pedroalmeida"
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
                    className="p-6 mb-8 text-gray-100"
                >
                    <header className="mb-8">
                        <h1 className="mb-4 text-4xl font-extrabold leading-tight text-white lg:mb-6 lg:text-4xl">
                            Geometria Plana: Fundamentos e Aplicações
                        </h1>
                    </header>

                    <p className="lead mb-4 text-lg">
                        A geometria plana é o ramo da matemática que estuda as propriedades e relações entre figuras
                        geométricas em um plano bidimensional. É uma das bases fundamentais da matemática e possui
                        inúmeras aplicações práticas. Neste artigo, exploraremos os conceitos essenciais da geometria plana.
                    </p>

                    <p className="mb-4 text-lg">
                        A geometria plana trabalha com figuras que possuem apenas duas dimensões: comprimento e largura.
                        Seus elementos básicos são o ponto, a reta e o plano.
                    </p>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Elementos Fundamentais</h2>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Ponto</h3>

                    <p className="mb-4 text-lg">
                        O ponto é o elemento mais básico da geometria. Não possui dimensão e é representado por uma letra maiúscula.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Reta</h3>

                    <p className="mb-4 text-lg">
                        A reta é formada por infinitos pontos alinhados. É ilimitada nos dois sentidos e representada por uma letra minúscula.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Plano</h3>

                    <p className="mb-4 text-lg">
                        O plano é uma superfície plana e ilimitada em todas as direções. É representado por uma letra grega minúscula.
                    </p>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Ângulos</h2>

                    <p className="mb-4 text-lg">
                        Ângulo é a abertura formada por duas semirretas de mesma origem.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Classificação dos Ângulos</h3>

                    <ul className="list-disc list-inside mb-4 space-y-2 text-lg">
                        <li><strong className="text-white">Ângulo nulo</strong>: 0°</li>
                        <li><strong className="text-white">Ângulo agudo</strong>: <InlineMath math="0° < \alpha < 90°" /></li>
                        <li><strong className="text-white">Ângulo reto</strong>: <InlineMath math="\alpha = 90°" /></li>
                        <li><strong className="text-white">Ângulo obtuso</strong>: <InlineMath math="90° < \alpha < 180°" /></li>
                        <li><strong className="text-white">Ângulo raso</strong>: <InlineMath math="\alpha = 180°" /></li>
                        <li><strong className="text-white">Ângulo completo</strong>: <InlineMath math="\alpha = 360°" /></li>
                    </ul>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Ângulos Notáveis</h3>

                    <ul className="list-disc list-inside mb-4 space-y-2 text-lg">
                        <li><strong className="text-white">Ângulos complementares</strong>: <InlineMath math="\alpha + \beta = 90°" /></li>
                        <li><strong className="text-white">Ângulos suplementares</strong>: <InlineMath math="\alpha + \beta = 180°" /></li>
                        <li><strong className="text-white">Ângulos opostos pelo vértice</strong>: São congruentes</li>
                    </ul>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Polígonos</h2>

                    <p className="mb-4 text-lg">
                        Polígono é uma figura plana fechada formada por segmentos de reta. Os polígonos são classificados
                        pelo número de lados:
                    </p>

                    <table className="min-w-full border-collapse mb-4 text-lg">
                        <thead>
                            <tr className="bg-gray-200/20">
                                <th className="border border-gray-200/10 px-4 py-2 text-left">Número de lados</th>
                                <th className="border border-gray-200/10 px-4 py-2 text-left">Nome</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-200/10 px-4 py-2">3</td>
                                <td className="border border-gray-200/10 px-4 py-2">Triângulo</td>
                            </tr>
                            <tr className="bg-gray-200/10">
                                <td className="border border-gray-200/10 px-4 py-2">4</td>
                                <td className="border border-gray-200/10 px-4 py-2">Quadrilátero</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-200/10 px-4 py-2">5</td>
                                <td className="border border-gray-200/10 px-4 py-2">Pentágono</td>
                            </tr>
                            <tr className="bg-gray-200/10">
                                <td className="border border-gray-200/10 px-4 py-2">6</td>
                                <td className="border border-gray-200/10 px-4 py-2">Hexágono</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-200/10 px-4 py-2">8</td>
                                <td className="border border-gray-200/10 px-4 py-2">Octógono</td>
                            </tr>
                            <tr className="bg-gray-200/10">
                                <td className="border border-gray-200/10 px-4 py-2">n</td>
                                <td className="border border-gray-200/10 px-4 py-2">Polígono de n lados</td>
                            </tr>
                        </tbody>
                    </table>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Triângulos</h2>

                    <p className="mb-4 text-lg">
                        O triângulo é o polígono com menor número de lados e é uma das figuras mais importantes da geometria.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Classificação pelos lados</h3>

                    <ul className="list-disc list-inside mb-4 space-y-2 text-lg">
                        <li><strong className="text-white">Equilátero</strong>: Todos os lados iguais</li>
                        <li><strong className="text-white">Isósceles</strong>: Dois lados iguais</li>
                        <li><strong className="text-white">Escaleno</strong>: Todos os lados diferentes</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Classificação pelos ângulos</h3>

                    <ul className="list-disc list-inside mb-4 space-y-2 text-lg">
                        <li><strong className="text-white">Acutângulo</strong>: Todos os ângulos agudos</li>
                        <li><strong className="text-white">Retângulo</strong>: Um ângulo reto</li>
                        <li><strong className="text-white">Obtusângulo</strong>: Um ângulo obtuso</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Soma dos ângulos internos</h3>

                    <p className="mb-4 text-lg">
                        A soma dos ângulos internos de qualquer triângulo é sempre 180°.
                    </p>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Quadriláteros</h2>

                    <p className="mb-4 text-lg">
                        Quadriláteros são polígonos de quatro lados. Os principais tipos são:
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Paralelogramos</h3>

                    <ul className="list-disc list-inside mb-4 space-y-2 text-lg">
                        <li><strong className="text-white">Retângulo</strong>: Quatro ângulos retos</li>
                        <li><strong className="text-white">Losango</strong>: Quatro lados iguais</li>
                        <li><strong className="text-white">Quadrado</strong>: Quatro lados iguais e quatro ângulos retos</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Trapézios</h3>

                    <ul className="list-disc list-inside mb-4 space-y-2 text-lg">
                        <li><strong className="text-white">Trapézio retângulo</strong>: Tem dois ângulos retos</li>
                        <li><strong className="text-white">Trapézio isósceles</strong>: Os lados não paralelos são iguais</li>
                        <li><strong className="text-white">Trapézio escaleno</strong>: Todos os lados são diferentes</li>
                    </ul>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Circunferência e Círculo</h2>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Circunferência</h3>

                    <p className="mb-4 text-lg">
                        É o conjunto de todos os pontos de um plano que estão à mesma distância de um ponto fixo chamado centro.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Círculo</h3>

                    <p className="mb-4 text-lg">
                        É a região do plano limitada por uma circunferência.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Elementos</h3>

                    <ul className="list-disc list-inside mb-4 space-y-2 text-lg">
                        <li><strong className="text-white">Raio (r)</strong>: Distância do centro a qualquer ponto da circunferência</li>
                        <li><strong className="text-white">Diâmetro (d)</strong>: Corda que passa pelo centro (d = 2r)</li>
                        <li><strong className="text-white">Corda</strong>: Segmento que une dois pontos da circunferência</li>
                        <li><strong className="text-white">Arco</strong>: Parte da circunferência entre dois pontos</li>
                    </ul>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Perímetros e Áreas</h2>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Triângulo</h3>

                    <div className="bg-gray-200/10 text-gray-200 p-4 rounded-lg overflow-x-auto mb-4 text-lg">
                        <BlockMath math="\text{Perímetro} = a + b + c" />
                        <BlockMath math="\text{Área} = \frac{\text{base} \times \text{altura}}{2}" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Retângulo</h3>

                    <div className="bg-gray-200/10 text-gray-200 p-4 rounded-lg overflow-x-auto mb-4 text-lg">
                        <BlockMath math="\text{Perímetro} = 2(b + h)" />
                        <BlockMath math="\text{Área} = \text{base} \times \text{altura}" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Círculo</h3>

                    <div className="bg-gray-200/10 text-gray-200 p-4 rounded-lg overflow-x-auto mb-4 text-lg">
                        <BlockMath math="\text{Comprimento} = 2\pi r" />
                        <BlockMath math="\text{Área} = \pi r^2" />
                    </div>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Teoremas Importantes</h2>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Teorema de Pitágoras</h3>

                    <p className="mb-4 text-lg">
                        Em um triângulo retângulo, o quadrado da hipotenusa é igual à soma dos quadrados dos catetos:
                    </p>

                    <div className="bg-gray-200/10 text-gray-200 p-4 rounded-lg overflow-x-auto mb-4 text-lg">
                        <BlockMath math="a^2 = b^2 + c^2" />
                        <p>Onde:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>a é a hipotenusa</li>
                            <li>b e c são os catetos</li>
                        </ul>
                    </div>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Teorema de Tales</h3>

                    <p className="mb-4 text-lg">
                        Se duas retas paralelas são cortadas por um feixe de retas concorrentes, então os segmentos
                        determinados nas paralelas são proporcionais.
                    </p>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Aplicações Práticas</h2>

                    <p className="mb-4 text-lg">
                        A geometria plana tem inúmeras aplicações no cotidiano:
                    </p>

                    <ul className="list-disc list-inside mb-4 space-y-2 text-lg">
                        <li><strong className="text-white">Arquitetura</strong>: Cálculo de áreas e volumes em projetos</li>
                        <li><strong className="text-white">Engenharia</strong>: Dimensionamento de estruturas</li>
                        <li><strong className="text-white">Artes</strong>: Criação de composições visuais equilibradas</li>
                        <li><strong className="text-white">Navegação</strong>: Cálculo de distâncias e rotas</li>
                        <li><strong className="text-white">Design</strong>: Criação de layouts e interfaces</li>
                    </ul>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Conclusão</h2>

                    <p className="mb-4 text-lg">
                        A geometria plana é uma área fundamental da matemática com aplicações em praticamente todos
                        os campos do conhecimento. Dominar seus conceitos é essencial para compreender fenômenos
                        geométricos e resolver problemas práticos.
                    </p>

                    <p className="text-lg">
                        No próximo artigo, exploraremos a geometria espacial e suas propriedades tridimensionais.
                    </p>
                </motion.article>
            </div>
        </div>
    );
};

export default Activity01;