# yelpForAnything
![](https://img.shields.io/github/repo-size/timburr1/yelpForAnything)
![](https://img.shields.io/github/contributors/timburr1/yelpForAnything)
![](https://img.shields.io/github/last-commit/timburr1/yelpForAnything)
<br>Simple web page built with JavaScript, Sequelize, and MySql

## Prerequisites
* [**MySQL**](https://www.mysql.com/downloads/) and [**Workbench**](https://www.linuxhelp.com/how-to-install-mysql-workbench-on-linux-mint-18-03)
* [**NPM**](https://www.npmjs.com/get-npm)
* [**Node.js**](https://nodejs.org/en/download/package-manager/)
* [**Sequelize**](https://sequelize.readthedocs.io/en/v3/docs/getting-started/)

## Checkout this project
```bash
$ git clone https://github.com/timburr1/yelpForAnything.git
```

## Setup Your Database
Open MySQL Workbench from your start menu, or run the MySQL CLI with:
```bash
$ sudo mysql
``` 
Create a new database schema:
```sql
create database yelp; 
use yelp;
```
Grant your existing sqluser permissions on that schema:
```sql
GRANT USAGE ON *.* TO sqluser@localhost;
GRANT ALL PRIVILEGES ON yelp.* TO sqluser@localhost;
```

## Project Dependencies
Open this project in Visual Studio Code. Open a new Terminal from the menu, or use Ctrl+Shift+`  
Install dependencies:
```bash
> npm install
```
Run the web server with 
```
> node app.js
```
Open a web browser, and navigate to http://localhost:3000/



