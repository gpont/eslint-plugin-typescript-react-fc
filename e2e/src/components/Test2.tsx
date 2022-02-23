import React from 'react';

interface ITest2Props {
  prop: string;
}

export const Test2: React.FC<ITest2Props> = ({ prop }) => {
  return <div>Some text {prop}</div>;
};
