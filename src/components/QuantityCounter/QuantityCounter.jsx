import Icon from '../Icon';
function QuantityCounter({ count, onChange }) {
    return (
        <div>
            <div className="quantity_counter">
                <button className="add_sub_btn" onClick={() => onChange('minus')}>
                    <Icon name="Minus" size="15" />
                </button>
                <p className='text-xs w-9 text-center'>{count}</p>
                <button className="add_sub_btn" onClick={() => onChange('plus')}>
                    <Icon name="Plus" size="15" />
                </button>
            </div>
        </div>
    )
}

export default QuantityCounter