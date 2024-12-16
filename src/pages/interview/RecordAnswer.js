"use client";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import useSpeechToText from "react-hook-speech-to-text";
import { Mic, StopCircle } from "lucide-react";
import { Button, Typography, Paper, CircularProgress } from "@mui/material";
import TextField from "@mui/material/TextField";
import { toast } from "sonner";
// import { chatSession } from "@/utils/GeminiAIModal";
// import { db } from "@/utils/db";
// import { UserAnswer } from "@/utils/schema";
// import { useUser } from "@clerk/nextjs";
// import moment from "moment";

const RecordAnswerSection = ({ mockInterviewQuestion, activeQuestionIndex, interviewData }) => {
  const [hide, setHide] = useState("none");
  const [userAnswer, setUserAnswer] = useState("");
//   const [finalAnswer, setFinalAnswer] = useState("");
//   const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  useEffect(() => {
    results.map((result) =>
      setUserAnswer((prevAns) => prevAns + result?.transcript)
    );
  }, [results]);

  useEffect(() => {
    if (!isRecording && userAnswer.length > 10) {
      UpdateUserAnswer();
    }
  }, [userAnswer]);

  const StartStopRecording = async () => {
    if (isRecording) {
      stopSpeechToText();
      setHide("grid")
      if (userAnswer?.length < 10) {
        setLoading(false);
        toast("Error while saving your answer, please record again.");
        console.log("Error while saving your answer, please record again.");
        return;
      }
    } else {
      startSpeechToText();
    }
  };

  const handleFinalAnswerSubmit = () => {
    // Submit the final answer for processing (e.g., save to the database)
    if (userAnswer.length < 10) {
      toast("Please provide a more detailed answer.");
      return;
    }

    setLoading(true);
    // Handle answer submission logic here (e.g., send to the database or API)
    console.log("Final Answer submitted: ", userAnswer);

    // Simulate submission process
    setTimeout(() => {
      setLoading(false);
      toast("Your answer has been submitted successfully!");
      setUserAnswer("");
    //   setFinalAnswer(""); // Clear the final answer
    }, 1500);
  };


  const UpdateUserAnswer = async () => {
    setLoading(true);
    console.log(results);
    setResults([]);
    setLoading(false);
  };

  if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <Paper
        elevation={3}
        style={{
          padding: "20px",
          backgroundColor: "#E5E7EB",
          borderRadius: "8px",
          width: "100%",
          maxWidth: "500px",
          marginTop: "20px",
        }}
      >

        <div style={{ position: "relative",p:5, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Webcam
            style={{ height: "300px", width: "100%", zIndex: 10 }}
            mirrored={true}
          />
        </div >

        <div style={{ padding:"10px", marginTop:"5px", position: "relative",p:5, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Button
          variant="outlined"
          onClick={StartStopRecording}
          style={{ marginBottom: "20px", width: "200px", borderRadius: "50px" }}
        >
          {isRecording ? (
            <Typography variant="body1" style={{ color: "red", display: "flex", alignItems: "center" }}>
              <StopCircle style={{ marginRight: "8px" }} /> Stop Recording
            </Typography>
          ) : (
            <Typography variant="body1" style={{ color: "#1D4ED8", display: "flex", alignItems: "center" }}>
              <Mic style={{ marginRight: "8px" }} /> Start Recording
            </Typography>
          )}
        </Button>
        </div>

        {/* User can edit the answer here */}
        <div style={{display:`${hide}`}}>
        <TextField
          label="Final Answer"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)} // Update the final answer
          style={{ marginBottom: "20px" }}
        />

        {/* Submit button for the final answer */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleFinalAnswerSubmit}
          disabled={loading}
          style={{ width: "200px", borderRadius: "50px" }}
        >
          {loading ? <CircularProgress size={24} /> : "Submit Answer"}
        </Button>
        </div>

        {/* Display interim result (if any) */}
        {interimResult && (
          <Typography variant="body2" color="textSecondary" style={{ marginTop: "20px" }}>
            {interimResult}
          </Typography>
        )}
      </Paper>
    </div>
  );
};

export default RecordAnswerSection;
