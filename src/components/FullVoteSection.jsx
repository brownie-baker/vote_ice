import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const FullVoteSection = ({ children, ...props }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // AppBar의 기본 높이는 64px이지만, 모바일에서는 56px입니다
  const appBarHeight = isMobile ? 56 : 64;
  
  return (
    <Box
      sx={{
        width: '100%',
        height: `calc(100vh - ${appBarHeight}px)`,
        boxSizing: 'border-box',
        padding: isMobile ? '16px' : '24px',
        display: 'flex',
        flexDirection: 'column',
        marginTop: `${appBarHeight}px`,
        overflow: 'hidden',
        ...props.sx
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default FullVoteSection; 