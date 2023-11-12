import { Spinner } from 'flowbite-react';
'use client';

function ApiLoader() {
  //aqui debe de ir la mamada de carga xD un efecto de carga 

  return (
    <>
    <div className="flex flex-wrap gap-2">
      
      <Spinner color="success" aria-label="Success spinner example" />
      
    </div>
    </>
  );
}

export { ApiLoader };