import {Element} from "../../components";
import './List.scss';

export const List = ({data, onDelete}) => {
    const elements = data.map(item => {
            return <Element {...item} onDelete={() => onDelete(item.key)}/>
        });

        return (
            <ul className="app-list list-group">
                {elements}
            </ul>
        );
}
