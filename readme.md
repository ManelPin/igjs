
IgJs Javascript Instagram Scraper    
=====================    
Scrape Instagram for recent posts with Javascript client-side. No server-side processing needed!    
-------------------------------------------------------------------------------   
I wanted a quick and easy way to get posts from instagram and showcase them on a page.     
Strictly for getting only info what can be found right on the landing page for a users public account. Nothing too fancy, but extremely easy to get implimented into any project.        

 ----------    
Vanilla JS:
----------    
Gives you all the info you need to display posts however you want.    
Import script - `<script src="./igjs.min.js"></script>`    
Run it -    
```javascript    
let postPromise = getPosts('coolguyusername');       
postPromise.then(posts => console.log(posts));    
```     
         
Returns a promise with an array of objects (1 for each post) with the following as the resolve argument:     
* .image - String - main post image src url     
* .caption - String - post caption     
* .thumbnails.(150,240,320,480,640) - String - thumbnail image src url for each size     
* .likes - Number - number of likes     
* .comments - Number - number of comments     
* .dimensions.(height,width) - Number - height and width of main image     
* .url - String - url to post on instagram     
* .timestamp - Number - post timestamp     
* .video - Boolean - is post a video?     
* .raw - Object - Object with the raw data from each post (in case it's not included above)           
       

----------- 
jQuery/Bootstrap:
-----------    
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
     
See it in action - <a href="https://nrandall.github.io/igjs/" rel="noopener" target="_blank">here</a>     
