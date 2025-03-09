import { Typography, Stack } from '@mui/material';
import Section from './Section';

const IntroductionSection = () => {
  return (
    <Section>
      <Stack spacing={3} alignItems="center">
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          오늘 당신의 음료는? 
        </Typography>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          아이스 / 따뜻한 음료 중에 투표해주세요!
        </Typography>
      </Stack>
    </Section>
  );
};

export default IntroductionSection; 