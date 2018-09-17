# ContactsApp

A SPA(Single Page App) to manage your contacts. [[demo]](https://contacts-app-live-demo.herokuapp.com/)

Install
---
```bash
$ git clone https://github.com/SamuelXing/ContactsApp.git
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
│   ├── .DS_Store
│   ├── dist					# keep distributions
│   ├── images													
│   │   ├── .DS_Store
│   │   └── favicon.png
│   └── index.html
├── server					# webserver src
│   └── server.js
├── src						# frontend src
│   ├── app.js							
│   ├── components				# ReactJS components
│   │   ├── AddContact.js
│   │   ├── Contact.js
│   │   ├── ContactApp.js
│   │   ├── Contacts.js
│   │   ├── Footer.js
│   │   └── Header.js
│   ├── styles					# sass components
│   │   ├── base
│   │   │   ├── _base.scss
│   │   │   └── _settings.scss
│   │   ├── components
│   │   │   ├── _contact-add-new.scss
│   │   │   ├── _contacts.scss
│   │   │   ├── _container.scss
│   │   │   ├── _footer.scss
│   │   │   └── _header.scss
│   │   └── styles.scss
│   └── tests					# unit-test scripts
└── webpack.config.js				# webpack config

10 directories, 27 files

```

TODO
---
- [ ] Search Contacts; Pagination;
- [ ] Changing theme; International;
- [ ] CI/CD 

License
---
MIT


