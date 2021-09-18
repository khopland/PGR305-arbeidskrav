import React, { FC } from "react";
import { useState } from "react";
import { ansatte } from "../../interfaces/ansatte";
import { Ansatt } from './ansatt';

type props = {
  ansatte: ansatte[];
};

export const ListAnsatte = ({ ansatte }: props) => {
  return (
    <>
      {ansatte.map((a, i) => (
        <Ansatt key={i} ansatt={a}/>
      ))}
    </>
  );
};
