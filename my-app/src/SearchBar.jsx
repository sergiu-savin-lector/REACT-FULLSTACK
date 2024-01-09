import PropTypes from 'prop-types';

function SearchBar({text, isVisible, price}) {
    return (
        <div>
            {isVisible ? 'Afisez text' : ''}
            {text.length > 10 && <p>Textul este mai lung de zece caractere</p>}
            <h1>{text}</h1>
            <h2>{price}</h2>
        </div>
    )
}

SearchBar.propTypes = {
    text: PropTypes.string.isRequired,
    isVisible: PropTypes.bool,
    price: PropTypes.number.isRequired
}

export default SearchBar;