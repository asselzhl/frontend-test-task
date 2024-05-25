import React from "react";

export const EntityItem = ({ entity }) => {
  return (
    <div className="flex gap-x-10">
      <li>
        <span>{entity.name}</span>
        <span>{entity.coordinate}</span>
        <span>{entity.labels}</span>
      </li>

      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};
