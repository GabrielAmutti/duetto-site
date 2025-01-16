import fundo1 from "../../assets/Fundo1.png";
import imagemlogo from '../../assets/duetto.png'
import imageminsta from '../../assets/Instagram.png'
import whatsApp from '../../assets/Whats.png'
import linkedin from '../../assets/linkedin-branco.png'
import logo from '../../assets/logo.png'

const Footer = () => {
    return(
        <>
            <div className="w-full bg-black flex justify-center" style={{ backgroundImage: `url(${fundo1})` }}>
                <div className="w-9/12 max-[900px]:w-11/12 h-full flex flex-col items-center justify-center p-8 text-white">
                    <div className="w-4/12 max-[900px]:w-full max-[1220px]:w-7/12 max-[1366px]:w-7/12 h-[90%] flex flex-col justify-between items-center p-2">
                        <div className="h-full flex flex-col justify-center items-center">
                            <div className='flex flex-col justify-center items-center text-center mb-6 '>
                                <a href="https://www.instagram.com/duetto.digital/" target="_blank" rel="noopener noreferrer">
                                    <img className="hover:scale-105" src={imagemlogo} alt="LogoDuettoInsta"/>
                                </a>
                                
                                <h1 className="text-2xl max-[900px]:text-xl font-medium mt-4">Siga-me no Instagram e acompanhe as publicações</h1>
                                
                            </div>

                            <div className="w-full h-full flex max-[900px]:flex-col justify-between items-center">
                                <a className="flex justify-center items-center" href="https://www.instagram.com/duetto.digital/" target="_blank" rel="noopener noreferrer">
                                    <img className="h-full me-2 bg-violet-600 rounded-lg p-0.5 hover:scale-110" src={imageminsta} alt="Logo"/>
                                    <h1 className="text-2xl font-light hover:scale-105 max-[900px]:text-xl">duetto.digital</h1>
                                </a>
                                <h1></h1>
                                <a href="https://www.instagram.com/duetto.digital/" target="_blank" rel="noopener noreferrer" className="w-[137px] h-[90%]">
                                    <button className="w-[137px] h-[90%] flex justify-center items-center border-2 border-violet-600 rounded-lg font-bold text-xl hover:scale-105 max-[900px]:mt-5 ">Seguir</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-6 flex max-[900px]:flex-col justify-around items-center max-[900px]:text-center">
                        <img className="w-36 h-full" src={logo} alt="Logo"/>
                        <h1 className="font-extralight text-sm opacity-60 max-[900px]:my-2">© Duetto Agencia - Todos os direitos reservados.</h1>
                        <div className='flex justify-center items-center '>
                            <a href="https://wa.me/11991709538" target="_blank" rel="noopener noreferrer">
                                <img className="w-12 h-full p-2 hover:scale-125" src={whatsApp} alt="whatsApp"/>
                            </a>  
                            <a href="https://www.instagram.com/duetto.digital/" target="_blank" rel="noopener noreferrer">
                                <img className="w-12 h-full p-2 hover:scale-125" src={imageminsta} alt="Instagram"/>
                            </a>  
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">  
                                <img className="w-12 h-full p-2 hover:scale-125" src={linkedin} alt="linkedin"/>
                            </a>  
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;