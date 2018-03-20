IgJs Javascript Instagram Scraper 
=====================
---------------------
Scrape Instagram for recent posts with Javascript client-side. No server-side processing needed!
-------------------------------------------------------------------------------
I wanted a quick and easy way to get posts from instagram and showcase them on a page.
Strictly for getting only info what can be found right on the landing page for a users public account. Nothing too fancy, but extremely easy to get implimented into any project.    
     
Vanilla JS:     
Import script - `<script src="./igjs.min.js"></script>`   
Run it -   
```javascript     
var posts = getPosts('coolguyusername');     
```     
     
Returns an array of objects(1 for each post) with the following:    
  nice.image - String - main post image src url    
  nice.caption - String - post caption    
  nice.thumbnails.(150,240,320,480,640) - String - thumbnail image src url for each size    
  nice.likes - Number - number of likes    
  nice.comments - Number - number of comments    
  nice.dimensions.(height,width) - Number - height and width of main image    
  nice.url - String - url to post on instagram    
  nice.timestamp - Number - post timestamp    
  nice.video - Boolean - is post a video?    
  raw... - Array - array of objects with the raw data from each post    
          
    
    
Dead simple jQuery usage for displaying on a page with bootstrap:   
Import jQuery and bootstrap   
Import jquery script - `<script src="./jquery.igjs.min.js"></script>`   
Get your posts -  
```javascript    
$('.ig-feed').igjs({   
  user: 'amazingusername',   
  posts: 12,   
  perRow: 3   
});  
```     
Options:   
*  user: 'instagram' - the public user account to scrape    
*  posts: 12 - number of posts to get   
*  perRow: 4 - number of posts per row (uses bootstrap 3 classes to achieve)  

See it in action - <a href="https://nrandall.github.io/igjs/" target="_blank">here</a>
    
