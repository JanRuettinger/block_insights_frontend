import CanvasJSReact from '../libs/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function PieChart({ options }) {
    return (
        <div>
            <CanvasJSChart options={options} />
        </div>
    );
}
