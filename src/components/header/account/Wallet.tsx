import React from 'react';
import { AccountsButton } from "./AccountsButton.jsx";
import { Avatar, Dropdown } from 'flowbite-react';
import Identicon from "@polkadot/react-identicon";
import { useAccount } from "@gear-js/react-hooks";

interface WalletProps{
    account: any,
    onClick: any
}

function Wallet({ account, onClick }: WalletProps) {

    const { logout } = useAccount();

    const handleLogout = () => {
        logout()
    }

    return (
        <div className="grid grid-cols-2 gap-2 flex items-right">
            <div className="grid grid-cols-2 gap-2 flex items-center flew-grow">
                <span className="text-white">{account.balance.value}</span>
                <span className="text-white">{account.balance.unit}</span>
            </div>
            <Dropdown
            label={<Identicon value={account.address} size={28} theme="polkadot" className=""/>}
            inline
            arrowIcon={false}
            > 
           <Dropdown.Header>
             <div className="grid grid-cols-2 gap-2 flex items-center">
                
             <Identicon value={account.address} size={28} theme="polkadot" />
             <span className="block text-sm">{account.meta.name}</span>
             </div>
           </Dropdown.Header>
           <Dropdown.Divider />
           <Dropdown.Item onClick={() => handleLogout()}>Sign out</Dropdown.Item>
           </Dropdown>
        </div>
    )
}

export { Wallet }