import fs from 'fs';
import { execSync } from 'child_process';
import { passwords } from './passwords.js'; // all possible passwords

// fs.mkdirSync('globalcarlos') // folder for 1000 profiles

const createProfile = (name, key, num) => {
    
    const filename = `${num.toString().padStart(3, '0')}_${process.argv[2]}`; //  node wifi_name = node process.argv[2]

    fs.writeFileSync(`${process.cwd()}\\files\\${filename}`, 
        `<?xml version="1.0"?>
            <WLANProfile xmlns="http://www.microsoft.com/networking/WLAN/profile/v1">
                <name>${name}</name>
                <SSIDConfig>
                    <SSID>
                        <hex>${new Buffer.from(name).toString('hex')}</hex>
                        <name>${name}</name>
                    </SSID>
                </SSIDConfig>
                <connectionType>ESS</connectionType>
                <connectionMode>auto</connectionMode>
                <MSM>
                    <security>
                        <authEncryption>
                            <authentication>WPA2PSK</authentication>
                            <encryption>AES</encryption>
                            <useOneX>false</useOneX>
                        </authEncryption>
                        <sharedKey>
                            <keyType>passPhrase</keyType>
                            <protected>false</protected>
                            <keyMaterial>${key}</keyMaterial>
                        </sharedKey>
                    </security>
                </MSM>
                <MacRandomization xmlns="http://www.microsoft.com/networking/WLAN/profile/v3">
                    <enableRandomization>false</enableRandomization>
                    <randomizationSeed>1111111111</randomizationSeed>
                </MacRandomization>
            </WLANProfile>`
    )
}


for(let i = 0; i < 1000; i++){
    createProfile(`${process.argv[2].replace('.xml', '')}`, passwords[i], i); 
}