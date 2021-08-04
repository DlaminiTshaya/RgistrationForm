import React, { useState } from 'react';
import './style.css';
import Patient from './Patient';
const App = () => {
  const [Covid, setCovid] = useState([
    {
      PName: 'Name',
      Surname: 'Surname',
      id: '',
      cough: '',
      flue: '',
      breath: '',
      headache: '',
      contact: ''
    }
  ]);

  const [NewCovid, setNewCovid] = useState({
    PName: '',
    Surname: '',
    id: '',
    cough: '',
    flue: '',
    breath: '',
    headache: '',
    contact: ''
  });
  const PatientDetailsSet = load => {
    let oldArray = Covid;
    let newArray = [...oldArray, load];
    setCovid(newArray);
    setNewCovid({
      PName: '',
      Surname: '',
      id: '',
      cough: '',
      flue: '',
      breath: '',
      headache: '',
      contact: ''
    });
  };
  const handleDelete = id => {
    setCovid(Covid.filter(det => det.id !== id));
  };

  return (
    <div className="All" onSubmit={event => event.preventDefault()}>
      <h2>Covid-19 Form</h2>
      <div className="mna">
        <Patient pandemic={Covid} delete={handleDelete} />
      </div>
      <div>
        <h5 style={{ textAlign: 'center' }}> Fill your details below:</h5>

        <div className="data">
          <tr>
            {' '}
            <th>
              <label>Name:</label>
            </th>
            <span style={{ marginLeft: 30 }}>
              <th>
                <input
                  value={NewCovid.PName}
                  onChange={e =>
                    setNewCovid({ ...NewCovid, PName: e.currentTarget.value })
                  }
                  type="text"
                  name="PName"
                  style={{ marginLeft: 140 }}
                />
              </th>{' '}
            </span>
          </tr>
        </div>
        <div className="data">
          <tr>
            {' '}
            <th>
              <label>Surname: </label>
            </th>
            <span style={{ marginLeft: 130 }}>
              <th>
                {' '}
                <input
                  value={NewCovid.Surname}
                  onChange={e =>
                    setNewCovid({ ...NewCovid, Surname: e.currentTarget.value })
                  }
                  type="text"
                  name="Surname"
                  style={{ marginLeft: 20 }}
                />
              </th>
            </span>
          </tr>
        </div>
        <div className="data">
          <tr>
            <th>
              {' '}
              <label>ID number: </label>
            </th>
            <span style={{ marginLeft: 30 }}>
              <th>
                <input
                  value={NewCovid.id}
                  onChange={e =>
                    setNewCovid({ ...NewCovid, id: e.currentTarget.value })
                  }
                  type="text"
                  name="id"
                  style={{ marginLeft: 105 }}
                />
              </th>
            </span>
          </tr>
        </div>

        <br />
      </div>
      <h4 style={{ textAlign: 'center' }}>
        To answer the Questionare below click checkbox(Y/N){' '}
      </h4>

      <p style={{ marginLeft: 30 }}>
        1)Do you cough?
        <span style={{ marginLeft: 299 }}>
          <select
            value={NewCovid.cough}
            name="cough"
            onChange={e =>
              setNewCovid({ ...NewCovid, cough: e.currentTarget.value })
            }
          >
            <option>.....select..... </option>
            <option>Yes</option>
            <option> No </option>
            <input type="radio" />
          </select>
        </span>
      </p>
      <p style={{ marginLeft: 30 }}>
        2)Do you have flue?
        <span style={{ marginLeft: 280 }}>
          <select
            value={NewCovid.flue}
            name="flue"
            onChange={e =>
              setNewCovid({ ...NewCovid, flue: e.currentTarget.value })
            }
          >
            <option>.....select....</option>
            <option> Yes</option>
            <option>No</option>
          </select>
        </span>
      </p>
      <p style={{ marginLeft: 30 }}>
        3)Do you have any difficuties while breathing?
        <span style={{ marginLeft: 95 }}>
          <select
            value={NewCovid.breath}
            name="breath"
            onChange={e =>
              setNewCovid({ ...NewCovid, breath: e.currentTarget.value })
            }
          >
            <option>.....select....</option>
            <option> Yes</option>
            <option>No</option>
          </select>
        </span>
      </p>
      <p style={{ marginLeft: 30 }}>
        4)Do you have headache?
        <span style={{ marginLeft: 239 }}>
          <select
            value={NewCovid.headache}
            name="headache"
            onChange={e =>
              setNewCovid({ ...NewCovid, headache: e.currentTarget.value })
            }
          >
            <option>.....select....</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </span>
      </p>
      <p style={{ marginLeft: 30 }}>
        5)Have you been contacted with someone with covid?
        <span style={{ marginLeft: 40 }}>
          <select
            value={NewCovid.contact}
            name="contact"
            onChange={e =>
              setNewCovid({ ...NewCovid, contact: e.currentTarget.value })
            }
          >
            <option>.....select....</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </span>
      </p>

      <button onClick={() => PatientDetailsSet(NewCovid)}>VIEW RESULT</button>
    </div>
  );
};
export default App;
