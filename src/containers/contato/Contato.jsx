import React, { useState } from "react";
import FundoClaro from "../../assets/FundoClaro.png";

const Contato = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsApp, setWhatsApp] = useState("");
  const [mensagemSucesso, setMensagemSucesso] = useState(false);

  // Função para aplicar a máscara do número
  const formatarWhatsApp = (valor) => {
    const numero = valor.replace(/\D/g, "");
    if (numero.length <= 10) {
      return numero.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3").trim();
    } else {
      return numero.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3").trim();
    }
  };

  const handleWhatsAppChange = (e) => {
    setWhatsApp(formatarWhatsApp(e.target.value));
  };

  const enviarParaWhatsApp = () => {
    const numeroWhatsApp = "554999767039";
    const mensagem = `Olá, me chamo *${nome}*.
    Meu e-mail é *${email}*.
    Meu WhatsApp é *${whatsApp}*.
    Quero me inscrever na Lista de Espera para alavancar minha empresa!`;

    const mensagemCodificada = encodeURIComponent(mensagem);
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
    window.open(linkWhatsApp, "_blank");

    // Exibir mensagem de sucesso e limpar os campos
    setMensagemSucesso(true);
    setNome("");
    setEmail("");
    setWhatsApp("");

    // Ocultar a mensagem após 3 segundos
    setTimeout(() => setMensagemSucesso(false), 3000);
  };

  return (
    <div className="w-full bg-black flex justify-center" style={{ backgroundImage: `url(${FundoClaro})` }}>
      <div className="w-8/12 h-full flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-[400px] min-w-[300px] h-[90%] flex flex-col justify-between items-center opacity-90 rounded-3xl p-2" style={{ backgroundImage: `url(${FundoClaro})` }}>
          <div className="w-full flex flex-col items-center">
            <p className="text-xl">Garanta já sua vaga em nossa</p>
            <h1 className="font-bold text-2xl text-violet-600">Lista de Espera</h1>
            <p className="text-xl">para alavancar sua empresa!</p>
          </div>

          <div className="w-[90%] flex flex-col items-center my-7">
            <input
              className="w-full p-2 outline-none border-2 border-black rounded-lg"
              placeholder="Seu Nome:"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              className="w-full my-5 p-2 outline-none border-2 border-black rounded-lg"
              placeholder="Seu E-mail:"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full p-2 outline-none border-2 border-black rounded-lg"
              placeholder="DDD + WhatsApp"
              value={whatsApp}
              onChange={handleWhatsAppChange}
            />
          </div>

          <div className="w-full flex justify-center mb-5">
            <button
              className="w-[212px] p-2 bg-violet-600 rounded-lg font-bold hover:scale-105 "
              onClick={enviarParaWhatsApp}
            >
              ENTRAR EM NOSSA LISTA
            </button>
          </div>
        </div>
        {/* Mensagem de sucesso */}
        {mensagemSucesso && (
          <div className="w-3/12 mt-4 p-3 bg-green-500 text-white rounded-lg text-center">
            Enviado com sucesso!
          </div>
        )}
      </div>
    </div>
  );
};

export default Contato;