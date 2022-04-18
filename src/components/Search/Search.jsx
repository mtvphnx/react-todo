import {Component} from "react";
import './Search.scss';

export class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    onChange = (e) => {
        let text = e.target.value;

        this.setState({
            text: text
        })

        this.props.onChange(text);
    }

    render() {
        const {text} = this.state;

        return (
            <input type="text"
               className="form-control search-input"
               placeholder="Найти сотрудника"
               value={text}
               onChange={e => this.onChange(e)}/>
        );
    }
}
