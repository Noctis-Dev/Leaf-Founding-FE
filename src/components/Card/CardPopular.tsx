'use client';
import React from 'react'; 
import { Button, Card } from 'flowbite-react';
import { HiOutlineArrowRight, HiShoppingCart } from 'react-icons/hi';

function CardPopular() {
  return (
    <div>
        <Card
        className="max-w-sm bg-gray-900 border-gray-800" 
        >
        <a href="#">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            PROYECTOS MAS POPULARES
            </h5>
            <h5 className="text-5xl font-bold tracking-tight text-green-500 dark:text-white my-12">
            PROYECTOS MAS POPULARES
            </h5>
            <h5 className="text-base font-normal tracking-tight text-gray-300 dark:text-white py-2">
            Estos son los proyectos que mas han resaltado en las ultimas semanas  apóyalos para seguir adelante.
            </h5>
        </a>
        <div className="flex flex-wrap gap-2 w-121">
                    <Button className='bg-green-500 text-gray-800 my-12'>
                        Explora Proyectos
                        <HiOutlineArrowRight className="ml-2 h-5 w-5 " />
                    </Button>
                </div>
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            PROYECTOS MAS POPULARES
            </h5>
        </Card>
    </div>
  );
}

export {CardPopular};