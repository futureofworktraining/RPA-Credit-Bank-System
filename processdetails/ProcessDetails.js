import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { useTranslate, useLocale, useSetLocale, Title } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    label: { width: '10em', display: 'inline-block' },
    button: { margin: '1em' },
});

const ProcessDetails = () => {
    const classes = useStyles();
    return (
        <Card>
            <Title title={'Process documentation'} />
            <CardContent>
                <Button
                    variant="contained"
                    className={classes.button}
                    color={'primary'}
                    onClick={()=>{console.log('eror')}}
                >
                    Acceptance Process Documentation
                </Button>
                <Button
                    variant="contained"
                    className={classes.button}
                    color={'primary'}
                    onClick={()=>{console.log('eror')}}
                >
                    Cancelation Process Documentation
                </Button>
                <Button
                    variant="contained"
                    className={classes.button}
                    color={'primary'}
                    onClick={()=>{console.log('eror')}}
                >
                    Product Query Process Documentation
                </Button>
            </CardContent>
        </Card>
    );
};

export default ProcessDetails;
