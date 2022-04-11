import Navbar from './Navbar'
import Sidebar from './Sidebar'
import styles from '../styles/Home.module.css'

const Layout = ({ children }) => {
    return (
        <div >
            <Navbar />
            <div className={styles.container}>
                {children}
            </div>
            <Sidebar />
        </div>
    );
}

export default Layout;