import {Component} from "react";
import {Info, Search, Filter, List, Form} from "../../components/";
import './App.scss';

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Иванов Иван', salary: 900, increase: false, key: 0},
                {name: 'Фёдоров Фёдор', salary: 800, increase: true, key: 1},
                {name: 'Семёнов Семён', salary: 1200, increase: false, key: 2},
                {name: 'Матвеев Матвей', salary: 900, increase: false, key: 3},
                {name: 'Павел Павлов', salary: 600, increase: true, key: 4}
            ]
        }
        this.max = this.state.data.length
    }

    deleteElement = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.key !== id)
            }
        })
    }

    addElement = (name, salary) => {
        const newElement = {
            name: name,
            salary: +salary,
            increase: false,
            key: this.max++
        }

        this.setState(({data}) => {
            return {
                data: [...data, newElement]
            }
        })
    }

    render() {
        const {data} = this.state;

        return (
            <div className="app">
                <Info />

                <div className="search-panel">
                    <Search/>
                    <Filter/>
                </div>

                <List onDelete={this.deleteElement} data={data}/>
                <Form onCreate={this.addElement} />
            </div>
        );
    }
}
