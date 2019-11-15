import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

import './style.css';

class BarChart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            chartData: {
                labels: ['Jonas', 'Leane'],
                datasets: [
                    {
                        label: 'População',
                        data: [
                            [35, 0],
                            [10, 0]
                        ],
                        backgroundColor: [
                            'rgba(255, 0, 0, 0.6)',
                            'rgba(0, 255, 0, 0.6)'
                        ]
                    }
                ]
            }
        }
    }

    render() {
        return(
            <div className="col-12 col-md-6 chart bar">
                <Bar
                    data={this.state.chartData}
                    height={300}
                    options={{ maintainAspectRatio: false }}
                />
            </div>
        );
    }

}

export default BarChart;