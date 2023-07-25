import { ButtonContact } from "components/Button/Button.styled";
import { useDispatch, useSelector } from "react-redux";
import { getFiltersContacts, getFiltersStatus } from "redux/filter/selectors";
import { setQueryFilter, toggleStatusFilter } from "redux/filter/slice";
import css from "./FilterForm.module.css"

export const FilterForm = () => {
    const dispatch = useDispatch();

    const filter = useSelector(getFiltersContacts);
    const handleChange = (event) => {
        dispatch(setQueryFilter(event.currentTarget.value));
    }

    const filterStatus = useSelector(getFiltersStatus);
    const handleToggleFilter = () => {
        dispatch(toggleStatusFilter(!filterStatus));
    }

    return (
        <div className={css["block-filter"]}>
            <ButtonContact type="button" onClick={handleToggleFilter}>{filterStatus ? ("Hide Filter") : ("Show Filter")}</ButtonContact>
            {filterStatus && (<>
            <p className={css["title-filter"]}>Find contacts by name</p>
            <label className={css["label-contacts"]}>
                <input
                type="text"
                name="filter"
                value={filter}
                onChange={handleChange}
                className={css["input-contacts"]}
                />
            </label></>)}
        </div>
    )
}