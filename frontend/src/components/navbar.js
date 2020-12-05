import React from 'react';
import './navbar.css';
import { withRouter, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
import EventIcon from '@material-ui/icons/Event';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import HomeIcon from '@material-ui/icons/Home';
function Navbar() {
  let history = useHistory();
  const loginPage = () => {
    let path = './login';
    history.push(path);
  };
  const homePage = () => {
    let path = '/';
    history.push(path);
  };
  return (
    <div>
      <link rel='preconnect' href='https://fonts.gstatic.com'></link>
      <link
        href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap'
        rel='stylesheet'></link>
      <div className='navbar'>
        <div className='flex1'>
          <div className='home' onClick={homePage}>
            <HomeIcon className={'homebutton'}></HomeIcon> APNA GHAR
          </div>
        </div>
        <div className='flex2'>
          <div className='notifications'>
            <Link to='./notifications'>
              <AccessAlarmsIcon
                className={'notificationsbutton'}></AccessAlarmsIcon>
            </Link>
          </div>
          <div className='bookings'>
            <Link to='./bookings'>
              <EventIcon className={'notificationsbutton'}></EventIcon>
            </Link>
          </div>
          <div className='announcement'>
            <Link to='./announcement'>
              <AnnouncementIcon
                className={'notificationsbutton'}></AnnouncementIcon>
            </Link>
          </div>
          <div className='signout' onClick={loginPage}>
            SIGN OUT
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(Navbar);
