
'use client';

import { Button } from 'flowbite-react';
import { HiOutlineArrowRight, HiShoppingCart } from 'react-icons/hi';
import { Pagination } from 'flowbite-react';
import { useState } from 'react';
import { Card } from 'flowbite-react';
import {CardPopular} from '../components/Card/CardPopular'
import linea from "../assets/img/border.png"
import {CardDonation} from '../components/Card/Card'



function Allp(){

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
     
    return(
        <section className="bg-gray-900 dark:bg-gray-900 pt-12 pb-12">
          <div className="mx-auto max-w-screen-xl items-center gap-16 px-4 lg:grid lg:grid-cols-1 lg:px-6 lg:py-16 mt-12 mb-12 ">
            <div className="text-gray-500 dark:text-gray-400 sm:text-lg pt-12 pb-12 mb-12">
                
                <img className='ml-[150px] mt-10 mb-10' src={linea} alt="Not Found " />
              <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-green-500 dark:text-white ml-[400px] py-5">
              TODOS LOS PROYECTOS 
              </h2>
              <p className="mb-12 ml-[315px] text-green-200">
              APOYE A LOS PROYECTOS QUE SE ENCUENTREN CON LA CRIPTOMONEDA              </p>
              <img className='ml-[150px] mb-8 ' src={linea} alt="Not Found " />

              <p>
              </p>


              
            </div>

            

          </div>

          

        <section className="bg-gray-800  dark:bg-gray-900 py-1">
        <form class="flex items-center w-[500px] py-[100px] ml-[150px]">   
    <label for="voice-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
           
        </div>
        <input type="text"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Search " required/>
        
        
        <button type="button" class="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
            </svg>
        </button>
    </div>



    <button type="submit" class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-gren-500   rounded-lg border border-green-500 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-500 dark:bg-green-500 dark:hover:bg-green-500 dark:focus:ring-green-500">
        <svg class="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>Search
    </button>
</form>
            <p className='text-green-500 text-3xl font-bold ml-[150px]'>Explora</p>
        
            <p className='text-gray-700 text-3xl font-bold ml-[268px] mt-[-33px] pb-2'>350 proyectos</p>

            <div className='flex space-x-8 items-center justify-center py-5 pt-11 pb-11'>
              
                <CardDonation team={team1} title={title1} text={text1} price={price1}/>
                <CardDonation team={team1} title={title1} text={text1} price={price1}/>
                <CardDonation team={team1} title={title1} text={text1} price={price1}/>
            </div>
        </section>



  <section className="bg-gray-900  dark:bg-gray-700 pt-12 pb-12"> 
              <div className='flex space-x-8 items-center justify-center pt-12 pb-12'>
                <CardDonation team={team1} title={title1} text={text1} price={price1}/>
                <CardDonation team={team1} title={title1} text={text1} price={price1}/>
                <CardDonation team={team1} title={title1} text={text1} price={price1}/>
              </div>
                
  </section>








</section>  
  )      
}

export {Allp}