import './Element.scss';

export const Element = ({name, salary, increase, star, onDelete, toggleProp}) => {

    return (
        <li className={`list-group-item d-flex justify-content-between ${increase ? 'increase' : null} ${star ? 'like' : null}`}>
            <span className="list-group-item-label" data-toggle="star" onClick={toggleProp}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={`${salary}$`}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                        className="btn-cookie btn-sm "
                        data-toggle="increase"
                        onClick={toggleProp}>
                    <i className="fas fa-cookie"/>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash" />
                </button>
                <i className="fas fa-star" />
            </div>
        </li>
    );
}
