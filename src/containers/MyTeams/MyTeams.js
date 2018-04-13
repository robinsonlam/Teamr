import styles from './MyTeams.scss';
import CSSModules from 'react-css-modules';

import React, { Component } from 'react';

import { Page } from '@components';

import { api } from '@utils';

class MyTeams extends Component {
  constructor(props) {
    super(props);
    this._fetchTeams = this._fetchTeams.bind(this);
    this._renderTeam = this._renderTeam.bind(this);
  }

  state = {
    teamsData: {
      loading: false,
      payload: [],
      error: null,
    }
  }

  componentDidMount() {
    this._fetchTeams();
  }

  async _fetchTeams() {
    try {
      const teams = await api.getTeams();
      console.log(teams);
      this.setState({ teamsData: { ...this.state.teamsData, payload: teams } });
    } catch (e) {
      console.log(e);
    }
  }

  _renderTeam(team) {
    return (
      <div key={team._id}>
        <p>{team.name} - {team.sport}</p>
      </div>
    );
  }

  render() {
    const { teamsData } = this.state;
    return (
      <Page className={styles.myTeamsPage}>
        <h1>This is the MyTeams Page</h1>
        { teamsData.payload.map((team) => this._renderTeam(team) )}
      </Page>
    );
  }
}

export default CSSModules(MyTeams, styles);
