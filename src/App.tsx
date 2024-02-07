import React from 'react'
import { withProviders } from './hocs/index';
import MainPage from './page/MainPage'
import { GearApi } from '@gear-js/api';


function App() {

  /* async function connect() {
    const gearApi = await GearApi.create({
      providerAddress: 'wss://testnet.vara-network.io',
    });
  
    const [chain, nodeName, nodeVersion] = await Promise.all([
      gearApi.chain(),
      gearApi.nodeName(),
      gearApi.nodeVersion(),
    ]);
  
    console.log(
      `You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`,
    );
  
    const unsub = await gearApi.gearEvents.subscribeToNewBlocks((header) => {
      console.log(
        `New block with number: ${header.number.toNumber()} and hash: ${header.hash.toHex()}`,
      );
    });
  }
  
  connect().catch(console.error);
 
  */
  return (
    <>
     <MainPage></MainPage>
    </>
  )
}

const AppWithProviders = withProviders(App);

export default AppWithProviders;

