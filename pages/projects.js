import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import { useState } from "react";

const projects = () => {
    return (
        <div className="projects-wrapper">
                <Card 
                title='Ce Portfolio' 
                delay='.5'
                description="En effet, j'ai créé ce portfolio de moi même afin de prouver mes compétences de développeur Web React.js et Next.js"
                url={"https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg"}
                />
                <Card 
                title='Mon Github' 
                delay='1' 
                description="Retrouvez ici mes projets personnels !"
                url={"https://cdn.pixabay.com/photo/2020/06/08/19/48/corona-5275916__340.jpg"}

                button='true'/>
                <Card 
                title='En travaux...' 
                delay='1.5' 
                description="Revenez + tard !"
                url={"https://cdn.pixabay.com/photo/2014/07/30/22/53/notebook-405755__340.jpg"}/>
        </div>
    );
};

const Card = (props) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: 'spring', duration: 0.5, delay : props.delay, bounce : .5 }}
        className="card">
                
            <Image src={props.url} alt='Image carte' layout="fill" objectFit="cover"/>

            <motion.div
            whileHover={ { height: "60%" } }
            whileTap={ { height: "60%" } }
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onTap={() => setIsHovered(!isHovered)}
            className="content">
                <h1 className="title">{props.title}</h1>

                <AnimatePresence>
                    {!isHovered ? <motion.p
                    className="instructions"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0}}
                    transition={{ type: 'spring', duration: 0.5}}
                    >
                        Survolez la carte pour + de détails!
                    </motion.p> : ''}

                </AnimatePresence>

                <AnimatePresence
                exitBeforeEnter>    
                    {isHovered ? <motion.p 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ type: 'spring', duration: 0.5, bounce : .5 }}
                    className="description">{props.description}</motion.p> : '' }
                </AnimatePresence>

                <AnimatePresence>
{isHovered && props.button ? <a href="https://www.github.com/evanosm"><motion.button
                                initial={{ opacity: 0, y: 50, scale: 0.5 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 50, scale: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95, rotate: 5 }}
                                transition={{ type: 'spring', duration: 0.5, bounce : .5 }}>
                                    CLIQUEZ
                                    
                                    </motion.button></a> : null}</AnimatePresence>

            </motion.div>
        </motion.div>
    );
};


export default projects;