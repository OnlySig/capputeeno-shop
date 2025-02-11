type Params = {
  categoria: string;
};

const Categoria = async ({ params }: { params: Params }) => {
  const { categoria } = await params;
  return <div>{categoria}</div>;
};

export default Categoria;
