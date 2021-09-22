import React from 'react';
import './index.css';
import { NaviBar } from './components/NaviBar';
import { Projects } from './components/Projects';

/**
 * Renders the Nominations components which provides a list of the nominated movies found, their title, their year released, their poster as well as a button to remove the movie from their nominations list.
 */
export class App extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll(event) {
        console.log(document.getElementsByClassName(''))
        if (document.documentElement.scrollTop > 20) {
            document.getElementsByClassName('navbar')[0].className = "navbar sticky";
            document.getElementsByClassName('menu-btn')[0].className = "menu-btn sticky";
        } else {
            document.getElementsByClassName('navbar')[0].className = "navbar";
            document.getElementsByClassName('menu-btn')[0].className = "menu-btn";
        }
    }

    render () {
        return (
            <div>
                <NaviBar/>
                <Projects/>
            </div>

        )
    }

}