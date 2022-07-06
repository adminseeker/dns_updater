#!/usr/bin/env node
const axios = require("axios");
const http=require("http");

var agent = new http.Agent({ family: 6 });

const X_AUTH_EMAIL = process.env.X_AUTH_EMAIL
const X_AUTH_KEY = process.env.X_AUTH_KEY
const ZONE_ID_1 = process.env.ZONE_ID_1 // aravindweb.com
const ROW_ID_1_1 = process.env.ROW_ID_1_1 // seeker-ubuntu6


const headers = {
    "Content-Type": "application/json",
    "X-Auth-Email": X_AUTH_EMAIL,
    "X-Auth-Key": X_AUTH_KEY
    
};

const update_dns = async (headers,zone_id,zone_record_id,name)=>{
    const url="https://api.cloudflare.com/client/v4/zones/"+zone_id+"/dns_records/"+zone_record_id;
    const res = await axios.get("http://checkip.dyndns.com");
    const r = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/;
    const t = await res.data.match(r); 
    const ip = t[0];
    console.log(ip);
    const data ={
        "type":"A",
        "name":name,
        "content":String(ip),
        "ttl":120,
        "proxied":false
    }
    const body = JSON.stringify(data);
    const res1 = await axios.patch(url,body,{headers});
    console.log(res1.data);

}

const update_dns_ipv6 = async (headers,zone_id,zone_record_id,name)=>{
    const url="https://api.cloudflare.com/client/v4/zones/"+zone_id+"/dns_records/"+zone_record_id;
    	
	const res = await axios.get("http://icanhazip.com",{ httpAgent: agent });
    const ip = res.data.trim();
    console.log(ip);
    const data ={
        "type":"AAAA",
        "name":name,
        "content":String(ip),
        "ttl":120,
        "proxied":false
    }
    const body = JSON.stringify(data);
    const res1 = await axios.patch(url,body,{headers});
    console.log(res1.data);

}


//update try4 ipv4
// update_dns(headers,ZONE_ID_1,ROW_ID_1_1,"try4.aravindweb.com");

//update seeker-ubuntu6 ipv6
update_dns_ipv6(headers,ZONE_ID_1,ROW_ID_1_1,"seeker-ubuntu6.aravindweb.com");
