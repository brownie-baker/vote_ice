import React, { useState } from "react";
import { motion } from "framer-motion";
import { Box, Typography, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const WaterCard = ({ title, number, backgroundColor = '#f5f5f5', ...props }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isPressed, setIsPressed] = useState(false);
  
  // title이 배열인지 확인하고, 문자열이면 배열로 변환
  const titleLines = Array.isArray(title) ? title : [title];
  
  // 퍼센트 값 추출 (숫자만)
  const percentage = parseInt(number.replace('%', ''), 10);
  
  return (
    <Box
      sx={{
        width: isMobile ? '280px' : '320px',
        height: isMobile ? '280px' : '320px',
        borderRadius: '16px',
        backgroundColor: backgroundColor,
        padding: '24px',
        boxShadow: isPressed 
          ? '0px 0px 20px rgba(255, 255, 255, 0.8), 0px 0px 30px rgba(255, 255, 255, 0.6)' 
          : '0px 4px 12px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
        position: 'relative',
        overflow: 'hidden',
        transform: isPressed ? 'scale(0.95)' : 'scale(1)',
        '&:hover': {
          transform: isPressed ? 'scale(0.95)' : 'translateY(-4px)',
          boxShadow: isPressed 
            ? '0px 0px 20px rgba(255, 255, 255, 0.8), 0px 0px 30px rgba(255, 255, 255, 0.6)' 
            : '0px 8px 16px rgba(0, 0, 0, 0.15)',
        },
        ...props.sx
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
      onClick={props.onClick}
      {...props}
    >
      {/* 카드 내용 */}
      <Stack spacing={6} height="100%" justifyContent="space-between" sx={{ zIndex: 2, position: 'relative' }}>
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

      {/* 물 애니메이션 */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          zIndex: 1
        }}
        initial={{ height: 0 }}
        animate={{ height: `${percentage}%` }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <path
            d="M -20 15 Q 5 5, 30 15 T 80 15 T 130 15 T 180 15 T 230 15 T 280 15 T 330 15 T 380 15 V 500 H -20 Z"
            fill="rgba(255, 255, 255, 0.4)"
          >
            <animate
              attributeName="d"
              values={`
                M -20 15 Q 5 5, 30 15 T 80 15 T 130 15 T 180 15 T 230 15 T 280 15 T 330 15 T 380 15 V 500 H -20 Z;
                M -20 10 Q 5 20, 30 10 T 80 10 T 130 10 T 180 10 T 230 10 T 280 10 T 330 10 T 380 10 V 500 H -20 Z;
                M -20 15 Q 5 5, 30 15 T 80 15 T 130 15 T 180 15 T 230 15 T 280 15 T 330 15 T 380 15 V 500 H -20 Z
              `}
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </motion.div>
    </Box>
  );
};

export default WaterCard; 