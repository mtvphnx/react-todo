import {Component} from "react";
import './Form.scss';

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.name !== '' && this.state.salary !== '') {
            this.props.onCreate(this.state.name, this.state.salary);

            this.setState({
                name: '',
                salary: ''
            })
        }
    }

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex"
                    onSubmit={e => this.onSubmit(e)}>
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="Имя"
                           name="name"
                           value={name}
                           onChange={this.onChange} />
                    <input type="number"
                           className="form-control new-post-label"
                           placeholder="Зарплата"
                           name="salary"
                           value={salary}
                           onChange={this.onChange}/>

                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}
