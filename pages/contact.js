import {AnimatePresence, motion} from 'framer-motion';

const contact = () => {
    return (
        <div className="contact-wrapper">
            <motion.div
            
             className='links-grid'>
                <Item icon='📞' text='Tél.' url='tel:+330651719510' delay="0" />
                <Item icon='💌' text='Mail' url='mailto:evan.osmont@gmail.com' delay="0.2" />
                <Item icon='🤵' text='LinkedIn' url='https://www.linkedin.com/in/evanosmont/' delay="0.4" />
                <Item icon='💻' text='Github' url='https://www.github.com/evanosm' delay="0.6" />
                <Item icon='🎵' text='Spotify' url='https://open.spotify.com/artist/4VHmooPSt0t0hTI9fLYgxV' delay="0.8" />

            </motion.div>
        </div>
    );
};

const Item = (props) => {
    return (
        <AnimatePresence>
        <motion.div
        initial={{ y: -100, opacity: 0, rotate: -20 }}
        animate={{ y: 0, opacity : 1, rotate : 0 , transition: {type: 'spring', duration : 1, bounce : 0.6, delay : props.delay} }}
        transition={{ type: 'spring', duration : 1, bounce : 0.6  }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='item'>
            <a href={props.url}>
                    <h2 className='icon'>{props.icon}</h2><h2 className='hidden'>{props.text}</h2>
            </a>
        </motion.div>
        </AnimatePresence>
    );
};

export default contact;