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
              <FormControlLabel value="vn" control={<Radio />} label="Tiếng Việt"/>
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
                  <Typography style={{color:'white', fontWeight:'bold'}}>Thực tập sinh Frontend</Typography>
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
                        TP HCM, Việt Nam
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
                  KỸ NĂNG
                </Typography>
              </div>
              <div style={{paddingTop:'5px'}}>
                <Grid container justify='space-between' >
                  <Grid item xs={6} style={{color:'#494949',fontWeight:'lighter'}}>
                    Tiếng anh
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
                    Làm việc nhóm
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
                    Lập trình
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
                    Nói trước công chúng
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
                    Giao tiếp
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
                  KIẾN THỨC
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
                  MỤC TIÊU
                </Typography>
              </div>
              <div style={{paddingTop:'5px'}}>
                <Grid item xs={12} style={{color:'#494949',fontWeight:'lighter'}}>
                  - Học tập và làm việc phát triển ứng dụng trực tuyến với công cụ React.js.
                </Grid>
              </div>
              <div>
                <Grid item xs={12} style={{color:'#494949',fontWeight:'lighter'}}>
                  - Trong vòng 3-4 năm tích lũy các kiến thức để trở thành Senior Web Developers.
                </Grid>
              </div>
            </div>

          </div>
          <Divider orientation="vertical" flexItem/>
          <div style={{paddingTop:'10px',height:'500px', width:'460px'}}>
            <div style={{paddingLeft:'20px',paddingBottom:'20px',height:'96px', width:'438px'}}>
              <div>
                <Typography variant="h5" style={{color:'#504E4E',fontWeight:'bold'}}>
                  HỌC VẤN
                </Typography>
              </div>
              <div style={{paddingTop:'5px'}}>
                <Grid container>
                  <Grid item xs={5}>
                    <Typography style={{color:'#494949',fontWeight:'bold'}}>
                      Trường đại học Văn Lang
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      (10/2017 đến 05/2021)
                    </Typography>
                  </Grid>
                </Grid>
              </div>
              <div>
                <Grid item xs={12} >
                  <Typography style={{color:'#494949',fontWeight:'bold',fontStyle:'italic'}}>
                    Chuyên ngành: Kỹ thuật phần mềm
                  </Typography>
                </Grid>
                <Grid item style={{fontWeight:'lighter'}}>
                  Điểm trung bình 6.0
                </Grid>
              </div>
            </div>

            <Divider/>

            <div style={{paddingLeft:'20px', paddingTop:'10px',height:'265px', width:'438px'}}>
              <div>
                <Typography variant="h5" style={{color:'#504E4E',fontWeight:'bold'}}>
                  KINH NGHIỆM LÀM VIỆC
                </Typography>
              </div>
              <div style={{paddingTop:'5px'}}>
                <Grid container>
                  <Grid item>
                    <Typography style={{color:'#494949',fontWeight:'bold'}}>
                      Ứng dụng di động
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      (08/2018 đến 01/2019)
                    </Typography>
                  </Grid>
                </Grid>
              </div>
              <div>
                <Grid item xs={12} >
                  <Typography style={{color:'#494949',fontWeight:'bold',fontStyle:'italic'}}>
                    Trưởng nhóm
                  </Typography>
                </Grid>
                <Grid item style={{fontWeight:'lighter'}}>
                  - Xử lý yêu cầu và thực hiện các chức năng ứng dụng di động.
                </Grid>
                <Grid item style={{fontWeight:'lighter'}}>
                  - Thiết kế từng chức năng và giao diện.
                </Grid>
                <Grid item style={{fontWeight:'lighter'}}>
                  - Các dữ liệu cần thiết và hiệu quả của ứng dụng.
                </Grid>
                <Grid item style={{fontWeight:'lighter'}}>
                  - Thiết kế tài liệu kiến trúc.
                </Grid>
              </div>
              <div style={{paddingTop:'5px'}}>
                <Grid container>
                  <Grid item>
                    <Typography style={{color:'#494949',fontWeight:'bold'}}>
                      Thiết kế web
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      (02/2019 đến 06/2019)
                    </Typography>
                  </Grid>
                </Grid>
              </div>
              <div>
                <Grid item xs={12} >
                  <Typography style={{color:'#494949',fontWeight:'bold',fontStyle:'italic'}}>
                    Trưởng nhóm
                  </Typography>
                </Grid>
                <Grid item style={{fontWeight:'lighter'}}>
                  - Xử lý các yêu cầu và thực hiện các chức năng của website.
                </Grid>
                <Grid item style={{fontWeight:'lighter'}}>
                  - Chạy trang web thực tế, kiểm tra và sửa lỗi.
                </Grid>
                <Grid item style={{fontWeight:'lighter'}}>
                  - Tổng hợp tất cả các dữ liệu và tính năng cho một trang web được sử dụng.
                </Grid>
                <Grid item style={{fontWeight:'lighter'}}>
                  - Thiết kế tài liệu kiến trúc.
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
      
      {/* <Grid container justify='center'>
        <Paper elevation={5} style={{height:'605px', width:'500px', marginTop:'10px'}}>
          <div variant="outlined" >
            <div>
              <Grid container alignItems='center' spacing={1} style={{width:'500px'}}>
                <Grid item style={{paddingLeft:'21px', paddingTop:'10px'}}>
                  <Avatar src={img0}/>
                </Grid>
                <Grid item xs={6}>
                  <Grid container alignItems='center'>
                    <Typography variant='subtitle1' style={{color:'#050505', paddingTop:'8px',height:'16px', width:'200px' }} >
                      Quang Nguyên <CheckCircleIcon style={{fontSize: 14, color:'blue'}}/> 
                    </Typography>
                  </Grid>
                  <Grid container alignItems='center' style={{height:'40px', width:'150px' }}>
                    <Typography variant='caption' style={{color:'#65676B'}}>
                      26 tháng 1, 2019 - 
                    </Typography> 
                    <SupervisorAccountIcon style={{fontSize: 16, color:'#65676B',paddingBottom:'2px', paddingLeft:'4px'}}/> 
                  </Grid>         
                </Grid>
                <Grid item xs={4}>
                  <Grid container style={{paddingLeft:'125px'}}>
                    <IconButton size='medium'>
                      <MoreHorizIcon/>
                    </IconButton>
                  </Grid>
                </Grid>
                <Grid item style={{paddingLeft:'21px'}}>
                  Tạm biệt 2 thằng bé Phú Yên, thằng em Quảng Ngãi, cô bé Bình Định, vật nuôi Tiền Giang và 2 dân chơi bò Gia Lai
                </Grid>
              </Grid>
            </div><br/>
          <Divider variant='middle' />
            <div style={{paddingBottom:'3px'}}>
              <Grid container justify='center'>
                <Grid item>
                  <img src={img4} style={{height:'375px', width:'500px'}}/>
                </Grid>
                <Grid item>
                  <Grid container style={{height:'35px', width:'460px'}} alignItems='center' justify='space-between'>
                    <Grid item xs={3}>
                      <Grid container style={{height:'35px'}} alignItems='center'>
                        <Grid item>
                          <ThumbUpAltIcon style={{fontSize: 20, color:'0066FF', paddingTop:'5'}}/>                        
                        </Grid>
                        <Grid item>
                          <FavoriteIcon style={{fontSize: 20, color:'#FF3333',paddingTop:'5'}}/>
                        </Grid>
                        <Grid item>
                          <MoodIcon style={{fontSize: 20, color:'#FFCC00',paddingTop:'5'}}/>
                        </Grid>
                        <Grid item style={{paddingLeft:'10px'}}>
                          <Typography>
                            <Link href="#" onClick style={{color:'#65676B', fontSize:'0.9rem'}}>
                              987K 
                            </Link>
                          </Typography> 
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={6}>
                      <Grid container justify='space-around' spacing={1}>
                        <Typography>
                          <Link href="#" onClick style={{color:'#65676B', fontSize:'0.9rem'}}>
                            10,2K bình luận
                          </Link>
                        </Typography> 
                        <Typography>
                          <Link href="#" onClick style={{color:'#65676B', fontSize:'0.9rem'}}>
                            888 lượt chia sẻ
                          </Link>
                        </Typography>
                      </Grid>                
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          <Divider variant='middle'/>
            <div>
              <Grid container justify='space-around' style={{paddingTop:'3px'}}>
                <Grid item style={{paddingLeft:'2px'}}>
                  <Button >
                    <Grid container justify='center' alignItems='center' style={{height:'30px', width:'135px'}}>
                      <Grid item style={{paddingRight:'10px'}}>
                        <ThumbUpAltOutlinedIcon style={{fontSize: 22,color:'#65676B',paddingTop:'5px'}}/>
                      </Grid>                      
                      <Grid item>
                        <span>
                        <Typography variant='subtitle1' style={{color:'#65676B'}}>Thích</Typography>
                        </span>
                        
                      </Grid>
                    </Grid>
                  </Button>
                </Grid>
                <Grid item>
                  <Button>
                    <Grid container justify='center' alignItems='center' style={{height:'30px', width:'135px'}}>
                      <Grid item style={{paddingRight:'10px'}}>
                        <ChatBubbleOutlineOutlinedIcon turnover style={{fontSize: 22,color:'#65676B',paddingTop:'5px'}}/>
                      </Grid>                      
                      <Grid item style={{paddingBottom:'5px'}}>
                        <Typography variant='subtitle1' style={{color:'#65676B'}}>Bình luận</Typography>
                      </Grid>
                    </Grid>
                  </Button>
                </Grid>
                <Grid item>
                  <Button focusRipple>
                    <Grid container justify='center' alignItems='center' style={{height:'30px', width:'135px'}}>
                      <Grid item style={{paddingRight:'10px'}}>
                        <ScreenShareOutlinedIcon style={{fontSize: 22,color:'#65676B', paddingTop:'5px'}}/>
                      </Grid>                      
                      <Grid item style={{paddingBottom:'5px'}}>
                        <Typography component="span" variant='subtitle1' style={{color:'#65676B'}}>Chia sẻ</Typography>
                      </Grid>
                    </Grid>
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </Paper>
      </Grid> */}


      {/* <Grid container >
       <Grid item xs={12} style={{padding:'10px'}}>
          <Grid container justify='center'>
            <Grid item xs={2}>
              <Typography variant='h5'>
                Dù bạn là ai?
              </Typography>
            </Grid>
          </Grid>
          <Grid container style={{marginLeft:'380px'}}>
            <Grid item xs={8}>
              <Typography variant='h5'>
                Simple Page sẽ giúp bạn thiết kế Landing Page chỉ trong 3 bước!
              </Typography>
            </Grid>
          </Grid>
          <Grid container style={{marginLeft:'270px',marginTop:'25px',color:'gray'}}>
            <Grid item xs={8}>
              <Typography variant='h6'>
              Chỉ với 3 bước đơn giản để tạo Landing Page đẹp hiệu quả Chuyển đổi – Chuyên nghiệp – Chất lượng cao
              </Typography>
            </Grid>
          </Grid>
        </Grid> 
        <Grid item xs={12}>
          <Grid container spacing={10} justify='center' style={{height:'400px', paddingTop:'20px'}}>
            <Grid item xs={3}>
              <Paper elevation={5} style={{height:'420px', width:'370px'}}>
                <Grid container justify='center'>
                  <Grid item >                  
                    <div class="hover01 column">
                      <div>
                        <figure><img src={img}/></figure>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography style={{color:'#4054B2', variant:'h6', marginLeft:'90px',fontSize:'1.2rem'}}>
                      1. Chọn mẫu giao diện
                    </Typography>
                    <Typography style={{color:'#54595F', variant:'body1', marginLeft:'20px',marginTop:'20px'}}>
                      Với hơn 500 mẫu giao được phân loại đa dạng với nhiều lĩnh vực, bạn có thể dễ dàng sử dụng ngay Landing Page để tùy biến phục vụ nhu cầu của mình.
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>           
            </Grid>
            <Grid item xs={3}>
              <Paper elevation={5} style={{height:'420px', width:'370px'}}>
                <Grid container justify='center'>
                  <Grid item>
                    <div class="hover01 column">
                      <div>
                        <figure><img src={img2} /></figure>
                      </div>
                    </div>
                  </Grid>
                    <Grid item xs={12}>
                      <Typography style={{color:'#4054B2', variant:'h6', marginLeft:'90px',fontSize:'1.2rem'}}>
                        2. Tùy biến Landing Page
                      </Typography>
                      <Typography style={{color:'#54595F', variant:'body1', marginLeft:'20px',marginTop:'20px'}}>
                        Simple Page có builder cực mạnh để giúp bạn tùy biến Landing Page theo ý muốn như bố cục, màu sắc, văn bản, hình ảnh, hiệu ứng và các tính năng độc đáo khác.                      
                      </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper elevation={5} style={{height:'420px', width:'370px'}}>
                <Grid container justify='center'>
                  <Grid item>
                    <div class="hover01 column">
                      <div>
                        <figure><img src={img3} /></figure>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography style={{color:'#4054B2', variant:'h6', marginLeft:'100px',fontSize:'1.2rem'}}>
                      3. Xuất bản tên miền
                    </Typography>
                    <Typography style={{color:'#54595F', variant:'body1', marginLeft:'20px',marginTop:'20px'}}>
                      Sau khi tùy biến xong bạn có thể xuất bản ngay Landing Page về tên miền riêng của mình và triển khai các chiến dịch quảng cáo như Google Ads, Facebook Ads,...                    
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
          
      </Grid> */}
      {/* <Grid container spacing={5}>
        <Grid item xs={12}>
          <Grid container style={{marginLeft:'70px'}}>
            <Grid item xs={3}>
              <img src={img} height='220px' width='320px'/>   
            </Grid>
            <Grid item xs={4}>
              <Grid container style={{height:'220px'}} alignItems='center'>
                <Grid item xs={12}>
                  <Typography variant='h5' style={{fontSize:'1.7rem'}} gutterBottom>
                    Bí thư Thành ủy TP.HCM Nguyễn Văn Nên không ứng cử đại biểu Quốc hội
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container >
                    <Grid item xs={1}>
                      <Typography variant='overline' display="block" gutterBottom>
                        20:53                       
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant='overline' display='block' gutterBottom>
                        16/3/2021
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Typography style={{fontSize:'1rem'}} gutterBottom>
                  Bí thư Thành ủy TP.HCM Nguyễn Văn Nên không có tên trong danh sách ứng cử đại biểu Quốc hội khóa XV. Trong khi đó, ông Nguyễn Thiện Nhân được giới thiệu tiếp tục ứng cử.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid> */}

    {/* <Grid container spacing={2} justify='space-around' alignItems='center' style={{height:'100px'}} >

      <Grid item xs={3}>
        <Grid container spacing={1} alignItems='center'>
          <Grid item xs={2}>
            <IconButton>
              <FacebookIcon color="primary" fontSize="large"/>
            </IconButton>
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={1} alignItems='center'>
              <Grid item>
                <FormControl >
                  <InputLabel htmlFor="icon">
                    Tìm kiếm với Facebook 
                   </InputLabel>
                  <Input
                    id="icon"
                    startAdornment={
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Hidden xsDown>
      <Grid item xs={6}>
        <Grid container spacing={1} justify='center' >
          <Grid item xs={2}>
            <Grid container justify='center'>
              <Button>
                <HomeOutlinedIcon fontSize="large" />
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Grid container justify='center'>
              <Button>
                <OndemandVideoIcon fontSize="large"/>
              </Button>
            </Grid>            
          </Grid>
          <Grid item xs={2}>
            <Grid container justify='center'>
              <Button>
                <MarkunreadIcon fontSize="large"/>
              </Button>
            </Grid>           
          </Grid>
          <Grid item xs={2}>
            <Grid container justify='center'>
              <Button>
                <GroupIcon fontSize="large"/>
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid container style={{marginLeft:'25px'}}>
              <Button>
                <SportsEsportsIcon fontSize="large"/>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>           
      </Hidden>
      

      <Grid item xs={3}>
      <Grid container justify='flex-end' alignItems='center'> 
          <Grid item xs={2}>
            <Grid container justify='center'>
              <IconButton>
                <Avatar alt="Remy Sharp" src={img} />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Grid container justify='center'>
              <IconButton>
                <AddIcon fontSize="medium" />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Grid container justify='center'>
              <IconButton>
                <MessageIcon fontSize="medium" />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Grid container justify='center'>
              <IconButton>
                <NotificationsIcon fontSize="medium" />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Grid container justify='center'>
              <IconButton>
                <MoreHorizIcon fontSize="medium" />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid> */}

    {/* <Grid container spacing={0}>
      <Grid item xs={2}>
        <Box bgcolor='pink' style={{height:'1000px'}}>
          <Grid container spacing={4}>      
            <Grid item xs={12}>
              <Grid container justify="center" alignItems='center' style={{height:'100px', backgroundColor:'red'}}>
                <Grid xs={8}>
                  123
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container justify="center" alignItems='center' style={{height:'70px'}}>
                <Grid xs={8}>
                  123
                </Grid>
              </Grid>
              <Grid container justify="center" alignItems='center' style={{height:'30px'}}>
                <Grid xs={6}>
                  123
                </Grid>
              </Grid>
              <Grid container justify="center" alignItems='center' style={{height:'30px'}}>
                <Grid xs={6}>
                  123
                </Grid>
              </Grid>
              <Grid container justify="center" alignItems='center' style={{height:'30px'}}>
                <Grid xs={6}>
                  123
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>


      <Grid item xs={10}>
        <Box bgcolor='gray' style={{height:'100px'}}>
          <Grid container>
            <Grid item xs={8}>
              <Grid container >
                <Grid item xs={12}>
                  <Grid container justify="flex-end" alignItems='flex-end'>
                    <Grid item>
                      123
                    </Grid>                   
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container justify="flex-end" alignItems='flex-end' style={{height:'78px'}}>
                    <Grid item>
                      123
                    </Grid>                   
                  </Grid>
                </Grid>                
              </Grid>            
            </Grid>
            <Grid item xs={1}>
              <Grid container >
                <Grid item xs={12}>
                  <Grid container justify="flex-end" alignItems='flex-end' style={{height:'32px'}}>
                    <Grid item>
                      123
                    </Grid>                   
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container justify="flex-end" alignItems='flex-end' style={{height:'48px'}}>
                    <Grid item>
                      123
                    </Grid>                   
                  </Grid>
                </Grid>   
              </Grid>            
            </Grid>
              <Grid item xs={1}>
              <Grid container >
                <Grid item xs={12}>
                  <Grid container justify="flex-end" alignItems='flex-end' style={{height:'55px'}}>
                    <Grid item>
                      123
                    </Grid>                   
                  </Grid>
                </Grid>   
              </Grid>           
            </Grid>
            <Grid item xs={1}>
              <Grid container >
                <Grid item xs={12}>
                  <Grid container justify="flex-end" alignItems='flex-end' style={{height:'32px'}}>
                    <Grid item>
                      123
                    </Grid>                   
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container justify="flex-end" alignItems='flex-end' style={{height:'48px'}}>
                    <Grid item>
                      123
                    </Grid>                   
                  </Grid>
                </Grid>   
              </Grid>            
            </Grid>
            <Grid item xs={1}>
              <Grid container >
                <Grid item xs={12}>
                  <Grid container justify="flex-end" alignItems='flex-end'>
                    <Grid item>
                      123
                    </Grid>                   
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container justify="flex-end" alignItems='flex-end' style={{height:'78px'}}>
                    <Grid item>
                      123
                    </Grid>                   
                  </Grid>
                </Grid>                
              </Grid>            
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid> */}
        

    
    
    
    
    
    
    {/* <Box bgcolor='pink' m={1} padding={1}>
      <Grid container spacing={1} alignItems='center' style={{height:'70px'}}>
        <Grid item xs={2}>
          <Grid container alignItems='center' style={{backgroundColor: 'gray', height:'50px'}}>
            <Grid item xs={5} style={{color: 'white'}}>
              <Grid container justify='center' >
                <Grid item>
                  123
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={5} style={{color: 'white'}}>
              123
            </Grid>
            <Grid item style={{color: 'white'}}>
              123
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={7}>
          <Grid container justify="space-around" alignItems='center' style={{backgroundColor: 'yellow', height:'50px'}}>
            <Grid item>
              123
              <Hook />
              123
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container justify="space-around" alignItems='center' style={{backgroundColor: 'gray', height:'50px'}}>
            <Grid item style={{color: 'white'}}>
              123
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box> */}




    {/* <Box bgcolor='gray' m={1}>
      <Grid container spacing={3} alignItems='center'>
        <Grid item xs={1.5}>
          <Grid container justify="space-around" style={{backgroundColor: 'yellow'}}>
            <Grid item>
              <Hook />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1.5}>
          <Grid container justify="space-around" style={{backgroundColor: 'yellow'}}>
            <Grid item>
              <Hook />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1.5}>
          <Grid container justify="space-around" style={{backgroundColor: 'yellow'}}>
            <Grid item>
              <Hook />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1.5}>
          <Grid container justify="space-around" style={{backgroundColor: 'yellow'}}>
            <Grid item>
              <Hook />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1.5}>
          <Grid container justify="space-around" style={{backgroundColor: 'yellow'}}>
            <Grid item>
              <Hook />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1.5}>
          <Grid container justify="space-around" style={{backgroundColor: 'yellow'}}>
            <Grid item>
              <Hook />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1.5}>
          <Grid container justify="space-around" style={{backgroundColor: 'yellow'}}>
            <Grid item>
              <Hook />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1.5}>
          <Grid container justify="space-around" style={{backgroundColor: 'yellow'}}>
            <Grid item>
              <Hook />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Grid container justify="flex-end" style={{backgroundColor: 'yellow'}}>
            <Grid item >
              <Grid container style={{backgroundColor: 'red'}}>
                <Grid item>
                  Zing New
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justify="flex-end" style={{backgroundColor: 'yellow'}}>
            <Grid item >
              <Grid container style={{backgroundColor: 'red'}}>
                <Grid item>
                  Zing New
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box><br/>
    <Box bgcolor='White' m={1}>
      <Grid container spacing={3} alignItems='center'>
        <Grid item xs={12}>
          <Grid container justify="flex-end" style={{backgroundColor: 'White'}}>
            <Grid item xs={1}>
              Chính trị
            </Grid>
            <Grid item xs={1}>
              Nhân sự mới
            </Grid>
            <Grid item xs={1}>
              Giao thông
            </Grid>
            <Grid item xs={1}>
              Đô thị
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box><br/>
    <Box bgcolor='gray' m={8} padding={8}>
      <Grid container spacing={3} alignItems='center'>
        <Grid item xs={8} >
          <Grid container justify="space-around" style={{backgroundColor: 'White', height: '100px'}} >
            <Grid item xs={1} >
              Hình
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid container justify="space-around" style={{backgroundColor: 'White', height: '100px'}}>
            <Grid item xs={1} >
              Hình
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container justify="flex-start" style={{color: 'Black'}}>
            <Grid item xs={3} >
              Nội dung
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={9}>
          <Grid container justify="flex-end" style={{color: 'Black'}}>
            <Grid item xs={1} >
              Nội dung
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} >
          <Grid container justify="space-around" style={{backgroundColor: 'White', height: '100px'}} >
            <Grid item xs={1} >
              Hình
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} >
          <Grid container justify="space-around" style={{backgroundColor: 'White', height: '100px'}} >
            <Grid item xs={1} >
              Hình
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} >
          <Grid container justify="space-around" style={{backgroundColor: 'White', height: '100px'}} >
            <Grid item xs={1} >
              Hình
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} >
          <Grid container justify="flex-start" style={{Color: 'Black'}} >
            <Grid item xs={2} >
              Nội dung
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} >
          <Grid container justify="flex-start" style={{Color: 'Black'}} >
            <Grid item xs={2} >
              Nội dung
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} >
          <Grid container justify="flex-start" style={{Color: 'Black'}} >
            <Grid item xs={2} >
              Nội dung
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>  */}





      {/* <Box bgcolor="red" m={1}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={3}>
            <Grid container justify="space-around" style={{backgroundColor: 'blue'}}>
              <Grid item>
                123<br/>
                dfgdfgdfg<br/>
                123123
              </Grid>             
            </Grid>
          </Grid>
          <Grid item xs={6} >
            <Grid container justify="space-around" style={{backgroundColor: 'blue'}}>
              <Grid item>
                123<br/>
                dfgdfgdfg<br/>
                123123<Hook />
              </Grid>             
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid container justify="flex-end">
              Gia'
            </Grid>
          </Grid>
        </Grid>
      </Box> */}
    </>
  );
}

export default App;
