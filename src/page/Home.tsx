import React from 'react';
import { Button, } from 'flowbite-react';
import { HiOutlineArrowRight, HiShoppingCart } from 'react-icons/hi';
import { useApi, useAlert } from "@gear-js/react-hooks";
import { ProgramMetadata } from "@gear-js/api";
import { Pagination } from 'flowbite-react';
import {CardPopular} from '../components/Card/CardPopular'
import {CardDonation} from '../components/Card/Card'
import {CardHorizontal} from '../components/Card/CardHorizontal'
import { useState, useEffect } from 'react';
import { AnyJson } from '@polkadot/types/types';


function Home(){

  const { api } = useApi();

  const alert = useAlert();

  const [fullState, setFullState] = useState<AnyJson>();

  const programIDFT = "0xdeca7bd098f6cbee049d0919e3fff73e1f0fa3ec9a083c9d644f86362a3b8613";
  const meta2 = "00020000000100000000010100000000000000000103000000fd0528000808696f18416374696f6e00010c2c48656c6c6f416374696f6e0000003443726561746550726f6a6563740801106e616d65040118537472696e6700012c6465736372697074696f6e040118537472696e670001003455706461746550726f6a6563740c01086964080110753132380001106e616d65040118537472696e6700012c6465736372697074696f6e040118537472696e67000200000400000502000800000507000c0808696f444c656166436f6e74726163745374617465000004012070726f6a656374731001505665633c28753132382c2050726f6a656374293e00001000000214001400000408081800180808696f1c50726f6a65637400000c01146f776e65721c011c4163746f7249640001106e616d65040118537472696e6700012c6465736372697074696f6e040118537472696e6700001c10106773746418636f6d6d6f6e287072696d6974697665731c4163746f724964000004002001205b75383b2033325d000020000003200000002400240000050300";
  
  const metadata = ProgramMetadata.from(meta2);

  const getState = () => {

    api.programState.read({
      programId: programIDFT,
      payload: ""
    }, metadata ).then((result) => {
      setFullState(result.toJSON());
      alert.success("Successful state");
    })
    .catch(({ message }) => alert.error(message))
  };

  console.log(" " + programIDFT + " " + JSON.stringify(fullState))


  const text1 = "Leef Project es un proyecto enfocado a la recuperación de la flora y fauna de diversas zonas de Chiapas, el objetivo es recuperar la mayor parte de los hábitats el estado."
  const text2 = "EcoRescate es un ambicioso proyecto dedicado a la recuperación y preservación de la rica biodiversidad de la selva amazónica en Brasil una región vital para la vida silvestre. "
  const text3 = "AquaVida es un proyecto dedicado a la recuperación de los ecosistemas acuáticos en el Delta del Misisipi, una región vital para la vida silvestre y la salud de los ríos y humedales."
  const text4 = "El proyecto Bosque Renaciente es una iniciativa apasionada enfocada en la recuperación de la selva tropical en Costa Rica, uno de los países más ricos en biodiversidad del mundo."

  const team1 = "LeefTeam "
  const team2 = "AquaVipe"
  const team3 = "CarrotState"
  const team4 = "Javapapus"

  const title1 = "Leef Project "
  const title2 = "EcoRescate"
  const title3 = "AquaVida"
  const title4 = "Bosque Renaciente"

  const price1 = 500;
  const price2 = 1500;
  const price3 = 3500;
  const price4 = 2500;
  
  const cardsDonation = [<CardDonation team={team1} title={title1} text={text1} price={price1} />, <CardDonation text={text1} team={team2} title={title2} price={price2}/>, <CardDonation text={text3} team={team3} title={title3} price={price3} />, <CardDonation  text={text4} team={team4} title={title4} price={price4} />];

  const cardsDonationN = [<CardDonation team={team1} title={title1} text={text1} price={price1} />,<CardDonation team={team1} title={title1} text={text1} price={price1} />,<CardDonation team={team1} title={title1} text={text1} price={price1} />, <CardDonation team={team1} title={title1} text={text1} price={price1} />, <CardDonation text={text1} team={team2} title={title2} price={price2}/>, <CardDonation text={text3} team={team3} title={title3} price={price3} />, <CardDonation  text={text4} team={team4} title={title4} price={price4} />];

  const [index, setIndex] = useState(0);
  const cards = [<CardHorizontal text={text1} team={team1} title={title1}/>, <CardHorizontal text={text2} team={team2} title={title3}/>, <CardHorizontal text={text3} team={team3} title={title3}/>, <CardHorizontal text={text4} team={team4} title={title4}/>]; // Tus tarjetas

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 2) % cards.length);
    }, 6000); 
  
    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, [cards.length]);
  


  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: React.SetStateAction<number>) => setCurrentPage(page);

  const startIndex = (currentPage - 1) * 2;
  const endIndex = startIndex + 2;

  const [currentPage2, setCurrentPage2] = useState(1);

  const onPageChange2 = (page: React.SetStateAction<number>) => setCurrentPage2(page);

  const startIndex2 = (currentPage2 - 1) * 3;
  const endIndex2 = startIndex2 + 3;
     
    return(
        <section className="bg-gray-900 pt-12">
          <div className="mx-auto max-w-screen-xl items-center gap-16 px-4 py-8 lg:grid lg:grid-cols-2 lg:px-6 lg:py-16">
            <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
              <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-green-500 dark:text-white">
              No reinventamos la rueda
              </h2>
              <p className="mb-8">
              Juntos, creamos un futuro más sostenible. Nuestro equipo de expertos en contratos inteligentes y proyectos verdes se compromete a ser tu socio en la innovación. Somos lo suficientemente pequeños para ser ágiles, pero lo suficientemente grandes para impulsar tu visión a la velocidad del cambio que el mundo necesita.
              </p>
              <div className="flex flex-wrap gap-2 w-121">
                <Button className='bg-green-500 text-gray-800 mt-9' onClick={getState}>
                    Explora Proyectos
                    <HiOutlineArrowRight className="ml-2 h-5 w-5 " />
                </Button>
            </div>
              <p>
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 pb-12">
              <img
                alt=""
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                className="w-full rounded-lg"
              />
              <img
                alt=""
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                className="mt-4 w-full rounded-lg lg:mt-10 mb-4"
              />
            </div>
            

          </div>

    <section className="bg-gray-800 dark:bg-gray-900 py-12  ">
      <div className="flex justify-end py-5 text-green-900 bg-gree-900">
        <Pagination className=' mr-[153px]' currentPage={currentPage} totalPages={Math.ceil(cardsDonation.length / 2)} onPageChange={onPageChange} />
      </div>
      <div className='flex space-x-8 items-center justify-center'>
        <CardPopular/>
        {cardsDonation.slice(startIndex, endIndex)}
      </div>
    </section>
  <section className="bg-gray-900  dark:bg-gray-900 mx-10 max-w-screen-xl"> 
    <div className= "items-center py-8 lg:grid lg:grid-cols-2 lg:mx-11 lg:py-16">
      <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-green-500 dark:text-white mt-[-200px] ml-[70px]">
          La filantropía necesita más innovación.
        </h2>
        <p className="mb-5 ml-[70px]">
          ¿Y si los acuerdos fueran mutuamente beneficiosos y las iniciativas sostenibles maximizaran su impacto financiero?
          <br />
          <br />  
          Nuestra aplicación está allanando un camino nuevo y emocionante con una plataforma basada en contratos inteligentes, impulsada por la
          comunidad , aprovechando la tecnología blockchain para unir proyectos verdes con oportunidades de financiamiento regenerativo.    
        </p>

      </div>
        <div className='bg-green-500 w-[1224px] h-[131px]  ml-[-530px] mt-[490px] rounded-md'>        

          <p className='font-extrabold text-gray-800 text-4xl flex  ml-[150px] py-8'>73M+ </p>
          <p className='font-extrabold text-gray-800 text-xl  ml-[150px] mt-[-25px] '>Proyectos </p>

          <p className='font-extrabold text-gray-800 text-4xl flex  ml-[490px] mt-[-75px]'>$8,461,000 </p>
          <p className='font-extrabold text-gray-800 text-xl  ml-[490px] mt-[5px] '>Donado a proyectos </p>

          <p className='font-extrabold text-gray-800 text-4xl flex  ml-[950px] mt-[-75px]'>6000+ </p>
          <p className='font-extrabold text-gray-800 text-xl  ml-[890px] mt-[5px] '>Numero de donadores</p>
        </div>
      </div>
  </section>

  <section className="bg-gray-800  dark:bg-gray-900 py-12">
      <div className='row'>
        <h2 className="text-4xl font-extrabold tracking-tight text-green-500 dark:text-white mb-9 ml-[160px]">
        Proyectos        
        </h2>
        <p className="mb-6 text-gray-400 dark:text-gray-400 md:text-lg  ml-[160px]">
        Tenemos la capacidad de ofrecer apoyo a una variedad de proyectos. <br />A continuación, presentamos algunos de los emocionantes proyectos a <br />los que podemos brindar nuestro respaldo.        
        </p>
        <div className="flex justify-end py-8 text-green-900 bg-gree-900">
        <Pagination className=' mr-[153px]' currentPage={currentPage2} totalPages={Math.ceil(cardsDonation.length / 2)} onPageChange={onPageChange2} />
      </div>  
      </div>
    <div className='flex space-x-8 items-center justify-center'>
      {cardsDonationN.slice(startIndex2, endIndex2)}
    </div>
  </section>
  
  <section className="bg-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
        <img
          alt=""
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
          className="w-full dark:hidden"
        />
        <img
          alt=""
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
          className="hidden w-full dark:block"
        />
        <div className="mt-4 md:mt-0">
          <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-green-500 dark:text-white">
          ¿Qué es LeefProject?.
          </h2>
          <p className="mb-6 text-gray-400 dark:text-gray-400 md:text-lg">
          LeefProject es una plataforma innovadora que conecta proyectos sostenibles y contratos inteligentes. Utilizando tecnología blockchain, facilitamos el acceso a financiamiento regenerativo de manera transparente y eficiente. Nuestra misión es promover la colaboración y la inversión en iniciativas sostenibles, impulsando un futuro más ecológico y equitativo.
          </p>
        </div>
      </div>
    </section>
    
    <section className="bg-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
      <div className="mt-4 md:mt-0">
          <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-green-500 dark:text-white">
            Donaciones con recompensas.
          </h2>
          <p className="mb-6 text-gray-400 dark:text-gray-400 md:text-lg">
          Creemos en la armonía entre la filantropía y la sostenibilidad. LeefProject es una plataforma de donaciones sin tarifas y un ecosistema de comunidades comprometidas con la sostenibilidad. Unimos personas, organizaciones y proyectos verdes para maximizar el impacto y canalizar recursos hacia las necesidades más apremiantes, promoviendo la transparencia en todo momento.
          </p>
        </div>
        <img
          alt=""
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
          className="w-full dark:hidden"
        />
        <img
          alt=""
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
          className="hidden w-full dark:block"
        />
      </div>
    </section>
      
    <section className="bg-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
        <img
          alt=""
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
          className="w-full dark:hidden"
        />
        <img
          alt=""
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
          className="hidden w-full dark:block"
        />
        <div className="mt-4 md:mt-0">
          <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-green-500 dark:text-white">
          Proyectos ecológicos.
          </h2>
          <p className="mb-6 text-gray-400 dark:text-gray-400 md:text-lg">
          LeefProject lidera la evolución de la filantropía y los proyectos ecológicos. Impulsamos un cambio positivo en la sociedad y el medio ambiente al permitir que las donaciones generen beneficios mutuos. Si deseas formar parte de un movimiento global que impulsa la sostenibilidad a través de contratos inteligentes y colaboración comunitaria, LeefProject es tu destino.          
          </p>
        </div>
      </div>
    </section>
    
    <section className='py-12  bg-gray-800 px-12'>
      <div className='row flex justify-center py-2'>
        <h2 className="text-4xl font-extrabold tracking-tight text-green-500 dark:text-white mb-9">
        Nuevos proyectos        
        </h2>
      </div>
      <div>
      <p className="flex text-gray-400 dark:text-gray-400 md:text-lg justify-center">
        Estos son los proyectos creados en las ultimas horas, estos te pueden 
      </p>
      <p className="flex text-gray-400 dark:text-gray-400 md:text-lg justify-center ">
        llamar tu atencion.
      </p>
      </div>
      <div className='flex space-x-4 justify-center py-12 px-12'>
      {cards[index]}
      {cards[(index + 1) % cards.length]}
      </div>
    </section>
</section>  
  )      
}

export {Home}