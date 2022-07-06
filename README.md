# dns_updater

* Updates the ipv4 and ipv6 address of your device onto cloudflare

## Install

`git clone https://github.com/adminseeker/dns_updater.git`

`cd dns_updater`

* create dev.env and enter all variables there

### Example

`touch dev.env`

* inside dev.env:


```
X_AUTH_EMAIL=xyz@gmail.com
X_AUTH_KEY=<KEY>
ZONE_ID_1=<ZONE ID of your domain>
ROW_ID_1_1=<subdomain id of ipv4 row>
ROW_ID_1_2=<subdomain id of ipv6 row>

```

* you can add your own entries here and reflect those same in the app.js

* Dont forget to edit app.js accordingly

* Then just run start to run this for every minute periodically with your cronjob

* you can make any time related changes inside the start file

## Run

`./start`
