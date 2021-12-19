import React from 'react'
import { motion } from "framer-motion"
import Navbar from 'components/Landing/Navbar'
import system from "../images/system.svg"
import Hero from 'components/Landing/Hero'
export default function Landing() {
    return (
        <motion.div className="h-screen text-white bg-gray-100" initial={{x: 5000}} transition={{duration: 1}} animate={{x: 0}} exit={{x: -5000, transition: {ease: "easeInOut", duration: 1}}}>
            <Navbar />
            <Hero />
            <>
            </>
        </motion.div>
    )
}
