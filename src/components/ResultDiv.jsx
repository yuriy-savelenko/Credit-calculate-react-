

function ResultDiv({ value, description, }) {
    return (
        <div className="result">
            <p className="result__description">{description}</p>
            <p className="result__value">{value}</p>
        </div>
    )
}

export default ResultDiv;