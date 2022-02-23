interface IProps {
  prop: string;
}

export const justFunction = ({ prop }: IProps) => `return ${prop}`;
