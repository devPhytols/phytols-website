import Head from 'next/head';
import LanyardData from '../../../components/PresenceData';
import LanyardUpdate from '../../../components/PresenceUpdate';
import '../../../public/assets/css/style.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


export default function PresencePage() {
    return (
        <>
            <Head>
                <title>Fernando Oliveira</title>
                <meta name="description" content="A self-taught full-stack developer" />
                <meta property="og:title" content="Fernando Oliveira" />
                <meta property="og:image" content="https://avatars.githubusercontent.com/u/30091032?v=4" />
                <meta property="og:description" content="A self-taught full-stack developer" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link rel="canonical" href="https://phytols.dev" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
                    integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
                    crossOrigin="anonymous" />
            </Head>
            <body className="bg-white min-height-full" style={{ backgroundColor: "#000000!important" }}>
                <div className="d-md-flex min-height-full">
                    <div className="flex-self-stretch bg-gray-dark col-md-5 col-lg-4 col-xl-3 px-4 px-md-6 px-lg-7 py-6" style={{ borderRight: '1px solid #181818' }}>
                        <img src="https://i.imgur.com/2HtWKIa.png" className="circle mb-3" style={{ maxWidth: '250px' }} title="" />
                        <h1 className="text-white mb-2 lh-condensed">Fernando Oliveira</h1>
                        <p className="mb-3 f4 text-white">
                            A self-taught full-stack developer
                        </p>
                        <div className="f4 mb-6">
                            <div className="d-flex flex-items-center mb-3">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"
                                    width="20px" height="20px" className="octicon octicon-mark-github mr-2 v-align-middle">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268"
                                            stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                        </path>
                                        <path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="#ffffff" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                    </g>
                                </svg>
                                <a href="https://github.com/devPhytols" className="text-white">
                                    @devPhytols
                                </a>
                            </div>
                            <div className="d-flex flex-items-center mb-3">
                                <svg width="20px" height="20px" className="octicon octicon-mark-github mr-2 v-align-middle"
                                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M3.29289 5.29289C3.47386 5.11193 3.72386 5 4 5H20C20.2761 5 20.5261 5.11193 20.7071 5.29289M3.29289 5.29289C3.11193 5.47386 3 5.72386 3 6V18C3 18.5523 3.44772 19 4 19H14M3.29289 5.29289L5 7.00006M20.7071 5.29289C20.8881 5.47386 21 5.72386 21 6V18C21 18.5523 20.5523 19 20 19H18M20.7071 5.29289L13.4142 12.5857C12.6331 13.3668 11.3668 13.3668 10.5857 12.5857L8 10"
                                            stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                        </path>
                                    </g>
                                </svg>
                                <a href="mailto:contato@phytols.dev" className="text-white">
                                    contato@phytols.dev
                                </a>
                            </div>
                            <div className="d-flex flex-items-center mb-3 text-white">
                                <svg width="20px" height="20px" className="octicon octicon-mark-github mr-2 v-align-middle"
                                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M8.25 9C8.25 6.92893 9.92893 5.25 12 5.25C14.0711 5.25 15.75 6.92893 15.75 9C15.75 11.0711 14.0711 12.75 12 12.75C9.92893 12.75 8.25 11.0711 8.25 9ZM12 6.75C10.7574 6.75 9.75 7.75736 9.75 9C9.75 10.2426 10.7574 11.25 12 11.25C13.2426 11.25 14.25 10.2426 14.25 9C14.25 7.75736 13.2426 6.75 12 6.75Z"
                                            fill="#ffffff"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M5.45641 8.12724C5.73017 4.80603 8.50555 2.25 11.838 2.25H12.162C15.4945 2.25 18.2698 4.80603 18.5436 8.12724C18.6903 9.90751 18.1404 11.6753 17.0097 13.0581L13.4149 17.4545C12.6836 18.3488 11.3164 18.3488 10.5851 17.4545L6.99032 13.0581C5.85958 11.6752 5.30967 9.90751 5.45641 8.12724ZM11.838 3.75C9.28621 3.75 7.16097 5.70726 6.95134 8.25046C6.83652 9.64343 7.2668 11.0266 8.15154 12.1086L11.7463 16.505C11.8774 16.6653 12.1226 16.6653 12.2537 16.505L15.8485 12.1086C16.7332 11.0266 17.1635 9.64343 17.0487 8.25046C16.839 5.70726 14.7138 3.75 12.162 3.75H11.838Z"
                                            fill="#ffffff"></path>
                                        <path
                                            d="M7.67082 16.3354C7.85606 15.9649 7.70589 15.5144 7.33541 15.3292C6.96493 15.1439 6.51442 15.2941 6.32918 15.6646L4.32918 19.6646C4.21293 19.8971 4.22536 20.1732 4.36201 20.3943C4.49867 20.6154 4.74007 20.75 5 20.75H19C19.2599 20.75 19.5013 20.6154 19.638 20.3943C19.7746 20.1732 19.7871 19.8971 19.6708 19.6646L17.6708 15.6646C17.4856 15.2941 17.0351 15.1439 16.6646 15.3292C16.2941 15.5144 16.1439 15.9649 16.3292 16.3354L17.7865 19.25H6.21353L7.67082 16.3354Z"
                                            fill="#ffffff">
                                        </path>
                                    </g>
                                </svg>
                                Paraíba, Brazil
                            </div>
                            <a href="https://github.com/devPhytols" target="_blank" rel="noopener noreferrer">
                                <span title="Seguir" className="d-inline-block f5 rounded-2 text-white bg-green" style={{ cursor: "pointer" }}>
                                    <FontAwesomeIcon icon={faHeart} style={{ fontSize: 13, color: "rgba(204, 49, 106, 0.545)" }} /> Siga-me
                                </span>
                            </a>
                            <LanyardData userId="236651138747727872" />
                        </div>
                    </div>
                    <div className="col-md-7 col-lg-8 col-xl-9 px-4 py-6 px-lg-7 border-top border-md-top-0 bg-gray-light"
                        style={{ backgroundColor: '#000000!important' }}>
                        <div className="mx-auto" style={{ maxWidth: '900px' }}>
                            <h1 style={{ color: 'rgba(232, 54, 119, 0.893)' }}>
                                👀 Atividade
                            </h1>
                            <br />
                            <div className="d-sm-flex flex-wrap gutter-condensed mb-4">
                                <div className='presence-details'>
                                    <LanyardUpdate userId="236651138747727872" />
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
}
