import React from 'react'
import IMG from "../images/login.svg"
import { motion } from "framer-motion"
import Hero from 'components/Landing/Hero'
import About from 'components/Landing/About'
import Projects from 'components/Landing/Projects'
import Team from 'components/Landing/Team'
import CTA from 'components/Landing/CTA'
import Footer from 'components/Landing/Footer'
import Navbar from 'components/Landing/Navbar'

export default function Landing() {
    return (
        <motion.div className="h-screen text-white bg-black" initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1.5}}}>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Team />
            <CTA />
            <Footer />
        </motion.div>
    )
}
