import React from 'react';
import moment from 'moment';
import {
  Row,
  Col,
} from 'reactstrap';
import FontAwesome from 'react-fontawesome';

import 'moment/locale/ko';

export default function Header(props) {
  const {
    bridal, image, wedding, title,
  } = props.config;
  moment.locale('ko');
  return (
    <Row>
      <Col>
        <Row>
          <Col className="app-fluid">
            <img className="img-fluid" src={image.header} alt="header" />
          </Col>
        </Row>
        <Row>
          <Col className="pt-5">
            <h3>{title}</h3>
            <p className="lead pt-3">2022년 2월 11일</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
