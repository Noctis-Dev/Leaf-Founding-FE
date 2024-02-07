import {
    ApiProvider as GearApiProvider,
    AlertProvider as GearAlertProvider,
    AccountProvider,
  } from '@gear-js/react-hooks';
  import { Alert, alertStyles } from '@gear-js/ui';
  import { ComponentType } from 'react';
  import { ADDRESS } from '../const';
  
  function ApiProvider({ children }) {
    return <GearApiProvider providerAddress={'wss://testnet.vara-network.io'}>{children}</GearApiProvider>;
  }
  
  function AlertProvider({ children }) {
    return (
      <GearAlertProvider template={Alert} containerClassName={alertStyles.root}>
        {children}
      </GearAlertProvider>
    );
  }
  
  const providers = [AlertProvider, ApiProvider, AccountProvider];
  
  function withProviders(Component) {
    return () => providers.reduceRight((children, Provider) => <Provider>{children}</Provider>, <Component />);
  }
  
  export { withProviders };
  