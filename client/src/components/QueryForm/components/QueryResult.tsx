import React from "react";

const style = {
  subtitle: `font-bold text-xl`,
};

interface QueryResultProps {
  entityNames: string[];
  entityLabels: string[];
}

export const QueryResult = ({
  entityNames,
  entityLabels,
}: QueryResultProps) => {
  const isMatched = entityNames.length > 0 && entityLabels.length > 0;

  const resultsConfig = [
    {
      title: "Entities: ",
      values: entityNames,
    },
    {
      title: "Labels: ",
      values: entityLabels,
    },
  ];

  return (
    <div>
      <h3 className={style.subtitle}>
        Result{isMatched ? null : <span>: No match</span>}
      </h3>
      {resultsConfig.map((result) => {
        return (
          <p key={result.title}>
            <span className="font-bold">{result.title}</span>
            <span>{result.values.join(", ")}</span>
          </p>
        );
      })}
    </div>
  );
};
