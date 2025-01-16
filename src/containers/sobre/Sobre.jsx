import perfil2 from '../../assets/Foto-Sobre.png'
import fundo1 from "../../assets/Fundo1.png";

const Sobre = () => {
  return (
    <div className="w-full max-[900px]:relative bg-black flex justify-center" style={{ backgroundImage: `url(${fundo1})` }}>
      <div className="w-10/12 max-[1024px]:w-11/12 h-full flex justify-center items-center">
        <div className="w-full h-full flex flex-row-reverse text-white items-center justify-center">
          <div className="w-4/12 max-[1024px]:w-7/12 text-xl max-[900px]:text-base max-[900px]:w-full max-[1024px]:text-center h-full flex flex-col justify-center items-center -ms-[6%] max-[900px]:ms-0 max-[1024px]:my-8 z-10">
            <h1 className="text-3xl max-[900px]:text-2xl bg-violet-600 p-2 rounded-lg mb-6">
              Marcos Aurélio Dias
            </h1>
            <p className="opacity-85">
              Empreendedor visionário e fundador da Duetto, uma empresa que se
              destaca no mercado em seu modelo de Gestão Estratégica e afins. A
              Duetto nasceu do desejo de oferecer soluções criativas e
              estratégicas para empresas que buscam alcançar destaque e
              crescimento.
            </p>
            <p className="py-6 opacity-85">
              A Duetto atua em diversas áreas, que são essenciais para o sucesso
              da sua empresa, como gestão comercial, direcionamento de equipe,
              posicionamento de marca, incluindo marketing digital,
              desenvolvimento de sites, gestão de redes sociais, campanhas de
              e-mail marketing, design gráfico, branding e endomarketing.
            </p>
            <p className="opacity-85">
              Ao longo dos anos, Marcos Aurélio Dias consolidou o Duetto como
              uma referência no setor, reforçando seu compromisso com qualidade,
              inovação e sucesso dos clientes. Sua jornada é um exemplo de como
              visão estratégica e dedicação podem transformar ideias em
              empreendimentos.
            </p>
          </div>
          <div className="w-4/12 min-[1024px]:w-6/12 max-[900px]:w-full max-[1024px]:absolute h-full flex justify-center opacity-65 max-[900px]:me-0 -me-[6%] z-0">
            <img className="max-[1024px]:hidden" src={perfil2} alt="Perfil2"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
