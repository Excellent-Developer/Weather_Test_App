import axios from 'axios';

const baseUrl: string = 'http://localhost:3000';

// const CITY_LIST = [
//   {
//     id: '1',
//     name: 'New York',
//     type: 'Sunny',
//     temperature: '8',
//     wind: '20 mph',
//     humidity: '63%',
//     precipitation: '1%',
//   },
//   {
//     id: '2',
//     name: 'Toronto',
//     type: 'Sunny',
//     temperature: '8',
//     wind: '20 mph',
//     humidity: '63%',
//     precipitation: '1%',
//   },
//   {
//     id: '3',
//     name: 'Austin',
//     type: 'Sunny',
//     temperature: '8',
//     wind: '20 mph',
//     humidity: '63%',
//     precipitation: '1%',
//   },
// ];

export const signInByUsername = async (username) => {
  const response = await axios.post(`${baseUrl}/signin`, null, {
    params: {username},
  });
  console.log(response);
  return response;
};

export const getWeathers = async () => {
  const response = await axios.get(`${baseUrl}/weathers`);
  console.log(response);
  return response;
};
