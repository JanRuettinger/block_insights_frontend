import dynamic from 'next/dynamic';
const PieChart = dynamic(() => import('../components/PieChart'), {
    ssr: false,
});

type props = {
    title: string;
    dataPoints: any;
};

export default function ResultSection({ title, dataPoints }: props) {
    const options = {
        exportEnabled: false,
        animationEnabled: true,
        title: {
            text: '',
        },
        data: [
            {
                type: 'pie',
                startAngle: 75,
                toolTipContent: '<b>{label}</b>: {y}%',
                showInLegend: 'true',
                legendText: '{label}',
                indexLabelFontSize: 16,
                indexLabel: '{label} - {y}%',
                dataPoints: dataPoints,
            },
        ],
    };

    return (
        <div className="mt-6 w-4/5 mx-auto">
            <div className="font-semibold text-2xl">{title}</div>
            <div>
                <PieChart options={options} />
            </div>
        </div>
    );
}
