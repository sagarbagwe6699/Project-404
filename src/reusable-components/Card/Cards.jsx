import React, { Component } from 'react';
import { Card, CardHeader, CardContent, Typography, CardActionArea, CardActions, Button } from '@material-ui/core';

class MyCard extends Component {
    state = {  }
    render() { 
        return ( 
            <Card style={{maxWidth: 200}} >
                <CardHeader title="Hello" >
                </CardHeader>
                <CardContent>
                    <Typography>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi nostrum excepturi distinctio cum est in ipsum perferendis culpa asperiores ipsam!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button>Sample</Button>
                </CardActions>
            </Card>
         );
    }
}
 
export default MyCard;