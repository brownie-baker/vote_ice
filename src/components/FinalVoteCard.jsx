import { Box, Typography, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const FinalVoteCard = ({ title, body, ...props }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '600px',
        borderRadius: '9999px',
        backgroundColor: '#f5f5f5',
        padding: isMobile ? '16px 32px' : '20px 48px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.15)',
        },
        ...props.sx
      }}
      {...props}
    >
      <Stack spacing={1} alignItems="center">
        <Typography 
          variant="h3" 
          component="div" 
          sx={{ 
            fontWeight: 'bold',
            fontSize: isMobile ? '18px' : '22px',
            color: '#333333',
            textAlign: 'center'
          }}
        >
          {title}
        </Typography>
        
        {body && (
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: isMobile ? '14px' : '16px',
              color: '#707070',
              textAlign: 'center'
            }}
          >
            {body}
          </Typography>
        )}
      </Stack>
    </Box>
  );
};

export default FinalVoteCard; 