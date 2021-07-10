import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import StatusBar from '../StatusBar/StatusBar';
import MainPage from '../MainPage/MainPage';
import InforSection from '../InforSection/InforSection';
import Suggestions from '../Suggestions/Suggestions';
class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={6}>
                        <div>
                            <StatusBar />
                            <MainPage />
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        <InforSection />
                        <Suggestions />
                    </Grid>
                    <Grid item xs={2}>dsada</Grid>
                </Grid>
            </div>
        );
    }
}

export default MainContent;