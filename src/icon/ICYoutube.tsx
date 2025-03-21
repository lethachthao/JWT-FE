import { IPropsIcon } from '../utils/type';

export const ICYoutube = (props: IPropsIcon) => {
  const { width = 15, height = 15, fill } = props;

  return (
    <svg
      fill={fill}
      height={height}
      width={width}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-143 145 512 512"
    >
      <g>
        <polygon points="78.9,450.3 162.7,401.1 78.9,351.9 	" />
        <path
          d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M241,446.8L241,446.8
		c0,44.1-44.1,44.1-44.1,44.1H29.1c-44.1,0-44.1-44.1-44.1-44.1v-91.5c0-44.1,44.1-44.1,44.1-44.1h167.8c44.1,0,44.1,44.1,44.1,44.1
		V446.8z"
        />
      </g>
    </svg>
  );
};
