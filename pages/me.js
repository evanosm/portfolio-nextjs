import {AnimatePresence, motion} from 'framer-motion';
import {useState} from 'react';

const Me = () => {

    const [tapped, setTapped] = useState(false);

    return (
        <div
        className='me-wrapper'>
            <motion.button
                initial={{ opacity: 0, x: -100, rotate : -45 }}
                animate={{ opacity: 1, x: 0, rotate : 0, transition: { delay : 0.2 } }}
                transition={{ type: 'spring',  bounce: .5 }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                onTap={() => {setTapped(!tapped)}}
                className="show-modal"><h1>tap!</h1></motion.button>

            {tapped ? <motion.div
            initial={{ scale:0 , opacity: 1 }}
            animate={{ scale: 1, opacity: 0 }}
            transition={{ type: 'spring',  bounce: .5, duration: 2 }}
            className='round-effect'></motion.div> : null}

            <AnimatePresence
            exitBeforeEnter>
                {tapped ? <motion.div
                initial={{opacity: 0}}
                animate={{ opacity: 1}}
                exit={{ opacity: 0}}
                transition={{duration: 0.5}}
                onTap={() => {setTapped(!tapped)}}
                className='modal-backdrop'>
                    <Modal/>    
                </motion.div> : null}
            </AnimatePresence>

        </div>
    );
};

const Modal = (props) => {

    const animation = {
        initial: {
            opacity: 0,
            x: -100,
            rotate : -5
        },
        animate: {
            opacity: 1,
            x: 0,
            rotate : 0,
            transition: { delay : 0.2 }
        },
        exit: {
            opacity: 0,
            x: 100,
            rotate : 5
        }
    };

    return (
        <motion.div 
        initial="initial"
        animate="animate"
        exit="exit"
        variants={animation}
        className='modal'>
            
            <h1 className="modal-title">Qui suis-je ?</h1>
            <p className='modal-desc'>Mon nom est <span>Evan OSMONT</span>. Du haut de mes <span>19 ans</span> je suis passionné par le <span>développement Web</span>, <span>la musique</span> et les <span>jeux vidéos</span> !
            Je suis autonome, motivé et toujours à la recherche de nouvelles compétences dans le domaine du web ! </p>
        </motion.div>
    );
};

export default Me;