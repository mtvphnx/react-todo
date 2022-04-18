import {Component} from "react";
import {Filter, Form, Info, List, Search} from "../../components/";
import './App.scss';

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Иванов Иван', salary: 1900, increase: false, key: 0},
                {name: 'Фёдоров Фёдор', salary: 800, increase: true, key: 1},
                {name: 'Семёнов Семён', salary: 1200, increase: false, key: 2},
                {name: 'Матвеев Матвей', salary: 900, increase: false, key: 3}
            ],
            text: '',
            active: 'all'
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

            return {
                data: newData
            };
        })
    }

    searchElements = (data, text) => {
        if (text !== '') {
            return data.filter(item => {
                let name = item.name.toLowerCase().trim();
                return name.indexOf(text.toLowerCase().trim()) > -1;
            });
        } else {
            return data;
        }
    }

    searchText = (text) => {
        this.setState({
            text: text
        })
    }

    filter = (items, name) => {
        switch (name) {
            case 'increase':
                return items.filter(item => item.increase);
            case 'rich':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    checkoutFilter = (name) => {
        this.setState({
            active: name
        })
    }

    render() {
        const {data, text, active} = this.state;
        const increaseLength = data.filter(item => item.increase).length;
        const filteredElements = this.searchElements(this.filter(data, active), text);

        return (
            <div className="app">
                <Info length={data.length} increase={increaseLength} />

                <div className="search-panel">
                    <Search onChange={this.searchText}/>
                    <Filter checkoutFilter={this.checkoutFilter} active={active}/>
                </div>

                <List onDelete={this.deleteElement}
                      data={filteredElements}
                      toggleProp={this.toggleProp}
                />
                <Form onCreate={this.addElement} />
            </div>
        );
    }
}
