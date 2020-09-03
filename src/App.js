import React from 'react';
import styles from './App.module.css'

// import Cards from './components/Cards/Cards'
// import Chart from './components/Chart/Chart'
// import CountryPicker from './components/CountryPicker/CountryPicker'

// improved version of import instead of one-line import for each component
import { Cards, Chart, CountryPicker } from './components'
import { fetchData } from './api/'

class App extends React.Component {

    state = { data: {},  }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData })
    }
    render() {
        const { data } = this.state;

        return (
            // guarantees that there is no interference with other CSS file within the app
            <div className={styles.container}>
                <Cards data={data}/>
                <CountryPicker />
                <Chart />
            </div>
        );
    }
}

export default App;