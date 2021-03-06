import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import ArticlesChart from './ArticlesChart';
import UserForm from './UserForm';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Filters from './Filters';
import Counter from './Counter';



class App extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <Counter/>
                <UserForm/>
                <Filters articles={[]}/>
                <ArticleList/>
            </div>
        )
    }
}

export default App;
