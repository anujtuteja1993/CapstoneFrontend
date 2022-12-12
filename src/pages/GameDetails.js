import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Slider from '../components/Slider';


import { StarIcon } from '@heroicons/react/20/solid'

const product = {
  price: '$192',
  href: '#'
}

const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const GameDetails = () => {
  let { id } = useParams();
  const [game, setGame] = useState();
  const [gameScreenshotDetails, setGameScreenshots] = useState();
  const [gameDescription, setGameDescription] = useState();



  const fetchGameDetailsURL = "http://localhost:8000/games/fetchGameByID?game_id=" + id;
  const fetchGameScreenshotsURL = "http://localhost:8000/games/fetchGameScreenshotByID?game_id=" + id;
  const fetchGameDescriptionURL = "https://api.rawg.io/api/games/" + id + "?key=f2b65746f0874d129d3550dd301e2b74"
  console.log(fetchGameDescriptionURL);


  useEffect(() => {
    Promise.all([fetch(fetchGameDetailsURL), fetch(fetchGameScreenshotsURL), fetch(fetchGameDescriptionURL)])
    .then(([resp1, resp2, resp3]) => Promise.all([resp1.json(), resp2.json(), resp3.json()]))
    .then(([data1, data2, data3]) => {setGame(data1.data[0]); setGameScreenshots(data2.data); setGameDescription(data3.description_raw)})
  }, [fetchGameDetailsURL, fetchGameScreenshotsURL, fetchGameDescriptionURL])

  console.log(gameDescription);

  let gameScreenshotsArray = [];
  gameScreenshotDetails?.forEach(item => {
    gameScreenshotsArray.push(item.image)
  });

  console.log(gameScreenshotsArray);


  return (
    <div className="flex flex-col">
      <div className="flex flex-row py-10">
        <div className="relative m-auto w-[85vw] lg:w-[65vw] overflow-hidden rounded-xl aspect-video">
          <Slider games={gameScreenshotsArray} />
        </div>
      </div>
      <div>
      <div className="mx-auto max-w-9xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="lg:text-6xl font-bold tracking-tight text-white sm:text-4xl">{game?.game_name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-white">{product.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <form className="mt-10">
              {/* Colors */}
        

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-gray py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to bag
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-white">{gameDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default GameDetails;