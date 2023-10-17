import axios from 'axios';
const API_KEY = '39305799-292385ae54204aba3384f6c5e';

export async function fetchImgs(page = 1, query = '') {
  const resp = await axios.get('https://pixabay.com/api/', {
    params: {
      q: query,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      page: page,
    },
  });
  return resp.data;
}
