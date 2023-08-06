import React, { useEffect, useState } from 'react';
import ClientService from '../services/ClientService';
import { Link } from 'react-router-dom';

function ListClientComponent() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    listClient();
  }, []);

  const deleteClient = (id) => {
    ClientService.deleteClient(id)
      .then((response) => {
        listClient();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const listClient = () => {
    ClientService.getListClients()
      .then((response) => {
        setClients(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container">
        <h2 className="text-center">List clients</h2>
        <Link to="/add-client/" className="btn btn-primary mb-2">
          Add client
        </Link>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>LASTNAME</th>
              <th>EMAIL</th>
              <th>ACCIONS</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id}>
                <td>{client.id}</td>
                <td>{client.name}</td>
                <td>{client.lastName}</td>
                <td>{client.email}</td>
                <td>
                  <Link
                    className="btn btn-info"
                    to={`/edit-client/${client.id}`}
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteClient(client.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ListClientComponent;
