require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lobster flee spot bitter birth spike proof grace lock swap gasp'; 
let testAccounts = [
"0xe5dcb6f727411b506850c9640bbdc9fcaabe914cc45491465d964ea01a23f26c",
"0xf96255dcefe6432a9b0e5c670286322d4fa78124f8202097ed7dc04dc124e087",
"0x0c26a9a9b775486444c2d8bacaff71cb20a50195ebc72f756643831a9001b952",
"0x2c28c054bd9f407b1a85f31d36eadda0414342ad018627ebd835f650e48ba6d6",
"0x001fda3d47bd4713e2371e604fe9403f70d82d8a949518de25d6a061d62859eb",
"0xc404d675763b0444e3d4ed0987f3c55bc9fc24d3c25b3fc8a19e0ff07a47f6f6",
"0x8298fa5c608fe3c535d540a142c336c8106535d8b1284bb23c4b35b9fa18faf2",
"0x4aa2dd4cc42ccb0e25adb703770af113b0e57d2e1c410afbed388d2686866a95",
"0xd160db404889b8c362021f2eb072bdd91b1744eb1ed9ca027a06b344c99f1078",
"0x940288bed5ae5c468c9d774f3acf6948c740cca3fee9a97f3cc239b72dfb6742"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
