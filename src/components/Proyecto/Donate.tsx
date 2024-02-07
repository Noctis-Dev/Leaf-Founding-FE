import { Button } from 'flowbite-react';
import { HiOutlineArrowRight, HiShoppingCart } from 'react-icons/hi';
import { Card } from 'flowbite-react';
import { ToggleSwitch } from 'flowbite-react';
import ImageDonate from '/src/assets/img/people.png';
import { Dropdown } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useAccount, useApi, useAlert } from "@gear-js/react-hooks";
import { web3FromSource } from "@polkadot/extension-dapp";
import { ProgramMetadata } from '@gear-js/api';


function Donate(){
       
  var message;

  const alert = useAlert();
  const { accounts, account } = useAccount();
  const { api } = useApi();

  const programIDFT = "0x4b06a36587034fc8ca7b98082dbd2c7e53b5f977aefa623398fa90cc9fe3a245";
  const meta2 =
  "0001000100000000000104000000010900000000000000010d000000711148000808696f18496e69744654000004013466745f70726f6772616d5f696404011c4163746f72496400000410106773746418636f6d6d6f6e287072696d6974697665731c4163746f724964000004000801205b75383b2033325d000008000003200000000c000c0000050300100808696f4c4c65616674436f6e7472616374416374696f6e00011818446f6e617465080014010c75333200001801107531323800000020465443726561746504001801107531323800010024465444657374726f790400180110753132380002002846545472616e7366657204001801107531323800030040446f6e6174696f6e5265676973747279040014010c7533320004003443726561746550726f6a6563741401147469746c651c0118537472696e6700012c6465736372697074696f6e1c0118537472696e67000148636f6e737472756374696f6e5f676f616c7318011075313238000134666f756e64696e675f676f616c1801107531323800011075726c7320012c5665633c537472696e673e000500001400000505001800000507001c0000050200200000021c00240808696f484c65616674436f6e74726163744576656e74000120405375636365737366756c437265617465000000445375636365737366756c44657374726f79000100485375636365737366756c5472616e736665720002005c5375636365737366756c43726561746550726f6a65637404011c70726f6a65637428011c50726f6a6563740003004c5375636365737366756c42616c616e63654f6604011c62616c616e636518011075313238000400485375636365737366756c446f6e6174696f6e040118616d6f756e7418011075313238000500384661696c6564446f6e6174696f6e04011c6d6573736167651c0118537472696e67000600685375636365737366756c446f6e6174696f6e526567697374727904012072656769737472792c01345665633c446f6e6174696f6e3e00070000280808696f1c50726f6a65637400001c0118617574686f7204011c4163746f7249640001147469746c651c0118537472696e6700012c6465736372697074696f6e1c0118537472696e67000148636f6e737472756374696f6e5f676f616c7318011075313238000134666f756e64696e675f676f616c18011075313238000144646f6e6174696f6e735f62616c616e63651801107531323800011075726c7320012c5665633c537472696e673e00002c0000023000300808696f20446f6e6174696f6e000008012c646f6e6174696f6e5f696414010c753332000118616d6f756e74180110753132380000340808696f444c656166436f6e7472616374537461746500000c012070726f6a6563747338014c5665633c287533322c2050726f6a656374293e000144646f6e6174696f6e5f72656769737472794001645665633c287533322c205665633c446f6e6174696f6e3e293e0001347363726f775f62616c616e6365180110753132380000380000023c003c000004081428004000000244004400000408142c00";

  const metadata = ProgramMetadata.from(meta2);

  const signer = async () => {
      const localaccount = account?.address;
      const isVisibleAccount = accounts.some((visibleAccount) => visibleAccount.address === localaccount);

      if (isVisibleAccount) {
      // Create a message extrinsic
      const transferExtrinsic = await api.message.send(message, metadata);

      const injector = await web3FromSource(accounts[0].meta.source);

      transferExtrinsic.signAndSend(
          accounts[0].address,
          { signer: injector.signer },
          ({status}) => {
              if (status.isInBlock) {
                  alert.success(status.asInBlock.toString());
              } else {
                  if (status.type === "Finalized") {
                      alert.success(status.type);
                  }
              }
          }
      )
      .catch((error) => {
          console.log(":( transaction failed", error);
          });
      } else {
      alert.error("Account not available to sign");
      }
  };

  const handlesaveClick = () => {
      message = {
          destination: programIDFT, 
          source: account?.address,
          payload: {
            donate: [
              donate,
              32
          ],
          },
          gasLimit: 899819245,
          value: 0,
      },
      
      console.log(message)
      signer();
  }

  const [donate, setDonate] = useState();

  const DonateInputChange = (event) => {
    let donate = Number(event.target.value);
    // Comprobamos si el valor es un número o no
    if (isNaN(donate)) {
        // Si no es un número, mostramos un mensaje de error o hacemos algo más
        console.log("El valor no es un número válido");
    } else {
        // Si es un número, lo guardamos en el estado
        setDonate(donate);
    }
  };

  const [switch1, setSwitch1] = useState(false);
    
  return (
  <section className="bg-gray-800 dark:bg-gray-900 grid grid-cols-2 mx-11 ml-11 mr-11"> 
      <Card
          imgAlt='hola'
          imgSrc={ImageDonate}
          className=' bg-gray-900 border-gray-800 '
      >
          <a href="">
            <span className=" mr-2 rounded bg-green-300 px-2.5 text-xs font-semibold text-gray-700 py-1">
              Leefteam
            </span>
          </a>
          
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white py-3">
              LeefProject
              </h5>
              <h5 className="text-base font-normal tracking-tight text-gray-300 dark:text-white py-2">
              Leef Project es un proyecto enfocado a la recuperación de la flora y fauna de diversas zonas de Chiapas, el objetivo es recuperar la mayor parte de los hábitats el estado.
              </h5>

          <span className="text-3xl font-bold text-white dark:text-white">$599</span>
          <a href="#">
          
          <span className=" mr-2 rounded bg-green-200 px-2.5 text-xs font-semibold text-gray-700 dark:bg-cyan-200 dark:text-gray-700 py-1">
          Total recaudado
              </span>
          </a>
      </Card>
  <Card className='bg-gray-700 border-gray-700 flex flex-col items-start' >
        <h1 className="text-2xl font-bold tracking-tight text-white dark:text-white mt-8">
          Donar
        </h1>
        <form>
            <div class="flex mt-8">
              <div className='flex-shrink-0 z-10 inline-flex items-start py-2.5 px-4 text-sm font-medium bg-green-500 text-center text-gray-900 rounded-l-lg focus:ring-4 focus:outline-none focus:ring-gray-300'>
                <Dropdown  label="Seleccion token" dismissOnClick={false} inline>
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                  <Dropdown.Item>Settings</Dropdown.Item>
                  <Dropdown.Item>Earnings</Dropdown.Item>
                  <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
              </div>
              <div class="relative w-3/4">
                  <input onChange={DonateInputChange} type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 rounded-r-lg border-l-gray-100 border-l-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 bg-gray-600" placeholder="Importe" required />
              </div>
            </div>
        </form>
        <p className="font-normal text-gray-400">
          Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.
        </p>
        <a href="">
          <span className="mr-2 rounded bg-green-200 px-2.5 py-0.5 text-xs font-bold text-gray-700 dark:bg-cyan-200 dark:text-cyan-800">
          Tu donacion sera de 700 TVARA
          </span>
        </a>
        <div className="flex max-w-md flex-col gap-4 mt-10">
          <div className="flex gap-2">
            <ToggleSwitch color='green' checked={switch1} onChange={setSwitch1} />
            <h2 className="text-white">Donar de forma  anonima</h2>
          </div>
          <p className="text-gray-400">Si lo compruebas, ocultaremos tu nombre y el enlace de la transacción 
            de donación de la página del proyecto, y no mostraremos esta donación 
            en tu página de perfil público.
            </p>
        </div>
            <div className="flex items-center justify-between mt-16">
              <a
              href="#"
              className="rounded-lg bg-green-500 hover:bg-green-800 px-5 py-2.5 text-center text-sm font-medium text-gray-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-full"
              onClick={handlesaveClick}
              >
              Donar
              </a>
          </div>
      </Card>
      
              
  </section>
  );
}

export {Donate};