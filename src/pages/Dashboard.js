import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, CircularProgress } from '@mui/material';
// import '../pages/Dashboard.css'
// import AppAppBar from '../components/AppAppBar';
// import Input from '@mui/material';
// import TextField from '@mui/material';
// import Button from '@mui/material';

function Dashboard() {

  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState('software developer');
  const [jobDesc, setJobDesc] = useState('react, java, dsa');
  const [jobExperience, setJobExperience] = useState(2);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(jobPosition, jobDesc, jobExperience);
    setLoading(false);
    // Submit logic here
  };

  return (
    <div>
      {/* Button to open dialog */}
      <div
        style={{
          padding: '10px',
          borderRadius: '8px',
        //   border: '1px solid',
          backgroundColor: '#f3f4f6', // secondary color
          cursor: 'pointer',
          transition: 'all 0.3s',
        }}
        onClick={() => setOpenDialog(true)}
      >
        <h2 style={{ fontSize: '18px', textAlign: 'center', color:'darkcyan' }}>+ Add New</h2>
      </div>

      {/* Dialog Box */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogContent style={{ maxWidth: '800px' }}>
          <DialogTitle style={{ fontSize: '24px' }}>
            Tell us more about your job interviewing
          </DialogTitle>
          <form onSubmit={onSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <h3>Add Details about your job position, job description and years of experience</h3>

              {/* Job Role Input */}
              <div style={{ marginTop: '20px' }}>
                <TextField
                  label="Job Role / Job Position"
                  variant="outlined"
                  fullWidth
                  value={jobPosition}
                  onChange={(e) => setJobPosition(e.target.value)}
                  required
                  style={{ marginTop: '10px' }}
                />
              </div>

              {/* Job Description Input */}
              <div style={{ marginTop: '20px' }}>
                <TextField
                  label="Job Description / Tech Stack (In Short)"
                  variant="outlined"
                  fullWidth
                  value={jobDesc}
                  onChange={(e) => setJobDesc(e.target.value)}
                  required
                  // multiline
                  rows={4}
                  style={{ marginTop: '10px' }}
                />
              </div>

              {/* Years of Experience Input */}
              <div style={{ marginTop: '20px' }}>
                <TextField
                  label="Years of Experience"
                  variant="outlined"
                  fullWidth
                  type="number"
                  value={jobExperience}
                  onChange={(e) => setJobExperience(e.target.value)}
                  required
                  inputProps={{ min: 0, max: 50 }}
                  style={{ marginTop: '10px' }}
                />
              </div>
            </div>

            {/* Buttons for Submit and Cancel */}
            <DialogActions style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <Button onClick={() => setOpenDialog(false)} color="secondary">
                Cancel
              </Button>
              <Button type="submit" color="primary" disabled={loading}>
                {loading ? (
                  <>
                    <CircularProgress size={24} style={{ marginRight: '10px' }} />
                    Generating From AI
                  </>
                ) : (
                  'Start Interview'
                )}
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}


export default Dashboard