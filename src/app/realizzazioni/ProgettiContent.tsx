"use client";

import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Navbar from '../components/navbar';
import SwiperHero from '../components/SwiperHero';
import PreFooter from '../components/prefooter';

// Types
interface Project {
    id: number;
    image: string;
    title: string;
    description: string;
    detailedDescription: string;
}

interface OptimizedImageProps {
    src: string;
    alt: string;
    className?: string;
    onLoad?: () => void;
}

interface ThumbnailGridProps {
    projects: Project[];
    currentSlide: number;
    categoryName: 'Quadristica' | 'Fotovoltaico' | 'Illuminazione';
    setCurrentSlides: React.Dispatch<React.SetStateAction<{
        'Quadristica': number;
        'Fotovoltaico': number;
        'Illuminazione': number;
    }>>;
}

// Componente ottimizzato per le immagini con lazy loading e placeholder
const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, alt, className = "", onLoad, ...props }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleLoad = () => {
        setIsLoaded(true);
        if (onLoad) onLoad();
    };

    const handleError = () => {
        setHasError(true);
    };

    return (
        <div className={`relative ${className}`}>
            {/* Placeholder durante il caricamento */}
            {!isLoaded && !hasError && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                    <div className="w-8 h-8 border-4 border-gray-300 border-t-[#E20613] rounded-full animate-spin"></div>
                </div>
            )}
            
            <img
                src={src}
                alt={alt}
                loading="lazy" // Lazy loading nativo del browser
                decoding="async" // Decodifica asincrona per performance
                onLoad={handleLoad}
                onError={handleError}
                className={`transition-opacity duration-500 ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                } w-full h-full object-cover`}
                {...props}
            />
            
            {/* Fallback per errori di caricamento */}
            {hasError && (
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Immagine non disponibile</span>
                </div>
            )}
        </div>
    );
};

// Hook per il precaricamento di TUTTE le immagini delle categorie visibili
const useImagePreloader = (imagesToPreload: string[]) => {
    useEffect(() => {
        if (imagesToPreload.length === 0) return;
        
        const preloadPromises = imagesToPreload.map((imageSrc: string) => {
            return new Promise<void>((resolve) => {
                const img = new Image();
                img.onload = () => resolve();
                img.onerror = () => resolve(); // Risolvi anche in caso di errore per non bloccare
                img.src = imageSrc;
            });
        });

        Promise.all(preloadPromises);
    }, [imagesToPreload]);
};

// Componente per le thumbnail ottimizzate - SEMPRE PRE-CARICATE
const ThumbnailGrid: React.FC<ThumbnailGridProps> = ({ projects, currentSlide, categoryName, setCurrentSlides }) => {
    return (
        <div className="flex gap-4 mt-6 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300">
            {projects.map((project, index) => {
                const isActive = currentSlide === index;
                
                return (
                    <button
                        key={project.id}
                        onClick={() => setCurrentSlides(prev => ({ ...prev, [categoryName]: index }))}
                        className={`flex-shrink-0 w-28 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                            isActive
                                ? 'border-[#E20613] scale-105 shadow-lg'
                                : 'border-gray-300 hover:border-[#164194] opacity-70 hover:opacity-100 hover:scale-102'
                        }`}
                    >
                        {/* Tutte le thumbnail vengono sempre caricate */}
                        <OptimizedImage
                            src={project.image}
                            alt={project.title || `Thumbnail progetto ${index + 1}`}
                            className="w-full h-full"
                        />
                    </button>
                );
            })}
        </div>
    );
};

