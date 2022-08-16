import { useEffect } from 'react';

import type { Connector } from '@web3-react/types';

import type { ConnectionType } from '../connection';
import { getConnection } from '../connection/utils';

import { useLocalStorage } from './useStorage';

async function connect(connector: Connector) {
  try {
    if (connector.connectEagerly) {
      await connector.connectEagerly();
    } else {
      await connector.activate();
    }
  } catch (error) {
    console.debug(`web3-react eager connection error: ${error}`);
  }
}

export default function useEagerlyConnect() {
  const [selectedWallet] = useLocalStorage<ConnectionType | null>('selectedWallet', null);

  useEffect(() => {
    if (selectedWallet) {
      connect(getConnection(selectedWallet).connector);
    }
    // The dependency list is empty so this is only run once on mount
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}
