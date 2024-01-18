import { Component } from "react";
import AddCitiesForm from "./AddCitiesForm";
import Icon from "../common/Icon/Icon";
import Button from "../common/Button/Button";

class Cities extends Component {
    state = {
        isAddFormVisible: false
    }

    render() {
        const {isAddFormVisible} = this.state;
        return (
            <div>
                <h2>
                    <Icon variant='pin' label='cities'/>
                    <span>Cities</span>
                </h2>
                {isAddFormVisible && <AddCitiesForm/>}
                <Button action={() => {
                    this.setState({
                        isAddFormVisible: true
                    })
                }}>Add City</Button>
            </div>
        )
    }
}

export default Cities;