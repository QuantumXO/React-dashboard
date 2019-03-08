
import React, { Component } from 'react'
import axios from 'axios'

class Fetch extends Component{

    constructor(props){
        super(props);

        this.state = {
            persons: [],
            data: ''
        };
    }

    componentDidMount() {

        const min = 5;
        const max = 20;
        let rand = min - 0.5 + Math.random() * (max - min + 1);
            rand = Math.round(rand);

        axios.get('https://randomuser.me/api/?results='+rand)
            .then(response => {
                const persons  = response.data.results;
                this.setState({
                    persons
                });
                this.props.updateData(this.state.persons.length);
            })

            .catch(function (error) {
                console.log(error);
            });

    }


    render(){
        const personsList = this.state.persons.map((item, i) =>
            <li key={i}>{item.name.title} {item.name.first} {item.name.last}</li>
        );

        return(
            <div>
                <ul>
                    {personsList}
                </ul>
            </div>

        )
    }

}

export default Fetch







