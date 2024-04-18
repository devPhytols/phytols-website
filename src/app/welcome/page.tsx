import Head from 'next/head';
import LanyardData from '../../../components/PresenceData';
import '../../../public/assets/css/style.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { config } from "@fortawesome/fontawesome-svg-core";
import Image from 'next/image';
config.autoAddCss = false;


export default function Home() {
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
            <body className="bg-gray-dark min-height-full">
                <div className="d-md-flex min-height-full">
                    <div className="flex-self-stretch bg-gray-dark col-md-5 col-lg-4 col-xl-3 px-4 px-md-6 px-lg-7 py-6" style={{ borderRight: '1px solid #181818' }}>
                        <Image
                            src="https://i.imgur.com/uBUUBH1.jpeg"
                            alt="Success is the sum of small efforts"
                            className="circle mb-3"
                            width={250}
                            height={250}
                            title=""
                        />
                        <h1 className="text-white mb-2 lh-condensed">Fernando Oliveira</h1>
                        <p className="mb-3 f4 text-white">
                            A self-taught full-stack developer
                        </p>
                        <div className="f4 mb-6">
                            <div className="d-flex flex-items-center mb-3">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"
                                    width="20px" height="20px" className="octicon octicon-mark-github mr-2 v-align-middle">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268"
                                            stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        </path>
                                        <path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="#ffffff" strokeWidth="1.5"
                                            strokeLinecap="round" strokeLinejoin="round"></path>
                                    </g>
                                </svg>
                                <a href="https://github.com/devPhytols" className="text-white">
                                    @devPhytols
                                </a>
                            </div>
                            <div className="d-flex flex-items-center mb-3">
                                <svg width="20px" height="20px" className="octicon octicon-mark-github mr-2 v-align-middle"
                                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M3.29289 5.29289C3.47386 5.11193 3.72386 5 4 5H20C20.2761 5 20.5261 5.11193 20.7071 5.29289M3.29289 5.29289C3.11193 5.47386 3 5.72386 3 6V18C3 18.5523 3.44772 19 4 19H14M3.29289 5.29289L5 7.00006M20.7071 5.29289C20.8881 5.47386 21 5.72386 21 6V18C21 18.5523 20.5523 19 20 19H18M20.7071 5.29289L13.4142 12.5857C12.6331 13.3668 11.3668 13.3668 10.5857 12.5857L8 10"
                                            stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M8.25 9C8.25 6.92893 9.92893 5.25 12 5.25C14.0711 5.25 15.75 6.92893 15.75 9C15.75 11.0711 14.0711 12.75 12 12.75C9.92893 12.75 8.25 11.0711 8.25 9ZM12 6.75C10.7574 6.75 9.75 7.75736 9.75 9C9.75 10.2426 10.7574 11.25 12 11.25C13.2426 11.25 14.25 10.2426 14.25 9C14.25 7.75736 13.2426 6.75 12 6.75Z"
                                            fill="#ffffff"></path>
                                        <path fillRule="evenodd" clipRule="evenodd"
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
                    <div className="col-md-7 col-lg-8 col-xl-9 px-4 py-6 px-lg-7 border-top border-md-top-0 bg-gray-light">
                        <div className="mx-auto" style={{ maxWidth: '900px' }}>
                            <h2 className="text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="18"
                                height="18" fill="#ffffff">
                                <path
                                    d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z" />
                            </svg> Projects
                            </h2>
                            <br />
                            <div className="d-sm-flex flex-wrap gutter-condensed mb-4">
                                <div className="col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3">
                                    <div
                                        className="github-component d-flex flex-column flex-justify-between height-full text-left box-shadow bg-white rounded-1 p-3">
                                        <div>
                                            <div className="d-flex flex-justify-between flex-items-start mb-1">
                                                <h1 className="f4 lh-condensed mb-1">
                                                    <a href="#"> <svg height="20" className="octicon octicon-repo mr-1 v-align-middle"
                                                        fill="#586069" aria-label="repo" viewBox="0 0 16 16" version="1.1"
                                                        width="20" role="img">
                                                        <path fillRule="evenodd"
                                                            d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z">
                                                        </path>
                                                    </svg>
                                                        Kosame Bot
                                                    </a>
                                                </h1>
                                            </div>
                                            <div className="text-gray mb-2 ws-normal">📦 Developed to Entertain a Large Community on
                                                Discord.</div>
                                        </div>
                                        <div className="d-flex f6">
                                            <span className="mr-3" itemProp="programmingLanguage"><svg
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="14px"
                                                height="14px" fill="#ffffff">
                                                <path
                                                    d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                                            </svg> JavaScript</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3">
                                    <div
                                        className="github-component d-flex flex-column flex-justify-between height-full text-left box-shadow bg-white rounded-1 p-3">
                                        <div>
                                            <div className="d-flex flex-justify-between flex-items-start mb-1">
                                                <h1 className="f4 lh-condensed mb-1">
                                                    <a href="#"> <svg height="20" className="octicon octicon-repo mr-1 v-align-middle"
                                                        fill="#586069" aria-label="repo" viewBox="0 0 16 16" version="1.1"
                                                        width="20" role="img">
                                                        <path fillRule="evenodd"
                                                            d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z">
                                                        </path>
                                                    </svg>
                                                        Youtube MP3 Converter
                                                    </a>
                                                </h1>
                                            </div>
                                            <div className="text-gray mb-2 ws-normal">🎶 Desenvolvido com Node.js utilizando Ytdl-Core.
                                            </div>
                                        </div>
                                        <div className="d-flex f6">
                                            <span className="mr-3" itemProp="programmingLanguage"><svg
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="14px"
                                                height="14px" fill="#ffffff">
                                                <path
                                                    d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                                            </svg> JavaScript</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3">
                                    <div
                                        className="github-component d-flex flex-column flex-justify-between height-full text-left box-shadow bg-white rounded-1 p-3">
                                        <div>
                                            <div className="d-flex flex-justify-between flex-items-start mb-1">
                                                <h1 className="f4 lh-condensed mb-1">
                                                    <a href="#"> <svg height="20" className="octicon octicon-repo mr-1 v-align-middle"
                                                        fill="#586069" aria-label="repo" viewBox="0 0 16 16" version="1.1"
                                                        width="20" role="img">
                                                        <path fillRule="evenodd"
                                                            d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z">
                                                        </path>
                                                    </svg>
                                                        KSM.BIO
                                                    </a>
                                                </h1>
                                            </div>
                                            <div className="text-gray mb-2 ws-normal">🎲 Baseado em ayo.so e desenvolvido utilizando
                                                React.</div>
                                        </div>
                                        <div className="d-flex f6">
                                            <span className="mr-3" itemProp="programmingLanguage"><svg
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="14px"
                                                height="14px" fill="#ffffff">
                                                <path
                                                    d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                                            </svg> TypeScript</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3">
                                    <div
                                        className="github-component d-flex flex-column flex-justify-between height-full text-left box-shadow bg-white rounded-1 p-3">
                                        <div>
                                            <div className="d-flex flex-justify-between flex-items-start mb-1">
                                                <h1 className="f4 lh-condensed mb-1">
                                                    <a href="#"> <svg height="20" className="octicon octicon-repo mr-1 v-align-middle"
                                                        fill="#586069" aria-label="repo" viewBox="0 0 16 16" version="1.1"
                                                        width="20" role="img">
                                                        <path fillRule="evenodd"
                                                            d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z">
                                                        </path>
                                                    </svg>
                                                        devPhytols - Website
                                                    </a>
                                                </h1>
                                            </div>
                                            <div className="text-gray mb-2 ws-normal">🌙 Portfólio atualmente encontrado em
                                                www.phytols.dev.</div>
                                        </div>
                                        <div className="d-flex f6">
                                            <span className="mr-3" itemProp="programmingLanguage"><svg
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="14px"
                                                height="14px" fill="#ffffff">
                                                <path
                                                    d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                                            </svg> Vue.JS</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h2 className="text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18"
                                height="18" fill="#ffffff">
                                <path
                                    d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64c-35.3 0-64 28.7-64 64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64c0 35.3 28.7 64 64 64v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448c35.3 0 64-28.7 64-64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V176h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448c0-35.3-28.7-64-64-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H176V24zM160 128H352c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm192 32H160V352H352V160z" />
                            </svg> Skills</h2>
                            <br />
                            <div className="d-flex flex-wrap gutter-condensed mb-4">
                                <div className="col-6 col-md-12 col-lg-6 col-xl-4 mb-3">
                                    <a href="#"
                                        className="github-component position-relative hover-grow height-full no-underline d-flex flex-column flex-justify-center text-center rounded-1 bg-white p-5">
                                        <img src="https://cdn.jsdelivr.net/gh/github/explore@master/topics/nodejs/nodejs.png"
                                            width="64" height="64" className="mx-auto rounded-1 mb-3"
                                            alt="Machine Learning Papers 2021" />
                                        <p className="f3 lh-condensed text-center link-gray-dark mb-0 mt-1">Node.js</p>
                                    </a>
                                </div>
                                <div className="col-6 col-md-12 col-lg-6 col-xl-4 mb-3">
                                    <a href="#"
                                        className="github-component position-relative hover-grow height-full no-underline d-flex flex-column flex-justify-center text-center rounded-1 bg-white p-5">
                                        <img src="https://cdn.jsdelivr.net/gh/github/explore@master/topics/javascript/javascript.png"
                                            width="64" height="64" className="mx-auto rounded-1 mb-3" alt="Learning R for Data Science"
                                            title="" />
                                        <p className="f3 lh-condensed text-center link-gray-dark mb-0 mt-1">JavaScript</p>
                                    </a>
                                </div>
                                <div className="col-6 col-md-12 col-lg-6 col-xl-4 mb-3">
                                    <a href="#"
                                        className="github-component position-relative hover-grow height-full no-underline d-flex flex-column flex-justify-center text-center rounded-1 bg-white p-5">
                                        <img src="https://cdn.jsdelivr.net/gh/github/explore@master/topics/typescript/typescript.png"
                                            width="64" height="64" className="mx-auto rounded-1 mb-3"
                                            alt="Exploring TDD for Python stack" title="" />
                                        <p className="f3 lh-condensed text-center link-gray-dark mb-0 mt-1">TypeScript</p>
                                    </a>
                                </div>
                                <div className="col-6 col-md-12 col-lg-6 col-xl-4 mb-3">
                                    <a href="#"
                                        className="github-component position-relative hover-grow height-full no-underline d-flex flex-column flex-justify-center text-center rounded-1 bg-white p-5">
                                        <img src="https://cdn.jsdelivr.net/gh/github/explore@master/topics/react/react.png"
                                            width="64" height="64" className="mx-auto rounded-1 mb-3"
                                            alt="Exploring TDD for Python stack" title="" />
                                        <p className="f3 lh-condensed text-center link-gray-dark mb-0 mt-1">React</p>
                                    </a>
                                </div>
                                <div className="col-6 col-md-12 col-lg-6 col-xl-4 mb-3">
                                    <a href="#"
                                        className="github-component position-relative hover-grow height-full no-underline d-flex flex-column flex-justify-center text-center rounded-1 bg-white p-5">
                                        <img src="https://cdn.jsdelivr.net/gh/github/explore@master/topics/html/html.png" width="64"
                                            height="64" className="mx-auto rounded-1 mb-3" alt="Exploring TDD for Python stack"
                                            title="" />
                                        <p className="f3 lh-condensed text-center link-gray-dark mb-0 mt-1">HTML</p>
                                    </a>
                                </div>
                                <div className="col-6 col-md-12 col-lg-6 col-xl-4 mb-3">
                                    <a href="#"
                                        className="github-component position-relative hover-grow height-full no-underline d-flex flex-column flex-justify-center text-center rounded-1 bg-white p-5">
                                        <img src="https://cdn.jsdelivr.net/gh/github/explore@master/topics/css/css.png" width="64"
                                            height="64" className="mx-auto rounded-1 mb-3" alt="Exploring TDD for Python stack"
                                            title="" />
                                        <p className="f3 lh-condensed text-center link-gray-dark mb-0 mt-1">CSS</p>
                                    </a>
                                </div>
                            </div>
                            <h2 className="text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="18"
                                height="18" fill="#ffffff">
                                <path
                                    d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" />
                            </svg> Aprendendo</h2>
                            <br />
                            <div className="d-flex flex-wrap gutter-condensed mb-4">
                                <div className="col-6 col-md-12 col-lg-6 col-xl-4 mb-3">
                                    <a href="#"
                                        className="github-component position-relative hover-grow height-full no-underline d-flex flex-column flex-justify-center text-center rounded-1 bg-white p-5">
                                        <img src="https://cdn.jsdelivr.net/gh/github/explore@master/topics/nextjs/nextjs.png" width="64"
                                            height="64" className="mx-auto rounded-1 mb-3" alt="Machine Learning Papers 2021" />
                                        <p className="f3 lh-condensed text-center link-gray-dark mb-0 mt-1">Next.js</p>
                                    </a>
                                </div>
                                <div className="col-6 col-md-12 col-lg-6 col-xl-4 mb-3">
                                    <a href="#"
                                        className="github-component position-relative hover-grow height-full no-underline d-flex flex-column flex-justify-center text-center rounded-1 bg-white p-5">
                                        <img src="https://cdn.jsdelivr.net/gh/github/explore@master/topics/python/python.png"
                                            width="64" height="64" className="mx-auto rounded-1 mb-3" alt="Learning R for Data Science"
                                            title="" />
                                        <p className="f3 lh-condensed text-center link-gray-dark mb-0 mt-1">Python</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
}
