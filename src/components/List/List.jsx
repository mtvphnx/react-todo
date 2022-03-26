import {Element} from "../../components";
import './List.scss';

export const List = ({date}) => {
    const elements = date && date.map((item, index) => {
            return <Element key={index} {...item}/>
        });

        return (
            <ul className="app-list list-group">
                {elements}
            </ul>
        );
}
