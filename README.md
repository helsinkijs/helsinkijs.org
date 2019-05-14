This is an initial readme for HelsinkiJS website.

To test the website, I use 
https://www.npmjs.com/package/http-server
install it globally and run http-server


To generate /docs directory with parcel

`parcel index.html  --out-dir docs/`

to avoid weird web socket with parcel:

`parcel index.html  --out-dir docs/ --no-hmr NODE_ENV=production`

