import React from 'react';
import './styles.scss';
import {Button} from '@material-ui/core';

export default function ButtonCommon({name,handleSubmit}){
    return(
        <div className="button-submit">
            <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleSubmit}
            >
                {name}
            </Button>
    </div>
    );
}