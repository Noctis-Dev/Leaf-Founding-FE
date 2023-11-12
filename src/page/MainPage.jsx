import { useAccount, useApi } from "@gear-js/react-hooks"
import Header from "../components/header/Header.jsx"
import {Sobre}  from "../components/Footer/Footer.jsx"
import { ApiLoader } from "../components/loaders/ApiLoader.jsx"
 
import {Body} from "../components/Body/Body.jsx"

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