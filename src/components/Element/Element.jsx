import './Element.scss';

export const Element = ({name, salary, increase, onDelete, toggleProp}) => {
    return (
        <li className={`list-group-item d-flex justify-content-between ${increase ? 'increase' : ''}`}>
            <span className="list-group-item-label" data-toggle="star" onClick={toggleProp}>{name}</span>
            <div className="list-group-item-input value">{salary}$</div>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                        className="btn-cookie btn-sm "
                        data-toggle="increase"
                        title="Премировать"
                        onClick={toggleProp}>
                    <i className="fas fa-cookie"/>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        title="Уволить"
                        onClick={onDelete}>
                    <i className="fas fa-trash" />
                </button>
            </div>
        </li>
    );
}
