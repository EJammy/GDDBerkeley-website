# Development Guide
WIP

# Deploying
## Dependencies
https://gohugo.io/installation/
https://rclone.org/downloads/

## cron
Run `crontab -e`
```
*/10 * * * * cd $HOME/GDDBerkeley-website && ./build.sh >> $HOME/logs.txt 2>&1
```
