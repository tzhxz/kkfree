!function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.VueSocialSharing = e() : t.VueSocialSharing = e()
}("undefined" != typeof self ? self : this, (function () {
    return function (t) {
        var e = {};

        function i(r) {
            if (e[r]) return e[r].exports;
            var n = e[r] = {i: r, l: !1, exports: {}};
            return t[r].call(n.exports, n, n.exports, i), n.l = !0, n.exports
        }

        return i.m = t, i.c = e, i.d = function (t, e, r) {
            i.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: r})
        }, i.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
        }, i.t = function (t, e) {
            if (1 & e && (t = i(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (i.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t) for (var n in t) i.d(r, n, function (e) {
                return t[e]
            }.bind(null, n));
            return r
        }, i.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return i.d(e, "a", e), e
        }, i.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, i.p = "", i(i.s = 0)
    }([function (t, e, i) {
        t.exports = i(1)
    }, function (t, e, i) {
        "use strict";
        i.r(e), i.d(e, "ShareNetwork", (function () {
            return o
        }));
        var r = {
            baidu: "http://cang.baidu.com/do/add?iu=@u&it=@t",
            buffer: "https://bufferapp.com/add?text=@t&url=@u",
            email: "mailto:?subject=@t&body=@u%0D%0A@d",
            evernote: "https://www.evernote.com/clip.action?url=@u&title=@t",
            facebook: "https://www.facebook.com/sharer/sharer.php?u=@u&title=@t&description=@d&quote=@q&hashtag=@h",
            flipboard: "https://share.flipboard.com/bookmarklet/popout?v=2&url=@u&title=@t",
            hackernews: "https://news.ycombinator.com/submitlink?u=@u&t=@t",
            instapaper: "http://www.instapaper.com/edit?url=@u&title=@t&description=@d",
            line: "http://line.me/R/msg/text/?@t%0D%0A@u%0D%0A@d",
            linkedin: "https://www.linkedin.com/sharing/share-offsite/?url=@u",
            messenger: "fb-messenger://share/?link=@u",
            odnoklassniki: "https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=@u&st.comments=@t",
            pinterest: "https://pinterest.com/pin/create/button/?url=@u&media=@m&description=@t",
            pocket: "https://getpocket.com/save?url=@u&title=@t",
            quora: "https://www.quora.com/share?url=@u&title=@t",
            reddit: "https://www.reddit.com/submit?url=@u&title=@t",
            skype: "https://web.skype.com/share?url=@t%0D%0A@u%0D%0A@d",
            sms: "sms:?body=@t%0D%0A@u%0D%0A@d",
            stumbleupon: "https://www.stumbleupon.com/submit?url=@u&title=@t",
            telegram: "https://t.me/share/url?url=@u&text=@t%0D%0A@d",
            tumblr: "https://www.tumblr.com/share/link?url=@u&name=@t&description=@d",
            twitter: "https://twitter.com/intent/tweet?text=@t&url=@u&hashtags=@h@tu",
            viber: "viber://forward?text=@t%0D%0A@u%0D%0A@d",
            vk: "https://vk.com/share.php?url=@u&title=@t&description=@d&image=@m&noparse=true",
            weibo: "http://service.weibo.com/share/share.php?url=@u&title=@t&pic=@m",
            whatsapp: "https://api.whatsapp.com/send?text=@t%0D%0A@u%0D%0A@d",
            wordpress: "https://wordpress.com/press-this.php?u=@u&t=@t&s=@d&i=@m",
            xing: "https://www.xing.com/social/share/spi?op=share&url=@u&title=@t",
            yammer: "https://www.yammer.com/messages/new?login=true&status=@t%0D%0A@u%0D%0A@d"
        }, n = "undefined" != typeof window ? window : null;
        var o = {
            name: "ShareNetwork",
            props: {
                network: {type: String, required: !0},
                url: {type: String, required: !0},
                title: {type: String, required: !0},
                description: {type: String, default: ""},
                quote: {type: String, default: ""},
                hashtags: {type: String, default: ""},
                twitterUser: {type: String, default: ""},
                media: {type: String, default: ""},
                tag: {type: String, default: "a"},
                popup: {
                    type: Object, default: function () {
                        return {width: 626, height: 436}
                    }
                }
            },
            data: function () {
                return {popupTop: 0, popupLeft: 0, popupWindow: void 0, popupInterval: null}
            },
            computed: {
                networks: function () {
                    return this.$SocialSharing ? this.$SocialSharing.options.networks : r
                }, key: function () {
                    return this.network.toLowerCase()
                }, rawLink: function () {
                    var t = navigator.userAgent.toLowerCase();
                    return "sms" === this.key && (t.indexOf("iphone") > -1 || t.indexOf("ipad") > -1) ? this.networks[this.key].replace(":?", ":&") : this.networks[this.key]
                }, shareLink: function () {
                    var t = this.rawLink;
                    return "twitter" === this.key && (this.hashtags.length || (t = t.replace("&hashtags=@h", "")), this.twitterUser.length || (t = t.replace("@tu", ""))), t.replace(/@tu/g, "&via=" + encodeURIComponent(this.twitterUser)).replace(/@u/g, encodeURIComponent(this.url)).replace(/@t/g, encodeURIComponent(this.title)).replace(/@d/g, encodeURIComponent(this.description)).replace(/@q/g, encodeURIComponent(this.quote)).replace(/@h/g, this.encodedHashtags).replace(/@m/g, encodeURIComponent(this.media))
                }, encodedHashtags: function () {
                    return "facebook" === this.key && this.hashtags.length ? "%23" + this.hashtags.split(",")[0] : this.hashtags
                }
            },
            render: function (t) {
                var e = this;
                if (!this.networks.hasOwnProperty(this.key)) throw new Error("Network " + this.key + " does not exist");
                var i = {
                    class: "share-network-" + this.key, on: {
                        click: function () {
                            return e["http" === e.rawLink.substring(0, 4) ? "share" : "touch"]()
                        }
                    }
                };
                return "a" === this.tag && (i.attrs = {href: "javascript:void(0)"}), t(this.tag, i, this.$slots.default)
            },
            methods: {
                resizePopup: function () {
                    var t = n.innerWidth || document.documentElement.clientWidth || n.screenX,
                        e = n.innerHeight || document.documentElement.clientHeight || n.screenY,
                        i = t / n.screen.availWidth;
                    this.popupLeft = (t - this.popup.width) / 2 / i + (void 0 !== n.screenLeft ? n.screenLeft : n.screenX), this.popupTop = (e - this.popup.height) / 2 / i + (void 0 !== n.screenTop ? n.screenTop : n.screenY)
                }, share: function () {
                    var t = this;
                    this.resizePopup(), this.popupWindow && this.popupInterval && (clearInterval(this.popupInterval), this.popupWindow.close(), this.emit("change")), this.popupWindow = n.open(this.shareLink, "sharer-" + this.key, ",height=" + this.popup.height + ",width=" + this.popup.width + ",left=" + this.popupLeft + ",top=" + this.popupTop + ",screenX=" + this.popupLeft + ",screenY=" + this.popupTop), this.popupWindow && (this.popupWindow.focus(), this.popupInterval = setInterval((function () {
                        t.popupWindow && !t.popupWindow.closed || (clearInterval(t.popupInterval), t.popupWindow = null, t.emit("close"))
                    }), 500), this.emit("open"))
                }, touch: function () {
                    window.open(this.shareLink, "_blank"), this.emit("open")
                }, emit: function (t) {
                    this.$root.$emit("share_network_" + t, this.key, this.url), this.$emit(t, this.key, this.url)
                }
            }
        };
        e.default = {
            install: function (t, e) {
                t.component(o.name, o), t.prototype.$SocialSharing = {options: {networks: e && e.hasOwnProperty("networks") ? Object.assign(r, e.networks) : r}}
            }
        }
    }])
}));
