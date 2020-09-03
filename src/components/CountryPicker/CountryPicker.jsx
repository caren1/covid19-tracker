import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import { fetchCountries } from '../../api'   

import styles from './CountryPicker.module.css'

const CountryPicker = ({ handleCountryChange }) => {

    const [ fetchedCountries, setFetchedCountries ] = useState([]);
    

    useEffect(() => {
        const fetchCountriesApi = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchCountriesApi()

    }, [setFetchedCountries])

    return (
        <div>
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="global">Global</option>
                    {fetchedCountries.map((country, i) => 
                        <option key={i} value={country}>{country}</option>
                    )}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker
