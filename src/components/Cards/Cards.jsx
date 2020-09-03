import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from './Cards.module.css'

const Cards = (props) => {

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography color="textSecondary" gutterBottom variant="h5">REAL DATA</Typography>
                        <Typography color="textSecondary">DATE</Typography>  
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>  
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography color="textSecondary" gutterBottom variant="h5">REAL DATA</Typography>
                        <Typography color="textSecondary">DATE</Typography>  
                        <Typography variant="body2">Number of recovered from COVID-19</Typography>  
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography color="textSecondary" gutterBottom variant="h5">REAL DATA</Typography>
                        <Typography color="textSecondary">DATE</Typography>  
                        <Typography variant="body2">Number of death cases of COVID-19</Typography>  
                    </CardContent>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default Cards
