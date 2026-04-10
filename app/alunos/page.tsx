import Image from "next/image";

export default function Alunos() {
  return (
    <div className="items-center flex-col flex w-screen h-screen">
      <h1 className="mt-10 mb-50 font-bold text-5xl">Lista de alunos</h1>

      <div className="p-40 w-{90%} h-100 bg-white rounded-md shadow-md shadow-white text-black overflow-auto">
        <ul className="flex flex-col items-center gap-2">
          <div className="rounded-4xl border-2 p-4">
            <li>Aluno 1</li>
            <Image
              src="/icon.avif"
              alt="imagem"
              width={100}
              height={20}
            />
          </div>
          <div className="rounded-4xl border-2 p-4">
            <li>Aluno 2</li>
            <Image
              className=""
              src="/icon.avif"
              alt="imagem"
              width={100}
              height={20}
            />
          </div>
          <div className="rounded-4xl border-2 p-4">
            <li>Aluno 3</li>
            <Image
              className=""
              src="/icon.avif"
              alt="imagem"
              width={100}
              height={20}
            />
          </div>
          <div className="rounded-4xl border-2 p-4">
            <li>Aluno 4</li>
            <Image
              className=""
              src="/icon.avif"
              alt="imagem"
              width={100}
              height={20}
            />
          </div>
          <div className="rounded-4xl border-2 p-4">
            <li>Aluno 5</li>
            <Image
              className=""
              src="/icon.avif"
              alt="imagem"
              width={100}
              height={20}
            />
          </div>
          <div className="rounded-4xl border-2 p-4">
            <li>Aluno 6</li>
            <Image
              className=""
              src="/icon.avif"
              alt="imagem"
              width={100}
              height={20}
            />
          </div>
        </ul>
      </div>
    </div>
  );
}
