import React from 'react';

interface ITest1Props {
  prop: string;
}

export const Test1: React.FC<ITest1Props> = ({ prop }) => {
  return <div>Some text {prop}</div>;
};
