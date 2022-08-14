import type { Web3ReactHooks } from '@web3-react/core';
import { initializeConnector } from '@web3-react/core';
import { MetaMask } from '@web3-react/metamask';
import type { Connector } from '@web3-react/types';
import { WalletConnect } from '@web3-react/walletconnect';

export enum ConnectStatus {
  'DISCONNECT' = 'DISCONNECT',
  'CONNECTING' = 'CONNECTING',
  'CONNECTED' = 'CONNECTED',
}

export enum ConnectionType {
  INJECTED = 'INJECTED',
  WALLET_CONNECT = 'WALLET_CONNECT',
}

export interface Connection {
  connector: Connector;
  hooks: Web3ReactHooks;
  type: ConnectionType;
}

function onError(error: Error) {
  console.debug(`web3-react error: ${error}`);
}

const [web3Injected, web3InjectedHooks] = initializeConnector<MetaMask>(
  (actions) => new MetaMask({ actions, onError }),
);
export const injectedConnection: Connection = {
  connector: web3Injected,
  hooks: web3InjectedHooks,
  type: ConnectionType.INJECTED,
};

const [web3WalletConnect, web3WalletConnectHooks] = initializeConnector<WalletConnect>(
  (actions) =>
    new WalletConnect({
      actions,
      options: {
        rpc: [],
        qrcode: true,
      },
      onError,
    }),
);
export const walletConnectConnection: Connection = {
  connector: web3WalletConnect,
  hooks: web3WalletConnectHooks,
  type: ConnectionType.WALLET_CONNECT,
};

export const connections = [injectedConnection, walletConnectConnection];
