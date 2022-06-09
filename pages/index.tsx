import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const PieChart = dynamic(() => import('../components/PieChart'), {
    ssr: false,
});

const Home: NextPage = () => {
    const defiExperienceChart = {
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
                dataPoints: [
                    { y: 43, label: 'own <5 other NFTs' },
                    { y: 18, label: 'own <10 other NFTs' },
                    { y: 39, label: 'own >10 other NFTs' },
                ],
            },
        ],
    };

    const ethBalanceChart = {
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
                dataPoints: [
                    { y: 43, label: 'own <5 other NFTs' },
                    { y: 18, label: 'own <10 other NFTs' },
                    { y: 39, label: 'own >10 other NFTs' },
                ],
            },
        ],
    };

    const web3experienceChart = {
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
                dataPoints: [
                    { y: 43, label: 'own <5 other NFTs' },
                    { y: 18, label: 'own <10 other NFTs' },
                    { y: 39, label: 'own >10 other NFTs' },
                ],
            },
        ],
    };

    const otherNFTChart = {
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
                dataPoints: [
                    { y: 43, label: 'own <5 other NFTs' },
                    { y: 18, label: 'own <10 other NFTs' },
                    { y: 39, label: 'own >10 other NFTs' },
                ],
            },
        ],
    };

    return (
        <div className="flex flex-col min-h-screen justify-between">
            <Head>
                <title>Block Insights</title>
                <meta
                    name="description"
                    content="Insights into your blockchain data"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="border-2 text-3xl p-6 bg-gradient-to-r from-sky-500 to-indigo-500">
                Block Insights
            </header>
            <main className="mb-8 w-3/5 mx-auto flow flow-col">
                <div className="text-4xl mt-16 text-center">
                    Find out more about your NFT Token holders
                </div>
                <div className="flex flex-row mt-10 justify-center">
                    <input
                        type="text"
                        placeholder="Contract address"
                        className="border-2 border-gray-400 rounded-md p-2"
                    />
                    <div className="ml-2 border-2 border-gray-400 p-2 rounded-md">
                        Ethereum dropdown
                    </div>
                    <button className="p-2 bg-orange-500 ml-4 rounded-md px-4 font-semibold text-2xl">
                        Go
                    </button>
                </div>
                <div className="mt-24">
                    <div className="flex flex-row w-4/5 mx-auto ">
                        <div>
                            <span className="font-semibold">10000</span> NFTs
                            are held by{' '}
                            <span className="font-semibold">5420</span> wallets.
                        </div>
                    </div>
                    <div className="mt-6 w-4/5 mx-auto">
                        <div className="font-semibold text-2xl">
                            Do the current token holders have experience in
                            DeFi?
                        </div>
                        <div>
                            <PieChart options={defiExperienceChart} />
                        </div>
                    </div>

                    <div className="mt-6 w-4/5 mx-auto">
                        <div className="font-semibold text-2xl">
                            How much ETH do the current token holders have?
                        </div>
                        <div>
                            <PieChart options={ethBalanceChart} />
                        </div>
                    </div>

                    <div className="mt-6 w-4/5 mx-auto">
                        <div className="font-semibold text-2xl">
                            When did the current token holders start using web3?
                        </div>
                        <div>
                            <PieChart options={web3experienceChart} />
                        </div>
                    </div>

                    <div className="mt-6 w-4/5 mx-auto">
                        <div className="font-semibold text-2xl">
                            Do the current token holders collect other NFTs?
                        </div>
                        <div>
                            <PieChart options={otherNFTChart} />
                        </div>
                    </div>
                </div>
                <div className="my-24">
                    <div className="text-center text-3xl font-semibold">
                        Get informed when we add more insights
                    </div>
                    <div className="flex flex-row mt-2 justify-center">
                        <input
                            type="text"
                            placeholder="E-Mail address"
                            className="border-2 border-gray-400 rounded-md p-2"
                        />
                        <button className="p-2 bg-green-500 ml-4 rounded-md px-4 font-semibold text-2xl">
                            Sign up
                        </button>
                    </div>
                </div>
            </main>
            {/* <footer className="text-2xl text-white p-4 bg-blue-500">
                Footer
            </footer> */}
        </div>
    );
};

export default Home;
