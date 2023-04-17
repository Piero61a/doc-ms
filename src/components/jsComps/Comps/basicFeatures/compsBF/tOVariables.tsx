import React, { useState } from "react";
import FormatVariable from "../formatVariable/formatVariable";
import typesOfVariables from "../../../../../constants/typesOfVariables";

const TOVariables = () => {
  return (
    <div className="basic">
      <div>
        <p className="text-position">
          Existen 5 tipos de variables, y son las siguientes:
        </p>
        <div>
          <FormatVariable data={typesOfVariables} />
          <p className="text-position">
            Estos son solo algunos de los tipos de variables que se pueden
            utilizar en JavaScript. Cada uno tiene sus propias características y
            se utilizan en diferentes situaciones dependiendo de lo que se
            quiera lograr.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TOVariables;
