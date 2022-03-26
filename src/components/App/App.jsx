import {Info, Search, Filter, List, Form} from "../../components/";
import './App.scss';

export const App = () => {
    return (
        <div className="app">
            <Info />

            <div className="search-panel">
                <Search/>
                <Filter/>
            </div>

            <List/>
            <Form/>
        </div>
    );
}
