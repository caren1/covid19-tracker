import React from 'react';
import styles from './App.module.css'

// import Cards from './components/Cards/Cards'
// import Chart from './components/Chart/Chart'
// import CountryPicker from './components/CountryPicker/CountryPicker'

// improved version of import instead of one-line import for each component
import { Cards, Chart, CountryPicker } from './components'
import { fetchData } from './api/'

class App extends React.Component {

    async componentDidMount() {
        const data = await fetchData();
        console.log(data);
    }
    render() {
        return (
            // guarantees that there is no interference with other CSS file within the app
            <div className={styles.container}>
                <Cards />
                <CountryPicker />
                <Chart />
            </div>
        );
    }
}

export default App;