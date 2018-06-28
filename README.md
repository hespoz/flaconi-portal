# Flaconi portal challenge

## Demo

Just go to https://hespoz.github.io/flaconi-portal/

### Features

* Filters
* Sort by price
* Pagination using scroll
* Responsive

### Build

`$ npm install `

`$ npm run build `

After execute this commands the bundle will be located at `/build` (this is what will be deployed at AWS or Heroku)

### Run

`$ npm install `

`$ npm start `

This will run the project locally at http://localhost:3000/

### Test

Unfortunately enzyme does not work with decorators, so if you run ´$ npm run test´ it will fail. I tested manually using webstorm and worked just fine. I include the test file anyway just for you to take a look.
