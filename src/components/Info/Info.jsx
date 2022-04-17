import './Info.scss';

export const Info = ({length, increase}) => {
    return (
        <div className="info">
            <h3>Общее число сотрудников: {length}</h3>
            <h3>Премию получат: {increase}</h3>
        </div>
    );
}
