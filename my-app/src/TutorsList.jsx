import PropTypes from 'prop-types';

const TutorsList = ({ tutors }) => {
    return (
        <ul>
            {tutors.map(item => (
                <li key={item.phone}>{`${item.firstName} ${item.lastName}`}</li>
            ))}
        </ul>
    )
}

export default TutorsList;

TutorsList.propTypes = {
    tutors: PropTypes.array
}