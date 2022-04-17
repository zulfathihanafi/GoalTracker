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
            <div>
                <br></br>
            </div>
        </div>
    );
}

export default Layout;