const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();

    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
    console.log('Contract deployed to:', waveContract.address);

    let waveCount;
    let allWaves;
    waveCount = await waveContract.getWavesCount();

    let waveTnx = await waveContract.wave('A message!');
    await waveTnx.wait();
    waveCount = await waveContract.getWavesCount();

    waveTnx = await waveContract.connect(randomPerson).wave('Another message');
    await waveTnx.wait();
    waveCount = await waveContract.getWavesCount();
    allWaves = await waveContract.getAllWaves();
    console.log(allWaves);
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

runMain()