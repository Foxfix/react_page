import React, { Component, PureComponent } from 'react';
import CommentList from '../CommentList';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import toggleOpen from '../../decorators/toggleOpen';
import { CSSTransitionGroup } from 'react-transition-group';
import {deleteArtice} from '../../AC';
import '../article.css';

class Article extends PureComponent {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired
    };

    state = {
        updateIndex: 0
    };

    render(){
        const  {article, isOpen, toggleOpen} = this.props;
        console.log('__', 'update');
        return (
            <div ref={this.setContainerRef}>
                <h3>{ article.title }</h3>
                <button onClick={toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                <button onClick={this.handleDelete}>Delete me</button>
                <CSSTransitionGroup
                    transitionName="article"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                    {this.getBody()}
                </CSSTransitionGroup>
            </div>
        )
    }

    handleDelete = () => {
        console.log("---", "delete")
        const {deleteArtice, article} = this.props
        deleteArtice(article.id)
    };

    setContainerRef = ref => {
        this.container = ref;
    };

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

export default connect(null, {deleteArtice})(Article)




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
