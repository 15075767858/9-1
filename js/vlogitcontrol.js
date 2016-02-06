 
var CONFIG = CONFIG || {};

var INTRO = {
    intropaper: null,
    /* init: function() {
     this.intropaper = new Raphael("animintro", CONFIG.currentW, CONFIG.currentH),
     $("#animintro").css({
     width: CONFIG.currentW,
     height: CONFIG.currentH
     }),
     $("#animintro").show();
     var a = INTRO.intropaper.path("M 0," + CONFIG.currentH + " L 0," + CONFIG.currentH).attr({
     fill: "#111"
     }),
     b = INTRO.intropaper.circle(CONFIG.currentW / 2, CONFIG.currentH / 2, 0).attr({
     fill: "#111",
     stroke: "#111"
     }),
     c = INTRO.intropaper.circle(CONFIG.currentW / 2, CONFIG.currentH / 2, 0).attr({
     fill: "#e7e7e7",
     stroke: "none"
     });
     a.animate({
     path: "M 0," + CONFIG.currentH + " L " + CONFIG.currentW / 2 + "," + CONFIG.currentH / 2
     },
     1e3, ">",
     function() {
     function d() {
     var a = b.clone().attr({
     r: radiusintro,
     opacity: 0,
     fill: "none",
     "stroke-width": 1
     });

     a.attr({
     opacity: 1
     }).animate({
     r: radiusintro + 10,
     "stroke-width": 41
     },
     1e3, ">",
     function() {}),
     radiusintro += 40,
     radiusintro < CONFIG.currentW / 2 + 150 ? setTimeout(function() {
     d()
     },
     50) :
     setTimeout(function() {
     function a() {
     var c = b.clone().attr({
     transform: "r" + rot + ",151,156t0,-10"
     });
     c.animate({
     transform: "r" + rot + ",151,156t0,0s0.9",
     opacity: 1
     },
     2e3, "elastic",
     function() {}),
     350 > rot ? (setTimeout(function() {
     a()
     },
     20), rot += 10) : ($("body").css("background", "#111"), INTRO.intropaper.clear())
     }

     logodeco = new Raphael("logodeco", 390, 390);
     var b = logodeco.path("M 149,23 L 153,23 L 151,30 z").attr({
     fill: "#ccc",//小点
     opacity: 0,
     stroke: "none"
     });
     a(),
     $("#logo h1").fadeIn(1500,
     function() {
     $("#share").fadeIn(1e3,
     function() {}),
     $("#aboutmenu").fadeIn(1e3,
     function() {}),
     setTimeout(function() {
     VL.start()
     },
     1e3)
     })
     },
     1400)
     }

     INTRO.arcouno(),
     a.animate({
     path: "M " + CONFIG.currentW / 2 + "," + CONFIG.currentH / 2 + "L " + CONFIG.currentW / 2 + "," + CONFIG.currentH / 2
     },
     1e3, ">",
     function() {}),
     b.animate({
     r: "121"
     },
     1800, ">",
     function() {}),
     setTimeout(function() {
     c.animate({
     r: "140"
     },
     1200, ">",
     function() {})
     },
     800);
     var e = b.clone();
     setTimeout(function() {
     e.animate({
     r: "142"
     },
     1200, ">",
     function() {})
     },
     1100),
     setTimeout(function() {
     d()
     },
     1100);
     })
     },*/
    init: function () {
        setTimeout(function () {
                function a() {
                    var c = b.clone().attr({
                        transform: "r" + rot + ",151,156t0,-10"
                    });
                    c.animate({
                            transform: "r" + rot + ",151,156t0,0s0.9",
                            opacity: 1
                        },
                        1500, "elastic",
                        function () {
                        }),
                        350 > rot ? (setTimeout(function () {
                                a()
                            },
                            20), rot += 10) : ($("body").css("background", "#111"))
                }

                logodeco = new Raphael("logodeco", 390, 390);
                var b = logodeco.path("M 149,23 L 153,23 L 151,30 z").attr({
                    fill: "#ccc", //小点
                    opacity: 0,
                    stroke: "none"
                });
                a(),
                    $("#logo h1").fadeIn(300,
                        function () {
                            $("#share").fadeIn(1e3,
                                function () {
                                }),
                              //  $("#aboutmenu").fadeIn(1e3,
//                                    function () {
//                                    }),
                                setTimeout(function () {
                                        VL.start()
                                    },
                                    1e3)
                        })
            },
            200)

    },
    arcouno: function () {
        var a = INTRO.intropaper.path(INTRO.arc([CONFIG.currentW / 2, CONFIG.currentH / 2], 120, 120, 320)).attr({
            stroke: "#111",
            "stroke-width": 1
        });
        a.attr({
            transform: "r0," + CONFIG.currentW / 2 + "," + CONFIG.currentH / 2
        }).animate({
                transform: "r360," + CONFIG.currentW / 2 + "," + CONFIG.currentH / 2
            },
            4e3)
    },
    arc: function (a, b, c, d) {
        for (angle = c, coords = INTRO.toCoords(a, b, angle), path = "M " + coords[0] + " " + coords[1]; d >= angle;) coords = INTRO.toCoords(a, b, angle),
            path += " L " + coords[0] + " " + coords[1],
            angle += 1;
        return path
    },
    toCoords: function (a, b, c) {
        var d = c / 180 * Math.PI,
            e = a[0] + Math.cos(d) * b,
            f = a[1] + Math.sin(d) * b;
        return [e, f]
    }
};
Raphael.fn.vlogitWheel = function (a, b, c) {


    function d() {

        if (t == loadingTotal)
            if (g(c, q), VL.urldbAll.push(q), 2 == c) {
                VL.logo3 = m.circle(808, 506, 347).attr({
                    fill: "url(http://vlog.it/img/340.png)",
                    stroke: "none"
                }).attr({
                    opacity: 0
                }),
                    imgAll = q;
                {
                    m.vlogitWheel(340, VL.sourceArr.slice(15, 31), 1)
                }
            } else if (1 == c) {
                VL.logo2 = m.circle(807, 507, 247).attr({
                    fill: "url(http://vlog.it/img/240.png)",
                    stroke: "none"
                }).attr({
                    opacity: 0
                }),
                    imgAll = imgAll.concat(q);
                {
                    m.vlogitWheel(240, VL.sourceArr.slice(0, 14), 0)
                }
            } else 0 == c && (imgAll = imgAll.concat(q), i());
        else setTimeout(d, 50)
    }

    function e() {
        var a = this.title,
            b = this.author,
            u = this.id,
            c = m.image(this.src, 690, v, 210, 150).attr({
                opacity: 0
            }).click(

            );

        c.node.id = this.id,
            q.push(c),
            t++
    }

    function f() {
        var a = (this.title, this.author, m.image("http://vlog.it/img/placeholder.jpg", 690, v, 210, 150).attr({//未加载成功图片
            opacity: 0
        }));
        a.node.id = this.id,
            q.push(a),
            t++
    }


    function g(a, b) {
        slicepath = [m.path("M,800,500,L,852.4050241495155,268.01730107636234,A,240,240,0,0,0,747.5949758504846,268.01730107636234,z").attr({
            stroke: "none"
        }), m.path("M,800,500,L,865.6571175451469,168.52450985817995,A,340,340,0,0,0,734.3428824548531,168.52450985817995,z").attr({
            stroke: "none"
        }), m.path("M,800,500,L,875.4051981734494,67.68458867462846,A,440,440,0,0,0,724.5948018265507,67.68458867462846,z").attr({
            stroke: "none"
        })];
        var c = document.createElementNS(r, "clipPath");
        c.setAttribute("id", "clip_ring" + a),
            s.appendChild(c);
        for (var d = 0; d < b.length; d++) {
            var e = angleplus * d;
            b[d].rotate(e, 800, 500),
                b[d].node.setAttribute("clip-path", "url(#clip_ring" + a + ")"),
                b[d].node.style.cursor = "pointer",
                b[d].attr({
                    opacity: 0
                }),
                _this = b[d];
            b[d].hover(function (_this) {
                },
                function () {
                }),
                c.appendChild(slicepath[a].node),
                h(b[d], angleplus, d);
        }
        for (var ii = 0; ii < b.length; ii++) {
            var oImg = b[ii];
            var oImgAttrs = oImg.attrs;
            var oImgabs = oImg.node.attributes[10];

            var oRect = m.rect(oImgAttrs.x, oImgAttrs.y, oImgAttrs.width, oImgAttrs.height);
			
			   oRect.attr({
                transform: b[ii].transform,
                opacity: 0
            });
            _this = oRect;
            oRect.onload = function(){setTimeout('xuanzhuan(_this, b, ii)',500)}
			
			
                  oRect.rotate(e, 800, 500),
                oRect.attr({
                 
                    stroke: "#121212",
                    src: oImg.attrs.src,
					               fill: '#000000'    //经过颜色
					   
                });
				
            oRect.node.setAttribute("clip-path", "url(#clip_ring" + a + ")");
            oRect.node.setAttribute("class", "orect");


            oRect.click( 
                function () {

                    var oIfr = $("#pcifr");


                    oIfr.stop().delay(150).animate({
                        top: "0px"
                    }, {
                        duration: 500,
                        easing: "easeInExpo",
                        complete: function () {
                        }
                    });
                    //$("body").append(oIfr);
                    oIfr.attr({
                        src: "bitpcshow.html?src=" + this.attrs.src,
                    });

                    $('.closedtbt').fadeIn(3000).show().click(function () {
                        $('.closedtbt').fadeOut(3000).hide();

                        oIfr.stop().animate({
                            top: "100%"
                        }, {
                            duration: 500,
                            easing: "easeInQuint",
                            complete: function () {
                            }
                        });


                    });

                }
            );
         
            var x, y, currentX, currentY, oDiv = $("#vlogitwheel"),
                iAngle, iCurAng, jdc, wwxz, iswwxz = false;

            oRect.mouseover(function () {
               
                    if (!iswwxz) {
                        iswwxz = true;
                        wwxz = setInterval(function () {
                            oDiv.css({rotate: '+=' + 0.2});
                        }, 50);
						this.attr({opacity:0.5});
                    }
                }
            );    
			
		 
			
            oRect.mouseout(function () {
                this.attr({opacity:0});
                clearInterval(wwxz);
                iswwxz = false;
            });
            oDiv.css({
                transform: "rotate(0deg)"
            });
            function onstart() {//鼠标转动圆环修改
                x = (document.documentElement.offsetWidth || document.body.offsetWidth) / 2;
                y = (document.documentElement.offsetHeight || document.body.offsetHeight) / 2;
                x1 = arguments[0];
                y1 = arguments[1];
                if (x1 >= x)
                    iCurAng = Math.atan((y1 - y) / (x1 - x)) * 180 / Math.PI - 90;
                else
                    iCurAng = Math.atan((y1 - y) / (x1 - x)) * 180 / Math.PI + 90;//微微转动？
					
            }
			
 
            function onmove() {

                x1 = arguments[2];
                y1 = arguments[3];
              
                    iAngle = Math.atan((y1 - y) / (x1 - x)) * 180 / Math.PI - 90;
                 
                jdc = Math.ceil(iCurAng - iAngle);
            
                    iCurAng = Math.atan((y1 - y) / (x1 - x)) * 180 / Math.PI - 90;
                 
                oDiv.css({rotate: '-=' + jdc});
                /*            oDiv.css({
                 transform: "rotate(" + iAngle + "deg)"
                 });*/
            }
			
			
 
						   /* 
				rotate([angle] [px,py])
				$(this).rotate({animateTo: 0});  弧长除以半径再乘以360度，得到的就是圆心角的度数。
				角度 = 弧度*180/Math.PI;  弧度 = 角度*Math.PI/180;[/code] 
				*/ 	
				
 
			
			

            function onend() {//拖动圆环
                jdc2 = jdc * 8;
                var IntervalID = setInterval(function () { 
					 
                    if ( jdc2 >= -1 && jdc2 <= 360 ) {
                        clearInterval(IntervalID);
                    } else {
						
						
                        oDiv.css({
                            transform: "rotate(" + jdc2 + "deg)"
                        });
						jdc2 *= 0.9; 				   
                         
                    }
                }, 20); 
            }
            oRect.drag(onmove, onstart, onend, this, this, this);
            function lerpAngle(a, b, t) {
                var d = b - a;
                if (d > Math.PI)
                    d = d - 2 * Math.PI;
                if (d < -Math.PI)
                    d = d + 2 * Math.PI;
                return a + d * t;
            }

            h(oRect, angleplus, ii);
            if (b.length == 14) {
                aNewB.push(b[ii]);
                aNewB.push(oRect);
            }
            if (b.length == 16) {
                aNew32.push(b[ii]);
                aNew32.push(oRect);
            }
            if (b.length == 18) {
                aNew36.push(b[ii]);
                aNew36.push(oRect);
            }

        }
    }
	
	
	/*	 z.mouseover(function(){
                this.animate({ 'stroke-width': 50, opacity: .75 }, 1000, 'elastic');
                if(Raphael.type != 'VML') //solves IE problem
          this.toFront();
        title.animate({ opacity: 0 }, 500, '>', function(){
          this.attr({ text: text + 'n' + value + '%' }).animate({ opacity: 1 }, 500, '<');
        });
            }).mouseout(function(){
        this.animate({ 'stroke-width': 26, opacity: 1 }, 1000, 'elastic');
            }); 模仿内容*/

/* butt2[2].click(function () { angle += 90; img.animate({transform: "r" + angle}, 1000, "<>");  })  模仿*/


/*this.transform = function (dx, dy) {  
    switch (this.angle) {  
        case 90:  
            this.picObj.transform("T" + ((dx - this.xBase) + this.remarkHeightNoRotate) + "," + (dy - this.yBase) + "r90," + this.xBase + "," + this.yBase);  
            break;  
        case 180:  
            this.picObj.transform("T" + ((dx - this.xBase) + this.remarkWidthNoRotate) + "," + ((dy - this.yBase) + this.remarkHeightNoRotate) + "r180," + this.xBase + "," + this.yBase);  
            break;  
        case 270:  
            this.picObj.transform("T" + (dx - this.xBase) + "," + ((dy - this.yBase) + this.remarkWidthNoRotate) + "r270," + this.xBase + "," + this.yBase);  
            break;  
        case 0:  
            this.picObj.transform("T" + (dx - this.xBase) + "," + (dy - this.yBase) + "r0," + this.xBase + "," + this.yBase);                     
;  
    }  
	
	代码注释：

dx, dy为鼠标移动到的新的坐标值，

this.xBase和this.yBase为图片最初的坐标，

this.remarkHeightNoRotate和this.remarkWidthNoRotate为图片未旋转前的高度和宽度。

this.angle为图片已经旋转过的角度，

this.picObj为raphael绘制的图片对象。*/

    function xuanzhuan(_this, b, ii) {//一开始旋转？？
        _this.animate({ transform: "r" + (360 + (360 / b.length) * ii) + ",800,500" }, 1);
        //alert('chengma');
    }

    function eachAttr(oObj) {
        for (zz in oObj) {

        }
    }

    function h(a, b, d) {
        //alert(b+"  "+d);
        /*if (1 == c);
         else;*/
        a.attr({
            transform: "r" + b * d + ",800,500t0,140"
        })
    }

    function i() {//内层


           function a() {
           //自己删 b == c.length ? console.log(true) : console.log(false);
            if (b == c.length) {
                j(),
                    VL.logo2.attr({
                        opacity: 1
                    });
                for (var e = 0; e < c.length; e++) {
                    /*这个动画是设置圆盘转圈*/
                   //自己删除 console.log(d + " " + e);
                    c[e].animate({
                        transform: "r" + ((360 + d * e)-300) + ",800,500"
                    }, 9000);
                    aNewB[e * 2 + 1].animate({//添加
                        transform: "r" + ((360 + d * e)-300) + ",800,500"//添加
                    }, 9000);//添加
                }
            } else {

                aNewB[b * 2 + 1].animate({//添加鼠标经过颜色
                    transform: "r" + d * b + ",800,500t0,0"//添加
                }, 100, "<>", function () {//添加
                });//添加

                c[b].attr({
                    opacity: 1
                }).animate({
                    transform: "r" + d * b + ",800,500t0,0"
                }, 100, "<>", function () {
                    b++, a()
                }) 

            }

        }

        //

        var b = 0,
            c = VL.urldbAll[2],
            d = 360 / 14;
        a(),


            $("#logo").addClass("active");

    }

    function j() {//中间层

        for (var a = VL.urldbAll[1], b = 22.5, c = 0; c < a.length; c++) {
            c == a.length - 1 ? a[c].attr({
                opacity: 1
            }).animate({
                transform: "r" + b * c + ",800,500t0,0"
            }, 1e3, "<>", function () {
                k();
                for (var c = 0; c < a.length; c++) {
                    a[c].animate({
                        transform: "r" + ((-360 + b * c)+50) + ",800,500"
                    }, 6000);

                    aNew32[c * 2 + 1].animate({//添加
                        transform: "r" +((-360 + b * c)+50) + ",800,500"//添加
                    }, 6000);//添加

                    //
                }

            }) :
                a[c].attr({
                    opacity: 1
                }).animate({
                        transform: "r" + b * c + ",800,500t0,0"
                    },
                    1e3,
                    "<>",
                    function () {
                        VL.logo3.attr({
                            opacity: 1
                        })
                    })
        }
    }

    function k() {//外层

        for (var a = VL.urldbAll[0], b = 20, c = 0; c < a.length; c++) {
            c == a.length - 1 ?
                a[c].attr({
                    opacity: 1
                }).animate({
                        transform: "r" + b * c + ",800,500t0,0"
                    }, 1e3, "<", function () {
                        first = !1, $("#bumper").hide();
                        for (var c = 0; c < a.length; c++) {
                            a[c].animate({
                                transform: "r" + ((360 + b * c)-500) + ",800,500"
                            }, 4000);
                            aNew36[c * 2 + 1].animate({//添加
                                transform: "r" + ((360 + b * c)-500) + ",800,500"//添加
                            }, 4000);//添加
                        }
                    }
                ) :
                a[c].attr({
                    opacity: 1
                }).animate({
                        transform: "r" + b * c + ",800,500t0,0"
                    },
                    1e3, "<",
                    function () {
                    });
            aNew36[c * 2 + 1].animate({
                    transform: "r" + b * c + ",800,500t0,0"
                },
                1e3, "<",
                function () {
                });
        }
    }

    function l() {

        alert(imageAll);//添加
        $.each(imgAll,
            function () {
                this.pause()
            })
    }

    var m = this,
        n = this.set(),
        o = 0,
        p = 0,
        q = [],
        r = "http://www.w3.org/2000/svg",
        s = (document.getElementsByTagName("defs")[0],
            document.getElementsByTagName("svg")[0]),
        t = 0;
    m.canvas.id = "diskSVG";
    loadingTotal = b.length;//一开始加载
    for (var u = 0; u < b.length; u++) {
        p = null,
            angleplus = 360 / b.length;
        var v = 240 - 100 * c,
            w = new Image;
        w.onload = e,
            w.onerror = f,
            w.src = b[u].thumb,
            w.id = b[u].url,
            w.title = b[u].title,
            w.author = b[u].author
    }
    return d(),
        n
};

