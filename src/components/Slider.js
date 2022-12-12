import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const variants = {
    initial: direction => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            // scale: 0.5,
        }
    },
    animate: {
        x: 0,
        opacity: 1,
        // scale: 1,
        // transition: 'ease-in',
        transition: {
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
        },
    },
    exit: direction => {
        return {
            x: direction > 0 ? -1000 : 1000,
            opacity: 0,
            // scale: 0.5,
            // transition: 'ease-in',
            transition: {
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
            },
        }
    },
}


const Slider = (imagesProp) => {
    const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState(0)
    const images = imagesProp.games;



    function nextStep() {
        setDirection(1)
        if (index === images.length - 1) {
            setIndex(0)
            return
        }
        setIndex(index + 1)
    }

    function prevStep() {
        setDirection(-1)
        if (index === 0) {
            setIndex(images.length - 1)
            return
        }
        setIndex(index - 1)
    }

    return (
        <>
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    variants={variants}
                    animate='animate'
                    initial='initial'
                    exit='exit'
                    src={images[index]}
                    alt='slides'
                    className='absolute top-0 left-0 w-full h-full object-cover'
                    key={images[index]}
                    custom={direction}
                />
            </AnimatePresence>
            <button className='lg:p-5 sm:p-2 aspect-square rounded-full bg-[#28313B] border-none cursor-pointer text-center text-white lg:text-xl absolute top-[45%] left-[5px] opacity-20 hover:opacity-75' onClick={prevStep}>
                ◀
            </button>
            <button className='lg:p-5 sm:p-2 aspect-square rounded-full bg-[#28313B] border-none cursor-pointer text-center text-white lg:text-xl absolute top-[45%] right-[5px] opacity-20 hover:opacity-75' onClick={nextStep}>
                ▶
            </button>
        </>
    )
}

export default Slider;