var Community = artifacts.require("./Community.sol");

module.exports = function(deployer) {
  let con;
  deployer.then(() => {
    return deployer.deploy(Community, 10);
  }).then(() => {
    return Community.deployed();
  }).then(instance => {
    con = instance;
    return con.deposit({value: 300000});
  }).then(txn => {
    return con.createProposal(100000);
  }).then(txn => {
    return con.createProposal(50000);
  });
};
