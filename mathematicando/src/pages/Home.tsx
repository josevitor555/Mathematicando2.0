// Shadcn UI
import { Button } from "@/components/ui/button";

// Importando o novo componente
import { ArticleAuthor } from "@/components/ArticleAuthor";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHexagon, faAward, faTrophy, faFilter, faUser } from "@fortawesome/free-solid-svg-icons";

// Data Content
import { modulos } from "@/data/contentMock";

// Framer Motion
import { motion } from "framer-motion";

const Home = () => {
    return (
        <div className="min-h-screen bg-accent-foreground p-4 md:p-6">
            <div className="max-w-6xl mx-auto mb-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-between mb-6 py-8"
                >
                    <div>
                        <h1 className="text-4xl md:text-3xl font-bold text-white mb-0 font-rounded">
                            Matematicando
                        </h1>
                        <p className="text-lg text-white/60 font-medium"> Escolha sua próxima de aprendizagem! </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="bg-gray-200/20 rounded-full px-6 py-3">
                            <div className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faTrophy} className='w-5 h-5 text-[#fafafa]' />
                                <span className="font-bold text-[#fafafa]">
                                    1,250 XP
                                </span>
                            </div>
                        </div>

                        <div className="bg-gray-200/20 rounded-full px-6 py-3">
                            <div className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faAward} className='w-5 h-5 text-[#fafafa]' />
                                <span className="font-bold text-[#fafafa]">
                                    Level 8
                                </span>
                            </div>
                        </div>
                    </div>

                </motion.div>

                {/* Mascot Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-gray-200/10 rounded-2xl overflow-hidden p-6 mb-8"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-macaw-200 rounded-full flex items-center justify-center">
                            <FontAwesomeIcon icon={faHexagon} className='w-8 h-8 text-[#fafafa]' />
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-[#fafafa] mb-0">
                                HexAI
                            </h3>

                            <p className="text-[#fafafa]">
                                Conheça HexAI, seu assistente virtual de matemática!
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Content Topics */}
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <div className='bg-transparent flex items-center justify-end px-0 py-2 rounded-2xl mb-8'>
                            <div className='bg-gray-200/10 cursor-pointer px-6 py-2 flex items-center rounded-full'>
                                <span className='text-lg font-light text-gray-100'> Filtro por topico </span>
                                <FontAwesomeIcon icon={faFilter} className="w-8 h-8 ml-2 text-gray-100" />
                            </div>
                        </div>

                        {/* Modules */}
                        {modulos.map((modulo, moduloIndex) =>
                            <motion.div
                                key={modulo.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * moduloIndex }}
                                className="grid space-y-4"
                            >

                                {/* Module Title */}
                                <h2 className="text-2xl font-bold text-white mb-4">
                                    {modulo.titulo}
                                </h2>

                                {/* Articles Classroom Grid */}
                                <div className="max-auto">
                                    {modulo.artigos.map((artigo, artigoIndex) => (
                                        <motion.div
                                            key={artigo.id}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: 0.1 * artigoIndex }}
                                        >
                                            <div className="grid grid-cols-[300px_auto_auto] bg-gray-200/10 mb-6 rounded-2xl px-6 py-4 items-center transition-all duration-300 hover:bg-gray-200/20 hover:shadow-lg">
                                                <div className="flex flex-col items-start">
                                                    <h3 className="text-xl font-bold text-white mb-0">
                                                        {artigo.titulo}
                                                    </h3>
                                                    <p className="text-lg text-gray-100 mt-2"> {artigo.nivel} </p>
                                                </div>

                                                <div className="flex items-center justify-center">
                                                    <h3 className="bg-gray-200/20 text-small font-bold rounded-lg text-white mb-0 px-4 py-2">{artigo.progresso}</h3>
                                                </div>

                                                <div className="flex items-center justify-end">
                                                    <Button className="cursor-pointer"> Acessar Atividade </Button>
                                                </div>

                                                {/* Divider */}
                                                <div className="col-span-3 mt-4">
                                                    <div className="w-full h-px bg-gray-200/20" />
                                                </div>

                                                {/* Who wrote the article */}
                                                <div className="col-span-3 mt-4 flex justify-start">
                                                    <ArticleAuthor autor={artigo.autor} />
                                                </div>
                                                
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                            </motion.div>
                        )}

                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Home;