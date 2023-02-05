import { AnimatePresence, motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import TopBar from '@/components/TopBar';
import './MainLayout.css';

type MainLayoutProps = {
  showTopBar?: boolean;
};

function MainLayout({
  showTopBar = true,
}: MainLayoutProps) {
  return (
    <AnimatePresence>
      <motion.div
        className="layout__container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {showTopBar && <TopBar />}
        <main className="layout__content">
          <div className="layout__content-wrapper">
            <Outlet />
          </div>
        </main>
      </motion.div>
    </AnimatePresence>
  );
}

export default MainLayout;
