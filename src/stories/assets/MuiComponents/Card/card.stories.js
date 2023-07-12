import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

export default {
    title: 'Mui-Storybook/Card',
    component: Card,
};


export const Text = {

    args: {
        sx: { width: 345 },
        children: (
            <CardActionArea>
                <CardHeader
                    title="Cat and danger wether" subheader="12 july ,2023"
                    avatar={
                        <Avatar sx={{ background: "#ff0000" }}>R</Avatar>
                    }
                    action={
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    }
                ></CardHeader>
                <CardMedia
                    height="100%"
                    component="img"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4HiWje6KO-9vB90AV0GlM-YaXfX5FL5J-Q&usqp=CAU"
                    alt="Cat and environment"
                ></CardMedia>
                <CardContent>
                    <Typography variant="body2">typesetting, remaining essentially unchanged Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Typography>
                </CardContent>

                <CardActions >
                    <IconButton >
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton >
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </CardActionArea>
        ),

    },
};