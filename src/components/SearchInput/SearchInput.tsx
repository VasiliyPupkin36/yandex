import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearSearch, setSearch } from '../../store/actions';
import './search-input.scss';

export default function SearchInput() {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if (!value) return;

        const timer = setTimeout(() => dispatch(setSearch(value)), 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [value, dispatch]);
    
    const handleClearInput = () => {
        dispatch(clearSearch());
        setValue('');
    };

    return (
        <div className="search-input__form">
            <input value={value} onChange={e => setValue(e.currentTarget.value)} placeholder="Search" className="search-input__input" />
            <div className="search-input__search-btn" onClick={() => dispatch(setSearch(value))}>🔍</div>
            <div className="search-input__clear-btn" onClick={handleClearInput}>×</div>
        </div>
    );
}