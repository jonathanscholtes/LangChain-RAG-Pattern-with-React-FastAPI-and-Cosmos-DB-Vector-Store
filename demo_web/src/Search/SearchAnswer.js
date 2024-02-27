
import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Box,Paper,TextField } from '@mui/material';
import { grey } from '@mui/material/colors';

export default function SearchAnswer(resultText) {
    return (
        <Paper sx={{p:2}}>
            <Stack direction="column" spacing={2} useFlexGap flexWrap="wrap">
            <Typography variant='subtitle1' sx={{ color: 'grey', fontSize: '12pt' }}>
                Answer:
                </Typography>
                <Box sx={{ border: 1, borderColor: 'lightgray', borderRadius: 3, p:1,fontSize:14}} >
                    {resultText.resultText}
                </Box>
            </Stack>
      </Paper>
    )
}