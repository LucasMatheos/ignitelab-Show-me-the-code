import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import ReactIcon from "../assets/React-Icon.png";
import { useCreateSubscriberMutation } from "../graphql/generated";
import EventImg from '/src/assets/code-img.png'

export function Subscribe() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();
    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate("/event");
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <img src={ReactIcon} alt="React Icon" className="fixed -z-10" />
      <div className="w-full max-w-[1100px] flex flex-col items-center justify-between  mt-10 mx-auto sm:flex-row sm:mt-20">
        <div className="max-w-[640px] flex flex-col items-center mb-8 sm:mb-0 sm:items-start">
          <Logo />
          <h1 className="text-[2rem] leading-tight text-center p-6 sm:text-left sm:text-[2.5rem] sm:px-0 sm:mt-8">
            Construa uma
            <strong className="text-blue-500"> aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong>
          </h1>

          <p className=" px-6 text-center sm:text-left sm:px-0 ">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className="w-full p-8 bg-gray-700 border border-gray-500 rounded sm:w-auto">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Digite seu e-mail"
              onChange={(event) => setEmail(event.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img src={EventImg} alt="Code Image" className="mt-4 sm:mt-10" />
    </div>
  );
}
