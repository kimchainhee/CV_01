import './App.css';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import MarkunreadIcon from '@material-ui/icons/Markunread';
import GroupIcon from '@material-ui/icons/Group';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import FacebookIcon from '@material-ui/icons/Facebook';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Avatar from '@material-ui/core/Avatar';
import img0 from '../src/Untitled.png';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ScreenShareOutlinedIcon from '@material-ui/icons/ScreenShareOutlined';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoodIcon from '@material-ui/icons/Mood';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import { Card, CardContent,Tooltip , CardMedia, FormControl, Hidden, IconButton, Input, InputAdornment, InputLabel, Paper, Typography, Divider, Icon, Link, ButtonGroup, Radio, FormControlLabel, RadioGroup, FormLabel, FormHelperText, makeStyles } from '@material-ui/core';
import img from '../src/simple-page-24.png';
import img2 from '../src/simple-page-25.png';
import img3 from '../src/simple-page-26.png';
import img4 from '../src/k23.jpg';
import img5 from '../src/chandung_01.jpg';
import 'fontsource-roboto';
import Style from 'style-it';
import Box from '@material-ui/core/Box';
import Hook from './Button Huyen` Ao~';
import Abc from './component/Abc';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
}));

function App() {

  const classes = useStyles();

  const [value, setValue,] = React.useState('vn');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

console.log(value)

  return (

    <>
      <Grid container justify='center'>

        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{paddingTop:'10px'}}>Change Language</FormLabel>
            <RadioGroup  aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
              <FormControlLabel value="vn" control={<Radio />} label="Ti???ng Vi???t"/>
              <FormControlLabel value="en" control={<Radio />} label="English"/>
            </RadioGroup>
        </FormControl>
      
        

      {value === 'vn' && 
      (
        <Paper elevation={5} style={{height:'768px', width:'793px', marginTop:'10px'}}>
        <div>
          <div style={{paddingTop:'56px', paddingRight: '20px', paddingLeft:'20px',height:'204px', width:'753px', position:'relative'}}>
            <div>
              <img src={img5} style={{height:'160px', width:'160px', border:'6px solid', borderColor:'#827E7E',position:'absolute',left:'40px',top:'28px'}}/>         
            </div>
            <div style={{paddingTop:'10px', paddingBottom: '20px', height:'74px', width:'753px', backgroundColor:'#504e4e'}}>
              <div style={{marginLeft:'213px'}}>
                <div style={{height:'54px', width:'550'}}>
                  <Grid container alignItems='center' style={{height:'54px', width:'550'}}>
                    <Typography variant="h4" style={{color:'white',fontWeight:'bold'}}>Phan Phi Phi</Typography>
                  </Grid>
                </div>
                <div>
                  <Typography style={{color:'white', fontWeight:'bold'}}>Th???c t???p sinh Frontend</Typography>
                </div>
              </div>
            </div>
            <div style={{paddingTop:'15px', paddingBottom:'15px', paddingLeft:'25px', height:'69px', width:'728px',}}>
              <div style={{marginLeft:'190px', height:'69px', width:'538px',}}>
                <Grid container>
                  <Grid item xs={6}>
                    <Grid container >
                      <Grid item>
                        <DateRangeIcon style={{fontSize: 20, color:'#504e4e',paddingTop:'2px', paddingRight:'10px'}}/>
                      </Grid>
                      <Grid item style={{color:'#494949'}}>
                        15/07/1999
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Grid container >
                      <Grid item>
                        <PersonIcon style={{fontSize: 20, color:'#504e4e',paddingTop:'2px', paddingRight:'10px'}}/>
                      </Grid>
                      <Grid item style={{color:'#494949'}}>
                        Nam
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                  <Grid container >
                      <Grid item>
                        <PhoneIcon style={{fontSize: 20, color:'#504e4e',paddingTop:'2px', paddingRight:'10px'}}/>
                      </Grid>
                      <Grid item style={{color:'#494949'}}>
                        0935391605
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Grid container >
                      <Grid item>
                        <MailIcon style={{fontSize: 20, color:'#504e4e',paddingTop:'2px', paddingRight:'10px'}}/>
                      </Grid>
                      <Grid item style={{color:'#494949'}}>
                        kusphan15@gmail.com
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Grid container >
                      <Grid item>
                        <LocationOnIcon style={{fontSize: 20, color:'#504e4e',paddingTop:'2px', paddingRight:'10px'}}/>
                      </Grid>
                      <Grid item style={{color:'#494949'}}>
                        TP HCM, Vi???t Nam
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Grid container >
                      <Grid item>
                        <LinkIcon style={{fontSize: 20, color:'#504e4e',paddingTop:'2px', paddingRight:'10px'}}/>
                      </Grid>
                      <Grid item>                        
                        <Link href="#" onClick style={{color:'#494949'}}>
                          facebook.com/phiphi.phan.1507
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </div>
        <Divider variant='middle' style={{color:'black'}}/>
        <div>
          <Grid container>
          <div style={{paddingTop:'10px', paddingLeft:'20px',height:'488px', width:'297px'}}>
            <div style={{paddingBottom:'20px',height:'174px', width:'300px'}}>
              <div>
                <Typography variant="h5" style={{color:'#504E4E',fontWeight:'bold'}}>
                  K??? N??NG
                </Typography>
              </div>
              <div style={{paddingTop:'5px'}}>
                <Grid container justify='space-between' >
                  <Grid item xs={6} style={{color:'#494949',fontWeight:'lighter'}}>
                    Ti???ng anh
                  </Grid>
                  <Grid item xs={6}>
                      <FiberManualRecordIcon style={{color:'#504E4E'}}/>                                           
                      <FiberManualRecordIcon style={{color:'#504E4E'}}/>                                            
                      <FiberManualRecordIcon style={{color:'#504E4E'}}/>                                           
                      <FiberManualRecordIcon style={{color:'#EEEEEE'}}/>                                            
                      <FiberManualRecordIcon style={{color:'#EEEEEE'}}/>                      
                  </Grid>
                </Grid>
              </div>
              <div style={{paddingTop:'2px'}}>
                <Grid container justify='space-between' >
                  <Grid item xs={6} style={{color:'#494949',fontWeight:'lighter'}}>
                    L??m vi???c nh??m
                  </Grid>
                  <Grid item xs={6}>
                      <FiberManualRecordIcon style={{color:'#504E4E'}}/>                                           
                      <FiberManualRecordIcon style={{color:'#504E4E'}}/>                                            
                      <FiberManualRecordIcon style={{color:'#504E4E'}}/>                                           
                      <FiberManualRecordIcon style={{color:'#504E4E'}}/>                                            
                      <FiberManualRecordIcon style={{color:'#EEEEEE'}}/>                      
                  </Grid>
                </Grid>
              </div>
              <div style={{paddingTop:'2px'}}>
                <Grid container justify='space-between'>
                  <Grid item xs={6} style={{color:'#494949',fontWeight:'lighter'}}>
                    L???p tr??nh
                  </Grid>
                  <Grid item xs={6}>
                      <FiberManualRecordIcon style={{color:'#504E4E'}}/>                                           
                      <FiberManualRecordIcon style={{color:'#504E4E'}}/>                                            
                      <FiberManualRecordIcon style={{color:'#504E4E'}}/>                                           
                      <FiberManualRecordIcon style={{color:'#504E4E'}}/>                                            
                      <FiberManualRecordIcon style={{color:'#EEEEEE'}}/>                      
                  </Grid>
                </Grid>
              </div>
              <div style={{paddingTop:'2px'}}>
                <Grid container justify='space-between'>
                  <Grid item xs={6} style={{color:'#494949',fontWeight:'lighter'}}>
                    N??i tr?????c c??ng ch??ng
                  </Grid>
                  <Grid item xs={6}>
                      <FiberManualRecordIcon style={{color:'#504E4E'}}/>                                           
                      <FiberManualRecordIcon style={{color:'#504E4E'}}/>                                            
                      <FiberManualRecordIcon style={{color:'#EEEEEE'}}/>                                           
                      <FiberManualRecordIcon style={{color:'#EEEEEE'}}/>                                            
                      <FiberManualRecordIcon style={{color:'#EEEEEE'}}/>                      
                  </Grid>
                </Grid>
              </div>
              <div style={{paddingTop:'2px'}}>
                <Grid container justify='space-between'>
                  <Grid item xs={6} style={{color:'#494949',fontWeight:'lighter'}}>
                    Giao ti???p
                  </Grid>
                  <Grid item xs={6}>
                      <FiberManualRecordIcon style={{color:'#504E4E'}}/>                                           
                      <FiberManualRecordIcon style={{color:'#504E4E'}}/>                                            
                      <FiberManualRecordIcon style={{color:'#504E4E'}}/>                                           
                      <FiberManualRecordIcon style={{color:'#EEEEEE'}}/>                                            
                      <FiberManualRecordIcon style={{color:'#EEEEEE'}}/>                      
                  </Grid>
                </Grid>
              </div>
            </div>

            <Divider/>

            <div style={{paddingTop:'10px', paddingBottom:'20px', paddingRight:'20px',height:'74px', width:'276px'}}>
              <div>
                <Typography variant="h5" style={{color:'#504E4E',fontWeight:'bold'}}>
                  KI???N TH???C
                </Typography>
              </div>
              <div style={{paddingTop:'5px'}}>
                <Grid item xs={6} style={{color:'#494949',fontWeight:'lighter'}}>
                  - Javascript
                </Grid>
              </div>
              <div>
                <Grid item xs={6} style={{color:'#494949',fontWeight:'lighter'}}>
                  - React.js
                </Grid>
              </div>
            </div>

            <Divider/>

            <div style={{paddingTop:'10px', paddingBottom:'20px', paddingRight:'20px',height:'114px', width:'276px'}}>
              <div>
                <Typography variant="h5" style={{color:'#504E4E',fontWeight:'bold'}}>
                  M???C TI??U
                </Typography>
              </div>
              <div style={{paddingTop:'5px'}}>
                <Grid item xs={12} style={{color:'#494949',fontWeight:'lighter'}}>
                  - H???c t???p v?? l??m vi???c ph??t tri???n ???ng d???ng tr???c tuy???n v???i c??ng c??? React.js.
                </Grid>
              </div>
              <div>
                <Grid item xs={12} style={{color:'#494949',fontWeight:'lighter'}}>
                  - Trong v??ng 3-4 n??m t??ch l??y c??c ki???n th???c ????? tr??? th??nh Senior Web Developers.
                </Grid>
              </div>
            </div>

          </div>
          <Divider orientation="vertical" flexItem/>
          <div style={{paddingTop:'10px',height:'500px', width:'460px'}}>
            <div style={{paddingLeft:'20px',paddingBottom:'20px',height:'96px', width:'438px'}}>
              <div>
                <Typography variant="h5" style={{color:'#504E4E',fontWeight:'bold'}}>
                  H???C V???N
                </Typography>
              </div>
              <div style={{paddingTop:'5px'}}>
                <Grid container>
                  <Grid item xs={5}>
                    <Typography style={{color:'#494949',fontWeight:'bold'}}>
                      Tr?????ng ?????i h???c V??n Lang
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      (10/2017 ?????n 05/2021)
                    </Typography>
                  </Grid>
                </Grid>
              </div>
              <div>
                <Grid item xs={12} >
                  <Typography style={{color:'#494949',fontWeight:'bold',fontStyle:'italic'}}>
                    Chuy??n ng??nh: K??? thu???t ph???n m???m
                  </Typography>
                </Grid>
                <Grid item style={{fontWeight:'lighter'}}>
                  ??i???m trung b??nh 6.0
                </Grid>
              </div>
            </div>

            <Divider/>

            <div style={{paddingLeft:'20px', paddingTop:'10px',height:'265px', width:'438px'}}>
              <div>
                <Typography variant="h5" style={{color:'#504E4E',fontWeight:'bold'}}>
                  KINH NGHI???M L??M VI???C
                </Typography>
              </div>
              <div style={{paddingTop:'5px'}}>
                <Grid container>
                  <Grid item>
                    <Typography style={{color:'#494949',fontWeight:'bold'}}>
                      ???ng d???ng di ?????ng
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      (08/2018 ?????n 01/2019)
                    </Typography>
                  </Grid>
                </Grid>
              </div>
              <div>
                <Grid item xs={12} >
                  <Typography style={{color:'#494949',fontWeight:'bold',fontStyle:'italic'}}>
                    Tr?????ng nh??m
                  </Typography>
                </Grid>
                <Grid item style={{fontWeight:'lighter'}}>
                  - X??? l?? y??u c???u v?? th???c hi???n c??c ch???c n??ng ???ng d???ng di ?????ng.
                </Grid>
                <Grid item style={{fontWeight:'lighter'}}>
                  - Thi???t k??? t???ng ch???c n??ng v?? giao di???n.
                </Grid>
                <Grid item style={{fontWeight:'lighter'}}>
                  - C??c d??? li???u c???n thi???t v?? hi???u qu??? c???a ???ng d???ng.
                </Grid>
                <Grid item style={{fontWeight:'lighter'}}>
                  - Thi???t k??? t??i li???u ki???n tr??c.
                </Grid>
              </div>
              <div style={{paddingTop:'5px'}}>
                <Grid container>
                  <Grid item>
                    <Typography style={{color:'#494949',fontWeight:'bold'}}>
                      Thi???t k??? web
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      (02/2019 ?????n 06/2019)
                    </Typography>
                  </Grid>
                </Grid>
              </div>
              <div>
                <Grid item xs={12} >
                  <Typography style={{color:'#494949',fontWeight:'bold',fontStyle:'italic'}}>
                    Tr?????ng nh??m
                  </Typography>
                </Grid>
                <Grid item style={{fontWeight:'lighter'}}>
                  - X??? l?? c??c y??u c???u v?? th???c hi???n c??c ch???c n??ng c???a website.
                </Grid>
                <Grid item style={{fontWeight:'lighter'}}>
                  - Ch???y trang web th???c t???, ki???m tra v?? s???a l???i.
                </Grid>
                <Grid item style={{fontWeight:'lighter'}}>
                  - T???ng h???p t???t c??? c??c d??? li???u v?? t??nh n??ng cho m???t trang web ???????c s??? d???ng.
                </Grid>
                <Grid item style={{fontWeight:'lighter'}}>
                  - Thi???t k??? t??i li???u ki???n tr??c.
                </Grid>
              </div>
            </div>
          </div>
          </Grid>
        </div>
      </Paper>
      )
      }

      {value === 'en' && 
      (
        <Paper elevation={5} style={{height:'768px', width:'793px', marginTop:'10px'}}>
        <div>
          <div style={{paddingTop:'56px', paddingRight: '20px', paddingLeft:'20px',height:'204px', width:'753px', position:'relative'}}>
            <div>
              <img src={img5} style={{height:'160px', width:'160px', border:'6px solid', borderColor:'#827E7E',position:'absolute',left:'40px',top:'28px'}}/>         
            </div>
            <div style={{paddingTop:'10px', paddingBottom: '20px', height:'74px', width:'753px', backgroundColor:'#504e4e'}}>
              <div style={{marginLeft:'213px'}}>
                <div style={{height:'54px', width:'550'}}>
                  <Grid container alignItems='center' style={{height:'54px', width:'550'}}>
                    <Typography variant="h4" style={{color:'white',fontWeight:'bold'}}>Phan Phi Phi</Typography>
                  </Grid>
                </div>
                <div>
                  <Typography style={{color:'white', fontWeight:'bold'}}>Front End Trainee</Typography>
                </div>
              </div>
            </div>
            <div style={{paddingTop:'15px', paddingBottom:'15px', paddingLeft:'25px', height:'69px', width:'728px',}}>
              <div style={{marginLeft:'190px', height:'69px', width:'538px',}}>
                <Grid container>
                  <Grid item xs={6}>
                    <Grid container >
                      <Grid item>
                        <DateRangeIcon style={{fontSize: 20, color:'#504e4e',paddingTop:'2px', paddingRight:'10px'}}/>
                      </Grid>
                      <Grid item style={{color:'#494949'}}>
                        15/07/1999
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Grid container >
                      <Grid item>
                        <PersonIcon style={{fontSize: 20, color:'#504e4e',paddingTop:'2px', paddingRight:'10px'}}/>
                      </Grid>
                      <Grid item style={{color:'#494949'}}>
                        Nam
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                  <Grid container >
                      <Grid item>
                        <PhoneIcon style={{fontSize: 20, color:'#504e4e',paddingTop:'2px', paddingRight:'10px'}}/>
                      </Grid>
                      <Grid item style={{color:'#494949'}}>
                        0935391605
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Grid container >
                      <Grid item>
                        <MailIcon style={{fontSize: 20, color:'#504e4e',paddingTop:'2px', paddingRight:'10px'}}/>
                      </Grid>
                      <Grid item style={{color:'#494949'}}>
                        kusphan15@gmail.com
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Grid container >
                      <Grid item>
                        <LocationOnIcon style={{fontSize: 20, color:'#504e4e',paddingTop:'2px', paddingRight:'10px'}}/>
                      </Grid>
                      <Grid item style={{color:'#494949'}}>
                        HCM City, Viet Nam
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Grid container >
                      <Grid item>
                        <LinkIcon style={{fontSize: 20, color:'#504e4e',paddingTop:'2px', paddingRight:'10px'}}/>
                      </Grid>
                      <Grid item>                        
                        <Link href="#" onClick style={{color:'#494949'}}>
                          facebook.com/phiphi.phan.1507
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </div>
        <Divider variant='middle' style={{color:'black'}}/>
        <div>
          <Grid container>
          <div style={{paddingTop:'10px', paddingLeft:'20px',height:'488px', width:'297px'}}>
            <div style={{paddingBottom:'20px',height:'174px', width:'300px'}}>
              <div>
                <Typography variant="h5" style={{color:'#504E4E',fontWeight:'bold'}}>
                  SKILLS
                </Typography>
              </div>
              <div style={{paddingTop:'5px'}}>
                <Grid container justify='space-between' >
                  <Grid item xs={6} style={{color:'#494949',fontWeight:'lighter'}}>
                    English
                  </Grid>
                  <Grid item xs={6}>
                      <FiberManualRecordIcon style={{color:'#504E4E'}}/>                                           
                      <FiberManualRecordIcon style={{color:'#504E4E'}}/>                                            
                      <FiberManualRecordIcon style={{color:'#504E4E'}}/>                                           
                      <FiberManualRecordIcon style={{color:'#EEEEEE'}}/>                                            
                      <FiberManualRecordIcon style={{color:'#EEEEEE'}}/>                      
                  </Grid>
                </Grid>
              </div>
              <div style={{paddingTop:'2px'}}>
                <Grid container justify='space-between' >
                  <Grid item xs={6} style={{color:'#494949',fontWeight:'lighter'}}>
                    Working group
                  </Grid>
                  <Grid item xs={6}>
                      <FiberManualRecordIcon style={{color:'#504E4E'}}/>                                           
                      <FiberManualRecordIcon style={{color:'#504E4E'}}/>                                            
                      <FiberManualRecordIcon style={{color:'#504E4E'}}/>                                           
                      <FiberManualRecordIcon style={{color:'#504E4E'}}/>                                            
                      <FiberManualRecordIcon style={{color:'#EEEEEE'}}/>                      
                  </Grid>
                </Grid>
              </div>
              <div style={{paddingTop:'2px'}}>
                <Grid container justify='space-between'>
                  <Grid item xs={6} style={{color:'#494949',fontWeight:'lighter'}}>
                    Program
                  </Grid>
                  <Grid item xs={6}>
                      <FiberManualRecordIcon style={{color:'#504E4E'}}/>                                           
                      <FiberManualRecordIcon style={{color:'#504E4E'}}/>                                            
                      <FiberManualRecordIcon style={{color:'#504E4E'}}/>                                           
                      <FiberManualRecordIcon style={{color:'#504E4E'}}/>                                            
                      <FiberManualRecordIcon style={{color:'#EEEEEE'}}/>                      
                  </Grid>
                </Grid>
              </div>
              <div style={{paddingTop:'2px'}}>
                <Grid container justify='space-between'>
                  <Grid item xs={6} style={{color:'#494949',fontWeight:'lighter'}}>
                    Public speaking
                  </Grid>
                  <Grid item xs={6}>
                      <FiberManualRecordIcon style={{color:'#504E4E'}}/>                                           
                      <FiberManualRecordIcon style={{color:'#504E4E'}}/>                                            
                      <FiberManualRecordIcon style={{color:'#EEEEEE'}}/>                                           
                      <FiberManualRecordIcon style={{color:'#EEEEEE'}}/>                                            
                      <FiberManualRecordIcon style={{color:'#EEEEEE'}}/>                      
                  </Grid>
                </Grid>
              </div>
              <div style={{paddingTop:'2px'}}>
                <Grid container justify='space-between'>
                  <Grid item xs={6} style={{color:'#494949',fontWeight:'lighter'}}>
                    Communication
                  </Grid>
                  <Grid item xs={6}>
                      <FiberManualRecordIcon style={{color:'#504E4E'}}/>                                           
                      <FiberManualRecordIcon style={{color:'#504E4E'}}/>                                            
                      <FiberManualRecordIcon style={{color:'#504E4E'}}/>                                           
                      <FiberManualRecordIcon style={{color:'#EEEEEE'}}/>                                            
                      <FiberManualRecordIcon style={{color:'#EEEEEE'}}/>                      
                  </Grid>
                </Grid>
              </div>
            </div>

            <Divider/>

            <div style={{paddingTop:'10px', paddingBottom:'20px', paddingRight:'20px',height:'74px', width:'276px'}}>
              <div>
                <Typography variant="h5" style={{color:'#504E4E',fontWeight:'bold'}}>
                  KNOWLEDGE
                </Typography>
              </div>
              <div style={{paddingTop:'5px'}}>
                <Grid item xs={6} style={{color:'#494949',fontWeight:'lighter'}}>
                  - Javascript
                </Grid>
              </div>
              <div>
                <Grid item xs={6} style={{color:'#494949',fontWeight:'lighter'}}>
                  - React.js
                </Grid>
              </div>
            </div>

            <Divider/>

            <div style={{paddingTop:'10px', paddingBottom:'20px', paddingRight:'20px',height:'114px', width:'276px'}}>
              <div>
                <Typography variant="h5" style={{color:'#504E4E',fontWeight:'bold'}}>
                  TARGET
                </Typography>
              </div>
              <div style={{paddingTop:'5px'}}>
                <Grid item xs={12} style={{color:'#494949',fontWeight:'lighter'}}>
                  - Learn and work on online application development with React.js engine.
                </Grid>
              </div>
              <div>
                <Grid item xs={12} style={{color:'#494949',fontWeight:'lighter'}}>
                  - Within 3-4 years of accumulating knowledge to become Senior Web Developers.
                </Grid>
              </div>
            </div>

          </div>
          <Divider orientation="vertical" flexItem/>
          <div style={{paddingTop:'10px',height:'500px', width:'460px'}}>
            <div style={{paddingLeft:'20px',paddingBottom:'20px',height:'96px', width:'438px'}}>
              <div>
                <Typography variant="h5" style={{color:'#504E4E',fontWeight:'bold'}}>
                  EDUCATION
                </Typography>
              </div>
              <div style={{paddingTop:'5px'}}>
                <Grid container>
                  <Grid item xs={4}>
                    <Typography style={{color:'#494949',fontWeight:'bold'}}>
                      Van Lang University
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      (10/2017 to 05/2021)
                    </Typography>
                  </Grid>
                </Grid>
              </div>
              <div>
                <Grid item xs={12} >
                  <Typography style={{color:'#494949',fontWeight:'bold',fontStyle:'italic'}}>
                    Major: Software Engineering
                  </Typography>
                </Grid>
                <Grid item style={{fontWeight:'lighter'}}>
                  GPA 6.0
                </Grid>
              </div>
            </div>

            <Divider/>

            <div style={{paddingLeft:'20px', paddingTop:'10px',height:'265px', width:'438px'}}>
              <div>
                <Typography variant="h5" style={{color:'#504E4E',fontWeight:'bold'}}>
                  WORK EXPERIENCE
                </Typography>
              </div>
              <div style={{paddingTop:'5px'}}>
                <Grid container>
                  <Grid item>
                    <Typography style={{color:'#494949',fontWeight:'bold'}}>
                      Mobile application
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      (08/2018 to 01/2019)
                    </Typography>
                  </Grid>
                </Grid>
              </div>
              <div>
                <Grid item xs={12} >
                  <Typography style={{color:'#494949',fontWeight:'bold',fontStyle:'italic'}}>
                    Leader
                  </Typography>
                </Grid>
                <Grid item style={{fontWeight:'lighter'}}>
                  - Handling requests and performing mobile app functions.
                </Grid>
                <Grid item style={{fontWeight:'lighter'}}>
                  - Design each function and interface.
                </Grid>
                <Grid item style={{fontWeight:'lighter'}}>
                  - The essential and efficient data of the application.
                </Grid>
                <Grid item style={{fontWeight:'lighter'}}>
                  - Designing architectural documents.
                </Grid>
              </div>
              <div style={{paddingTop:'5px'}}>
                <Grid container>
                  <Grid item>
                    <Typography style={{color:'#494949',fontWeight:'bold'}}>
                      Web design
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      (02/2019 to 06/2019)
                    </Typography>
                  </Grid>
                </Grid>
              </div>
              <div>
                <Grid item xs={12} >
                  <Typography style={{color:'#494949',fontWeight:'bold',fontStyle:'italic'}}>
                    Leader
                  </Typography>
                </Grid>
                <Grid item style={{fontWeight:'lighter'}}>
                  - Handle requests and perform website functions.
                </Grid>
                <Grid item style={{fontWeight:'lighter'}}>
                  - Run the actual website, check and fix errors.
                </Grid>
                <Grid item style={{fontWeight:'lighter'}}>
                  - Aggregate all data and features for a website to be used.
                </Grid>
                <Grid item style={{fontWeight:'lighter'}}>
                  - Designing architectural documents.
                </Grid>
              </div>
            </div>
          </div>
          </Grid>
        </div>
      </Paper>
      )
    }    
      </Grid>
    </>
  );
}

export default App;
