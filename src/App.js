import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamMember from './TeamMember.js';

class App extends Component {
    constructor() {
        super();

        this.state = {
            mostrar: true,
            data: [
                {
                    id: 1,
                    name: 'Adria',
                    team: 'Los buscadores'
                },
                {
                    id: 2,
                    name: 'Alex',
                    team: 'Los buscadores'
                },
                {
                    id: 3,
                    name: 'Ari',
                    team: 'Mapache'
                }            
            ],
            dataApi: []
        };
    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {return response.json()})
            .then((json) => {
                this.setState({...this.state, dataApi: json, mostrar: true});
            }
        )
    }

    render() {
        const {data, dataApi, mostrar} = this.state;

        return (
            <div className="App">
                <ul>
                    {
                        mostrar &&
                        dataApi.map((x) => {
                            return (
                                <TeamMember key={x.id} name={x.name} team={x.team} />
                            )
                        })
                    }
                    {
                        !mostrar &&
                        <h2>No hay datos!</h2>
                    }               
                </ul>
                <input type="button" value="Prueba" onClick={(e) => { alert('hola');}} />
            </div>
        );
    }
}

export default App;
