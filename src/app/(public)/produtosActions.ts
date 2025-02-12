import db from "../../../prisma/db";

export default async function getAllProdutos() {
  const produtos = await db.produto.findMany({
    where: {},
  });
  return produtos;
}
