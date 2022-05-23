import { Paper } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Table from '@mui/material/Table';
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';


const axios = require('axios')

export default function IndexCardDB() {

  const [niftyIndex, setNiftyIndex] = useState({ index: null, normalisedMarketCap: null, gainLossPercent: null })
  const [cookies, setCookie, removeCookie] = useCookies(['jwt']);
  const navigate = useNavigate();


  useEffect(() => {
      // if (cookies.jwt == "" || cookies.jwt == null) {
      //     navigate('/login');
      // }
      axios.get("https://stock-marketplace-urtjok3rza-wl.a.run.app/index", { headers: { "Authorization": `Bearer ${cookies.jwt}` } })
          .then((res: { data: any; }) => {
              setNiftyIndex(res.data)
          }).catch((err: any) => { console.log("Error found") })

  }, [])

  return (
    <>
    <Typography variant='h5' sx={{ margin: '30px 0px' }}>
      Index
    </Typography>
    <TableContainer component={Paper}>
      <Table
        sx={{
          width: '450',
          height: "50",
          marginLeft: '100',
          marginTop: '10px'
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">{niftyIndex.index}</TableCell>
            <TableCell align="right">{niftyIndex.normalisedMarketCap}</TableCell>
            <TableCell
              align="right"
              sx={{
                color: "red",
                fontStyle: "bold",
              }}
            >
              {niftyIndex.gainLossPercent}%
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
    </>
  );
}