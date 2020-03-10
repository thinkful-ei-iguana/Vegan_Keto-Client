import React, { Component } from 'react';
import './ListItem.css';
import ControlBar from '../ControlBar/ControlBar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faFileImage,
//   faFileAudio,
//   faFileAlt,
//   faFileVideo
//  } from '@fortawesome/free-solid-svg-icons';

class ListItem extends Component {
  render() {

    // const icons = {
    //   "jpg": faFileImage,
    //   "mov": faFileVideo,
    //   "txt": faFileAlt,
    //   "mp3": faFileAudio
    // }

    return (
      <div className="ListItem">
        <div className="ListItem__icon">
          <div className="ListItem__circle">
            {/* <FontAwesomeIcon icon={icons[this.props.fileType] || faFileAlt }/> */}
          </div>
        </div>
        <div className="ListItem__content">
          <div className="ListItem__heading">
            <div className="ListItem_title">{this.props.title}</div>
            <div className="ListItem__recipeType">{this.props.recipeType}</div>
            <div className="ListItem_cuisineType">{this.props.cuisineType}</div>
            <div className="ListItem__ingredients">{this.props.ingredients}</div>
          </div>
          <div className="ListItem__actions">
            <div className="ListItem__instructions">
              {this.props.instructions}
            </div>
            <ControlBar/>
          </div>
        </div>
      </div>
    );
  }
}

export default ListItem;