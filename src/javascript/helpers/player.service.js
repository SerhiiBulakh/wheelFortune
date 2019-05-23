import { callApi } from './apiHelper'

class PlayerService {
  async login(data) {
    
    try {
      const endpoint = 'login';
      const options = {
        method: 'POST' , 
        mode:'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data), 
  }
      const apiResult = await callApi(endpoint, options);
      return apiResult
    } catch (error) {
      throw error;
    }
  }

  async getSegments() {
    try {
      const endpoint = `segments`;
      const options = {
        method: 'GET' , 
        mode:'cors'
        
      }
   const apiResult = await callApi(endpoint, options);
        console.log(apiResult)
        return apiResult.segments
    } catch (error) {
      throw error;
    }
   

  }
  async UpdateScore(data) {
    try {
      const endpoint = `spin`;
      const options = {
        method: 'POST' , 
        mode:'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data), 
  }
   const apiResult = await callApi(endpoint, options);
        console.log(apiResult)
        return apiResult
    } catch (error) {
      throw error;
    }
   

  }
}

export const playerService = new PlayerService();
