import React from 'react';
import peopleData from '../people';

export default function Home(){

  return (

    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Фильмы о космосе</h2>
        <div className="flex overflow-x-auto">
          <div className="flex-shrink-0 w-screen">
            <img src="https://steamuserimages-a.akamaihd.net/ugc/927045848753766110/46CCE81AE7C58FB10C9BB5425824AF678CE35FE0/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" alt="Interstellar" className="rounded-lg" />
            <p className="mt-2 text-center">Интерстеллар</p>
          </div>
          <div className="flex-shrink-0 w-screen">
            <img src="https://www.film.ru/sites/default/files/styles/epsa_1024x450/public/d96030352930124c4017f8d965c04d3982164505.jpg__0x1500_q85.jpg" alt="The Martian" className="rounded-lg" />
            <p className="mt-2 text-center">Марсианин</p>
          </div>
          <div className="flex-shrink-0 w-screen">
            <img src="https://c4.wallpaperflare.com/wallpaper/348/192/1014/prometheus-movie-space-spaceship-wallpaper-preview.jpg" alt="Prometheus" className="rounded-lg" />
            <p className="mt-2 text-center">Prometheus</p>
          </div>
          </div>    
          </div>
      <hr className="my-8" />
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Люди космоса</h2>
        <div className="flex justify-center space-x-4">
        {peopleData.map(person => (
            <div key={person.id}>
              <img src={person.photo} alt={person.name} className="rounded-full w-20 h-20 object-cover" />
              <div className="mt-2">
                <p className="font-bold">{person.name}</p>
                <p className="text-sm italic">{person.occupation}</p>
                <p className="text-sm">{person.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

