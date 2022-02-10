import React from 'react';
import ImageGallery from 'react-image-gallery';
import {
  Row,
  Col,
} from 'reactstrap';

export default function Gallery(props) {
  const { video } = props.config;
  return (
    <Row className="mb-5">
      <Col>
          {video.map((item,idx)=>{
            return (
                <div style={{border:'1px solid #ddd',padding:'20px 0 10x 0', marginBottom:'20px'}}>
                    <p style={{padding:'10px 0 0 0'}}>{idx + 1}화</p>
                    <iframe width="100%" height="306"
                            src={item}
                            frameBorder="no" scrolling="no" title="NaverVideo"
                            allow="autoplay; gyroscope; accelerometer; encrypted-media" allowFullScreen></iframe>
                </div>
            )
          })}


      </Col>
    </Row>
  );
}
