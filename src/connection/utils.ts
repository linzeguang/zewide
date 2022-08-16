import { Connector } from '@web3-react/types';

import { ConnectionType, injectedConnection, walletConnectConnection } from './connection';

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
