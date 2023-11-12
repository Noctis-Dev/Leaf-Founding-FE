import { Modal } from "@gear-js/ui";
import { Accounts } from "./Accounts";

function AccountsModal({ accounts, close }) {
    return (
        <Modal heading='Connect' close={close} className="flex justify-center justify-items-center">
            {accounts ? (
                <Accounts list={accounts} onChange={close} />
            ) : (
                <p>
                    Wallet extension was not found or disconnected. Please check how to install a supported wallet and create an
                    account
                    {' '}
                    <a href='https://wiki.gear-tech.io/docs/idea/account/create-account' target='_blank' rel='noreferrer'
                        className='link-text'>
                        here
                    </a>.
                </p>
            )}
        </Modal>
    )
}

export { AccountsModal }