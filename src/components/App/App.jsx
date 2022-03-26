import {Info, Search, Filter, List, Form} from "../../components/";
import './App.scss';

export const App = () => {
    const date = [
        {name: 'Иванов Иван', salary: 900, increase: false, key: 0},
        {name: 'Фёдоров Фёдор', salary: 800, increase: true, key: 1},
        {name: 'Семёнов Семён', salary: 1200, increase: false, key: 2},
        {name: 'Матвеев Матвей', salary: 900, increase: false, key: 3},
        {name: 'Павел Павлов', salary: 600, increase: true, key: 4}
    ]

    return (
        <div className="app">
            <Info />

            <div className="search-panel">
                <Search/>
                <Filter/>
            </div>

            <List date={date}/>
            <Form/>
        </div>
    );
}
