import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Section = ({ children, ...props }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Box
      sx={{
        padding: isMobile ? '16px 16px' : '24px 32px',
        width: '100%',
        boxSizing: 'border-box',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        ...props.sx
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Section; 