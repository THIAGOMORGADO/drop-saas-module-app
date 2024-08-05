export default function ProductsPage() {
  // Array de cursos
  const cursos = [
    { id: 1, nome: "Curso 1", descricao: "Descrição do Curso 1" },
    { id: 2, nome: "Curso 2", descricao: "Descrição do Curso 2" },
    { id: 3, nome: "Curso 3", descricao: "Descrição do Curso 3" },
  ];

  return (
    <div className="w-full h-auto px-20">
      <p>LIstagem de cursor</p>


      <section className="mt-10">
        <h2 className="text-xl font-bold mb-4">Cursos Cadastrados</h2>
        <div className="flex flex-wrap gap-4">
          {cursos.map((curso) => (
            <div key={curso.id} className="p-4 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-semibold">{curso.nome}</h3>
              <p>{curso.descricao}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}