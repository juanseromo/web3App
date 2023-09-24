'use client'
import {GalleriesSelectedI, WalletI} from "./types/types";

import Login from "./components/Login";
import RegisterWalletDialog from "./components/RegisterWalletDialog";
import {YourGalleriesList} from "./components/YourGalleriesList";
import {Logo} from "./components/Logo";
import {UserHeader} from "./components/UserHeader";
import {FootActions} from "./components/FootActions";


import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig, useAccount, useContractRead } from 'wagmi';
import { xdc, xdcTestnet } from 'wagmi/chains';

const userIsRegistered = true//walletsRegistered.find(v => v.wallet === userIsLoggedIn.walletId)

const userIsLoggedIn:WalletI = {
  walletId: '1324r5049i49039iru',
  selectedGalleries: [{
    id: 234,
    name: 'wallet2',
    address: '2st 39av',
    schedule: 'From 10am to 6pm',
    wallet: '0x0933132idsaasdff'
  }],
  type: 'Gallery'
};

const walletsRegistered:GalleriesSelectedI[] = [
  {
    id: 123,
    name: 'wallet1',
    address: '12st 39av',
    schedule: 'From 10am to 6pm',
    wallet: '0x0933132idsf'
  },
  {
    id: 234,
    name: 'wallet2',
    address: '2st 39av',
    schedule: 'From 10am to 6pm',
    wallet: '0x0933132idsaasdff'
  },
];

const chains = [ xdc, xdcTestnet ]
const projectId = '77425931eba18bd4d302843320315276'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

const getAllGalleries = walletsRegistered

function RenderInitialComponent ({userIsLoggedIn}: any) {
  if (!userIsLoggedIn) {
    return <Login/>
  }
  if (!userIsRegistered) {
    return <RegisterWalletDialog />
  }
  if (!!userIsLoggedIn && userIsRegistered) {
    if (userIsLoggedIn.type === 'Gallery') {
      return <div className='flex flex-col'>
        <YourGalleriesList
            allGalleries={getAllGalleries}
            selectedGalleries={userIsLoggedIn.selectedGalleries}
        />
      </div>
    }
  }
}
export default function Home() {
  // const user = useContractRead()
  //
  // console.log({user})
  return (
      <div style={{
        fontFamily: "system-ui, sans-serif", lineHeight: "1.8"
      }}
           className='container p-5 bg-gray-50 text-gray-900'
      >
        <Logo/>
        <WagmiConfig config={wagmiConfig}>
          <UserHeader user={userIsLoggedIn} walletId={userIsLoggedIn && userIsLoggedIn.walletId}/>
          <RenderInitialComponent userIsLoggedIn={false}/>
          <FootActions
              user={userIsLoggedIn}
              walletId={userIsLoggedIn && userIsLoggedIn.walletId}
              registerWalletDialog={false}
              addGallery={true}
          />
        </WagmiConfig>

        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />

      </div>
  )
}
