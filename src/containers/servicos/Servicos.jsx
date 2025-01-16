import { motion } from "framer-motion"; // Importando o motion do framer-motion
import { useInView } from "react-intersection-observer"; // Importando o hook useInView
import ServicosCard from "./components/ServicosCard";
import FundoClaro from "../../assets/FundoClaro.png";

const Servicos = () => {
  const listaServicos = [
    { texto: "Direcionamento Estratégico" },
    { texto: "Consultoria de \nVendas" },
    { texto: "Assessoria Juridica" },
    { texto: "Contabilidade" },
    { texto: "Consultoria Oratória" },
    { texto: "Social Media" },
    { texto: "Gestão Financeira" },
    { texto: "Gestão de Equipe" },
    { texto: "Psicologia Comportamental" },
    { texto: "Estratégia de \nDivulgação Paga" },
    { texto: "Landing Page" },
    { texto: "Design Criativo" },
  ];

  // Usando o useInView para detectar quando a seção entra e sai da tela
  const { ref, inView } = useInView({
    threshold: 0.1, // A animação será acionada quando 50% da seção estiver visível
    onChange: (inView) => {
      // Esse callback é acionado quando a visibilidade da seção muda
      // Isso permite ativar a animação toda vez que a seção entrar ou sair da tela
    }
  });

  return (
    <div className="w-full max-[1600px]:h-[80%] max-[1366px]:h-full  max-[1366px]:py-20 max-[1366px]: max-[1220px]:h-[90%] max-[640px]:h-full flex justify-center items-center" style={{ backgroundImage: `url(${FundoClaro})` }}>
      <div className="w-full max-[1360px]:h-full max-[640px]:-mt-28 max-[1366px]:m-16 flex flex-col justify-center max-[640px]:justify-start items-center my-8">
        <div className="w-full h-full flex flex-col justify-center items-center max-[640px]:mt-10 max-[830px]:text-center mb-12">
          <h1 className="font-extrabold text-3xl max-[640px]:text-2xl">MAIS QUE UMA AGÊNCIA</h1>
          <h2 className="font-light text-2xl max-[640px]:text-xl">
            Realizamos diversos serviços para sua empresa alcançar seu objetivo!
          </h2>
        </div>

        <div className="flex h-full justify-center items-center">
          <div
            ref={ref}
            className="grid grid-rows-4 h-full mb-5 max-[830px]:grid-rows-6 grid-flow-col gap-10 max-[640px]:gap-3 max"
          >
            {listaServicos.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -150 : index % 2 === 1 ? 150 : 0,
                    y: index % 2 === 2 ? -150 : index % 2 === 3 ? 150 : 0,
                  }}
                  animate={{
                    opacity: inView ? 1 : 0, // Só anima se o item estiver visível
                    x: inView ? 0 : index % 2 === 0 ? -150 : 150, // Animação de x baseada na visibilidade
                    y: inView ? 0 : index % 2 === 2 ? -150 : 150, // Animação de y baseada na visibilidade
                  }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  <ServicosCard texto={item.texto} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicos;
