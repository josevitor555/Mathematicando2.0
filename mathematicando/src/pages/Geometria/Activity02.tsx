import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faGlobe, faHashtag, faLink } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { InlineMath, BlockMath } from 'react-katex';

// Dados do autor (exemplo)
const authorData = {
    name: "Juliana Martins",
    degree: "Doutora em Topologia, Mestre em Geometria Diferencial pela UFRGS",
    avatarUrl: "https://i.pravatar.cc/150?img=7",
    postDate: "1 de Outubro de 2025",
    socialLinks: {
        website: "https://julianamartins.com",
        twitter: "@julianamartins_geom",
        linkedin: "linkedin.com/in/julianamartins",
        github: "github.com/julianamartins"
    }
};

const Activity02 = () => {
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
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="p-6 mb-8"
                >
                    <h1 className="text-3xl font-extrabold leading-tight text-white mb-6">
                        Geometria Espacial: Explorando o Mundo Tridimensional
                    </h1>

                    <p className="text-lg text-gray-100 mb-6 leading-relaxed">
                        A Geometria Espacial é o ramo da matemática que estuda as figuras e formas no espaço tridimensional.
                        Diferente da Geometria Plana, que trabalha com figuras bidimensionais, a Geometria Espacial lida com
                        objetos que possuem comprimento, largura e altura. Este campo da matemática é fundamental para diversas
                        áreas como arquitetura, engenharia, design e até mesmo na compreensão do universo ao nosso redor.
                    </p>

                    <h2 className="text-2xl font-bold text-white mb-4 mt-8">Conceitos Fundamentais</h2>

                    <p className="text-lg text-gray-100 mb-4 leading-relaxed">
                        Na Geometria Espacial, trabalhamos com três dimensões: comprimento (x), largura (y) e altura (z).
                        Os principais elementos estudados são:
                    </p>

                    <ul className="list-disc pl-8 text-lg text-gray-100 mb-6 space-y-2">
                        <li><strong>Ponto:</strong> Elemento adimensional que representa uma posição no espaço</li>
                        <li><strong>Reta:</strong> Conjunto infinito de pontos que se estendem em duas direções</li>
                        <li><strong>Plano:</strong> Superfície plana que se estende infinitamente em todas as direções</li>
                        <li><strong>Sólidos Geométricos:</strong> Figuras tridimensionais limitadas por superfícies planas ou curvas</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mb-4 mt-8">Sólidos Geométricos Principais</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                        <div className="bg-gray-200/10 p-4 rounded-xl">
                            <h3 className="text-xl font-bold text-white mb-2">Poliedros</h3>
                            <p className="text-gray-100 mb-3">
                                São sólidos limitados por superfícies planas (faces), como o cubo, paralelepípedo e pirâmides.
                                Os poliedros são classificados em regulares e irregulares.
                            </p>
                            <div className="text-gray-200 text-sm">
                                <p>Fórmula de Euler: <InlineMath math="V - A + F = 2" /></p>
                                <p>Onde: V = vértices, A = arestas, F = faces</p>
                            </div>
                        </div>

                        <div className="bg-gray-200/10 p-4 rounded-xl">
                            <h3 className="text-xl font-bold text-white mb-2">Corpos Redondos</h3>
                            <p className="text-gray-100 mb-3">
                                São sólidos limitados por superfícies curvas, como cilindros, cones e esferas.
                                Estes sólidos possuem propriedades especiais de simetria e são amplamente utilizados
                                em cálculos de volume e área.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-4 mt-8">Cálculo de Volume e Área</h2>

                    <p className="text-lg text-gray-100 mb-4 leading-relaxed">
                        Um dos aspectos mais importantes da Geometria Espacial é o cálculo de volume e área superficial dos sólidos.
                        Aqui estão as principais fórmulas:
                    </p>

                    <div className="overflow-x-auto my-6">
                        <table className="min-w-full bg-gray-200/10 rounded-lg overflow-hidden">
                            <thead>
                                <tr className="bg-gray-200/10">
                                    <th className="py-3 px-4 text-left text-white font-bold">Sólido</th>
                                    <th className="py-3 px-4 text-left text-white font-bold">Volume</th>
                                    <th className="py-3 px-4 text-left text-white font-bold">Área Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-200/10">
                                    <td className="py-3 px-4 text-gray-100">Cubo (aresta = a)</td>
                                    <td className="py-3 px-4 text-gray-100"><InlineMath math="a^3" /></td>
                                    <td className="py-3 px-4 text-gray-100"><InlineMath math="6a^2" /></td>
                                </tr>
                                <tr className="border-b border-gray-200/10">
                                    <td className="py-3 px-4 text-gray-100">Paralelepípedo</td>
                                    <td className="py-3 px-4 text-gray-100"><InlineMath math="a \times b \times c" /></td>
                                    <td className="py-3 px-4 text-gray-100"><InlineMath math="2(ab + ac + bc)" /></td>
                                </tr>
                                <tr className="border-b border-gray-200/10">
                                    <td className="py-3 px-4 text-gray-100">Cilindro (raio = r, altura = h)</td>
                                    <td className="py-3 px-4 text-gray-100"><InlineMath math="\pi r^2 h" /></td>
                                    <td className="py-3 px-4 text-gray-100"><InlineMath math="2\pi r(h + r)" /></td>
                                </tr>
                                <tr className="border-b border-gray-200/10">
                                    <td className="py-3 px-4 text-gray-100">Esfera (raio = r)</td>
                                    <td className="py-3 px-4 text-gray-100"><InlineMath math="\frac{4}{3}\pi r^3" /></td>
                                    <td className="py-3 px-4 text-gray-100"><InlineMath math="4\pi r^2" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-4 mt-8">Aplicações Práticas</h2>

                    <p className="text-lg text-gray-100 mb-4 leading-relaxed">
                        A Geometria Espacial tem inúmeras aplicações no mundo real:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                        <div className="bg-gray-200/10 p-4 rounded-lg border border-gray-200/10">
                            <h3 className="font-bold text-white mb-2">Arquitetura</h3>
                            <p className="text-gray-100 text-sm">
                                Cálculo de volumes em projetos de construção e análise de estruturas tridimensionais.
                            </p>
                        </div>
                        <div className="bg-gray-200/10 p-4 rounded-lg border border-gray-200/10">
                            <h3 className="font-bold text-white mb-2">Engenharia</h3>
                            <p className="text-gray-100 text-sm">
                                Desenvolvimento de peças mecânicas e análise de resistência de materiais.
                            </p>
                        </div>
                        <div className="bg-gray-200/10 p-4 rounded-lg border border-gray-200/10">
                            <h3 className="font-bold text-white mb-2">Design</h3>
                            <p className="text-gray-100 text-sm">
                                Criação de objetos tridimensionais e embalagens otimizadas.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 p-4 bg-gray-200/10 border border-gray-200/10 rounded-lg">
                        <h3 className="text-xl font-bold text-white mb-2">Dica de Estudo</h3>
                        <p className="text-gray-100">
                            Para dominar a Geometria Espacial, pratique visualizar mentalmente os sólidos e suas transformações.
                            Utilize modelos físicos ou softwares de visualização 3D para entender melhor as relações espaciais.
                            Comece com formas simples como cubos e cilindros antes de avançar para formas mais complexas.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Activity02;