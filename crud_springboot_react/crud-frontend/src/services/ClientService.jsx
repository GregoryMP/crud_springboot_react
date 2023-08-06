import axios from 'axios';

const CLIENT_BASE_REST_API_URL = 'http://localhost:8080/api/v1/clients';

class ClientService {
  //List All Clients
  getListClients() {
    return axios.get(CLIENT_BASE_REST_API_URL);
  }

  //Create Client
  createClient(client) {
    return axios.post(CLIENT_BASE_REST_API_URL, client);
  }

  //Get Client By ID
  getClientById(clientId) {
    return axios.get(CLIENT_BASE_REST_API_URL + '/' + clientId);
  }

  //Update Client
  updateClient(clientId, client) {
    return axios.put(CLIENT_BASE_REST_API_URL + '/' + clientId, client);
  }

  //Delete Client
  deleteClient(clientId) {
    return axios.delete(CLIENT_BASE_REST_API_URL + '/' + clientId);
  }
}

export default new ClientService();
