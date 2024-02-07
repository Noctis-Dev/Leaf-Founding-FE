import React from 'react'
import { useAccount, useApi } from "@gear-js/react-hooks"
import Header from "../components/header/Header"
import {Sobre}  from "../components/Footer/Footer"
import { ApiLoader } from "../components/loaders/ApiLoader"
import {Body} from "../components/Body/Body"

function MainPage (){
    const { isAccountReady } = useAccount()
    const { isApiReady } = useApi()

    return (
        <>
        <Header isAccountVisible={isAccountReady} />
        {isApiReady ? <><Body/></> : <ApiLoader />}
        <Sobre/>

    
        </>
        
    )
}

export default MainPage