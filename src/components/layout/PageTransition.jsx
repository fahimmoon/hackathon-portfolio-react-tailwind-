import { motion } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';

const PageTransition = () => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Outlet />
    </motion.div>
  );
};

export default PageTransition;
