import Logo from '../elements/Logo';
import styles from './layout.module.css';

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white flex justify-center">
      <div className="container p-12 flex justify-between ">
        <span>
          <Logo />
        </span>
        <p className={`text-slate-600 ${styles.shine}`}>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
