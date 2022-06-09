import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import ResultSection from '../components/ResultSection';

const Home: NextPage = () => {
    const [showResults, setShowResults] = useState<boolean>(false);

    const defiExperienceChart = [
        { y: 43, label: 'own <5 other NFTs' },
        { y: 18, label: 'own <10 other NFTs' },
        { y: 39, label: 'own >10 other NFTs' },
    ];

    const ethBalanceChart = [
        { y: 43, label: 'own <5 other NFTs' },
        { y: 18, label: 'own <10 other NFTs' },
        { y: 39, label: 'own >10 other NFTs' },
    ];

    const web3experienceChart = [
        { y: 43, label: 'own <5 other NFTs' },
        { y: 18, label: 'own <10 other NFTs' },
        { y: 39, label: 'own >10 other NFTs' },
    ];

    const otherNFTChart = [
        { y: 43, label: 'own <5 other NFTs' },
        { y: 18, label: 'own <10 other NFTs' },
        { y: 39, label: 'own >10 other NFTs' },
    ];

    const Results = () => {
        if (showResults) {
            return (
                <div className="mt-24">
                    <div className="flex flex-row w-4/5 mx-auto ">
                        <div>
                            <span className="font-semibold">10000</span> NFTs
                            are held by{' '}
                            <span className="font-semibold">5420</span> wallets.
                        </div>
                    </div>
                    <ResultSection
                        title="Do the current token holders have experience in DeFi?"
                        dataPoints={otherNFTChart}
                    />
                    <ResultSection
                        title="How much ETH do the current token holders have?"
                        dataPoints={otherNFTChart}
                    />
                    <ResultSection
                        title="When did the current token holders start using web3?"
                        dataPoints={otherNFTChart}
                    />
                    <ResultSection
                        title="Do the current token holders collect other NFTs?"
                        dataPoints={otherNFTChart}
                    />
                </div>
            );
        } else {
            return <></>;
        }
    };

    return (
        <div className="flex flex-col h-screen">
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
            <main className="w-3/5 mx-auto flex-grow">
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
                    <button
                        className="p-2 bg-orange-500 ml-4 rounded-md px-4 font-semibold text-2xl"
                        onClick={() => setShowResults(true)}
                    >
                        Go
                    </button>
                </div>
                {<Results />}
            </main>
            <footer className="my-24">
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
            </footer>
        </div>
    );
};

export default Home;
