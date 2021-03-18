import React from 'react';
import User from './User';
import { makeStyles, Grid } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
    userItem: {
        [theme.breakpoints.up('md')]: {
            marginRight: theme.spacing(2)
        },
        marginBottom: theme.spacing(2)
    },
}));

export default function UsersList( { users = []}) {

    const classes = useStyles();

    return (
        <Grid container
            direction="row"
            justify="center"
            alignItems="center">
            {
                users.map(user => (
                    <Grid item xs={8} md={3} className={classes.userItem} key={user.name}>
                        <User
                            name={user.name}
                            email={user.email}
                        />
                    </Grid>
                ))
            }
        </Grid>
    );
}