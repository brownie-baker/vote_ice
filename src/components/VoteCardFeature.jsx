import { Box, Typography, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const VoteCardFeature = ({ title, number, backgroundColor = '#f5f5f5', ...props }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // title이 배열인지 확인하고, 문자열이면 배열로 변환
  const titleLines = Array.isArray(title) ? title : [title];
  
  return (
    <Box
      sx={{
        width: isMobile ? '280px' : '320px',
        height: isMobile ? '280px' : '320px',
        borderRadius: '16px',
        backgroundColor: backgroundColor,
        padding: '24px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
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
      <Stack spacing={6} height="100%" justifyContent="space-between">
        <Typography 
          variant="h2" 
          component="div" 
          sx={{ 
            fontWeight: 'bold',
            fontSize: isMobile ? '48px' : '64px',
            color: '#707070'
          }}
        >
          {number}
        </Typography>
        
        <Stack spacing={0.5}>
          {titleLines.map((line, index) => (
            <Typography 
              key={index}
              variant="h3" 
              component="div" 
              sx={{ 
                fontWeight: 'bold',
                fontSize: isMobile ? '24px' : '32px',
                color: '#333333',
                lineHeight: 1.2
              }}
            >
              {line}
            </Typography>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default VoteCardFeature; 