export default function ProgettiContent() {
    const searchParams = useSearchParams();
    const sectionRefs = useRef<{[key: string]: HTMLDivElement | null}>({});
    
    const [currentSlides, setCurrentSlides] = useState({
        'Quadristica': 0,
        'Fotovoltaico': 0,
        'Illuminazione': 0
    });

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // Definizione delle categories
    const categories = {
        'Quadristica': [
            {
                id: 5,
                image: "./QUADRI/image00015.jpeg",
                title: "Quadro Elettrico Industriale",
                description: "Installazione quadro elettrico per impianto industriale",
                detailedDescription: "Progettazione e installazione di quadro elettrico per impianto industriale con protezioni differenziali e sistemi di controllo avanzati."
            },
            {
                id: 6,
                image: "./QUADRI/image00017.jpeg",
                title: "Sistema di Controllo Automatico",
                description: "Quadro di controllo con automazione PLC",
                detailedDescription: "Implementazione di sistema di controllo automatico con PLC per ottimizzazione dei processi produttivi."
            },
            {
                id: 7,
                image: "./QUADRI/image00018.jpeg",
                title: "Quadro di Distribuzione",
                description: "Quadro di distribuzione principale",
                detailedDescription: "Installazione di quadro di distribuzione principale con sistemi di monitoraggio e protezione integrati."
            },
            {
                id: 8,
                image: "./QUADRI/image00039.jpeg",
                title: "Impianto Elettrico Commerciale",
                description: "Quadristica per edificio commerciale",
                detailedDescription: "Progettazione completa della quadristica per edificio commerciale con sistemi di emergenza e backup."
            },
            {
                id: 9,
                image: "./QUADRI/image00047.jpeg",
                title: "Sistema di Protezione",
                description: "Quadro con protezioni avanzate",
                detailedDescription: "Installazione di quadro elettrico con protezioni avanzate e sistemi di sicurezza per ambienti critici."
            },
            {
                id: 10,
                image: "./QUADRI/image00039.jpeg",
                title: "Automazione Industriale",
                description: "Quadro per automazione processo",
                detailedDescription: "Sistema di quadristica per automazione di processo industriale con interfaccia HMI."
            },
            {
                id: 11,
                image: "./QUADRI/IMG_3240.jpg",
                title: "Manutenzione Quadri",
                description: "Servizio di manutenzione specializzata",
                detailedDescription: "Servizio di manutenzione preventiva e correttiva su quadri elettrici esistenti."
            }
        ] as Project[],
        'Fotovoltaico': [
            {
                id: 12,
                image: "./FVT/20250610_152738.jpg",
                title: "Impianto Fotovoltaico Residenziale",
                description: "Installazione su tetto residenziale 6kW",
                detailedDescription: "Impianto fotovoltaico residenziale da 6kW con ottimizzatori di potenza e sistema di monitoraggio in tempo reale."
            },
            {
                id: 13,
                image: "./FVT/Foto4.jpg",
                title: "Impianto Commerciale",
                description: "Sistema fotovoltaico per azienda",
                detailedDescription: "Installazione di impianto fotovoltaico commerciale da 50kW per riduzione dei costi energetici aziendali."
            },
            {
                id: 14,
                image: "./FVT/image00004.jpeg",
                title: "Pannelli ad Alta Efficienza",
                description: "Installazione pannelli monocristallini",
                detailedDescription: "Impianto con pannelli monocristallini ad alta efficienza per massimizzare la produzione energetica."
            },
            {
                id: 15,
                image: "./FVT/IMG-20250723-WA0031.jpg",
                title: "Sistema con Storage",
                description: "Fotovoltaico con accumulo batterie",
                detailedDescription: "Impianto fotovoltaico con sistema di accumulo per autoconsumo e backup energetico."
            },
            {
                id: 16,
                image: "./FVT/Screenshot2025-09-29073734.png",
                title: "Monitoraggio Avanzato",
                description: "Sistema di monitoraggio produzione",
                detailedDescription: "Implementazione di sistema di monitoraggio avanzato per controllo e ottimizzazione della produzione."
            },
            {
                id: 17,
                image: "./FVT/WhatsAppImage2021-09-21at17.18.10(2).jpeg",
                title: "Impianto Industriale",
                description: "Grande impianto fotovoltaico industriale",
                detailedDescription: "Progettazione e installazione di impianto fotovoltaico industriale da 200kW per autoconsumo aziendale."
            }
        ] as Project[],
        'Illuminazione': [
            {
                id: 18,
                image: "./ILLUMINAZIONE/image00001.jpeg",
                title: "Illuminazione LED Industriale",
                description: "Retrofit illuminazione capannone",
                detailedDescription: "Sostituzione completa dell'illuminazione tradizionale con sistema LED ad alta efficienza per capannone industriale."
            },
            {
                id: 19,
                image: "./ILLUMINAZIONE/image00004.jpeg",
                title: "Illuminazione Stradale",
                description: "Sistema di illuminazione pubblica",
                detailedDescription: "Progettazione e installazione di illuminazione stradale LED con controllo intelligente e riduzione consumi."
            },
            {
                id: 20,
                image: "./ILLUMINAZIONE/image00012.jpeg",
                title: "Illuminazione Commerciale",
                description: "Progetto illuminazione negozio",
                detailedDescription: "Progettazione illuminazione commerciale per valorizzazione prodotti e comfort visivo clienti."
            },
            {
                id: 21,
                image: "./ILLUMINAZIONE/image00013.jpeg",
                title: "Smart Lighting",
                description: "Illuminazione intelligente controllata",
                detailedDescription: "Sistema di illuminazione intelligente con controllo wireless e programmazione automatica."
            },
            {
                id: 22,
                image: "./ILLUMINAZIONE/IMG_2850.jpg",
                title: "Illuminazione di Emergenza",
                description: "Sistema di illuminazione sicurezza",
                detailedDescription: "Installazione di sistema di illuminazione di emergenza conforme alle normative di sicurezza."
            }
        ] as Project[]
    } as const;

    const [selectedFilter, setSelectedFilter] = useState<keyof typeof categories | 'Tutti'>('Tutti');

    // Precaricamento intelligente delle immagini
    const getImagesToPreload = (): string[] => {
        const images: string[] = [];
        
        (Object.entries(categories) as [keyof typeof categories, Project[]][]).forEach(([categoryName, projects]) => {
            if (selectedFilter === 'Tutti' || selectedFilter === categoryName) {
                // Precarica TUTTE le immagini delle categorie visibili
                projects.forEach(project => {
                    images.push(project.image);
                });
            }
        });
        
        return images;
    };

    useImagePreloader(getImagesToPreload());

    useEffect(() => {
        if (!searchParams) return;
        
        const section = searchParams.get('section');
        if (section && sectionRefs.current[section]) {
            setTimeout(() => {
                sectionRefs.current[section]?.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }, 100);
        }
    }, [searchParams]);

    const nextSlide = (category: keyof typeof categories) => {
        setCurrentSlides(prev => ({
            ...prev,
            [category]: (prev[category] + 1) % categories[category].length
        }));
    };

    const prevSlide = (category: keyof typeof categories) => {
        setCurrentSlides(prev => ({
            ...prev,
            [category]: prev[category] === 0 ? categories[category].length - 1 : prev[category] - 1
        }));
    };

    // Gestione click su progetto per aprire modal
    const openProjectModal = (project: Project) => {
        setSelectedProject(project);
        // Precarica immagine del modal
        const img = new Image();
        img.src = project.image;
    };

    return (
        <>
            <Navbar />
            <SwiperHero />
            
            <div className="bg-white min-h-screen">
                {/* Filter Section */}
                <div className="py-8 px-[5%] border-b border-gray-200">
                    <div className="flex flex-wrap gap-3 justify-center">
                        <button
                            onClick={() => setSelectedFilter('Tutti')}
                            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                                selectedFilter === 'Tutti'
                                    ? 'bg-[#E20613] text-white shadow-lg'
                                    : 'bg-gray-100 text-[#164194] hover:bg-gray-200'
                            }`}
                        >
                            Tutti
                        </button>
                        {(Object.keys(categories) as Array<keyof typeof categories>).map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedFilter(category)}
                                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                                    selectedFilter === category
                                        ? 'bg-[#E20613] text-white shadow-lg'
                                        : 'bg-gray-100 text-[#164194] hover:bg-gray-200'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Categories with Optimized Carousels */}
                <div className="py-12 px-[5%]">
                    {(Object.entries(categories) as [keyof typeof categories, Project[]][])
                        .filter(([categoryName]) => selectedFilter === 'Tutti' || selectedFilter === categoryName)
                        .map(([categoryName, projects]) => (
                            <div 
                                key={categoryName} 
                                className="mb-16"
                                ref={(el) => { sectionRefs.current[categoryName] = el; }}
                            >
                                {/* Carousel Container - Centered */}
                                <div className="max-w-5xl mx-auto">
                                    {/* Category Title */}
                                    <h2 className="text-3xl font-bold text-[#164194] mb-8 uppercase">{categoryName}</h2>
                                    <div className="relative group">
                                        {/* Previous Button */}
                                        <button
                                            onClick={() => prevSlide(categoryName)}
                                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#E20613] text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#c00510] hover:scale-110 -translate-x-1/2"
                                            aria-label="Immagine precedente"
                                        >
                                            <ChevronLeft size={24} />
                                        </button>

                                        {/* Main Slide */}
                                        <div className="overflow-hidden rounded-2xl shadow-lg">
                                            <div
                                                className="flex transition-transform duration-500 ease-in-out"
                                                style={{ transform: `translateX(-${currentSlides[categoryName] * 100}%)` }}
                                            >
                                                {projects.map((project) => (
                                                    <div key={project.id} className="min-w-full">
                                                        <div 
                                                            className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 relative cursor-pointer hover:shadow-xl transition-shadow duration-300"
                                                            onClick={() => openProjectModal(project)}
                                                        >
                                                            <div className="relative h-80 md:h-96">
                                                                <OptimizedImage
                                                                    src={project.image}
                                                                    alt={project.title || 'Progetto'}
                                                                    className="w-full h-full"
                                                                />
                                                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                                                                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                                                    <p className="text-lg opacity-90">{project.description}</p>
                                                                </div>
                                                                {/* Hover overlay */}
                                                                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                                    <span className="text-white font-semibold text-lg">Visualizza Dettagli</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Next Button */}
                                        <button
                                            onClick={() => nextSlide(categoryName)}
                                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#E20613] text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#c00510] hover:scale-110 translate-x-1/2"
                                            aria-label="Immagine successiva"
                                        >
                                            <ChevronRight size={24} />
                                        </button>
                                    </div>

                                    {/* Optimized Thumbnail Preview */}
                                    <ThumbnailGrid 
                                        projects={projects}
                                        currentSlide={currentSlides[categoryName]}
                                        categoryName={categoryName}
                                        setCurrentSlides={setCurrentSlides}
                                    />
                                </div>
                            </div>
                        ))}
                </div>

                {/* Enhanced Modal */}
                {selectedProject && (
                    <div 
                        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm" 
                        onClick={() => setSelectedProject(null)}
                    >
                        <div 
                            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" 
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative">
                                <OptimizedImage
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-80 md:h-96 rounded-t-2xl"
                                />
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 bg-white/90 text-[#164194] p-2 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
                                    aria-label="Chiudi modal"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                            <div className="p-8">
                                <h2 className="text-3xl font-bold text-[#164194] mb-4">{selectedProject.title}</h2>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">{selectedProject.detailedDescription}</p>
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="bg-[#E20613] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#c00510] transition-colors duration-300"
                                    >
                                        CHIUDI
                                    </button>
                                    <button className="bg-[#164194] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0f2d6b] transition-colors duration-300">
                                        RICHIEDI INFORMAZIONI
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* CTA Section */}
                <div className="bg-[#164194] text-white py-16 px-[5%] text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Hai un progetto in mente?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">Contattaci per una consulenza gratuita e trasforma la tua idea in realtà</p>
                    <button className="bg-[#E20613] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#c00510] transition-all duration-300 hover:scale-105 shadow-lg">
                        RICHIEDI PREVENTIVO
                    </button>
                </div>
            </div>  
            <PreFooter />
        </>
    );
}