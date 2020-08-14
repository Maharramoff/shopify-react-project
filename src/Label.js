import React, { Component } from 'react';

class Label extends Component
{
    render()
    {
        let hashtag = this.props.match.params.hashtag;

        return (
          <div>
              {hashtag}
          </div>
        );
    }
}

export default Label;