"use client";
import { useState, useEffect } from "react";
import { Button, Grid, Typography, Paper } from "@mui/material";
// import {Link}from 'react-router-dom';
import QuestionsSection from "./QuestionSection";
import RecordAnswerSection from "./RecordAnswer";

// Mock Questions
const questions = [
  {
    "Question": "Describe your experience with React.js, including specific projects where you utilized it and the challenges you faced.",
    "Answer": "In my previous role, I used React.js to build a single-page application for managing user accounts. This involved implementing features like user authentication, profile management, and data visualization. One challenge I faced was optimizing component rendering for improved performance, which I addressed by using techniques like memoization and React.memo."
  },
  {
    "Question": "Explain your understanding of Java and its application in the context of a software development project. Provide a concrete example.",
    "Answer": "I have experience with Java in building backend systems. For example, in a previous project, I used Spring Boot to develop a RESTful API for a social media platform. This involved designing database schemas, implementing controllers to handle requests, and utilizing various Spring components for dependency injection and security."
  },
  {
    "Question": "Walk me through your approach to solving a Data Structures and Algorithms (DSA) problem. Let's consider the problem of finding the shortest path between two nodes in a graph.",
    "Answer": "My approach to DSA problems involves understanding the problem thoroughly, choosing an appropriate data structure, and selecting an algorithm (like Dijkstra’s algorithm) for efficient solution. After implementing the algorithm, I ensure to test with different edge cases."
  },
  {
    "Question": "How do you handle conflicts when working on a team project, particularly in a version control system like Git?",
    "Answer": "I use Git for version control and resolve conflicts by reviewing changes in conflicting files and communicating with team members. We use pull requests and code reviews to minimize such conflicts and ensure smooth collaboration."
  },
  {
    "Question": "Describe a time you had to debug a complex issue in your code. What strategies did you use, and what was the outcome?",
    "Answer": "I had to debug an intermittent failure in a data pipeline, which I solved using logging, debugging tools, and thread synchronization techniques."
  }
];

const Interview = (props) => {
  const [interviewData, setInterviewData] = useState();
  const [mockInterviewQuestions, setMockInterviewQuestions] = useState();
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  useEffect(() => {
    GetInterviewDetails();
  }, []);

  const GetInterviewDetails = async () => {
    // Simulating fetching mock data from DB
    setMockInterviewQuestions(questions);
    setInterviewData(questions[0]);
  };

  return (
    <>
    <div style={{padding:'50px', margin:'10px'}}></div>
    <div style={{ padding: '20px' }}>
      <Grid container spacing={3}>
        {/* Questions Section */}
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
            {/* <Typography variant="h5" style={{ marginBottom: '20px' }}>
              {mockInterviewQuestions && mockInterviewQuestions[activeQuestionIndex]?.Question}
            </Typography> */}
            <QuestionsSection
          mockInterviewQuestion={mockInterviewQuestions}
          activeQuestionIndex={activeQuestionIndex}
        />
            {/* Add any additional Question details or styling here */}
          </Paper>
        </Grid>

        {/* Answer Recording Section */}
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
            <Typography variant="h6" style={{ marginBottom: '20px' }}>
              Record Your Answer
            </Typography>
            <RecordAnswerSection
          mockInterviewQuestion={mockInterviewQuestions}
          activeQuestionIndex={activeQuestionIndex}
          interviewData={interviewData}
        />
            {/* Add recording component or logic here */}
          </Paper>
        </Grid>
      </Grid>

      {/* Navigation Buttons */}
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end', gap: '16px' }}>
        {activeQuestionIndex > 0 && (
          <Button 
            variant="contained" 
            color="secondary" 
            onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}
            style={{ padding: '8px 16px' }}
          >
            Previous Question
          </Button>
        )}
        
        {activeQuestionIndex !== mockInterviewQuestions?.length - 1 ? (
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}
            style={{ padding: '8px 16px' }}
          >
            Next Question
          </Button>
        ) : (
            <Button 
              variant="contained" 
              color="success" 
              style={{ padding: '8px 16px' }}
            >
              End Interview
            </Button>
        )}
      </div>
    </div>
    </>
  );
};

export default Interview;
