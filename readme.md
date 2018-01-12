IgJs jQuery Plugin
=====================
---------------------
Scrape Instagram for recent posts with Javascript. No server-side processing needed!
-------------------------------------------------------------------------------
I wanted a quick and easy way to get posts from instagram and showcase them on a page.
Strictly for getting only info what can be found right on the landing page for a users public account. Nothing too fancy, but extremely easy to get implimented into any project.    
     
Usage:   
Import script - `<script src="./jquery.igjs.min.js"></script>`   
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
    
