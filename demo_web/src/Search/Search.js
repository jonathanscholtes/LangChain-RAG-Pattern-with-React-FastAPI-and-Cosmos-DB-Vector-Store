import React, { useState } from 'react'
import { Button, Box, Stack, TextField } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'

import SendIcon from '@mui/icons-material/Send'
import SearchResults from './SearchResults'
import SearchAnswer from './SearchAnswer'

export default function Search() {
  const [question, setQuestion] = useState('What is supersonic combustion')
  const [results, setResults] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSerchByQuestion = () => {
    setIsLoading(true)
    setResults('')
    fetch(process.env.REACT_APP_API_HOST + '/search/qa/' + question)
      .then((response) => response.json())
      .then((res) => {
        setResults(res)
        setIsLoading(false)
      })
  }

  return (
    <Stack direction="column" spacing={2}>
      <Stack direction="row" spacing={0}>
        <TextField
          sx={{ width: '80%' }}
          variant="outlined"
          label="question"
          helperText="Ask a question of your data"
          defaultValue="What is supersonic combustion"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
        ></TextField>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={handleSerchByQuestion}
          sx={{ mb: 3, ml: 3, mt: 1 }}
        >
          Submit
        </Button>
      </Stack>
      {isLoading === true && (
        <Box
          sx={{
            width: '100%',
            alignContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <CircularProgress size={80} />
        </Box>
      )}

      {results !== '' && (
        <Stack direction="column" spacing={2}>
          <SearchAnswer resultText={results['text']} />
        </Stack>
      )}

      {results !== '' && (
        <SearchResults searchResults={results['ResourceCollection']} />
      )}
    </Stack>
  )
}
