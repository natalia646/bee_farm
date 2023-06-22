import React from "react";
import honey from "../json/honey.json";
import "./AllHoney.css";
import Honey from "./Honey";

export default function AllHoney() {
  return (
    <div className="all-honey">
      {honey.map((hon) => (
        <Honey {...hon} />
      ))}
    </div>
  );
}
