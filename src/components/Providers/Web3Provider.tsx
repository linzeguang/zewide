import React, { useMemo } from 'react';

import type { Web3ReactHooks } from '@web3-react/core';
import { Web3ReactProvider } from '@web3-react/core';
import type { Connector } from '@web3-react/types';

import type { Connection } from '../../connection';
import { connections, getConnectionName } from '../../connection';
import { useEagerlyConnect } from '../../hooks';

const Web3Provider: React.FC<React.PropsWithChildren> = (props) => {
  useEagerlyConnect();

  const { children, ...rest } = props;

  const connectors: [Connector, Web3ReactHooks][] = connections.map(({ hooks, connector }) => [
    connector,
    hooks,
  ]);

  const key = useMemo(
    () => connections.map(({ type }: Connection) => getConnectionName(type)).join('-'),
    [],
  );

  return (
    <Web3ReactProvider connectors={connectors} key={key} {...rest}>
      {props.children}
    </Web3ReactProvider>
  );
};

export default Web3Provider;
