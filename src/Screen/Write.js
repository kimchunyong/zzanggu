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
                1년에 한번 밖에 없는 생일축하해!!<br />
                슬꿍 남편이라서 좋고, 앞으로도 당신 옆에서 늘 사랑할께<br />

                세상에서 누구보다 슬꿍을 많이 많이 사랑해<br />
                내년 생일은 지금보다 더 좋은 관계가 되도록 노력할께<br />
                생일 축하해.사랑해<br />
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
