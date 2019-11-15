let ethers = require('ethers')
const fs = require('fs');
let mnemonic = "tonight that cargo whale help credit essence hold actress raven liberty puppy"

 const main = async () => {
    let maxAmount = 10
    for(let i = 0;i < maxAmount; i++){
        let path = `m/` + i
        var walletName = "wallet_" + i  
        let wallet = ethers.Wallet.fromMnemonic(mnemonic, path);
        await fs.writeFile(__dirname + `/${walletName}.txt`, JSON.stringify(wallet), function (err) {
            if (err)  console.error(err)
        })
    }
 }

main()