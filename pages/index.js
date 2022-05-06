import {motion} from 'framer-motion';
import Scene from '../components/Scene';

const Home = () => {
  return (
    <div className="home-wrapper">
      <motion.div
      className='scene-wrapper'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
      </motion.div>

      <div className='background-text'>
        <motion.h1
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring' ,duration: 2, bounce: .5 }}
        >Evan <span>OSMONT</span></motion.h1>
        <motion.h2
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring' ,duration: 2, bounce: .5 }}
        >React.js / Next.js Developer</motion.h2>
      </div>
    </div>
  );
};

export default Home;
