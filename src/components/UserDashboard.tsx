import { Grid, Typography } from '@mui/material';
import Navbar from './NavbarDB';
import IndexCardDB from './IndexCardDB';
import PortfolioCardDB from './PortfolioCardDB';
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Faq from './FAQ';
import Leaderboard from './GeneralLeaderboard';
import "../App.scss";
import GameCard from './Gamecard';

export default function UserDashboard() {

    const [cookies, setCookie, removeCookie] = useCookies(['jwt']);
    const navigate = useNavigate();
    const [role, setRole, removeRole] = useCookies(['role']);
    useEffect(() => {
        if (cookies.jwt == "" || cookies.jwt == null || role.role !== "USER") {
            navigate('/login');
      }},[])  
    return (
        <>
            <Navbar />
            <Grid container spacing={5} sx={{ backgroundColor: '#E9E7E7' }}>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={7}>
                    {/* <IndexCardDB /> */}
                    <br /><br />
                    <Grid container item spacing={-1}>
                        <GameCard/>
                    </Grid>
                    <br /><br /><br /><br /><br />
                    <Grid container item spacing={-1}>
                        <Faq/>
                    </Grid>
                    <br/><br /><br /><br /><br /><br /><br />
                </Grid>
                <Grid item xs={4}>
                    <Grid container item spacing={-1}>
                        <PortfolioCardDB />
                    </Grid>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <Grid container item spacing={-1}>
                        <Leaderboard/>
                    </Grid>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                </Grid>
            </Grid>
        </>
    );
}