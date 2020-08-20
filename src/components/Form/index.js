import React,{useState} from 'react';
import './styles.scss';
import {Grid, 
        Typography, 
        TextField, 
        Button,
        Card,
        CardContent,
        CardMedia,
        IconButton    
} from '@material-ui/core';
import {ArrowBackIos,ArrowForwardIos} from '@material-ui/icons';

import ImgSPO2 from '../../assets/image/spo2.jpg';

export default function Form(){
    const initialValues={
        name:'',
        lastName:'',
        diagnostic:'',
        spo2:'0',
        fc:''
    }
    const [values, setValues]= useState(initialValues);

    function handleSubmit(e){
        e.preventDefault();
    }

    return(
        <div className="form-box">
            <Grid container spacing={2}>
                <Grid container justify="center" spacing={3}>
                    <Grid item>
                        <Typography component="h1" variant="h5">Simule os dados</Typography>
                        <form className="form-data" noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="firstName"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="Nome"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="lastName"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="Sobrenome"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="diagnostic"
                                        label="Diagnóstico"
                                        name="diagnostic"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Card className="form-card">
                                        <div className="form-card-details">
                                            <CardContent className="form-card-content">
                                                <Typography componet="h5" variant="h5">
                                                    SpO2
                                                </Typography>
                                                <Typography variant="subtitle1" color="textSecondary">
                                                    {values.spo2} %
                                                </Typography>
                                            </CardContent>
                                            <div className="form-card-controls">
                                                <IconButton aria-label="previous">
                                                    <ArrowBackIos/>
                                                </IconButton>
                                                <IconButton aria-label="next">
                                                    <ArrowForwardIos />
                                                </IconButton>
                                            </div>
                                        </div>
                                        <CardMedia
                                            style={{width: 150}}
                                            component='img'
                                            image={ImgSPO2}
                                            title="SPO2"
                                        />
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Card className="form-card">
                                        <div className="form-card-details">
                                            <CardContent className="form-card-content">
                                                <Typography componet="h5" variant="h5">
                                                    SpO2
                                                </Typography>
                                                <Typography variant="subtitle1" color="textSecondary">
                                                    {values.spo2} %
                                                </Typography>
                                            </CardContent>
                                            <div className="form-card-controls">
                                                <IconButton aria-label="previous">
                                                    <ArrowBackIos/>
                                                </IconButton>
                                                <IconButton aria-label="next">
                                                    <ArrowForwardIos />
                                                </IconButton>
                                            </div>
                                        </div>
                                        <CardMedia
                                            style={{width: 150}}
                                            component='img'
                                            image={ImgSPO2}
                                            title="SPO2"
                                        />
                                    </Card>
                                </Grid>
                                <Grid item xs={3}>
                                    <Button 
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        onClick={handleSubmit}
                                    >Submit</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                    <Grid item>
                        <TextField
                            disabled
                            id="outlined-multiline-static"
                            label="Mensagem HL7"
                            multiline
                            rows={6}
                            variant="outlined"
                        />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}