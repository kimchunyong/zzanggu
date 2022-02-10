import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Write extends Component {
    render() {
        return (
            <div className="mb-5" style={{
                lineHeight: '180%',
                fontSize: '18px'
            }}>
                <small>
                    <span className="text-middle" style={{ color: 'red' }}>
                        <FontAwesome name="heart" />
                    </span>
                </small><br />
                슬꿍 안녕?<br />
                1년에 한번 밖에 없는 생일에 매번<br />
                슬꿍 남편이라는 사람이 맨날 실망만 줘서<br />
                많이 속상하지?ㅜ<br />

                그래도 세상에서 누구보다 슬꿍을 많이 많이 사랑해<br />
                생일 축하해.<br />
                <small>
                    <span className="text-middle" style={{ color: 'red' }}>
                        <FontAwesome name="heart" />
                    </span>
                </small>
            </div>
        );
    }
}

export default Write;
