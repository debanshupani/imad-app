var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
    'article-one': {
    title: 'Article One | Debanshu Pani',
    heading: 'Article One',
    date: 'August 22 2017',
    content: `
               <div>
                 <p>
                    Yeah Please support thanks
                </p>
                <p>
                    Yeah and also donate thanks
                </p>
                <p>
                    The button is below thanks
                </p>
                <p>
                    Please be quick, kids are starving and need food
                </p>
                <p>
                    And you know food comes from money 
                </p>
                <p>
                    And the money comes from youuuu!!!
                </p>
                <p>
                    Button Below thanks
                </p>
                <div>
                   <button onclick="location.href='http://panidebanshu.imad.hasura-app.io/article-two'" type="button">
                             Pay Here
                   </button>
            </div>
        </div>`
},
    'article-two': {
        title: 'Article Two | Debanshu Pani',
        heading: 'Article Two',
        date: 'August 22 2017',
        content: `
                    <div>
                        <p>
                            <h2>
                                We thank you for your concern :) no paypal lol pls mail cash
                            </h2>
                    </div>
                    <div>
                        <h4> 
                        Surprise Surprise it's not done yet. Click more  to find out 
                        </h4>
                        <hr/>
                         <button onclick="location.href='http://panidebanshu.imad.hasura-app.io/article-three'" type="button">
                                    More
                           </button>
                    </div>
                </div>`
},
    'article-three': {
         title: 'Article Three | Debanshu Pani',
         heading: 'Article Three',
         date: 'August 22 2017',
         content: `
          <div>
                <h2>
                    Thanks for sticking around till here fam :)
                </h2>
                <br>
                <h2>
                    So here's Linus' new video 
                </h2>
             </div>
             <div>
                  <iframe width="854" height="480" src="https://www.youtube.com/embed/vKc8GI_V-BM" frameborder="0" allowfullscreen></iframe>
             </div>`
    }
};

function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading; 
    var content = data.content;
    
    var htmlTemplate = `
    <html>
        <head>
            <title>
               ${title}
            </title>
            <link href="/ui/style.css" rel="stylesheet" />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </head>
        <body>
            <div class="container">
                 <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                    <div>
                </div>
            </div>
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req, res) {
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});
 
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
