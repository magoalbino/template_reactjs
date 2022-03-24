const formatCpf = (cpf: string) =>
  cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");

const formatCnpj = (cnpj: string) =>
  cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");

const formatPesoVolume = (value: number | bigint) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "decimal",
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  });

  return `Kg/L ${formatter.format(value)}`;
};

const formatMoedaReal = (value: number | bigint) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return formatter.format(value);
};

export { formatCpf, formatCnpj, formatPesoVolume, formatMoedaReal };
