import React from 'react'
import { CONTACT } from '../constants'
import { motion } from "framer-motion"

const Contact = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: .5 }}
                className='my-10 text-center text-4xl font-semibold text-neutral-200'>
                Get in Touch
            </motion.h2>
            <div className="text-center tracking-tighter">
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className='my-4 text-lg text-neutral-400'>
                    {CONTACT.address}
                </motion.p>

                <motion.a
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    href="https://wa.me/+918200835840"
                    target="_blank"
                    className="block my-4 text-lg text-green-500 hover:text-green-400 transition-colors duration-300 ease-in-out"
                >
                    {CONTACT.phoneNo}
                </motion.a>

                <a
                    href="mailto:abdullashaikh36319@gmail.com"
                    target="_blank"
                    className='my-4 inline-block border-b border-neutral-400 text-neutral-400 hover:text-red-400 hover:border-red-400 transition-colors duration-300 ease-in-out'
                >
                    {CONTACT.email}
                </a>
            </div>
        </div>

    )
}

export default Contact
