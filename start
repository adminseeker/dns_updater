crontab -l > cronfile
location=(`pwd`)
echo "* * * * * /usr/bin/npm start --prefix $location" >> cronfile
echo >> cronfile
crontab cronfile
rm cronfile