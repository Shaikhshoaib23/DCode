// https://eth-ropsten.alchemyapi.io/v2/GBXrQN6d27GiKrY9yN3f2Rf8XmSOs-Hb

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/GBXrQN6d27GiKrY9yN3f2Rf8XmSOs-Hb',
      accounts: [ '16747f14288a5898620335b043db8f259574976ac453dd09192aa5e6e0ee3cbf' ]
    },
  },
};  