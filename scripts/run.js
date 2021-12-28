const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();

    const waveContractFactory = await hre.ethers.getContractFactory('WaveContract');
    const waveContract = await waveContractFactory.deploy({
        value:hre.ethers.utils.parseEther('0.1')
    });
    await waveContract.deployed();
    console.log('Contract deployed to:', waveContract.address);

    let contractBalance = await hre.ethers.provider.getBalance(
        waveContract.address
    )

    console.log('Contract Balance: ',hre.ethers.utils.formatEther(contractBalance)) 

    let waveCount;
    let allWaves;
    waveCount = await waveContract.getWavesCount();

    let waveTnx = await waveContract.wave('A message!');
    await waveTnx.wait();
    waveCount = await waveContract.getWavesCount();
    
    contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
    console.log(
        'Contract balance:',
        hre.ethers.utils.formatEther(contractBalance)
    );

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