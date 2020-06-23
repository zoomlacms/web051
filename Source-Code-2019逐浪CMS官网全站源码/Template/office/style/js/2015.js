var Tile = function(e, t, n, r) {
    this.type = t;
    this.id = e;
    if (n !== undefined) {
        this.x = n.x * tile;
        this.y = n.y * tile
    }
    this.width = Number(t.toString().substr(0, 1)) * 248;
    this.height = Number(t.toString().substr(1, 1)) * 158;
    this.animOffset = 10;
    this.animOpacity = 0;
    this.overColor = r.over;
    //this.url = r.url;
    var i = "";
    var s = Math.random() > .5 ? -1 : 1;
    var o = Math.random() > .5 ? -1 : 1;
   
};
Tile.prototype.update = function(e, t) {
    this.x = e;
    this.y = t
};
Tile.prototype.over = function(e, t, w, h) {
    if (isCanvas) {
        this.k = 0;
        this.canvas = $("a[date-id=" + this.id + "] canvas")[0];
        this.width = w;
        this.height = h;
        var n = this.canvas;
        n.setAttribute("width",w);
        n.setAttribute("height",h);
        this.animOpacity = 1;
        this.ctx = n.getContext("2d");
        window.clearInterval(this.animInterval);

        
        if (e < this.width / 2 && t < this.height / 2) {
            //console.log(2);
            this.pointsArr = [new Point(0, 0, 0, 0, 1), new Point(0, 0, this.width, 0, 3 + Math.round(Math.random() * 6)), new Point(0, 0, this.width, this.height, 3 + Math.round(Math.random() * 6)), new Point(0, 0, 0, this.height, w/160), new Point(0, 0, 0, 0, 1)]
        }
        if (e >= this.width / 2 && t < this.height / 2) {
            //console.log(1);
            this.pointsArr = [new Point(this.width, 0, this.width, 0, 1), new Point(this.width, 0, 0, 0, 3 + Math.round(Math.random() * 6)), new Point(e, t, 0, this.height, 3 + Math.round(Math.random() * 6)), new Point(this.width, this.height, this.width, this.height, 1), new Point(this.width, 0, this.width, 0, 1)]
        }
        if (e >= this.width / 2 && t >= this.height / 2) {
           // console.log(4);
            this.pointsArr = [new Point(this.width, this.height, this.width, this.height, 1), new Point(this.width, this.height, 0, this.height, 3 + Math.round(Math.random() * 6)), new Point(this.width, this.height, 0, 0, 3 + Math.round(Math.random() * 6)), new Point(this.width, this.height, this.width, 0, 1), new Point(this.width, this.height, this.width, this.height, 1)]
        }
        if (e < this.width / 2 && t >= this.height / 2) {
            //console.log(3);
            this.pointsArr = [new Point(0, this.height, 0, this.height, 1), new Point(0, 0, 0, 0, 1), new Point(e, t, this.width, 0, 3 + Math.round(Math.random() * 6)), new Point(0, this.height, this.width, this.height, 3 + Math.round(Math.random() * 6)), new Point(0, this.height, 0, this.height, 1)]
        }

        var r = this;
        this.animInterval = window.setInterval(function() {
            r.animOver(r)
        }, 20)
    }
};
Tile.prototype.animOver = function(e) {
    var t = 4;
    e.k++;
    var n = e.k;
    var r = e.ctx;

    var i = e.animOffset;
    var s = e.canvas;
    r.clearRect(0, 0, s.width, s.height);
    r.beginPath();
    r.moveTo(e.pointsArr[0].x, e.pointsArr[0].y);
    for (var o = 1; o < e.pointsArr.length; o++) {
        r.lineTo(e.pointsArr[o].x, e.pointsArr[o].y)
    }
    r.fillStyle = "rgba(" + e.overColor + "," + e.animOpacity + ")";

    r.fill();
    if (n > t * 12) {
        n = 0;
        window.clearInterval(e.animInterval)
    }
};
Tile.prototype.out = function(e, t) {
    if (isCanvas) {
        this.k = 0;
        this.canvas = $("a[date-id=" + this.id + "] canvas")[0];
        var n = this.canvas;
        this.animOpacity = 1;
        this.ctx = n.getContext("2d");
        window.clearInterval(this.animInterval);
        if (e < this.width / 2 && t < this.height / 2) {
            this.pointsArr = [new Point(0, 0, 0, 0, 1), new Point(this.width, 0, 0, 0, 6 + Math.round(Math.random() * 3)), new Point(this.width, this.height, 0, 0, 3 + Math.round(Math.random() * 2)), new Point(0, this.height, 0, 0, 6 + Math.round(Math.random() * 3)), new Point(0, 0, 0, 0, 1)]
        }
        if (e >= this.width / 2 && t < this.height / 2) {
            this.pointsArr = [new Point(this.width, 0, this.width, 0, 1), new Point(0, 0, this.width, 0, 6 + Math.round(Math.random() * 3)), new Point(0, this.height, this.width, 0, 3 + Math.round(Math.random() * 2)), new Point(this.width, this.height, this.width, 0, 6 + Math.round(Math.random() * 3)), new Point(this.width, 0, this.width, 0, 1)]
        }
        if (e >= this.width / 2 && t >= this.height / 2) {
            this.pointsArr = [new Point(this.width, this.height, this.width, this.height, 1), new Point(0, this.height, this.width, this.height, 6 + Math.round(Math.random() * 3)), new Point(0, 0, this.width, this.height, 3 + Math.round(Math.random() * 2)), new Point(this.width, 0, this.width, this.height, 6 + Math.round(Math.random() * 3)), new Point(this.width, this.height, this.width, this.height, 1)]
        }
        if (e < this.width / 2 && t >= this.height / 2) {
            this.pointsArr = [new Point(0, this.height, 0, this.height, 1), new Point(0, 0, 0, this.height, 6 + Math.round(Math.random() * 3)), new Point(this.width, 0, 0, this.height, 3 + Math.round(Math.random() * 2)), new Point(this.width, this.height, 0, this.height, 6 + Math.round(Math.random() * 3)), new Point(0, this.height, 0, this.height, 1)]
        }
        var r = this;
        this.animInterval = window.setInterval(function() {
            r.animOut(r)
        }, 20)
    }
};
Tile.prototype.animOut = function(e) {
    var t = 4;
    e.k++;
    var n = e.k;
    var r = e.ctx;
    var i = e.animOffset;
    var s = e.canvas;
    r.clearRect(0, 0, s.width, s.height);
    r.beginPath();
    r.moveTo(e.pointsArr[0].x, e.pointsArr[0].y);
    for (var o = 1; o < e.pointsArr.length; o++) {
        r.lineTo(e.pointsArr[o].x, e.pointsArr[o].y)
    }
    r.fillStyle = "rgba(" + e.overColor + "," + e.animOpacity + ")";
    r.fill();
    if (n > t * 10) {
        n = 0;
        r.clearRect(0, 0, s.width, s.height);
        window.clearInterval(e.animInterval)
    }
};

