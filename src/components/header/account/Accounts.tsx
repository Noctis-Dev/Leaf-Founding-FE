import React from 'react';
import { useAccount } from "@gear-js/react-hooks";
import { useAccountStore } from "../../../store/accountStore";
import { AccountsButton } from "./AccountsButton";

interface AccountsProps {
    list: any[]; // Reemplaza 'any' con el tipo correcto de los elementos de tu lista
    onChange: (account: any) => void; // Reemplaza 'any' con el tipo correcto de 'account'
}


function Accounts({ list, onChange }: AccountsProps) {
    const { login } = useAccount();
    const isAnyAccount = list.length > 0;
    const { setAccount } = useAccountStore() as { setAccount: (account: any) => void };

    const handleLogin = (account: any) =>  {
        login(account);
        setAccount(account);
        onChange(account);
    };

    const getAccounts = () => {
        return list.map((account) => {
            return (
                <li key={account.address} className="flex w-full">
                    <AccountsButton account={account} name={account.meta.name} onClick={() => handleLogin(account)} isAlive={10} block={10}></AccountsButton>
                </li>
            )
        })
    };

    return isAnyAccount ? (
        <ul className="flex w-full grid grid-flow-row auto-rows-max">{getAccounts()}</ul>
    ): (
        <p>No accounts</p>
    )
}

export { Accounts }