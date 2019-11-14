import React from 'react';

import './kpi.css';

const Kpi = (props) => (
    <div className="col-md-6 col-12">
        <div className="card">
            <div className="card-content">
                <div className="card-content-icon">
                    <img className="card-icon" src={props.icon} alt="icon"/>
                </div>
                <div className="card-content-body">
                    <div className="card-content-title">
                        <div className="card-content-title-text">
                            <span className="card-name">{props.title}</span>
                            <span className="card-description">{props.description}</span>
                        </div>
                    </div>
                    <div className="card-content-value">
                        <span className="card-value">{props.value}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Kpi;
