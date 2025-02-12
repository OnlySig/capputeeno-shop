import ProdutoCard from "@/components/ProdutoCard";
import getAllProdutos from "./produtosActions";

export default async function Home() {
  const produtos = await getAllProdutos();
  return (
    <>
      {produtos ? (
        <>
          {produtos.map((produto) => (
            <ProdutoCard key={produto.id} {...produto} />
          ))}
        </>
      ) : (
        "Nada encontrado"
      )}
    </>
  );
}
