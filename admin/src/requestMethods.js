import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN =
  JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser
    .accessToken || '';
// const TOKEN =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmYxYTE3ZGEyZTE3NWQ5Njk4NjZkMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzMyNzA5OCwiZXhwIjoxNjQ3NTg2Mjk4fQ.hRlOHdCkoOmhKGrdW2oQaGPzz49JEaFWuVccG2xzmcw';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { authorization: `Bearer ${TOKEN}` },
});
