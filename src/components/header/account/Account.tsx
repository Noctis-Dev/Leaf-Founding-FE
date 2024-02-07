import React from 'react';
import { useState } from "react";
import { useAccount } from "@gear-js/react-hooks";
import { Wallet } from "./Wallet";
import { Button } from "@gear-js/ui";
import { AccountsModal } from "./AccountsModal";

function Account() {
    const { account, accounts } = useAccount();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
        {console.log(account)}
            {account ? (
                <Wallet account={account} onClick={openModal}/>
            ) : (
                <Button text="sign-in" onClick={openModal} />
            )}
            {isModalOpen && <AccountsModal accounts={accounts} close={closeModal} />}
        </>
    )
}

export { Account }