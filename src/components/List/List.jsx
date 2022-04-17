import {Element} from "../../components";
import './List.scss';

export const List = ({data, onDelete, toggleProp}) => {
    const elements = data.map(item => {
            return <Element {...item}
                        onDelete={() => onDelete(item.key)}
                        toggleProp={e => toggleProp(item.key, e.currentTarget.getAttribute('data-toggle'))}
                    />
        });

        return (
            <ul className="app-list list-group">
                {elements}
            </ul>
        );
}
