import React from 'react';

interface ITest3Props {
  prop: string;
}

export const Test3 = ({ prop }: ITest3Props) => <div>Some text {prop}</div>;
