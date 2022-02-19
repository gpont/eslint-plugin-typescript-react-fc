import React from 'react';

interface ITest1Props {
  prop: string;
}

export const Test1 = ({ prop }: ITest1Props) => {
  return <div>Some text {prop}</div>;
};
