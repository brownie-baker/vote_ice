import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Tooltip } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';

const Header = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // 전체화면 상태 변경 감지
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // 전체화면 전환 함수
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      // 전체화면으로 전환
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`전체화면 전환 오류: ${err.message}`);
      });
    } else {
      // 전체화면 종료
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

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
          
          {/* 전체화면 전환 버튼 */}
          <Tooltip title={isFullscreen ? "전체화면 종료" : "전체화면 보기"}>
            <IconButton
              size="large"
              color="inherit"
              aria-label="fullscreen"
              onClick={toggleFullscreen}
              sx={{ color: '#707070' }}
            >
              {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
            </IconButton>
          </Tooltip>
          
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