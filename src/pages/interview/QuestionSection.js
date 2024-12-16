"use client";
import React from "react";
import { Lightbulb, Volume2 } from "lucide-react";
import { Button, Typography, Paper, Grid, IconButton } from "@mui/material";

const QuestionsSection = ({ mockInterviewQuestion, activeQuestionIndex }) => {
  const textToSpeach = (text) => {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert("Sorry, your browser does not support text to speech");
    }
  };

  return (
    mockInterviewQuestion && (
      <div style={{ padding: "20px" }}>
        {/* Question Navigation */}
        <Grid container spacing={2} style={{ marginBottom: "20px" }}>
          {mockInterviewQuestion.map((question, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Button
                variant="outlined"
                fullWidth
                style={{
                  padding: "8px 0",
                  backgroundColor: activeQuestionIndex === index ? "#1E40AF" : "#F3F4F6",
                  color: activeQuestionIndex === index ? "white" : "#1F2937",
                  textAlign: "center",
                }}
              >
                Question {index + 1}
              </Button>
            </Grid>
          ))}
        </Grid>

        {/* Active Question */}
        <Typography variant="h6" style={{ marginBottom: "20px", fontSize: "18px" }}>
          {mockInterviewQuestion[activeQuestionIndex]?.Question}
        </Typography>

        {/* Text-to-Speech Icon */}
        <IconButton
          onClick={() =>
            textToSpeach(mockInterviewQuestion[activeQuestionIndex]?.Question)
          }
          style={{
            color: "#1E40AF",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          <Volume2 />
        </IconButton>

        {/* Note Section */}
        <Paper
          elevation={3}
          style={{
            padding: "20px",
            marginTop: "40px",
            backgroundColor: "#DBEAFE",
            borderRadius: "8px",
          }}
        >
          <Typography
            variant="body2"
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              color: "#6B21A8",
            }}
          >
            <Lightbulb />
            <strong>Note:</strong>
          </Typography>
          <Typography variant="body2" style={{ color: "#3B82F6", marginTop: "10px" }}>
            you can not switch to any other tab and make sure you are clearly visible in camera and for better understanding please speak in mic properly
          </Typography>
        </Paper>
      </div>
    )
  );
};

export default QuestionsSection;
