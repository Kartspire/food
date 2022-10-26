import './Loader.module.css';
export enum LoaderSize {
  s = '20',
  m = '40',
  l = '60',
}
interface ILoaderProps {
  color?: string;
  loading?: boolean;
  size?: LoaderSize;
  className?: string;
}

export const Loader = (props: ILoaderProps) => {
  return (
    <svg
      width={props.size || '40'}
      height={props.size || '40'}
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.9494 35.1083C22.1876 37.1391 16.5168 36.7393 11.9641 33.5514C4.95179 28.6414 3.2476 18.9764 8.15765 11.9641C13.0677 4.95185 22.7327 3.24766 29.7449 8.15771C34.2976 11.3455 36.6129 16.5377 36.3332 21.7069L40.8186 22.0993C41.231 15.3816 38.2431 8.61467 32.326 4.47153C23.2779 -1.86402 10.807 0.334937 4.47146 9.38304C-1.86409 18.4311 0.334872 30.9021 9.38298 37.2376C15.3 41.3808 22.6808 41.8741 28.8523 39.189L26.9494 35.1083Z"
        fill={props.color || '#ff0000'}
      />
    </svg>
  );
};
