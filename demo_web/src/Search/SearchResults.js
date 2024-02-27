import React, { useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import NotesTwoToneIcon from '@mui/icons-material/NotesTwoTone'
import CancelIcon from '@mui/icons-material/Cancel'
import { IconButton, Box } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import ImageTwoToneIcon from '@mui/icons-material/ImageTwoTone'
import Typography from '@mui/material/Typography'

import './SearchResults.css'

export default function SearchResults(searchResults) {
  const [content, setContent] = useState('')
  const [imageIdenfidier, setImageIdentifier] = useState('')
  const [imageData, setImageData] = useState('')

  const retrieve_image_data = (image_id) => {
    if (image_id) {
      fetch(process.env.REACT_APP_API_HOST + '/content/image/' + image_id)
        .then((response) => response.text())
        .then((body) => {
          return setImageData(body)
        })
    }
  }

  return (
    <Box>
      <Dialog open={imageIdenfidier != ''} sx={{ m: '0px', p: '0px' }}>
        <DialogActions sx={{ m: '0px', p: '0px' }}>
          <IconButton>
            <CancelIcon
              onClick={() => {
                setImageIdentifier('')
              }}
            />
          </IconButton>
        </DialogActions>
        <DialogContent sx={{ m: '0px', p: '0px' }}>
          <DialogContentText sx={{ m: '0px', p: '0px' }}>
            {retrieve_image_data(imageIdenfidier)}
            <img src={imageData} width={'600px'} />
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <Dialog open={content != ''} sx={{ m: '0px', p: '0px' }} scroll="paper">
        <DialogTitle>Resource Content</DialogTitle>
        <IconButton
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CancelIcon
            onClick={() => {
              setContent('')
            }}
          />
        </IconButton>
        <DialogContent dividers>
          <DialogContentText>{content}</DialogContentText>
        </DialogContent>
      </Dialog>
      <Typography variant="subtitle1" sx={{ color: 'grey', fontSize: '10pt' }}>
        Document used to answer question:
      </Typography>
      <div className="Search-Results">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: '100%' }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Source</TableCell>
                <TableCell align="center">Content</TableCell>
                <TableCell align="center">View Page</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {searchResults.searchResults.map((row, index) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.source}
                  </TableCell>
                  <TableCell align="center" component="th" scope="row">
                    <IconButton
                      onClick={() => {
                        setContent(row.content)
                      }}
                    >
                      <NotesTwoToneIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell align="center" component="th" scope="row">
                    <IconButton
                      onClick={() => {
                        setImageIdentifier(row.resource_id + '/' + row.page_id)
                      }}
                    >
                      <ImageTwoToneIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Box>
  )
}
