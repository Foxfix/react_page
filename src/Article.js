import React, { Component } from 'react';
import CommentList from './CommentList';

export default class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true
        }
    }
    render() {
        const  {article} = this.props;
        const {isOpen} = this.state;
        return (
            <div>
                <h3>{ article.title }</h3>
                {this.getBody()}
                <button onClick={this.handleClick}>
                    {isOpen ? 'close' : 'open'}
                </button>
            </div>
        )
    }

    getBody() {
        if(!this.state.isOpen) return null;
        const {article} = this.props;
        return (
            <section>
                { article.text }
                <CommentList comments={article.comments}/>
            </section>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}




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
