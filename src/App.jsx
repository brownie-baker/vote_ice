import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import FullVoteSection from './components/FullVoteSection'
import IntroductionSection from './components/IntroductionSection'
import BigButtonsSection from './components/BigButtonsSection'
import FinalVoteSection from './components/FinalVoteSection'
import { Snackbar, Alert } from '@mui/material'

function App() {
  // 총 투표 수 상태 (새로고침 전까지 유지)
  const [totalVotes, setTotalVotes] = useState({
    ice: 0,
    hot: 0
  });
  
  // 현재 세션의 투표 수 상태 (제출 시 초기화)
  const [sessionVotes, setSessionVotes] = useState({
    ice: 0,
    hot: 0
  });
  
  // Toast 메시지 상태
  const [openToast, setOpenToast] = useState(false);
  
  // 퍼센트 계산 함수
  const calculatePercentage = (ice, hot) => {
    const total = ice + hot;
    if (total === 0) return { ice: "0%", hot: "0%" };
    
    const icePercent = Math.round((ice / total) * 100);
    const hotPercent = 100 - icePercent; // 합이 100%가 되도록
    
    return {
      ice: `${icePercent}%`,
      hot: `${hotPercent}%`
    };
  };
  
  // 투표 퍼센트 상태
  const [votePercentages, setVotePercentages] = useState(calculatePercentage(0, 0));
  
  // totalVotes가 변경될 때마다 퍼센트 재계산
  useEffect(() => {
    setVotePercentages(calculatePercentage(totalVotes.ice, totalVotes.hot));
  }, [totalVotes]);
  
  // 아이스 투표 핸들러
  const handleIceVote = () => {
    setSessionVotes(prev => ({
      ...prev,
      ice: prev.ice + 1
    }));
  };
  
  // 따뜻한 투표 핸들러
  const handleHotVote = () => {
    setSessionVotes(prev => ({
      ...prev,
      hot: prev.hot + 1
    }));
  };
  
  // 최종 제출 핸들러
  const handleSubmit = () => {
    // 세션 투표를 총 투표에 추가
    setTotalVotes(prev => ({
      ice: prev.ice + sessionVotes.ice,
      hot: prev.hot + sessionVotes.hot
    }));
    
    // 세션 투표 초기화
    setSessionVotes({
      ice: 0,
      hot: 0
    });
    
    // Toast 메시지 표시
    setOpenToast(true);
  };
  
  // Toast 닫기 핸들러
  const handleCloseToast = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenToast(false);
  };

  return (
    <>
      <Header />
      <FullVoteSection>
        <IntroductionSection />
        <BigButtonsSection 
          icePercentage={votePercentages.ice}
          hotPercentage={votePercentages.hot}
          onIceVote={handleIceVote}
          onHotVote={handleHotVote}
        />
        <FinalVoteSection 
          iceCount={sessionVotes.ice}
          hotCount={sessionVotes.hot}
          onSubmit={handleSubmit}
        />
      </FullVoteSection>
      
      {/* Toast 메시지 */}
      <Snackbar
        open={openToast}
        autoHideDuration={3000}
        onClose={handleCloseToast}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseToast} 
          severity="success" 
          sx={{ width: '100%', fontWeight: 'bold' }}
        >
          제출되었습니다!
        </Alert>
      </Snackbar>
    </>
  )
}

export default App
