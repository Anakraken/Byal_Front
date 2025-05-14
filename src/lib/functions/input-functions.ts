export const filterData = <T extends Record<string, any>>(
  array: T[],
  key: keyof T,
  searchTerm: string | number
): T[] => {
  const term = String(searchTerm).trim().toLowerCase();
  return array.filter(item =>
    String(item[key]).toLowerCase().includes(term)
  );
};

//Ejemplo de uso:
// const filtered = filterData(array, "keyDelObjetoEnComillas" , searchTerm);


export const handleInput = <T extends object>(
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  setState: React.Dispatch<React.SetStateAction<T>>,
  currentState: T
): void => {
  const { name, value } = e.target;

  setState({
    ...currentState,
    [name]: value,
  });
};

//Ejemplo de uso:
//handleInput(e, setData, data)