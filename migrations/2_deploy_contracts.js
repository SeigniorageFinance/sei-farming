const SEIToken = artifacts.require("SEIToken");
const SEIMasterchef = artifacts.require("SEIMasterchef");

async function deploy(deployer) {
  const token = await deployer.deploy(SEIToken);
  await deployer.deploy(SEIMasterchef,
    token.address,
    '0xC7E457C5436E2CDB7605eD4e9Fa98C98ba11e613',
    '50000000000000000000',
    '11705003',
    '12705003'
  );
}

module.exports = function(deployer) {
  deployer.then(async() => {
    await deploy(deployer);
  })
};