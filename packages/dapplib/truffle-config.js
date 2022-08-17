require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift renew still horse grace derive bottom gasp'; 
let testAccounts = [
"0xda3590774afb2cf1d1294966a46b07fefbe7b08b989e493eb8be137749f22609",
"0xcf2a84b52833cc737354702484bce651a1244cf5b53d142e32d0f311310c1ff5",
"0xa02c29c75823c062dd3045ff271dd2b9a9ee6dbc7576be89b7d8d2c833327671",
"0x1306dacfadac68a9f758cb6193874a7d5abbaab31ca8327bd7f5f7bedc43c85e",
"0x21a8a55b740096c7b2e39bf502e8853fbf6e88984e48f9e4a675bd14ddd72a9e",
"0x4452cdc10a5c5c96c055a1a235bcd80e4c8e55b8eb0cbb6d159b950b72a79a7a",
"0x0cb05e877b322489e5aaecdf076b3ad858f5aff8c8f24b384be8c1976fd52460",
"0x000af122e58523708b349e30ef10e0046d91ca50b81e79c9cc4b999dca9766e6",
"0xb6a26cbdcf8a882a0f8f01aea1a8563c04859b032232c02bd239a2c476b1a798",
"0xb4157cd524d500575c12326e09a1d893e7b87adedc5b17ce6199b976bc9c8f24"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

