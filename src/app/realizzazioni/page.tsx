"use client";

import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Navbar from '../components/navbar';
import SwiperHero from '../components/SwiperHero';
import PreFooter from '../components/prefooter';

export default function Progetti() {
    const [currentSlides, setCurrentSlides] = useState({
        'Opere Elettriche': 0,
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
        'Opere Elettriche': [
            {
                id: 1,
                image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
                title: "Cabina Elettrica MT/BT",
                description: "Progettazione e realizzazione cabina di trasformazione",
                detailedDescription: "Progetto completo di cabina elettrica MT/BT da 1000 kVA per complesso industriale. Include: progettazione elettrica certificata, fornitura e installazione trasformatore, quadri MT e BT, sistema di protezione e monitoraggio remoto. Realizzazione conforme alle normative CEI con collaudo ENEL."
            },
            {
                id: 2,
                image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
                title: "Impianto Industriale",
                description: "Sistema elettrico completo per complesso industriale",
                detailedDescription: "Realizzazione impianto elettrico industriale completo per stabilimento produttivo di 5000 mq. Comprende: distribuzione principale in BT, illuminazione LED, impianto FM, quadri di zona, impianto di terra e protezione scariche atmosferiche. Potenza installata 800 kW."
            },
            {
                id: 3,
                image: "https://images.unsplash.com/photo-1581092918484-8313e1f7e8c6?w=800&q=80",
                title: "Rifasamento Automatico",
                description: "Sistema di rifasamento per ottimizzazione energetica",
                detailedDescription: "Installazione sistema di rifasamento automatico trifase da 300 kVAr con 12 gradini. Include analizzatore di rete, condensatori con reattanze antiarmoniche, protezione magnetotermiche e supervisione via software. Riduzione dei costi energetici del 25%."
            },
            {
                id: 4,
                image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
                title: "Distribuzione Elettrica",
                description: "Impianto di distribuzione elettrica certificato",
                detailedDescription: "Progetto di distribuzione elettrica per centro commerciale. Sistema con quadro generale da 2000A, 8 sottoquadri di zona, UPS centralizzato 100 kVA, gruppo elettrogeno 250 kVA con commutazione automatica. Sistema BMS integrato per gestione energetica."
            }
        ],
        'Quadristica': [
            {
                id: 5,
                image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
                title: "Quadri Bordo Macchina",
                description: "Quadri elettrici industriali certificati",
                detailedDescription: "Realizzazione serie quadri bordo macchina per linea produttiva automatizzata. Carpenteria IP55, componenti ABB/Siemens, PLC S7-1200, HMI touch screen 10', inverter per controllo motori. Certificazione CE, schemi elettrici as-built forniti."
            },
            {
                id: 6,
                image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1b4?w=800&q=80",
                title: "Quadro di Distribuzione",
                description: "Quadro principale per impianto produttivo",
                detailedDescription: "Quadro elettrico generale di distribuzione 1600A forma 4b. Include scomparto misure ENEL, interruttore generale ABB, 24 partenze protette, sistema di monitoraggio energetico con analizzatori di rete. Carpenteria verniciata a polveri RAL 7035."
            },
            {
                id: 7,
                image: "https://images.unsplash.com/photo-1581092162384-8987c1d64926?w=800&q=80",
                title: "Quadri Automazione",
                description: "Sistemi di controllo e automazione PLC",
                detailedDescription: "Quadri di automazione per impianto di confezionamento. PLC Siemens S7-1500 ridondato, rete PROFINET, 8 isole I/O remote, supervisore SCADA, sistema di backup automatico. Programmazione ladder e gestione allarmi con storicizzazione eventi."
            },
            {
                id: 8,
                image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&q=80",
                title: "Quadri Personalizzati",
                description: "Soluzioni su misura per esigenze specifiche",
                detailedDescription: "Progettazione quadri elettrici custom per processo galvanico. Materiali resistenti a ambiente corrosivo, grado IP65, ventilazione forzata con filtri, illuminazione LED interna, morsettiera estraibile. Conformità direttiva ATEX per zona 2."
            }
        ],
        'Fotovoltaico': [
            {
                id: 9,
                image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
                title: "Impianto Industriale 500kW",
                description: "Sistema fotovoltaico per complesso industriale",
                detailedDescription: "Impianto fotovoltaico industriale 500 kWp su copertura capannone. 1250 moduli bifacciali 400W, 10 inverter trifase 50kW, strutture di fissaggio certificate, sistema di monitoraggio cloud. Produzione stimata 650.000 kWh/anno, ROI 6 anni."
            },
            {
                id: 10,
                image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80",
                title: "Impianto Residenziale",
                description: "Sistema fotovoltaico 6kW con accumulo",
                detailedDescription: "Impianto fotovoltaico residenziale 6 kWp con sistema di accumulo 10 kWh. 15 pannelli monocristallini 400W, inverter ibrido, batteria litio LFP, ottimizzatori di potenza, sistema di monitoraggio app. Autoconsumo 80%, detrazione fiscale 50%."
            },
            {
                id: 11,
                image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80",
                title: "Fotovoltaico Commerciale",
                description: "Installazione su capannone commerciale",
                detailedDescription: "Impianto FV commerciale 100 kWp per centro logistico. 250 moduli 400W, struttura con zavorre su tetto piano, inverter centralizzato 100kW, protezioni AC/DC, sistema antintrusione. Produzione annua 130 MWh, riduzione CO2 65 ton/anno."
            },
            {
                id: 12,
                image: "https://images.unsplash.com/photo-1548613053-22087dd8edb8?w=800&q=80",
                title: "Parco Fotovoltaico",
                description: "Grande impianto fotovoltaico a terra",
                detailedDescription: "Parco fotovoltaico 1 MWp su terreno agricolo. 2500 moduli bifacciali con tracker monoassiali, 20 inverter string, cabina MT/BT prefabbricata, connessione rete ENEL. Sistema di monitoraggio avanzato con droni termici, manutenzione predittiva AI."
            }
        ],
        'Illuminazione': [
            {
                id: 13,
                image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80",
                title: "Illuminazione LED Industriale",
                description: "Sistema di illuminazione efficiente per capannone",
                detailedDescription: "Progetto illuminotecnico LED per capannone industriale 3000 mq. 120 corpi illuminanti LED 150W, sistema DALI per regolazione, sensori di presenza, gestione centralizzata. Illuminamento medio 300 lux, uniformità 0.7, risparmio energetico 70% vs alogene."
            },
            {
                id: 14,
                image: "https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?w=800&q=80",
                title: "Illuminazione Uffici",
                description: "Progetto illuminotecnico per spazi di lavoro",
                detailedDescription: "Illuminazione LED per uffici open space 800 mq. Pannelli LED 60x60 UGR<19, temperatura colore 4000K regolabile, sistema human centric lighting, controllo via app. Conformità UNI EN 12464-1, certificazione CAM per appalti verdi."
            },
            {
                id: 15,
                image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80",
                title: "Illuminazione Esterna",
                description: "Sistema di illuminazione perimetrale e sicurezza",
                detailedDescription: "Impianto illuminazione esterna area industriale. 50 pali LED 100W, proiettori 200W per piazzali, sistema crepuscolare astronomico, dimmerazione notturna, integrazione videosorveglianza. Protezione IP66, classe II, risparmio 65% vs SAP."
            },
            {
                id: 16,
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
                title: "Illuminazione Emergenza",
                description: "Sistema di illuminazione di emergenza certificato",
                detailedDescription: "Sistema IEEM (Illuminazione Emergenza Evacuazione) per edificio pubblico. 200 apparecchi LED SE/SA, centrale di supervisione, batterie LiFePO4 3h autonomia, autotest mensile, segnaletica fotoluminescente. Certificazione EN 1838, collaudo VVF, manutenzione biennale."
            }
        ]
    };

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
                        className={`px-6 py-2 rounded-full font-semibold transition-all ${selectedFilter === 'Tutti'
                                ? 'bg-[#E20613] text-white'
                                : 'bg-gray-100 text-[#164194] hover:bg-gray-200'}`}
                    >
                        Tutti
                    </button>
                    {(Object.keys(categories) as Array<keyof typeof categories>).map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedFilter(category)}
                            className={`px-6 py-2 rounded-full font-semibold transition-all ${selectedFilter === category
                                    ? 'bg-[#E20613] text-white'
                                    : 'bg-gray-100 text-[#164194] hover:bg-gray-200'}`}
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
                        <div key={categoryName} className="mb-16">
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
                                                                className="w-full h-full object-cover" />
                                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                                                                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                                                <p className="text-lg">{project.description}</p>
                                                            </div>
                                                            {/* Dettagli Button */}
                                                            <button
                                                                onClick={() => setSelectedProject(project)}
                                                                className="absolute bottom-6 right-6 bg-[#E20613] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#c00510] transition-colors z-10"
                                                            >
                                                                DETTAGLI
                                                            </button>
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
                                            className={`flex-shrink-0 w-28 h-20 rounded-xl overflow-hidden border-2 transition-all ${currentSlides[categoryName] === index
                                                    ? 'border-[#E20613] scale-105'
                                                    : 'border-gray-300 hover:border-[#164194] opacity-70 hover:opacity-100'}`}
                                        >
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover" />
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
                                className="w-full h-80 object-cover rounded-t-2xl" />
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