'use client';

import { Card } from 'flowbite-react';
import { Badge } from 'flowbite-react';

function CardHorizontal({text, title, team}) {
  return (
    <section className='grid gap-8 lg:grid-cols-1 mt-5  '>
       <Card className='bg-gray-900 border-gray-800'>
            <div className="flex items-center justify-between text-white">
              <Badge className='bg-green-300 border-gray-700'>
                {team}
              </Badge>
              <span className="text-sm">Nuevo</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white dark:text-white">
              <a href="#">{title}</a>
            </h2>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
           {text}
            </p>
            <div className="flex items-center ml-auto">
              <a
                href="/donate"
                className="inline-flex items-center font-medium text-green-500 hover:underline dark:text-primary-500"
              >
                Donar
                <svg
                  className="ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </Card>   
    </section>
  );
}

export {CardHorizontal};