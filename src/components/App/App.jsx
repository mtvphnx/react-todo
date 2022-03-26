import {Info, Search, Filter, List, Form} from "../../components/";
import './App.scss';

export const App = () => {
    const date = [
        {name: 'Иванов Иван', salary: 900, increase: false},
        {name: 'Фёдоров Фёдор', salary: 800, increase: true},
        {name: 'Семёнов Семён', salary: 1200, increase: false},
        {name: 'Матвеев Матвей', salary: 900, increase: false}
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
