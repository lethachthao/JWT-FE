import { IPropsIcon } from '../utils/type';

export const ICArrow = (props: IPropsIcon) => {
  const { width = 15, height = 15, fill } = props;

  return (
    <svg
      fill={fill}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z" />
    </svg>
  );
};
