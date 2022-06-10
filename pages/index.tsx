import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { allowedNodeEnvironmentFlags } from 'process';
import { useState } from 'react';
import ResultSection from '../components/ResultSection';

const defiExperienceChart1 = [
    { y: 43, label: 'did <5 DeFi transactions' },
    { y: 18, label: 'did <100 DeFi transactions' },
    { y: 39, label: 'did >100 DeFi transactions' },
];

const defiExperienceChart2 = [
    { y: 7, label: 'did <5 DeFi transactions' },
    { y: 50, label: 'did <100 DeFi transactions' },
    { y: 43, label: 'did >100 DeFi transactions' },
];

const ethBalanceChart1 = [
    { y: 83, label: 'own 0-1 ETH' },
    { y: 8, label: 'own 1-10 ETH' },
    { y: 9, label: 'own >10 ETH' },
];

const ethBalanceChart2 = [
    { y: 43, label: 'own 0-1 ETH' },
    { y: 18, label: 'own 1-10 ETH' },
    { y: 39, label: 'own >10 ETH' },
];

const web3experienceChart1 = [
    { y: 60, label: 'joined <1 ago' },
    { y: 20, label: 'joined between 1 and 2 years ago' },
    { y: 20, label: 'joined >2 years ago' },
];

const web3experienceChart2 = [
    { y: 23, label: 'joined <1 ago' },
    { y: 8, label: 'joined <2 years ago' },
    { y: 79, label: 'joined >2 years ago' },
];

const otherNFTChart1 = [
    { y: 43, label: 'own <5 other NFTs' },
    { y: 18, label: 'own <10 other NFTs' },
    { y: 39, label: 'own >10 other NFTs' },
];

const otherNFTChart2 = [
    { y: 17, label: 'own <5 other NFTs' },
    { y: 23, label: 'own <10 other NFTs' },
    { y: 60, label: 'own >10 other NFTs' },
];

const Home: NextPage = () => {
    const [showResults, setShowResults] = useState<boolean>(false);
    const [resultState, setResultState] = useState<number>(0);
    const [defiExperience, setDefiExperience] =
        useState<any>(defiExperienceChart1);
    const [web3Experience, setWeb3Experience] =
        useState<any>(web3experienceChart1);
    const [nftExperience, setNftExperience] = useState<any>(otherNFTChart1);
    const [ethBalance, setEthBalance] = useState<any>(ethBalanceChart1);

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
                        dataPoints={defiExperience}
                    />
                    <ResultSection
                        title="How much ETH do the current token holders have?"
                        dataPoints={ethBalance}
                    />
                    <ResultSection
                        title="When did the current token holders start using web3?"
                        dataPoints={web3Experience}
                    />
                    <ResultSection
                        title="Do the current token holders collect other NFTs?"
                        dataPoints={nftExperience}
                    />
                </div>
            );
        } else {
            return <></>;
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
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
                        onChange={(e) => {
                            console.log(e.target.value);
                            if (e.target.value) {
                                setDefiExperience(defiExperienceChart1);
                                setEthBalance(ethBalanceChart1);
                                setWeb3Experience(web3experienceChart1);
                                setNftExperience(otherNFTChart1);
                            } else {
                                setShowResults(false);
                                setDefiExperience(defiExperienceChart2);
                                setEthBalance(ethBalanceChart2);
                                setWeb3Experience(web3experienceChart2);
                                setNftExperience(otherNFTChart2);
                            }
                        }}
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
