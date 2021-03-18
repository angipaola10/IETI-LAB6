import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

export default function Task({name, email}) {

    return (
        <Card variant="outlined">
            <CardContent>
                <Grid container >
                    <Grid item xs={11}>
                        <Typography variant="h5" component="h1">
                            {name} 
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <AccountBoxIcon />
                    </Grid>
                    <Grid item xs={9}>
                        <Typography color="secondary">
                            {email}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}