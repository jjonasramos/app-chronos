import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';

import './piechart.css';

class PieChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['Jonas', 'Leane'],
                datasets: [
                    {
                        label: 'População',
                        data: [
                            80,
                            35
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
            <div className="col-12 col-md-6 chart pie">
                <Pie
                    data={this.state.chartData}
                    // width={100}
                    height={300}
                    options={{ maintainAspectRatio: false }}
                />
            </div>
        )
    }
}
export default PieChart;