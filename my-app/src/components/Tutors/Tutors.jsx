import { Component } from "react";
import styles from './Tutors.module.css';
import Button from "../common/Button/Button";
import AddTutor from "./AddTutor/AddTutor";
import Icon from "../common/Icon/Icon";

class Tutors extends Component {

    state = {
        isAddFormVisible: false,
        list: [
            {
                id: 0,
                firstName: "John",
                lastName: "Smith",
                telephone: "07123456",
                email: "johnsmith@company.com",
                city: "Paris",
                role: "Administrator",
            },
        ]
    }

    renderList = (items) => {
        return items.map(el => {
            const name = `${el.firstName} ${el.lastName}`;

            return (
                <div key={el.id} className={styles.tutorsListItem}>
                    <div>{name}</div>
                    <div className={styles.address}>
                        <span>{el.email}</span>
                        <span>{el.telephone}</span>
                        <span>{el.city}</span>
                    </div>
                    <div>{el.role}</div>
                </div>
            )
        })
    }

    render() {
        const { isAddFormVisible, list } = this.state;
        return (
            <section className="section">
                <h1>
                    <Icon variant='cat' label='cat' />
                    <span>Tutors</span>
                </h1>
                <div className={`box ${styles.tutorsList}`}>
                    {this.renderList(list)}
                </div>
                {isAddFormVisible && <AddTutor onFormSubmit={this.handleTutor} />}
                <Button action={() => {
                    this.setState({
                        isAddFormVisible: true
                    })
                }}>Add Tutor</Button>
            </section>
        )
    }

    handleTutor = (data) => {
        const newId = this.state.list.length > 0 ? this.state.list.length : 0;

        const tutorToAdd = {
            id: newId,
            firstName: data.name,
            lastName: data.surname,
            telephone: data.phone,
            email: data.email,
            city: data.city,
            role: 'Member',
        }

        /**
         * Pentru orice state care este un obiect sau array si avem nevoie de starea precedenta, folosim metoda de mai jos
         */
        this.setState((prevState) => {
            return {
                list: [...prevState.list, tutorToAdd],
                isAddFormVisible: false
            }
        })
    }
}

export default Tutors;