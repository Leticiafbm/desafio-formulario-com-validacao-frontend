export const CadastrarButton = ({ handleCadastrar }) => {
  return(
    <button className="bg-ciano px-3.5 py-3 rounded-lg shadow-2xl active:bg-ciano/80 active:scale-110 transition-all hover:scale-110 cursor-pointer" onClick={handleCadastrar}>
      <p className="font-bold font-dmsans">Cadastre-se</p>
    </button>
  );
}