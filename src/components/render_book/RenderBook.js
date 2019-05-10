import React, {Component} from 'react';
import {Par, H3, H4, H5, CodePHP} from './index';


export default class RenderBook extends Component {
    renderContent = (content) => {
        switch (content.content_type) {
          case 'par':
            return(<Par content={content.content} />);
          case 'h3':
            return(<H3 content={content.content} />);
          case 'h4':
            return(<H4 content={content.content} />);
          case 'h5':
            return(<H5 content={content.content} />);
          case 'code_php':
            return(<CodePHP content={content.content} />);
          default:
            return(<Par content={content.content} />);
        }
      }
    
    
    render(){
        return this.renderContent(this.props.Content.item);
    }
}
