var num     = maximal_post;
var wsumm   = summary_post;
var summlen = summary_characters;

var sundaboy; var labels;

function entryHasLabel(entry, label){
    if(label == "*"){return true;} // always true if label is "*"
    var labels = getPostLabels(entry);
    return isExists(labels, label);
}
function getAllLabels(sundaboy){
    var labels  = [];
    var entries = sundaboy.feed.entry;
    for(var i=0; i<entries.length; i++){
        var entry = entries[i];
        var categories = entry.category;
        if(!categories){continue;}
        for(var j=0; j<categories.length; j++){
            var category = categories[j];
            var label = category.term;
            if(!isExists(labels, label)){labels.push(label);}
        }
    }
    labels.sort();
    return labels;
}
function getContent(entry){
    if(!wsumm){return "";}
    var content = entry.content ? entry.content.$t : entry.summary.$t;
    content = stripHTML(content);
    if(content.length <= summlen){return content;}
    content = content.substr(0, summlen);
    if(content.charAt(content.length-1) != " "){content = content.substr(0, content.lastIndexOf(" ")+1);}
    content += "...";
    return content;
}
function getPermalink(entry){
    var links = entry.link;
    if(!links){return null;}
    for(var i=0; i<links.length; i++){
        var link = links[i];
        if(link.rel == "alternate"){return link.href;}
    }
    return null;
}
function getPostLabels(entry){
    var labels     = [];
    var categories = entry.category;
    if(!categories){return labels;}
    for(var i=0; i<categories.length; i++){
        labels.push(categories[i].term);
    }
    return labels;
}
function getRecentPosts(sundaboy, label){
    // this widget is made by sundaboy in his blog
    var posts   = [];
    var entries = sundaboy.feed.entry;
    var i = 0;
    while(posts.length < num){
        if(i == entries.length){break;}
        var entry   = entries[i];
        if(entryHasLabel(entry, label)){
            var title   = entry.title.$t;
            var href    = getPermalink(entry);
            var content = getContent(entry);
            var post    = {"title" : title, "href" : href, "content" : content};
            posts.push(post);
        }
        i++;
    }
    return posts;
}
function isExists(array, val){
    for(var i=0; i<array.length; i++){
        if(array[i] == val){return true;}
    }
    return false;
}
function onLoadFeed(sundaboy_arg){
    sundaboy   = sundaboy_arg;
    labels = getAllLabels(sundaboy);
    showLabels(labels);
    showLabeledPosts("*");
}
function showLabeledPosts(label){
    // set label == "*" if you want to show all posts
    posts = getRecentPosts(sundaboy, label);
    showPosts(posts);
}
function showLabels(labels){
    var s = "";
    s += "<select onchange='showLabeledPosts(this.value)'>";
    s += "<option value='*'/>All Labels";
    for(var i=0; i<labels.length; i++){
        var label = labels[i];
        s += "<option value='"+label+"'/>" + label;
    }
    s += "</select>";
    document.getElementById("boy_labels").innerHTML = s;
}
function showPosts(posts){
    var s = "";
    if(!wsumm){s += "<ul>";}
    for(var i=0; i<posts.length; i++){
        var post = posts[i];
        if(wsumm){
            s += "<p>";
            s += "<b><a href='"+post.href+"'>" + post.title + "</a></b> <br/>";
            s += post.content;
            s += "<br/><a href='"+post.href+"'> Selengkapnya&gt;&gt; </a>";
            s += "</p>";
        } else {
            s += "<li><a href='"+post.href+"'>" + post.title + "</a></li>";
        }
    }
    if(!wsumm){s += "</ul>";}
    document.getElementById("boy_posts").innerHTML = s;
}
function stripHTML(s) {
    var c;
    var intag = false; var newstr = "";
    for(var i=0; i<s.length; i++){
        c = s.charAt(i);
        if(c=="<"){intag = true;}
        else if(c==">"){intag = false;}
        if(c == ">"){newstr += " ";}
        else if(!intag){newstr += c;}
    }
    return newstr;
}
