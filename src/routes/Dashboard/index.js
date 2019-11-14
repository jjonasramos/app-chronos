import React from 'react';

import Kpi from '../../components/Kpi';
import PieChart from '../../components/PieChart';

const Dashboard = () => (
    <>
        <h2>Dashboard</h2>
        <hr className="divisor"></hr>
        <div className="row">
            <Kpi icon="https://img.icons8.com/plasticine/2x/time.png" title="Horas executadas" description="Período: Outubro/2019" value="40:39:00"/>
            <Kpi icon="https://img.icons8.com/plasticine/2x/speed.png" title="Total de KMs" description="Período: Outubro/2019" value="730"/>
        </div>
        <div className="row">
            <PieChart/>
        </div>
    </>
);

export default Dashboard;