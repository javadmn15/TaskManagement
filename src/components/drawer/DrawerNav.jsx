import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CloseRounded from '@mui/icons-material/CloseRounded';
import HomeRounded from '@mui/icons-material/HomeRounded';
import NotificationsRounded from '@mui/icons-material/NotificationsRounded';
import LogoutRounded from '@mui/icons-material/LogoutRounded';
import { Avatar, Stack, Typography } from '@mui/material';

export default function DrawerNav({isDrawerOpen,setDrawerStatus}) {
  const toggleDrawer = (newOpen) => () => {
    setDrawerStatus()
  };

  const DrawerList = (
    <Box sx={{ width: 350,backgroundColor:'#272a34' }}  role="presentation" onClick={toggleDrawer(false)}>
      <Stack direction="row" display={'flex'} alignItems={'center'} sx={{m:2}}>
        <CloseRounded />
        <Avatar sx={{marginLeft:3}}/>
        <Stack direction="column" sx={{marginLeft:1}}>
            <Typography variant='h6'>Javad Jamali</Typography>  
            <Typography variant='p'>Adminstartor</Typography>  
        </Stack>    

      </Stack>
      <Divider />
      <List>
          <ListItem key={'home'} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                  <HomeRounded/>
              </ListItemIcon>
              <ListItemText primary={'Home'} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'notifications'} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                  <NotificationsRounded/>
              </ListItemIcon>
              <ListItemText primary={'Notifications'} />
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem key={'logout'} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                  <LogoutRounded/>
              </ListItemIcon>
              <ListItemText primary={'Logout'} />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={isDrawerOpen} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}