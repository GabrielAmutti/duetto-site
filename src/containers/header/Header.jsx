import logo from "../../assets/Logo.png";
import imagemHeader from "../../assets/4.png";
import fundo1 from "../../assets/Fundo1.png";

const Header = () => {
  return (
    <div className="w-full h-full max-[640px]:h-[90%] bg-black flex justify-center" style={{ backgroundImage: `url(${fundo1})` }}>
      <div className="w-9/12 max-[1024px]:w-11/12 max-[1366px]:w-12/12 h-full flex">
        <div className="w-6/12 max-[640px]:w-full max-[640px]:p-4 max-[640px]:text-center h-full flex flex-col text-white items-center justify-center">
          <div className="flex flex-col max-[640px]:items-center">
            <img className="w-[250px] h-[92px]" src={logo} alt="Logo" />
            <p className="text-[15px] leading-[15px] font-extralight ">
              PROCURANDO UMA EMPRESA DE GESTÃO DE CONTEÚDO?
            </p>
            <h1 className="font-bold text-3xl max-[640px]:text-xl pt-4 leading-[50px]">
              <span className="bg-violet-600 py-1 px-2 text-black">
                ATÉ 5X MAIS CLIENTES
              </span>
              <span className="max-[400px]:hidden ps-1">PARA O<br/>SEU NEGÓCIO!</span>
            </h1>
            <h1 className="hidden font-bold text-3xl max-[640px]:text-xl py-2 leading-[50px] max-[400px]:flex">PARA O SEU NEGÓCIO!</h1>
            <h2 className="font-medium text-2xl max-[640px]:text-xl">
              Pare de viver de indicação e conquiste
              seus prósprios clientes.
            </h2>
            <p className="w-full py-6">
              Com um método testado e desenvolvido especialmente para
              você atingir seu cliente.
            </p>
            <a className=""
              href="https://wa.me/11991709538"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-[212px] max-[640px]:w-[180px] h-[57px] bg-violet-600 rounded-lg font-bold hover:scale-105">
                MAIS INFORMAÇÕES
              </button>
            </a>
          </div>
        </div>
        <div className="w-6/12 max-[640px]:hidden h-full flex justify-center opacity-70">
          <img src={imagemHeader} alt="Fundo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
