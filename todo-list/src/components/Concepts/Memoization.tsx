import React, { useMemo, useState } from "react";

interface MemoizationProps {
  financialData: {
    incomes: number[];
    outcomes: number[];
  };
}

export const Memoization: React.FC<MemoizationProps> = ({ financialData }) => {
  const [showValue, setShowValue] = useState(false);

  const totalIncomes = useMemo(() => {
    return financialData.incomes.reduce((sum, income) => {
      console.log("Calculando o total de Receitas!");
      return (sum += income);
    }, 0);
  }, [financialData.incomes]);

  const totalOutcomes = useMemo(() => {
    return financialData.outcomes.reduce((sum, outcome) => {
      console.log("Calculando o total de Despesas!");
      return (sum += outcome);
    }, 0);
  }, [financialData.outcomes]);

  // * MEMOIZANDO DEFINIÇÃO DE FUNÇÃO
  // const applyDiscount = useCallback(
  //   (desconto: number) => {
  //     return totalOutcomes * (1 - desconto);
  //   },
  //   [totalOutcomes]
  // );

  return (
    <div
      style={{
        maxWidth: `1200px`,
        margin: "0 auto",
        padding: "0 2rem",
        width: "100%",
      }}
    >
      <h2>Memoization</h2>
      <h1>useMemo()</h1>

      <p>{`Total de Receitas: R$${showValue ? totalIncomes : "XXXX"}`}</p>
      <p>{`Total de Despesas: R$${showValue ? totalOutcomes : "XXXX"}`}</p>

      <button onClick={() => setShowValue(!showValue)}>
        {showValue ? "Ocultar Valores" : "Mostrar Valores"}
      </button>
    </div>
  );
};
