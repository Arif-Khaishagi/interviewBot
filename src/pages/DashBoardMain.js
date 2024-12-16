import React from 'react'
import { Grid, Typography, Paper, Stack } from '@mui/material';
import Dashboard from './Dashboard';
import AppAppBar from '../components/AppAppBar';
import AppTheme from '../theme/AppTheme';
import CssBaseline from '@mui/material/CssBaseline';
import InterviewList from './InterviewList';

function DashboardPage(props) {
  return (
    <>
    <AppTheme {...props}>
    <CssBaseline enableColorScheme />
    <AppAppBar />
    
    <div style={{padding:'50px', margin:'10px'}}></div>

    <div style={{ padding: '20px' }}>
      {/* Title Section */}
      <Stack
          spacing={2}
          useFlexGap
          sx={{ display:'grid', alignItems: 'center',fontSize:'50px', width: { xs: '100%', sm: '70%' } }}
        >
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: 'inherit',
                color: 'primary.main',
                ...theme.applyStyles('dark', {
                  color: 'primary.light',
                }),
              })}
            >
              Dashboard
            </Typography>
          <Typography
            sx={{
              // textAlign: 'center',
              color: 'text.secondary',
              fontSize: '20px',
              width: { sm: '100%', md: '80%' },
            }}
          >
            Here you can start giving test and check your previous test results and performance
          </Typography>
          </Stack>

      {/* Grid Section */}
      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        <Grid item xs={12} md={4}>
          <Paper 
            elevation={3} 
            style={{
              padding: '20px',
              backgroundColor: '#f5f5f5',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '150px',
            }}
          >
            <Typography variant="h6" component="h3" >
              <Dashboard />
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper 
            elevation={3} 
            style={{
              padding: '20px',
              backgroundColor: '#f5f5f5',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '150px',
            }}
          >
            <Typography variant="h6" component="h3" >
              <InterviewList />
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
    </AppTheme>
    </>
  );
}

export default DashboardPage