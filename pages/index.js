import { useState } from "react";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import styles from '../styles/Home.module.css'
import { lightTheme } from "../components/Theme";

const Item = styled(Paper)(({ theme }) => ({
    
    backgroundColor: lightTheme.goalBackground,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: lightTheme.goalText,
    '&:hover' : {
        'color' : 'white',
        'background-color' : "#339989"
    }
    
}));

const Fabutton = styled(Fab)(() => ({
    margin: 0,
    top: 'auto',
    right: '15vh',
    bottom: '5vh',
    left: 'auto',
    position: 'fixed',
    '&:hover' : {
        'background-color' : 'red '
    }
}))

const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
];

const Home = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const goals = [[20, "red"], [50, "yellow"], [90, 'green'], [20, "red"], [90, 'green']];
    const buttonHover = {
        
    }

    return (
        <div className={styles.container}>
            <Typography variant="h3" style={{ marginTop: "20px", marginBottom: "30px" ,color:'#FFFFFF' }}>My Goals</Typography>
            <Grid container spacing={5}>
                {goals.map((goal) => (
                    <Grid item xs={6} md={4}  >
                        <Item sx={{ boxShadow: 3 }}>
                            <Typography variant="h5" justifyContent="flex-start" style={{ marginTop: '10px', marginBottom: '20px' }}>Goal 1</Typography>
                            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                                <CircularProgress style={{ 'position': 'absolute', 'color': '#fff' }} variant="determinate" size={100} thickness={7} value={100} />
                                <CircularProgress style={{ 'color': goal[1] }} variant="determinate" size={100} thickness={7} value={goal[0]} />

                                <Box
                                    sx={{
                                        top: 0,
                                        left: 0,
                                        bottom: 0,
                                        right: 0,
                                        position: 'absolute',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Typography variant="h6" component="div" color="#D9D9D9">
                                        {`${Math.round(goal[0])}%`}
                                    </Typography>
                                </Box>
                            </Box>
                            <Typography variant="body1" gutterBottom style={{ textAlign: 'justify', margin: '20px 30px' }}>
                                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                quasi quidem quibusdam.
                            </Typography>
                        </Item>
                    </Grid>))}
            </Grid>
            <Fabutton sx={{ transform: 'translateZ(0px)'}} color="primary" aria-label="add" title="Add Goal">
                <AddIcon />
            </Fabutton>
            {/* <Box po sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
                <SpeedDial
                    ariaLabel="SpeedDial controlled open example"
                    sx={{ position: 'absolute', right: 20, down: 50 }}
                    icon={<SpeedDialIcon />}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    open={open}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={handleClose}
                        />
                    ))}
                </SpeedDial>
            </Box> */}
        </div>
    )
}

export default Home;