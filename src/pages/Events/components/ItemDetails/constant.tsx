export const modalContent = (
  content: string
): { id: number; title: string; description: string } => {
  const details = {
    temperature: {
      id: 0,
      title: "Localização",
      description: "São Paulo",
    },
    height: {
      id: 1,
      title: "Temperatura",
      description: "17C - 22C",
    },
    weight: {
      id: 2,
      title: "Entrada",
      description: "19 horas",
    },
    imc: {
      id: 3,
      title: "Faixa etária",
      description: `A partir de 12 anos`,
    },
    fatPercent: {
      id: 4,
      title: "Data",
      description: "20 de Janeiro de 2022",
    },
  };

  return details[content];
};
