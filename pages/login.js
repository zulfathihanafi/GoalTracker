import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import { useState } from 'react';




const login = () => {
    const [slide, setSlide] = useState('')

    function testButton() {
        alert(slide);
    }

    return (
        <div className={styles.container}>
            Enter
            <Button variant="contained" onClick={testButton}>Contained</Button>
            <Button variant="contained" href="/#">
                Home
            </Button>
            <Slider defaultValue={0} aria-label="Default" valueLabelDisplay="auto" onChange={() => setSlide(20)} />
        </div>
    );
}

export default login;