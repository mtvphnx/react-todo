import {Component} from 'react';
import './Element.scss';

export class Element extends Component {
    constructor(props) {
        super(props);

        this.state = {
            increase: this.props.increase,
            like: false
        }
    }

    toggleIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    toggleLike = () => {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render() {
        const {name, salary, onDelete} = this.props;
        const {increase, like} = this.state;

        return (
            <li className={`list-group-item d-flex justify-content-between ${increase ? 'increase' : null} ${like ? 'like' : null}`}>
                <span className="list-group-item-label" onClick={this.toggleLike}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={`${salary}$`}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                            className="btn-cookie btn-sm "
                            onClick={this.toggleIncrease}>
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
}