var Point = function(e, t, n, r, i) {
    this.x = e;
    this.y = t;
    this.smooth = i;
    this.fx = n;
    this.fy = r;
    var s = this;
    this.pointInterval = window.setInterval(function() {
        s.smoothTo(s)
    }, 20)
};
Point.prototype.smoothTo = function(e) {
    e.x += (e.fx - e.x) / e.smooth;
    e.y += (e.fy - e.y) / e.smooth;
    if (Math.abs(e.x - e.fx) < 0 && Math.abs(e.y - e.fy) < 0) {
        window.clearInterval(e.pointInterval)
    }
};
Point.prototype.getPosition = function() {
    return {
        x: this.x,
        y: this.y
    }
};
var tile = 248;
var tilesArr = [];
var isCanvas = true;

$(window).load(function() {

    var canvasSupport = function() { //是否支持canvas
        return document.createElement('canvas').getContext;
    }

    var getPositon = function(obj) {
        var postion = obj.position();
        return postion;
    }

    var getColor = function(obj) {
        return obj.attr('data-rel');
    }

    var getCss = function(obj, objimg) { //设置样式
        obj.css({
            'position': 'absolute',
            'left': getPositon(objimg).left,
            'top': getPositon(objimg).top,
            'width': objimg.width(),
            'height': objimg.height(),
            'background-color': 'rgb(' + getColor(objimg) + ')',
            'opacity': '0.999'
        });
        return obj;

    }

    var getCanvasPo = function(e, obj) {
        if (e.offsetX == undefined) { //Firefox         
            xpos = e.pageX - obj.find('img[data-rel]').offset().left;
            ypos = e.pageY - obj.find('img[data-rel]').offset().top;
        } else {
            xpos = e.offsetX;
            ypos = e.offsetY;
        }
    }

   
    function init() {
        $('a[date-id]').each(function(i) {
            var _this = $(this);
            var id = _this.attr('date-id');
            var overbg = _this.children('img').attr('data-rel');
            var p = [];
            var i = i;
            var num = 3 + Math.round(Math.random() * 12);
            p[i] = new Tile(id, num, {
                x: 0,
                y: 0
            }, {
                width1: _this.width(),
                height1: _this.height(),
                url: "",
                over: overbg,
                content: "",
                color: "",
                bg: ""
            });

            // var docWidth=$(document).width();
            // $(window).resize(function(event) {
            //    docWidth=$(document).width();
            // });




            $('#kk' + i).bind({ //hover
                mouseenter: function(e) {
                    
                    var that = $(this);
                    var objimg = that.find('img[data-rel]');
                    var cover = that.find('.cover');

                    if (canvasSupport()) {
                        getCss(cover, objimg).css('background-color', 'transparent').fadeIn(0).find('.box,.box h3,.box p,img').show(300);
                        var width = that.children('img').width()-2;
                        var height = that.children('img').height()-2;
                        getCanvasPo(e, that);
                        p[i].over(xpos, ypos, width, height);

                    } else {
                        getCss(cover, objimg).fadeIn(800).find('.box').show(300);
                    }

                },
                mouseleave: function(e) {
                    
                    var that = $(this);
                    if (canvasSupport()) {
                        var coverImg = that.find('.cover img');
                        var width = coverImg.width();
                        var height = coverImg.height();
                        getCanvasPo(e, that);
                        p[i].out(xpos, ypos, width, height);
                        that.find('.box h3,.box p,.cover img').hide(0);
                    } else {
                        that.find('.cover,.box').hide(0);
                    }

                }
            });
        });
    }

    init();
});