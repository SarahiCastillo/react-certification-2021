import entities from './entities.json';

class API {
  constructor() {
    this.apiUrl = new URL('https://www.googleapis.com/youtube/');
  }

  async get(route = '=') {
    let response;
    try {
      const url = new URL(route, this.apiUrl);
      console.log('url', url);
      response = await fetch(url);
      console.log('response', response.json);
    } catch (e) {
      console.log(`Error while retrieving info for route ${route}`, e);
    }

    return response && response.json();
  }

  async getEntity(type, value) {
    console.log('type', type);
    if (entities.indexOf(type) === -1) {
      throw new Error('Invalid entity');
    }

    const route = `${type}${value}`;
    const data = await this.get(route);
    console.log('data', data);

    return data;
  }
}

export default new API();
