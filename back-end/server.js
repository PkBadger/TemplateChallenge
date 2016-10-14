var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res,next) {
  res.send(json);
});

app.listen(8080, function () {
  console.log('App listening on port 8080!');
});

var json = {post:[
              {
                "title":"Rhubarb: The Vegetable That Acts Like a Fruit",
                "content":`
                May is all about vegetables on bobbyflay.com
                and one of the most popular springtime vegetables is rhubarb.
                That's right, I said vegetable. Did you know that thubarb is
                actually a vegetable, not a fruit?

                While rhubarb is typically treated like a fruit and most often
                shows up in desserts in this country, it is also very goot in
                savory dishes too and when used in glazes and chutneys pairs really
                well with pork, lamb and chicken. But, since i could live
                on pastries (and often do) i love using rhubarb in a variety
                of desserts.`

              },
              {
                "title":"Spice-Crusted Salmon: A Holiday Dinner That's As Impressive As It Is Quick",
                "content":`Holiday season is well underway, and you know what than means: people
                  are BUSY! With that in mind, I developed a festive recipe that's
                  quick enough to serve on a weeknight(with some make-aheads), and
                  beautiful and impressive enoufh to serve as the centerpiece
                  for a holiday meal.

                We love to serve a whole side of fish -- it makes for a gorgeous
                presentation and it feeds a crowd. This one has a spice tub that
                does double duty, as seasoning for the salmon and as a coating for
                spiced nuts that get stirred into fluffu jasmine rice.`
              },
              {
                "title":"A New Favorite Take on an Old Mediterranean Grain",
                "img":"img/img-eggplant-manchego-salad-cover.png",
                "content":`Packed with complex carbohydrates and fiber, delicious and hearty
                whole grains play an important part in the mediterranean diet. Look
                beyond rice and pasta, becaise it's worth getting to jnow farro,
                amaranth, millet, freekah and wheat berries...`
              }
            ]
          };
