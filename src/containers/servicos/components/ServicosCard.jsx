const ServicosCard = ({...props}) => {

  return (
    <div className="w-60 max-[640px]:w-36 flex flex-col justify-center items-center text-center h-[80px] max-[640px]:h-[60px] border-2 border-gray-500 rounded-lg text-xl max-[640px]:text-sm font-semibold hover:scale-105">
      <h1 className>{props.texto.split("\n")[0]}</h1>
      <h1 className>{props.texto.split("\n")[1]}</h1>
    </div>
  );
};

export default ServicosCard;