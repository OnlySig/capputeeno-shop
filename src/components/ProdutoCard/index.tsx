import { IProduto } from "@/types/IProduto";
import priceConverter from "@/utils/priceConverter";
import Image from "next/image";

const ProdutoCard = ({
  //id,
  titulo,
  //descricao,
  preco,
  imagem,
}: //categoria,
//createdAt,
//updatedAt,
IProduto) => {
  const precoFormatado = priceConverter(Number(preco));
  return (
    <li className="w-fit list-none">
      <Image
        src={imagem}
        alt={`imagem do produto ${titulo}`}
        width={256}
        height={300}
        className="h-[300px]"
      />
      <div className="px-3 py-2 bg-white flex flex-col gap-2 rounded-b-sm">
        <h1 className="w-fit font-light">{titulo}</h1>
        <span className="bg-[#DCE2E5] h-[1px] w-full"></span>
        <span className="font-semibold">{precoFormatado}</span>
      </div>
    </li>
  );
};

export default ProdutoCard;
