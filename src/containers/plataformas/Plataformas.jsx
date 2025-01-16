import PlataformasCard from './components/PlataformasCard';
import FundoClaro from "../../assets/FundoClaro.png";
import instagram from '../../assets/insta.png';
import facebook from '../../assets/face.png';
import tiktok from '../../assets/tiktok.png';
import google from '../../assets/google.png';
import youtube from '../../assets/youtube.png';
import linkedin from '../../assets/linkedin.png';

const Plataformas = () => {

  const listaPlataformas = [
    {
      imagem: instagram,
      titulo: "INSTAGRAM",
      texto: "Maior Plataforma de Relacionamento \ndireto com seu Cliente!",
    },
    {
      imagem: facebook,
      titulo: "FACEBOOK",
      texto: "Maior rede social com úsuarios ativos.",
    },
    {
      imagem: tiktok,
      titulo: "TIKTOK ADS",
      texto: "Rede Social com intuito de Distribuição\nde Conteúdos, focada em vídeos curtos.",
    },
    {
      imagem: google,
      titulo: "GOOGLE ADS",
      texto: "Maior plataforma de Buscas do Mundo.",
    },
    {
      imagem: youtube,
      titulo: "YOUTUBE",
      texto: "Integrada ao Google, é a Plataforma\nde Vídeo mais acessada e buscada\natualmente!",
    },
    {
      imagem: linkedin,
      titulo: "LINKEDIN ADS",
      texto: "Rede Social focada na área Profissional.",
    },
  ]

  return (
    <div className="w-full min-[1024px]:h-[50%] min-[1366px]:h-[70%] min-[1600px]:h-[45%] flex justify-center items-center"  style={{ backgroundImage: `url(${FundoClaro})` }}>
      <div className="w-9/12 max-[1024px]:w-11/12 h-full flex flex-col justify-center items-center">
        <div className="h-2/6 flex justify-center items-center text-center mt-2">
          <h1 className="font-extrabold max-[640px]:text-lg text-violet-600 text-3xl">PLATAFORMAS DIGITAIS QUE USAMOS PARA <span className="text-black">VOCÊ</span><br/> ATINGIR SEU CLIENTE</h1>
        </div>

        <div className="h-5/6 flex justify-center items-center">
          <div className="grid grid-rows-3 max-[640px]:grid-rows-6 grid-flow-col gap-0">
            {listaPlataformas.map(item =>{
                return(
                  <PlataformasCard item={item}/>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plataformas;
