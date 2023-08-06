import React, { useEffect, useState } from 'react';
import ClientService from '../services/ClientService';
import { Link, useNavigate, useParams } from 'react-router-dom';

function AddClientComponent() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const saveOrUpdateClient = (e) => {
    e.preventDefault();
    const client = { name, lastName, email };

    if (id) {
      ClientService.updateClient(id, client)
        .then((response) => {
          console.log(response.data);
          navigate('/clients');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      ClientService.createClient(client)
        .then((response) => {
          console.log(response.data);
          navigate('/clients');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (!id) {
      return;
    }
    ClientService.getClientById(id)
      .then((response) => {
        setName(response.data.name);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const title = () => {
    if (id) {
      return <h2 className="text-center">Update Client</h2>;
    } else {
      return <h2 className="text-center">Register Client</h2>;
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {title()}
            <h2 className="text-center"></h2>
            <div className="card-body">
              <form action="">
                <div className="form-group mb-2">
                  <label className="form-model">Name</label>
                  <input
                    type="text"
                    placeholder="Insert Name"
                    name="name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-model">Last Name</label>
                  <input
                    type="text"
                    placeholder="Insert Last Name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-model">Email</label>
                  <input
                    type="email"
                    placeholder="Insert Email"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button
                  className="btn btn-success"
                  onClick={(e) => saveOrUpdateClient(e)}
                >
                  Save
                </button>
                <Link to="/clients" className="btn btn-danger">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddClientComponent;
