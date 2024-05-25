import React from "react";

export const EntityItem = () => {
  return (
    <div className="flex gap-x-10">
      <span>Entity1</span>
      <span>-5, 10</span>
      <span>labelA, labelB, labelE</span>

      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};
