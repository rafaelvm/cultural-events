import { autoCapitalize } from "utils/autoCapitalize";

interface ISelectProps {
  typeLabel?: string;
  onChange?: (event: any) => void;
  children: any;
}

const Select: React.FC<ISelectProps> = ({ onChange, typeLabel, children }) => {
  return (
    <>
      <h3>Filtrar por {typeLabel}:</h3>
      <select name="category-list" onChange={onChange}>
        <option value="">Todos</option>
        {children.map((item) => (
          <option key={item.id} value={item.category}>
            {autoCapitalize(item.category)}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
