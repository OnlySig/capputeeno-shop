-- CreateTable
CREATE TABLE "Carrinho" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Carrinho_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarrinhoItem" (
    "id" SERIAL NOT NULL,
    "carrinhoId" INTEGER NOT NULL,
    "produtoId" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "CarrinhoItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Carrinho_userId_key" ON "Carrinho"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "CarrinhoItem_carrinhoId_produtoId_key" ON "CarrinhoItem"("carrinhoId", "produtoId");

-- AddForeignKey
ALTER TABLE "Carrinho" ADD CONSTRAINT "Carrinho_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarrinhoItem" ADD CONSTRAINT "CarrinhoItem_carrinhoId_fkey" FOREIGN KEY ("carrinhoId") REFERENCES "Carrinho"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarrinhoItem" ADD CONSTRAINT "CarrinhoItem_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
