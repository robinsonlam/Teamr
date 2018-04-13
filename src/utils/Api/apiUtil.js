import Api from './Api';

const api = new Api({
  baseURL: 'https://teamr-s.herokuapp.com',
});

export default api;

export function getUsers() {
  return api.get(`/users`);
}

export function getTeams() {
  return api.get(`/teams`);
}

export function createNewTeam(teamName, sportName) {
  return api.post(`/teams`, { teamName, sportName });
}

export function getTeamsMembers(teamId) {
  return api.get(`/teams/${teamId}/members`);
}

export function joinTeam(teamId, userId, role) {
  return api.post(`/teams/subscribe`, { _teamId: teamId, _userId: userId, role });
}
