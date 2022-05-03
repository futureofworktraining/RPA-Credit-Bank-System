import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslate } from 'react-admin';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    media: {
        height: '18em',
    },
});

const Welcome = () => {
    const translate = useTranslate();
    const classes = useStyles();
    return (
        <Card>
            <CardContent>
                <Typography variant="h2" component="h2">
                    RPA Credit BANK
                </Typography>
            </CardContent>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Welcome to RPA Credit!
                </Typography>
                <Typography component="p">
                    This web application has been created for a purpose of RPA training or building PoCs and do not represent real live production systems of any bank.
                    Please report bugs or request changes to <Link>futureofworkchannel@gmail.com</Link>
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Welcome;
