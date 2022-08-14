import detectEthereumProvider from '@metamask/detect-provider';
import type { MetaMaskInpageProvider } from '@metamask/providers';
import { Connector } from '@web3-react/types';

import { ConnectionType, injectedConnection, walletConnectConnection } from '.';

export function getIsInjected(): boolean {
  return Boolean(window.ethereum);
}

export function getIsMetaMask(): boolean {
  return window.ethereum?.isMetaMask ?? false;
}

const CONNECTIONS = [injectedConnection, walletConnectConnection];

export function getConnection(c: Connector | ConnectionType) {
  if (c instanceof Connector) {
    const connection = CONNECTIONS.find((conn) => conn.connector === c);
    if (!connection) {
      throw Error('unsupported connector');
    }
    return connection;
  } else {
    switch (c) {
      case ConnectionType.INJECTED:
        return injectedConnection;
      case ConnectionType.WALLET_CONNECT:
        return walletConnectConnection;
    }
  }
}

export function getConnectionName(connectionType: ConnectionType, isMetaMask?: boolean) {
  switch (connectionType) {
    case ConnectionType.INJECTED:
      return isMetaMask ? 'MetaMask' : 'Injected';
    case ConnectionType.WALLET_CONNECT:
      return 'WalletConnect';
  }
}

export async function getEthereum(): Promise<MetaMaskInpageProvider | null> {
  const provider = (await detectEthereumProvider({
    timeout: 1000,
    mustBeMetaMask: true,
  })) as MetaMaskInpageProvider;

  if (provider && provider.isMetaMask) return provider;
  return null;
}
