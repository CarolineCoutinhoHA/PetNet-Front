const formatDate = (date: Date) => {
  if (!date) return "Data não disponivel";
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(date));
};

export default formatDate;