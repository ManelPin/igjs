function getPosts(user) {
  var url = 'https://allorigins.me/get?url=' + encodeURIComponent('https://instagram.com/' + user + '/')
  var result = [];
  var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);
        data = JSON.parse(data.contents.split('window._sharedData = ')[1].split('\;\<\/script>')[0]).entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges
        
        data.forEach(function(item){
          result.push({ 
            raw: item.node,
            image: item.node.display_url,
            dimensions: item.node.dimensions,
            likes: item.node.edge_liked_by.cosunt,
            caption: item.node.edge_media_to_caption.edges[0].node.text,
            comments: item.node.edge_media_to_comment.count,
            video: item.node.is_video,
            code: item.node.shortcode,
            url: 'http://instagram.com/p/' + item.node.shortcode,
            timestamp: item.node.taken_at_timestamp,
            thumbnails: {
              150: item.node.thumbnail_resources[0].src,
              240: item.node.thumbnail_resources[1].src,
              320: item.node.thumbnail_resources[2].src,
              480: item.node.thumbnail_resources[3].src,
              640: item.node.thumbnail_resources[4].src
            }
          })
        })
        return result

      } else {
        // We reached our target server, but it returned an error
        console.error('There was an error getting images')
    }
  };

  request.onerror = function() {
    console.error('There was an error getting images')
  };

  request.send();
  return result
}
