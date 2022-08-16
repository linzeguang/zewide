import { useCallback, useEffect, useState } from 'react';

import { useWeb3React } from '@web3-react/core';

import type { Connection } from '../connection';
import { ConnectionType, ConnectStatus } from '../connection';

import useMetamask from './useMetamask';
import { useLocalStorage } from './useStorage';

export default function useAuth() {
  const { isActive, connector } = useWeb3React();
  const { isMetaMaskInstalled, startOnboarding } = useMetamask();
  const [selectedWallet, setSelectedWallet] = useLocalStorage<ConnectionType | null>(
    'selectedWallet',
    null,
  );
  const [status, setStatus] = useState<ConnectStatus>(ConnectStatus.DISCONNECT);

  const login = useCallback(
    async (connection: Connection) => {
      const { connector: connect, type } = connection;

      if (type === ConnectionType.INJECTED && !isMetaMaskInstalled) return startOnboarding();

      try {
        setStatus(ConnectStatus.CONNECTING);
        await connect.activate();
        setStatus(ConnectStatus.CONNECTED);
        setSelectedWallet(type);
      } catch (error) {
        setStatus(ConnectStatus.DISCONNECT);
        setSelectedWallet(null);
      }
    },
    [isMetaMaskInstalled, setSelectedWallet, startOnboarding],
  );

  const logout = useCallback(() => {
    if (connector?.deactivate) {
      connector?.deactivate();
    } else {
      connector?.resetState();
    }
    setSelectedWallet(null);
  }, [connector, setSelectedWallet]);

  useEffect(() => {
    setStatus(isActive ? ConnectStatus.CONNECTED : ConnectStatus.DISCONNECT);
  }, [isActive]);

  return {
    login,
    logout,
    selectedWallet,
    status,
  };
}
