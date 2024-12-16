import React from "react";
import { Button, Box, Typography } from "@mui/material";
// import { useRouter } from "next/navigation";

const InterviewItemCard = ({ interview }) => {
//   const router = useRouter();

  const onStart = () => {
    // router.push('/dashboard/interview/' + interview?.mockId);
  };

  const onFeedbackPress = () => {
    // router.push('/dashboard/interview/' + interview.mockId + "/feedback");
  };

  return (
    <Box
      sx={{
        border: 1,
        borderColor: 'divider',
        borderRadius: 1,
        padding: 2,
        boxShadow: 1,
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
        {interview?.jobPosition}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {interview?.jobExperience}
      </Typography>
      <Typography variant="caption" sx={{ color: 'text.disabled' }}>
        Created At: {interview?.createdAt}
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, marginTop: 2 }}>
        <Button 
          size="small" 
          variant="outlined" 
          fullWidth 
          onClick={onFeedbackPress}
        >
          Feedback
        </Button>
        <Button 
          size="small" 
          fullWidth 
          onClick={onStart}
        >
          Start
        </Button>
      </Box>
    </Box>
  );
};

export default InterviewItemCard;
