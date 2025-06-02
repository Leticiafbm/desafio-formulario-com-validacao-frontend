export const CargosDropdown = ({ listaCargos }) => {
  return(
    <select className="outline-0 border-2 border-ciano py-3.5 px-3 text-ciano font-dmsans rounded-xl text-lg">
      <option disabled className="">Cargo Pretendido</option>

      {listaCargos.map((cargo) => (
        <option value={cargo} key={cargo} className="">{cargo}</option>
      ))}
    </select>
  );
}