!function(a) {
    var b = function(b) {
        var c = b.querySelector(".addImage")
          , d = b.querySelector(".removeImage")
          , e = b.querySelector(".box-container")
          , f = function() {
            var b = e.querySelectorAll(".box")
              , c = b.length
              , d = b[0].cloneNode(!0)
              , f = d.querySelector("span")
              , g = d.querySelector('input[type="file"]')
              , h = d.querySelector("label")
              , i = d.querySelector('input[type="text"]');
            g.setAttribute("id", "Images_" + c + "__File"),
            g.setAttribute("name", "Images[" + c + "].File"),
            h.setAttribute("for", "Images_" + c + "__Description"),
            i.setAttribute("id", "Images_" + c + "__Description"),
            i.setAttribute("name", "Images[" + c + "].Description"),
            f.innerText = "Add image",
            g.value = "",
            i.value = "",
            e.appendChild(d),
            d.querySelector(".-u-imageUpload").classList.remove("hasFile"),
            a.imageUpload(d.querySelectorAll(".-u-imageUpload"));
            var j = document.querySelector("body");
            window.scrollTo(0, j.clientHeight)
        }
          , g = function(a) {
            a.preventDefault(),
            a.stopPropagation(),
            f()
        }
          , h = function(a) {
            a.preventDefault(),
            a.stopPropagation();
            var b = e.querySelectorAll(".box");
            b.length > 2 && b[b.length - 1].parentNode.removeChild(b[b.length - 1])
        };
        null != c && c.addEventListener("click", g),
        null != d && d.addEventListener("click", h)
    };
    a.addImage = function(a) {
        for (var c = 0; c < a.length; c++)
            b(a[c])
    }
}(window.imgsli || (window.imgsli = {})),
function(a) {
    var b = function(a) {
        var b = a.querySelector("input")
          , c = a.querySelector("img")
          , d = (a.querySelector("span"),
        a.querySelector("button"))
          , e = function() {
            if (b.files.length > 0)
                if (g(a, b.files[0].name),
                FileReader && null != c) {
                    var d = new FileReader;
                    d.onload = function() {
                        f(d.result, function(b) {
                            c.src = b,
                            a.classList.add("hasFile")
                        })
                    }
                    ,
                    d.readAsDataURL(b.files[0])
                } else
                    a.classList.add("hasFile");
            else
                a.classList.remove("hasFile")
        }
          , f = function(a, b) {
            var c = new Image;
            c.onload = function() {
                var a = document.createElement("canvas")
                  , d = a.getContext("2d")
                  , e = 400
                  , f = c.width
                  , g = c.height;
                f > g ? (g = g / f * e,
                f = e) : (f = f / g * e,
                g = e),
                a.width = f,
                a.height = g,
                d.drawImage(c, 0, 0, f, g),
                b(a.toDataURL("image/png")),
                c = null,
                a = null
            }
            ,
            c.src = a
        }
          , g = function(a, b) {
            var c = a.parentNode.querySelector('input[type="text"]')
              , d = b.substring(0, b.lastIndexOf(".")).replace("_", " ");
            null != c && (c.value = d)
        }
          , h = function(a) {
            a.stopPropagation()
        }
          , i = function(a) {
            b.click()
        }
          , j = function(d) {
            d.preventDefault(),
            d.stopPropagation(),
            null != c && (c.src = ""),
            b.value = "",
            a.classList.remove("hasFile"),
            a.parentNode.querySelector('input[type="text"]').value = null
        };
        b.addEventListener("change", e),
        b.addEventListener("click", h),
        a.addEventListener("click", i),
        d.addEventListener("click", j)
    };
    a.imageUpload = function(a) {
        for (var c = 0; c < a.length; c++)
            b(a[c])
    }
}(window.imgsli || (window.imgsli = {})),
function(a) {
    var b = function(a, b, c) {
        var d = a.querySelector(".box")
          , e = a.querySelector(".slider")
          , f = a.querySelector(".before")
          , g = a.querySelector(".after")
          , h = a.querySelector(".beforeSelect")
          , i = a.querySelector(".afterSelect")
          , j = a.querySelectorAll("img")
          , k = !1
          , l = !1
          , m = function(a) {
            o(f.querySelector("img"), a.currentTarget.value)
        }
          , n = function(a) {
            o(g, a.currentTarget.value)
        }
          , o = function(a, d) {
            var e = b[d];
            a.setAttribute("src", e.id),
            history.replaceState({}, null, c + "/" + h.value + "/" + i.value),
            v()
        }
          , p = function(a) {
            if (k) {
                var b = a.pageX;
                if (a.touches && 1 === a.touches.length && (b = a.touches[0].pageX),
                null != b) {
                    a.preventDefault();
                    var c = d.getBoundingClientRect().left
                      , g = Math.max(b - c, 0)
                      , h = parseInt(window.getComputedStyle(d).width);
                    g < 0 || h - g < 1 || (e.style.left = Math.min(h, g) + "px",
                    f.style.right = Math.min(h, h - g) + "px")
                }
            }
        }
          , q = function(b) {
            k || null != b.target.closest(".controls") || null != b.target.closest("select") || null == b.pageX && (null == b.touches || b.touches.length > 1) || (b.preventDefault(),
            k = !0,
            a.classList.add("sliding"),
            p(b))
        }
          , r = function(b) {
            k && (b.preventDefault(),
            k = !1,
            a.classList.remove("sliding"))
        }
          , s = function(a, b) {
            b !== !0 && (e.style.left = "",
            f.style.right = "")
        }
          , t = function(b) {
            b.preventDefault(),
            b.stopPropagation(),
            (a.requestFullscreen || a.mozRequestFullScreen || a.msRequestFullscreen || a.webkitRequestFullScreen).call(a)
        }
          , u = function(a) {
            a.preventDefault(),
            a.stopPropagation(),
            (document.exitFullscreen || document.msExitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen).call(document)
        }
          , v = function() {
            setTimeout(s, 100),
            setTimeout(s, 500),
            setTimeout(s, 1e3),
            setTimeout(s, 2e3)
        }
          , w = function() {
            l = (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) === a,
            v()
        }
          , x = function(b) {
            b.preventDefault(),
            b.stopPropagation(),
            a.classList.add("zoom")
        }
          , y = function(b) {
            b.preventDefault(),
            b.stopPropagation(),
            a.classList.remove("zoom")
        }
          , z = 1
          , A = 0
          , B = 0
          , C = 0
          , D = 0
          , E = function(a) {
            A = a.pageX - d.offsetLeft,
            B = a.pageY - d.offsetTop
        }
          , F = function(a) {
            a.preventDefault();
            var b = C > 0 ? C : A
              , c = D > 0 ? D : B
              , e = 1 / d.clientWidth * b
              , f = 1 / d.clientHeight * c;
            C = A,
            D = B,
            z += a.deltaY * -.005,
            z = Math.min(Math.max(1, z), 10);
            for (var g = 0; g < j.length; g++)
                z > 1 ? (j[g].style.imageRendering = "pixelated",
                j[g].style.transform = "scale(" + z + ")",
                j[g].style.transformOrigin = 100 * e + "% " + 100 * f + "%",
                j[g].style.maxWidth = "unset") : (j[g].style.imageRendering = null,
                j[g].style.transform = null,
                j[g].style.transformOrigin = null,
                j[g].style.maxWidth = null)
        };
        a.addEventListener("mousedown", q),
        window.addEventListener("mouseup", r),
        window.addEventListener("mousemove", p),
        a.addEventListener("touchstart", q, {
            passive: !0
        }),
        window.addEventListener("touchend", r),
        window.addEventListener("touchmove", p),
        document.addEventListener("webkitfullscreenchange", w),
        document.addEventListener("mozfullscreenchange", w),
        document.addEventListener("fullscreenchange", w),
        d.addEventListener("wheel", F),
        d.addEventListener("mousemove", E),
        a.querySelector(".zoom-in") && a.querySelector(".zoom-in").addEventListener("click", x),
        a.querySelector(".zoom-out") && a.querySelector(".zoom-out").addEventListener("click", y),
        a.querySelector(".fullscreen") && a.querySelector(".fullscreen").addEventListener("click", t),
        a.querySelector(".fullscreen-exit") && a.querySelector(".fullscreen-exit").addEventListener("click", u);
        for (var G = 0; G < j.length; G++)
            j[G].addEventListener("load", s);
        null != h && h.addEventListener("change", m),
        null != i && i.addEventListener("change", n),
        window.addEventListener("resize", s),
        window.addEventListener("orientationchange", function() {
            setTimeout(s, 500)
        }),
        s()
    };
    a.slider = function(a, c, d) {
        for (var e = 0; e < a.length; e++)
            b(a[e], c, d)
    }
}(window.imgsli || (window.imgsli = {})),
this.Element && function(a) {
    a.matches = a.matches || a.matchesSelector || a.webkitMatchesSelector || a.msMatchesSelector || function(a) {
        for (var b = this, c = (b.parentNode || b.document).querySelectorAll(a), d = -1; c[++d] && c[d] != b; )
            ;
        return !!c[d]
    }
}(Element.prototype),
this.Element && function(a) {
    a.closest = a.closest || function(a) {
        for (var b = this; b.matches && !b.matches(a); )
            b = b.parentNode;
        return b.matches ? b : null
    }
}(Element.prototype);
for (var i = 0; i < window.scripts.length; i++)
    window.scripts[i]();
