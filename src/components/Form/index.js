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
import ImgFC from '../../assets/image/fc.jpg';

export default function Form(){
    const initialValues={
        name:'',
        lastName:'',
        diagnostic:'',
        spo2:'0',
        fc:'0'
    }
    const [values, setValues]= useState(initialValues);

    function handleSubmit(e){
        e.preventDefault();
    }

    return(
        <div className="form-box">
            <h1>Simule os dados do paciente</h1>
            <form noValidate>
                <div className="input-form">
                    <input 
                        placeholder="Nome"
                        type="text"
                        name="nome"
                    />
                </div>
                <div className="input-form">
                    <input 
                        placeholder="Sobrenome"
                        type="text"
                        name="sobrenome"
                    />
                </div>
                <div className="input-form">
                    <input 
                        placeholder="Diagnóstico"
                        type="text"
                        name="diagnostico"
                    />
                </div>
            </form>
            <section>
                <article>
                    <div className="container pb-4">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="horizontal-card">
                                    <img src={ImgSPO2}/>
                                    <div className="horizontal-card-body">
                                        <span class="card-text">SpO2</span>
                                        <h4 class="card-title">{values.spo2} %</h4>
                                    </div>
                                    <div class="horizontal-card-footer">
                                        <a class="card-text status">#View</a>
                                        <a class="card-text status">#Save</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <article>
                    <div className="container pb-4">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="horizontal-card">
                                    <img src={ImgFC}/>
                                    <div className="horizontal-card-body">
                                        <span class="card-text">Frequência Cardiáca</span>
                                        <h4 class="card-title">{values.fc} bpm</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
            {/* <div className="card-conf">
                <div className="container pb-4">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="horizontal-card">
                                <img src={ImgSPO2}/>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="container pb-4">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="horizontal-card">
                                <img src={ImgSPO2}/>
                            </div>
                        </div>

                    </div>

                </div>
            </div> */}
            {/* <Grid container spacing={2}>
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
                                                    Frequência Cardíaca
                                                </Typography>
                                                <Typography variant="subtitle1" color="textSecondary">
                                                    {values.fc} bpm
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
                                            image={ImgFC}
                                            title="FC"
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
            </Grid> */}
        </div>
    );
}