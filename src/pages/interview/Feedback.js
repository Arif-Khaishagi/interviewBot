// "use client";
import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Typography,
} from '@mui/material';
import { ChevronsUpDown } from 'lucide-react';
// import { useRouter } from 'next/navigation';

const Feedback = ({ params }) => {
  const [feedbackList, setFeedbackList] = useState([]);
//   const router = useRouter();

  useEffect(() => {
    GetFeedback();
  }, []);

  const GetFeedback = async () => {
    // setFeedbackList(JsonFeedbackResp)
    console.log("feedback");
  };

  return (
    <>
    <div style={{padding:'50px', margin:'10px'}}></div>
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" color="success.main">
        Congratulations!
      </Typography>
      <Typography variant="h5" gutterBottom>
        Here is your interview feedback
      </Typography>

      {feedbackList?.length === 0 ? (
        <Typography variant="h6" color="success.light">
          No interview Feedback (Due to not fetch response from data)
        </Typography>
      ) : (
        <>
          <Typography variant="body1" color="primary" gutterBottom>
            Your overall interview rating: <strong>7/10</strong>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Find below interview questions with correct answers, your answer, and feedback for improvements for your next interview
          </Typography>

          {feedbackList &&
            feedbackList.map((item, index) => (
              <Accordion key={index} style={{ marginTop: '20px' }}>
                <AccordionSummary
                  expandIcon={<ChevronsUpDown />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <Typography>{item.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <Typography
                      variant="body2"
                      style={{ padding: '10px', border: '1px solid red', borderRadius: '8px', backgroundColor: '#ffebee' }}
                    >
                      <strong>Rating: </strong>{item.rating}
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{ padding: '10px', border: '1px solid #f44336', borderRadius: '8px', backgroundColor: '#ffe0e0' }}
                    >
                      <strong>Your Answer: </strong>{item.userAns}
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{ padding: '10px', border: '1px solid #388e3c', borderRadius: '8px', backgroundColor: '#e8f5e9' }}
                    >
                      <strong>Correct Answer Looks Like: </strong>{item.correctAns}
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{ padding: '10px', border: '1px solid #2196f3', borderRadius: '8px', backgroundColor: '#e3f2fd' }}
                    >
                      <strong>Feedback: </strong>{item.feedback}
                    </Typography>
                  </div>
                </AccordionDetails>
              </Accordion>
            ))}
        </>
      )}

      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: '20px' }}
        // onClick={() => router.replace('/dashboard')}
      >
        Go Home
      </Button>
    </div>
    </>
  );
};

export default Feedback;
