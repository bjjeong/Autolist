# Autolist Lite Coding Exercise
Built with React-Redux, Ruby on Rails, and PostgreSQL.

Spent approximately 5 hours on the exercise. 

A decision that took considerable time was determining how to store the page number and the min/max prices after the initial results were fetched. I decided to put the query string in the URL so that I could access them at any time, and make new GET requests to the API when navigating to different pages.

![alt text](https://github.com/bjjeong/Autolist/raw/master/public/screenshot.png "Screenshot")

![alt text](https://github.com/bjjeong/Autolist/raw/master/public/screenshot2.png "Screenshot")

![alt text](https://github.com/bjjeong/Autolist/raw/master/public/screenshot3.png "Screenshot")

## Installation
1. `bundle install`
2. `rails s`
3. `npm install`
4. Go to `localhost:3000` in the browser


## Unfinished Features
1. Was not able to get to get to keeping track of how many views for each vehicle.

2. On vehicle show page, if you refresh the page, it will not work. To fix this, I would need to create an action that would fetch only the pertinent vehicle's information.