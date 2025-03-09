import { Typography, Stack } from '@mui/material';
import Section from './Section';
import WaterCard from './WaterCard';

const BigButtonsSection = ({ icePercentage, hotPercentage, onIceVote, onHotVote }) => {
  return (
    <Section>
      <Stack spacing={4} alignItems="center">
        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          spacing={3} 
          justifyContent="center"
          alignItems="center"
          sx={{ 
            width: '120%',
            mt: 2,
            ml: '-10%'
          }}
        >
          <WaterCard 
            title={["얼어", "죽어도", "아이스 음료 회원"]} 
            number={icePercentage} 
            backgroundColor="#B4DBF0"
            onClick={onIceVote}
          />
          <WaterCard 
            title={["쪄", "죽어도", "따뜻한 음료 회원"]} 
            number={hotPercentage} 
            backgroundColor="#F08338"
            onClick={onHotVote}
          />
        </Stack>
      </Stack>
    </Section>
  );
};

export default BigButtonsSection; 