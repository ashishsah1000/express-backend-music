import * as React from 'react';
import "./card.css"
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { ArrowRight, NavigateNext } from '@material-ui/icons';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AvTimer from '@material-ui/icons/AvTimer';
import { Link } from 'react-router-dom';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
export default function CustomCard() {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <AvTimer />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Focus"
        subheader="Make a target and complete it!"
      />
      {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This app has a specific purpose of making you productive. You can add email and sms alerts for your specific jobs.
          Make sure to complete your work with <b>Aspire</b> Focus.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        <div className="arrow">
          <Link to="/a/focus">
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <NavigateNext />
            </Avatar>
          </Link>

        </div>



      </CardActions>
    </Card>
  )
}
