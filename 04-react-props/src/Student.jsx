import PropTypes from 'prop-types';

function Student({ name, age, isStudent }) {
    return (
        <div className="student">
            <h2>Name: { name }</h2>
            <p>Age: { age }</p>
            <p>Student: { isStudent ? "Yes" : "Nope" }</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isStudent: PropTypes.bool.isRequired,
};

Student.defaultProps = {
    name: "Unknown",
    age: 0,
    isStudent: false,
};

export default Student;
