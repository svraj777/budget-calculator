import React, { useState, useEffect } from "react";
import Card from "./card";
export default function ExpanceList({ ExpanceList, handleDelete, handleEdit }) {
  console.log(ExpanceList, "ExpanceList");
  return ExpanceList.map((item) => {
    return (
      <div>
        <Card
          Expance={item}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
    );
  });
}
