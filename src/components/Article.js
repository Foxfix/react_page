import React, { Component } from 'react';
import CommentList from './CommentList';
import PropTypes from 'prop-types';
import toggleOpen from '../decorators/toggleOpen';

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired
    };

    componentWillMount() {
    }

    render(){
        const  {article, isOpen, toggleOpen} = this.props;
        return (
            <div ref={this.setContainerRef}>
                <h3>{ article.title }</h3>
                <button onClick={toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    setContainerRef = ref => {
        this.container = ref;
    };

    componentDidMount() {
    }

    getBody() {
        const {article,isOpen} = this.props;
        if(!isOpen) return null;
        return (
            <section>
                { article.text }
                <CommentList comments={article.comments}/>
            </section>
        )
    }
}

export default Article




// cинтаксис functional components он используется для самых простых кейсов
// export default function Article(props) {
//     const {article} = props;
//     console.log('___', props);
//     return(
//         <div>
//             <h3>{ article.title }</h3>
//             <section>{ article.text }</section>
//         </div>
//     )
// }
