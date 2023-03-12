// Mongo DB backup and restore commands

// from digital ocean ... https://www.digitalocean.com/community/tutorials/how-to-back-up-restore-and-migrate-a-mongodb-database-on-ubuntu-20-04

sudo mkdir /var/backups/mongobackups

sudo mongodump --db newdb --out /var/backups/mongobackups/$(date +'%d-%m-%y')

Output
2020-10-29T19:22:36.886+0000    writing newdb.restaurants to
2020-10-29T19:22:36.969+0000    done dumping newdb.restaurants (25359 documents)

//delete old files
sudo find /var/backups/mongobackups/ -mtime +7 -exec rm -rf {} \;

sudo mongorestore --db newdb --drop /var/backups/mongobackups/10-29-20/newdb/


sudo mongodump --db bishopmoore --out /var/backups/mongobackups/$(date +'%d-%m-%y')

mongodump --host [host-name] --username [username] --password [password] --port [port-number] --db [database-name] --out [backup-directory]

sudo mongodump --username=mongoadmin --password=ashalrajaYOB2012 --port 27017 --db bishopmoore --out /var/backups/mongobackups/$(date +'%d-%m-%y') authenticationDatabase=admin

sudo mongodump -h 194.233.72.250:27017 -d bishopmoore -u bishopmooreadmin -p adminBishop$2022 --out /var/backups/mongobackups/$(date +'%d-%m-%y')

//worked one ..................  ******************************************
sudo mongodump --uri="mongodb://mongoadmin:ashalrajaYOB2012@194.233.72.250:27017/?authSource=admin" --db bishopmoore --out /var/backups/mongobackups/$(date +'%d-%m-%y')
sudo mongodump --uri="mongodb://mongoadmin:ashalrajaYOB2012@194.233.72.250:27017/?authSource=admin" --db guidance --out /var/backups/mongobackups/$(date +'%d-%m-%y')

sudo mongorestore --uri="mongodb://mongoadmin:ashalrajaYOB2012@194.233.72.250:27017/?authSource=admin" --db collegesite  /var/backups/mongobackups/collegesite  

/var/backups/mongobackups/collegesite

//remove collections without loosing users
use collegesite
db.getCollectionNames().forEach(function(c) { if (c.indexOf("system.") == -1) db[c].drop(); }



