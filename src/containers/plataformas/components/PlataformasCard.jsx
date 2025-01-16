const PlataformasCard = ({ ...props }) => {

  return (
    <div className="flex max-[640px]:w-full items-center justify-start p-2">
      <div className="w-16 h-16 max-[640px]:w-12 max-[640px]:h-12 rounded-full border-2 border-black flex justify-center items-center">
        <img className="w-8 max-[640px]:w-7" src={props.item.imagem} alt="" />
      </div>
      <div className="flex flex-col ms-2">
        <h1 className="text-violet-600 mb-1.5 max-[640px]:mb-0 max-[640px]:text-base font-bold text-lg leading-4">{props.item.titulo}</h1>
        <p className="text-black text-sm leading-4">
         {props.item.texto.split("\n")[0]}
         </p>
         <p className="text-black text-sm leading-4">
         {props.item.texto.split("\n")[1]}
         </p>
         <p className="text-black text-sm leading-4">
         {props.item.texto.split("\n")[2]}
         </p>
      </div>
    </div>
  );
};

export default PlataformasCard;
