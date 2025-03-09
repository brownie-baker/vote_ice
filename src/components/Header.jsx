import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

const Header = () => {
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: '#ffffff',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1100
      }} 
      elevation={0}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ color: '#707070' }}>
          2025-03-09
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Typography variant="body1" sx={{ color: '#707070' }}>
            서울시: 흐림, -2 / 9°C
          </Typography>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="settings"
            sx={{ color: '#707070' }}
          >
            <SettingsIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 