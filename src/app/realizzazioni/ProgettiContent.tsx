"use client";

import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Navbar from '../components/navbar';
import SwiperHero from '../components/SwiperHero';
import PreFooter from '../components/prefooter';

export default function ProgettiContent() {
    const searchParams = useSearchParams();
    const sectionRefs = useRef<{[key: string]: HTMLDivElement | null}>({});
    
    const [currentSlides, setCurrentSlides] = useState({
        'Quadristica': 0,
        'Fotovoltaico': 0,
        'Illuminazione': 0
    });

    const [selectedProject, setSelectedProject] = useState<{
        title: string;
        description: string;
        detailedDescription: string;
        image: string;
    } | null>(null);

    const [selectedFilter, setSelectedFilter] = useState<keyof typeof categories | 'Tutti'>('Tutti');

    const categories = {
       
        'Quadristica': [
            {
                id: 5,
                image: "./QUADRI/image00015.jpeg",
                title: "",
                description: "",
                detailedDescription: ""
            },
            {
                id: 6,
                image: "./QUADRI/image00017.jpeg",
                title: "",
                description: "",
                detailedDescription: ""
            },
            {
                id: 7,
                image: "./QUADRI/image00018.jpeg",
                title: "",
                description: "",
                detailedDescription: ""
            },
            {
                id: 8,
                image: "./QUADRI/image00039.jpeg",
                title: "",
                description: "",
                detailedDescription: ""
            },
            {
                id: 9,
                image: "./QUADRI/image00047.jpeg",
                title: "",
                description: "",
                detailedDescription: ""
            },
            {
                id: 10,
                image: "./QUADRI/image00039.jpeg",
                title: "",
                description: "",
                detailedDescription: ""
            },
            {
                id: 11,
                image: "./QUADRI/IMG_3240.jpg",
                title: "",
                description: "",
                detailedDescription: ""
            }
        ],
        'Fotovoltaico': [
            {
                id: 12,
                image: "./FVT/20250610_152738.jpg",
                title: "",
                description: "",
                detailedDescription: ""
            },
            {
                id: 13,
                image: "./FVT/Foto4.jpg",
                title: "",
                description: "",
                detailedDescription: ""
            },
            {
                id: 14,
                image: "./FVT/image00004.jpeg",
                title: "",
                description: "",
                detailedDescription: ""
            },
            {
                id: 15,
                image: "./FVT/IMG-20250723-WA0031.jpg",
                title: "",
                description: "",
                detailedDescription: ""
            },
       
            {
                id: 16,
                image: "./FVT/Screenshot2025-09-29073734.png",
                title: "",
                description: "",
                detailedDescription: ""
            },
            {
                id: 17,
                image: "./FVT/WhatsAppImage2021-09-21at17.18.10(2).jpeg",
                title: "",
                description: "",
                detailedDescription: ""
            }
        ],
        'Illuminazione': [
            {
                id: 18,
                image: "./ILLUMINAZIONE/image00001.jpeg",
                title: "",
                description: "",
                detailedDescription: ""
            },
            {
                id: 19,
                image: "./ILLUMINAZIONE/image00004.jpeg",
                title: "",
                description: "",
                detailedDescription: ""
            },
            {
                id: 20,
                image: "./ILLUMINAZIONE/image00012.jpeg",
                title: "",
                description: "",
                detailedDescription: ""
            },
            {
                id: 21,
                image: "./ILLUMINAZIONE/image00013.jpeg",
                title: "",
                description: "",
                detailedDescription: ""
            },
            {
                id: 22,
                image: "./ILLUMINAZIONE/IMG_2850.jpg",
                title: "",
                description: "",
                detailedDescription: ""
            }
        ]
    };

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
                            className={`px-6 py-2 rounded-full font-semibold transition-all ${
                                selectedFilter === 'Tutti'
                                    ? 'bg-[#E20613] text-white'
                                    : 'bg-gray-100 text-[#164194] hover:bg-gray-200'
                            }`}
                        >
                            Tutti
                        </button>
                        {(Object.keys(categories) as Array<keyof typeof categories>).map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedFilter(category)}
                                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                                    selectedFilter === category
                                        ? 'bg-[#E20613] text-white'
                                        : 'bg-gray-100 text-[#164194] hover:bg-gray-200'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Categories with Carousels */}
                <div className="py-12 px-[5%]">
                    {(Object.entries(categories) as [keyof typeof categories, typeof categories[keyof typeof categories]][])
                        .filter(([categoryName]) => selectedFilter === 'Tutti' || selectedFilter === categoryName)
                        .map(([categoryName, projects]) => (
                            <div 
                                key={categoryName} 
                                className="mb-16"
                                ref={(el) => { sectionRefs.current[categoryName] = el; }}
                            >
                                {/* Carousel Container - Centered */}
                                <div className="max-w-5xl mx-auto">
                                    {/* Category Title - Aligned Left */}
                                    <h2 className="text-3xl font-bold text-[#164194] mb-8 uppercase">{categoryName}</h2>
                                    <div className="relative group">
                                        {/* Previous Button */}
                                        <button
                                            onClick={() => prevSlide(categoryName)}
                                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#E20613] text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#c00510] -translate-x-1/2"
                                        >
                                            <ChevronLeft size={24} />
                                        </button>

                                        {/* Main Slide */}
                                        <div className="overflow-hidden rounded-2xl">
                                            <div
                                                className="flex transition-transform duration-500 ease-in-out"
                                                style={{ transform: `translateX(-${currentSlides[categoryName] * 100}%)` }}
                                            >
                                                {projects.map((project) => (
                                                    <div key={project.id} className="min-w-full">
                                                        <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 relative">
                                                            <div className="relative h-80 md:h-96">
                                                                <img
                                                                    src={project.image}
                                                                    alt={project.title}
                                                                    className="w-full h-full object-cover" 
                                                                />
                                                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                                                                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                                                    <p className="text-lg">{project.description}</p>
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
                                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#E20613] text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#c00510] translate-x-1/2"
                                        >
                                            <ChevronRight size={24} />
                                        </button>
                                    </div>

                                    {/* Thumbnail Preview - Aligned Left */}
                                    <div className="flex gap-4 mt-6 overflow-x-auto pb-2">
                                        {projects.map((project, index) => (
                                            <button
                                                key={project.id}
                                                onClick={() => setCurrentSlides(prev => ({ ...prev, [categoryName]: index }))}
                                                className={`flex-shrink-0 w-28 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                                                    currentSlides[categoryName] === index
                                                        ? 'border-[#E20613] scale-105'
                                                        : 'border-gray-300 hover:border-[#164194] opacity-70 hover:opacity-100'
                                                }`}
                                            >
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover" 
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>

                {/* Modal */}
                {selectedProject && (
                    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
                        <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                            <div className="relative">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-80 object-cover rounded-t-2xl" 
                                />
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 bg-white text-[#164194] p-2 rounded-full hover:bg-gray-100 transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                            <div className="p-8">
                                <h2 className="text-3xl font-bold text-[#164194] mb-4">{selectedProject.title}</h2>
                                <p className="text-lg text-gray-700 leading-relaxed">{selectedProject.detailedDescription}</p>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="mt-6 bg-[#E20613] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#c00510] transition-colors"
                                >
                                    CHIUDI
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* CTA Section */}
                <div className="bg-[#164194] text-white py-16 px-[5%] text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Hai un progetto in mente?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">Contattaci per una consulenza gratuita e trasforma la tua idea in realtà</p>
                    <button className="bg-[#E20613] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#c00510] transition-colors">
                        RICHIEDI PREVENTIVO
                    </button>
                </div>
            </div>  
            <PreFooter />
        </>
    );
}