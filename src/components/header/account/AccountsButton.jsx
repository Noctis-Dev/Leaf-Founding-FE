import { Button } from "flowbite-react";
import Identicon from "@polkadot/react-identicon";
import { Avatar, Dropdown } from 'flowbite-react';
import { useAccountStore } from "../../../store/accountStore";
import { useAccount } from "@gear-js/react-hooks";

function AccountsButton({ account={account}, name, onClick, isAlive, block }) {
    return (
    <>
        <Button onClick={onClick} className="mt-2 w-full flex items-center justify-start space-x-4 bg-emerald-800 text-white" color="succes">
            <Identicon value={account.address} size={28} theme="polkadot" />
            <h1 className="flex-grow ml-5">{name}</h1>
        </Button>
      </>
    )
}

export { AccountsButton }