VL = VL || {};
VL.window = window;
var VL = {
    first: !0,
    paper: null,
    sourceArr: [],
    imgAll: [],
    urldbAll: [],
    logo2: null,
    logo3: null,
    init: function () {
        $("body").animate({
            backgroundColor: "#000"
        }, 300, function () {
        });
        INTRO.init(),
            $("#animtop").css({
                width: CONFIG.currentW,
                height: CONFIG.currentH
            }),


            /*        $("#animtop").css({
             width: CONFIG.currentW,
             height: CONFIG.currentH
             });
             $("body").animate({
             backgroundColor: "#000"
             }, 1000, function() {
             VL.start()
             });*/
            animtop = new Raphael("animtop", CONFIG.currentW, CONFIG.currentH);
    },
    start: function () {
        if (globalMenuId == "items2")
            vmvideos = vmvideos;
        if (globalMenuId == "items3")
            vmvideos = vmvideos1;
        if (globalMenuId == "items4")
            vmvideos = vmvideos2;
        if (globalMenuId == "items16")
            vmvideos = vmvideos3;

        1 == this.first ? (this.paper = new Raphael("vlogitwheel", 2e3, 1e3), this.sourceArr = vmvideos) : (response = "", this.paper.clear(), this.sourceArr = [], this.imgAll = [], this.urldbAll = [], this.sourceArr = vmvideos),

            this.paper.vlogitWheel(440, VL.sourceArr.slice(32, 51), 2)
    },
    resize: function () {
        CONFIG.currentW = $(window).width(),
            CONFIG.currentH = $(window).height()
    }
};
$("#twomenu").on("click", function () {

    $("body,body>*").animate({
        opacity: 0,
        backgroundColor: "#fff"
    }, 20, function () {
        location.reload();
    });
});
var animtop, logodeco, videoboxpos, angleone, angletwo, anglethree, sxcross, dxcross, vimeo, youp, anim3, estratto, animty, response = "",
    radiusintro = 140,
    rot = 0,
    oEmbedUrl = "http://vimeo.com/api/oembed.json";
var aNew32 = new Array();
var aNew36 = new Array();
var aNewB = new Array();
var diskDeg = 0;
var diskDt = '';
var globalMenuId = "";
 
 
 






