import {Element} from "../../components";
import './List.scss';

export const List = ({date}) => {
    const elements = date.map(item => {
            return <Element {...item}/>
        });

        return (
            <ul className="app-list list-group">
                {elements}
            </ul>
        );
}
