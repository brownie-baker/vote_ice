import { Typography, Stack } from '@mui/material';
import Section from './Section';
import FinalVoteCard from './FinalVoteCard';

const FinalVoteSection = ({ iceCount, hotCount, onSubmit }) => {
  return (
    <Section>
      <Stack spacing={4} alignItems="center">
        <FinalVoteCard 
          title={`아이스 ${iceCount}잔 / 따뜻한 ${hotCount}잔`}
          body="최종제출하기"
          onClick={onSubmit}
        />
      </Stack>
    </Section>
  );
};

export default FinalVoteSection; 