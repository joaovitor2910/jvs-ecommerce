function Footer() {
  return (
    <div className="w-full flex p-5 justify-between bg-gray-100 py-5 items-start">
      <span className="w-52 flex flex-col">
        <h3 className="text-xl py-1">Sobre nós</h3>
        <p>Contato</p>
        <p>Política de Privacidade</p>
        <p>Termos de Serviço</p>
        <p>Trocas e Devoluções</p>
      </span>

      <span>
        <h3 className="text-xl py-1 ">Atendimento ao cliente</h3>
        <p>FAQ</p>
        <p>Suporte por e-mail</p>
        <p>WhatsApp ou Chat Online</p>
      </span>
      <p>© 2025 JVStore. Todos os direitos reservados. </p>
    </div>
  );
}

export default Footer;
