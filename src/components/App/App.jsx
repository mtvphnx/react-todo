import {Component} from "react";
import {Info, Search, Filter, List, Form} from "../../components/";
import './App.scss';

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Иванов Иван', salary: 900, star: false, increase: false, key: 0},
                {name: 'Фёдоров Фёдор', salary: 800, star: false, increase: true, key: 1},
                {name: 'Семёнов Семён', salary: 1200, star: false, increase: false, key: 2},
                {name: 'Матвеев Матвей', salary: 900, star: false, increase: false, key: 3}
            ]
        }
        this.max = this.state.data.length;
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
            star: false,
            key: this.max++
        }

        this.setState(({data}) => {
            return {
                data: [...data, newElement]
            }
        })
    }

    toggleProp = (key, prop) => {
        this.setState(({data}) => {
            const newData = data.map(item => {
                if (item.key === key) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            });

            return {data: newData};
        })
    }

    render() {
        const {data} = this.state;
        const increaseLength = data.filter(item => item.increase).length;

        return (
            <div className="app">
                <Info length={data.length} increase={increaseLength} />

                <div className="search-panel">
                    <Search/>
                    <Filter/>
                </div>

                <List onDelete={this.deleteElement}
                      data={data}
                      toggleProp={this.toggleProp}
                />
                <Form onCreate={this.addElement} />
            </div>
        );
    }
}
