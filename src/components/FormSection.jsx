import { Input } from "./Input";
import { CargosDropdown } from "./CargosDropdown";
import { CadastrarButton } from "./CadastrarButton";
import userIcon from "/assets/images/user-icon.svg";
import emailIcon from "/assets/images/letter-icon.svg";
import phoneIcon from "/assets/images/phone-icon.svg";
import linkedlnIcon from "/assets/images/linkedln-icon.svg";
import githubIcon from "/assets/images/github-icon.svg";

export const FormSection = () => {
  const listaCargos = [
    "Desenvolvedor Frontend", "Desenvolvedor Backend", "Desenvolvedor Full Stack", "Desenvolvedor Mobile", "Desenvolvedor de Software", "Engenheiro de Software", "Arquiteto de Software", "UI / UX Designer", "Analista de Sistemas", "Analista Programador", "DevOps Engineer", "Engenheiro de Dados", "QA Engineer", "Scrum Master", "Product Owner"
  ];

  return (
    <form id="form" className="flex flex-col gap-8 min-w-7/8">
      <Input
        label="Nome"
        placeholder="Nome Completo"
        id="nome"
        type="text"
        src={userIcon}
        alt="Icon de usuário"
      />

      <Input
        label="E-mail"
        placeholder="Digite seu e-mail"
        id="email"
        type="text"
        src={emailIcon}
        alt="Icon de email"
      />

      <Input
        label="Telefone"
        placeholder="Ex: (99) 99999-9999"
        id="telefone"
        type="number"
        src={phoneIcon}
        alt="Icon de usuário"
      />

      <CargosDropdown
        listaCargos={listaCargos}
      />

      <Input
        label="Linkedln (Opcional)"
        placeholder="Ex: https://www.linkedin.com/in/seu-usuario"
        id="linkedln"
        type="text"
        src={linkedlnIcon}
        alt="Icon do Linkedln"
      />

      <Input
        label="Github (Opcional)"
        placeholder="Ex: https://github.com/seu-usuario"
        id="github"
        type="text"
        src={githubIcon}
        alt="Icon do Github"
      />

      <CadastrarButton />
    </form>
  );
}