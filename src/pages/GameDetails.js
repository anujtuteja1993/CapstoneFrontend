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
      .then(([data1, data2, data3]) => { setGame(data1.data[0]); setGameScreenshots(data2.data); setGameDescription(data3.description_raw) })
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
        <div className="mx-auto max-w-9xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24 rounded-xl bg-[#202121]">
          <div className="lg:col-span-2 lg:pr-8">
            <h1 className="lg:text-6xl font-bold tracking-tight text-white sm:text-4xl">{game?.game_name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0 bg-[#282929] shadow rounded-xl border-black border-1 p-5">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-white p-3">{product.price}</p>
            {/* Reviews */}
            <div className=" px-3 mt-6">
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
            <div className="flex p-10 justify-center text-white">Platforms Placeholder</div>
            <div className="px-3 mt-6 flex items-center justify-center">
              <button
                type="submit"
                className="mt-10 flex w-80 items-center justify-center rounded-md border bg-gray py-3 px-8 text-base font-medium text-white hover:bg-[#5d6063] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 shadow-sm"
              >
                Add to cart
              </button>
            </div>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:pt-6 lg:pb-16 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-white text-justify">{gameDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default GameDetails;