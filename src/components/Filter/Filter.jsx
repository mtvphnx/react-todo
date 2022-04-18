import './Filter.scss';

export const Filter = ({active, checkoutFilter}) => {
    const data = [
        {key: 0, name: 'all', text: 'Все сотрудники'},
        {key: 1, name: 'increase', text: 'Премированные'},
        {key: 2, name: 'rich', text: 'Больше 1000$'}
    ]

    const handleClick = (e) => {
        const name = e.currentTarget.getAttribute('data-name');
        checkoutFilter(name);
    }

    const buttons = data.map(item => {
        const {key, name, text} = item,
            activeFilter = active === name,
            classNames = activeFilter ? 'active' : '';

        return <button key={key}
                       type="button"
                       data-name={name}
                       className={`btn btn-outline-light ${classNames}`}
                       onClick={e => handleClick(e)}>
                       {text}
                </button>
    })

    return (
        <div className="btn-group">{buttons}</div>
    );
}
