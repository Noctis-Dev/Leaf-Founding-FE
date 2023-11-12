import { useEffect, useState } from 'react';
import { useAccount, useApi, useAlert } from "@gear-js/react-hooks";
import { web3FromSource } from "@polkadot/extension-dapp";
import { ProgramMetadata } from '@gear-js/api';
import { PROGRAM } from "../const";

    function CrearProyecto(){


        
        var message;

        const alert = useAlert();
        const { accounts, account } = useAccount();
        const { api } = useApi();

        console.log(PROGRAM)

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
                    createProject: {
                        title: title,
                        description: description,
                        construction_goals: 5,
                        founding_goal: 5000,
                        urls: ["asdfadsf", "asdfasdf"]
                    }
                },
                gasLimit: 899819245,
                value: 0,
            },
            
            console.log(message)
            signer();
        }

        const [title, setTitle] = useState("");

        const TitleInputChange = (event) => {
            setTitle(event.target.value);
        };

        const [description, setDescription] = useState("");
        const DescriptionInputChange = (event) => {
            setDescription(event.target.value);
        };

        const [image, setImage] = useState(null);
        const handleImageChange = (event) => {
            setImage(event.target.files[0]);
          };


        return(
            <>
                <div className="container auto-cols-auto gap-4 bg-gray-900">
                    <form className="w-1/2 ml-[110px] pt-11">
                        <p className=" text-3xl text-green-500 font-bold mb-11 pt-11">CREAR PROYECTO</p> 
                        <div class="mb-11">
                            <label for="title"  className="block text-xl text-green-400 font-bold pt-8 mb-5">Nombre del proyecto</label>
                            <input type="text" value={title} onChange={TitleInputChange} id="title" className="border-gray-800 bg-gray-600 shadow-sm border text-gray-900 text-sm rounded-lg focus:ring-border-gray-900 focus:border-gray-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-gray-900 dark:focus:border-gray-900 dark:shadow-sm-light" placeholder="Mi primer proyecto" />
                        </div>
                        <label  className="block text-xl text-green-400 font-bold pt-4 mb-5">Hablanos de tu proyecto...</label>
                        <div class="w-full mb-4 border border-gray-800 rounded-lg bg-gray-700 dark:bg-gray-700 dark:border-gray-600">
                            <div class="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
                                <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
                                    <div class="flex items-center space-x-1 sm:pr-4">
                                    <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                                                <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"/>
                                            </svg>
                                        <span class="sr-only">Attach file</span>
                                    </button>
                                    <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
                                            </svg>
                                        <span class="sr-only">Embed map</span>
                                    </button>
                                    <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
                                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                                            </svg>
                                        <span class="sr-only">Upload image</span>
                                    </button>
                                    <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
                                                <path d="M14.067 0H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.933-2ZM6.709 13.809a1 1 0 1 1-1.418 1.409l-2-2.013a1 1 0 0 1 0-1.412l2-2a1 1 0 0 1 1.414 1.414L5.412 12.5l1.297 1.309Zm6-.6-2 2.013a1 1 0 1 1-1.418-1.409l1.3-1.307-1.295-1.295a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-.001 1.408v.004Z"/>
                                            </svg>
                                            <span class="sr-only">Format code</span>
                                    </button>
                                    <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5Z"/>
                                            </svg>
                                        <span class="sr-only">Add emoji</span>
                                    </button>
                                </div>
                                        <div class="flex flex-wrap items-center space-x-1 sm:pl-4">
                                            <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 18">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.5 3h9.563M9.5 9h9.563M9.5 15h9.563M1.5 13a2 2 0 1 1 3.321 1.5L1.5 17h5m-5-15 2-1v6m-2 0h4"/>
                                                    </svg>
                                                <span class="sr-only">Add list</span>
                                            </button>
                                            <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z"/>
                                                    </svg>
                                                <span class="sr-only">Settings</span>
                                            </button>
                                            <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M18 2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM2 18V7h6.7l.4-.409A4.309 4.309 0 0 1 15.753 7H18v11H2Z"/>
                                                        <path d="M8.139 10.411 5.289 13.3A1 1 0 0 0 5 14v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .7-.288l2.886-2.851-3.447-3.45ZM14 8a2.463 2.463 0 0 0-3.484 0l-.971.983 3.468 3.468.987-.971A2.463 2.463 0 0 0 14 8Z"/>
                                                    </svg>
                                                <span class="sr-only">Timeline</span>
                                            </button>
                                            <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
                                                        <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                                                    </svg>
                                                <span class="sr-only">Download</span>
                                            </button>
                                        </div>
                                    </div>
                                    <button type="button" data-tooltip-target="tooltip-fullscreen" class="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 1h5m0 0v5m0-5-5 5M1.979 6V1H7m0 16.042H1.979V12M18 12v5.042h-5M13 12l5 5M2 1l5 5m0 6-5 5"/>
                                            </svg>
                                        <span class="sr-only">Full screen</span>
                                    </button>
                                    <div id="tooltip-fullscreen" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                        Show full screen
                                        <div class="tooltip-arrow" data-popper-arrow></div>
                                    </div>
                                </div>
                                <div class="px-4 py-2 bg-gray-600 rounded-b-lg dark:bg-gray-800">
                                    <label for="editor" class="sr-only">Publish post</label>
                                    <textarea id="editor" value={description} onChange={DescriptionInputChange} rows="8" class="block w-full px-0 text-sm text-gray-800 bg-gray-600 border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write an article..."></textarea>
                                </div>
                            </div>
                            <label  className="block mb-5 pt-8 text-xl text-green-400 font-bold">Agrega una imagen de tu proyecto</label>
                            <div class="flex items-center justify-center w-full">
                                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-700 border-dashed rounded-lg cursor-pointer bg-gray-600 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-600 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <div class="flex flex-col items-center justify-center pt-5 pb-6 bg-gray-600">
                                        <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400 bg-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                        </svg>
                                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400 bg-gray-600"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <input id="dropzone-file" type="file" class="hidden" onChange={handleImageChange}/>
                                </label>
                            </div> 
                            <div class="mb-6">
                                <label for="resp" class="block mb-5  pt-8 text-xl text-green-400 font-bold mt-8 ">Responsable</label>
                                <input type="text" id="resp" class="shadow-sm bg-gray-600 border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                            </div>
                            <label for="resp" class="block mb-5 pt-8 text-xl text-green-400 font-bold mt-8">Identificate con tu llave</label>
                            <form class="flex items-center">   
                                <div class="relative w-3/4">
                                    <input type="text" class="bg-gray-600 border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-600 dark:focus:border-blue-500" placeholder="Key"/>
                                </div>
                                <p className="text-xl text-green-400 font-bold ml-7 mr-7">o</p>
                                <button type="submit" class="flex flex-grow p-2.5 ml-2 text-md font-medium text-gray-800 bg-green-500 justify-center rounded-lg focus:ring-4 focus:outline-none focus:ring-green-600">
                                    llave
                                </button>
                            </form>
                            <div class="flex items-start mb-6 mt-8">
                                <div class="flex items-center h-5">
                                <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"/>
                                </div>
                                <label for="terms" class="ml-2 text-sm font-medium text-white dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                            </div>
                            <div className="flex items-start mt-5 gap-6 pb-7">
                                <button type="button"  onClick={handlesaveClick} class="w-1/4 h-10 p-2.5 text-md font-medium text-gray-800 bg-green-500 justify-center rounded-md focus:ring-4 focus:outline-none focus:ring-green-600">
                                        Publicar
                                </button>

                                <button type="button" class="mb-11 w-1/4 flex items-center justify-center text-gray-400 bg-slate-700 hover:bg-red-700 border border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2">
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-4 mr-2 -ml-1 w-7">
                                    <path d="M8.41152 7.5L13.6952 2.21628C13.7906 2.12419 13.8666 2.01404 13.919 1.89225C13.9713 1.77046 13.9988 1.63947 14 1.50692C14.0011 1.37438 13.9759 1.24293 13.9257 1.12025C13.8755 0.997564 13.8013 0.886108 13.7076 0.79238C13.6139 0.698652 13.5024 0.624529 13.3798 0.574336C13.2571 0.524143 13.1256 0.498886 12.9931 0.500038C12.8605 0.501189 12.7295 0.528727 12.6078 0.581045C12.486 0.633362 12.3758 0.709411 12.2837 0.804753L7 6.08848L1.71628 0.804753C1.528 0.622915 1.27584 0.522296 1.01411 0.524571C0.752369 0.526845 0.501997 0.63183 0.316913 0.816913C0.13183 1.002 0.0268452 1.25237 0.0245708 1.51411C0.0222964 1.77584 0.122915 2.028 0.304753 2.21628L5.58848 7.5L0.304753 12.7837C0.209411 12.8758 0.133362 12.986 0.0810446 13.1078C0.0287274 13.2295 0.00118949 13.3605 3.76909e-05 13.4931C-0.0011141 13.6256 0.0241431 13.7571 0.0743358 13.8798C0.124529 14.0024 0.198652 14.1139 0.29238 14.2076C0.386108 14.3013 0.497564 14.3755 0.620245 14.4257C0.742926 14.4759 0.874375 14.5011 1.00692 14.5C1.13947 14.4988 1.27046 14.4713 1.39225 14.419C1.51404 14.3666 1.62419 14.2906 1.71628 14.1952L7 8.91152L12.2837 14.1952C12.472 14.3771 12.7242 14.4777 12.9859 14.4754C13.2476 14.4732 13.498 14.3682 13.6831 14.1831C13.8682 13.998 13.9732 13.7476 13.9754 13.4859C13.9777 13.2242 13.8771 12.972 13.6952 12.7837L8.41152 7.5Z" fill="#9CA3AF"/>
        </svg>
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                </>
            )
        }

        export {CrearProyecto}