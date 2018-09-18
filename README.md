# ContactsApp

A SPA(Single Page App) to manage your contacts. [[demo]](https://contacts-app-live-demo.herokuapp.com/)

Install
---
```bash
$ git clone https://github.com/SamuelXing/ContactsApp.git && cd ContactsApp
$ npm install 					# install all
$ npm install --production			# only production
```

Build
---
```bash
$ npm run build:dev				# development build
$ npm run build:prod				# production build
```	

Run
---
```bash
$ npm start					# start app
```

Test
---
```bash
$ npm test					# notes: build in dev mode
```

Document
---
The document explains the directory structures of this project.
	
```bash
zihaos-MacBook-Pro:ContactApp zihaoxing$ tree -a -I .git
.
├── .babelrc					# transpiler config
├── .gitignore					# git ignore
├── README.md
├── package-lock.json
├── package.json				# npm entry
├── public					# public assets
│   ├── dist					# keep distributions
│   ├── images													
│   │   └── favicon.png
│   └── index.html
├── server					# webserver src
│   └── server.js
├── src						# frontend src
│   ├── app.js							
│   ├── components				# ReactJS components
│   ├── styles					# sass components
│   │   ├── base
│   │   ├── components
│   │   └── styles.scss
│   └── tests					# unit-test scripts
└── webpack.config.js				# webpack config

```

TODO
---
- [ ] Search Contacts; Pagination;
- [ ] Changing theme; International;
- [X] CI/CD 

License
---
MIT


