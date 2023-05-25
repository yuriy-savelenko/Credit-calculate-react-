function InputPercent({ min, max, value, setValue, description, span, initialPay }) {

    function handleChange(event) {
        if (event.target.value > max) {
            setValue(max)
        } else if (event.target.value < min) {
            setValue(min)
        } else {
            setValue(event.target.value)
        }
    }
    return (
        <div className="form__box">
            <p className="form__title">{description}</p>
            <form className="form">
                <input min={min} max={max} value={value} onChange={(event) => { setValue(event.target.value) }} onBlur={handleChange} type="number" className="form__input form__input_percent" />
                <input min={min} max={max} value={value} onChange={(event) => { setValue(event.target.value) }} onBlur={handleChange} className="range" type="range" />
                <span className='form__span'>{value}%</span>
                <span className='percent__span'>{initialPay}</span>
            </form>

        </div>
    )
}
export default InputPercent;