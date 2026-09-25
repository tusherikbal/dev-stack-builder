import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainSection = () => {
    const [techs, setTechs] = useState([]);
    const [selectedTechs, setSelectedTechs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



    const handleAdd = (tech) => {
        const isExist = selectedTechs.find(item => item.id === tech.id);
        
        if (!isExist) {
            setSelectedTechs([...selectedTechs, tech]);
            toast.success(`${tech.name} added to your stack!`, { position: "bottom-right" });
        } else {
            toast.error(`${tech.name} is already in your stack!`, { position: "bottom-right" });
        }
    };

    const handleRemove = (tech) => {
        const remainingTechs = selectedTechs.filter(item => item.id !== tech.id);
        setSelectedTechs(remainingTechs);
        toast.info(`${tech.name} removed from your stack.`, { position: "bottom-right" });
    };

    const handleRemoveAll = () => {
        setSelectedTechs([]);
        toast.warn("All technologies removed from your stack.", { position: "bottom-right" });
    };

    return (
        <div className="px-4 md:px-8 mt-16 mb-20 relative">
            {/* React Toastify Container */}
            <ToastContainer />

            <div className="mb-10 text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900">
                    Explore the <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">Technologies</span>
                </h2>
                <p className="text-gray-500 text-lg">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                
                {/* Technology Cards Grid */}
                <div className="w-full lg:w-3/4">
                    {/* Loading State Spinner */}
                    {isLoading ? (
                        <div className="flex justify-center items-center h-64">
                            <span className="loading loading-spinner loading-lg text-pink-500"></span>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {techs.map((tech) => {
                                const isAdded = selectedTechs.find(item => item.id === tech.id);
                                
                                return (
                                    <div key={tech.id} className="border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition bg-white flex flex-col">
                                        <div className="flex justify-between items-start mb-6">
                                            <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
                                            <span className="bg-blue-50 text-blue-500 px-3 py-1 rounded-full text-xs font-medium">
                                                {tech.badge}
                                            </span>
                                        </div>
                                        
                                        <h3 className="text-xl font-bold mb-2 text-gray-800">{tech.name}</h3>
                                        <p className="text-gray-500 text-sm mb-6 flex-grow">{tech.description}</p>
                                        
                                        <div className="flex justify-between text-xs text-gray-500 mb-6 font-medium">
                                            <span className="bg-gray-50 px-2 py-1 rounded">{tech.category}</span>
                                            <span className="bg-gray-50 px-2 py-1 rounded">{tech.difficulty}</span>
                                            <span className="font-bold flex items-center gap-1">
                                                <span className="text-yellow-400">★</span> {tech.rating}
                                            </span>
                                        </div>
                                        
                                        <button 
                                            onClick={() => handleAdd(tech)}
                                            disabled={isAdded}
                                            className={`w-full font-medium py-3 rounded-xl transition active:scale-95 text-white 
                                                ${isAdded ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#111827] hover:bg-black'}`}
                                        >
                                            {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* Your Stack Sidebar */}
                <div className="w-full lg:w-1/4">
                    <div className="border border-gray-100 p-6 rounded-2xl shadow-sm bg-white sticky top-24">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-xl font-bold text-gray-800">Your Stack</h3>
                            {selectedTechs.length > 0 && (
                                <button onClick={handleRemoveAll} className="text-xs text-red-500 hover:underline font-medium">
                                    Remove All
                                </button>
                            )}
                        </div>
                        <p className="text-gray-400 text-sm mb-6">
                            {selectedTechs.length > 0 ? `${selectedTechs.length} Technology Selected` : "No technologies selected yet."}
                        </p>
                        
                        {selectedTechs.length === 0 ? (
                            <div className="border-2 border-dashed border-gray-200 p-8 text-center rounded-xl text-gray-400 text-sm bg-gray-50/50">
                                Your stack is empty.
                            </div>
                        ) : (
                            <div className="flex flex-col gap-3">
                                {selectedTechs.map(tech => (
                                    <div key={tech.id} className="flex justify-between items-center bg-gray-50 p-3 rounded-xl border border-gray-100">
                                        <div className="flex items-center gap-3">
                                            <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
                                            <div>
                                                <div className="font-semibold text-sm text-gray-700">{tech.name}</div>
                                                <div className="text-xs text-gray-400">{tech.category}</div>
                                            </div>
                                        </div>
                                        <button 
                                            onClick={() => handleRemove(tech)} 
                                            className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition"
                                            title="Remove"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default MainSection;