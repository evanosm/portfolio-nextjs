import Layout from '../components/Layout'
import '../styles/index.scss'
import {motion, AnimatePresence} from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <motion.div
        key={router.route}
          initial={{ y: -100 ,opacity: 0}}
          animate={{ y : 0, opacity: 1}}
          exit={{ y: 100, opacity: 0}}
          transition={{type:'spring', duration: 0.3, bounce: .3}}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp
