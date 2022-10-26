import React from 'react';
import { Loader } from '../Loader';
export type WithLoaderProps = React.PropsWithChildren<{
  loading: boolean;
}>;
export const WithLoader = ({ loading, children }: WithLoaderProps) => {
  return loading ? <Loader /> : <div>{children}</div>;
};
