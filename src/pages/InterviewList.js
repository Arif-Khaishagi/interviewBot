// "use client";
import React, { useEffect, useState } from "react";
import { Typography, Grid } from "@mui/material";
import InterviewItemCard from "./InterviewCard";

const InterviewList = () => {
//   const { user } = useUser();
  const [interviewList, setInterviewList] = useState([]);

  return (
    <div>
      <Typography variant="h6" component="h2" sx={{ fontWeight: 'medium', fontSize: '1.25rem' }}>
        Previous Mock Interviews
      </Typography>
      <Grid container spacing={3} sx={{ my: 3 }}>
        {interviewList &&
          interviewList.map((interview, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <InterviewItemCard interview={interview} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default InterviewList;
