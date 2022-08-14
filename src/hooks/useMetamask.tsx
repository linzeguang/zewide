import { useCallback, useEffect, useRef, useState } from 'react';

import MetaMaskOnboarding from '@metamask/onboarding';
import type { MetaMaskInpageProvider } from '@metamask/providers';

import { getEthereum } from '../connection';

export default function useMetamask() {
  // 判断是否metamask是否已安装
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState<boolean>();
  const [provider, setProvider] = useState<MetaMaskInpageProvider>();
  const onboarding = useRef<MetaMaskOnboarding>();

  /**
   * 初始化metamask对象，检测浏览器是否安装metamask，设置metamask provider对象
   */
  const init = useCallback(async () => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
    if (!MetaMaskOnboarding.isMetaMaskInstalled()) {
      console.warn('metamask is not installed!');
      setIsMetaMaskInstalled(false);
      return;
    }

    const _provider = await getEthereum();

    if (_provider && _provider.isMetaMask) {
      setIsMetaMaskInstalled(true);
      setProvider(_provider);
    } else {
      setIsMetaMaskInstalled(false);
      setProvider(undefined);
    }
  }, []);

  /**
   * 打开插件商店安装metamask
   */
  const startOnboarding = useCallback(() => {
    onboarding.current?.startOnboarding();
  }, []);

  useEffect(() => {
    init();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    isMetaMaskInstalled,
    provider,
    startOnboarding,
  };
}
