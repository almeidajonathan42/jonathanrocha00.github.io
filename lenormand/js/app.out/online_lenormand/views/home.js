// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('online_lenormand.views.home');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('online_lenormand.views.reading');
goog.require('online_lenormand.util.util');
online_lenormand.views.home.hue = online_lenormand.util.util.random_color();
online_lenormand.views.home.title = (function online_lenormand$views$home$title(){
var styles = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$title,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$color,online_lenormand.util.util.title_font_color(online_lenormand.views.home.hue),cljs.core.cst$kw$font_DASH_family,"Charmonman",cljs.core.cst$kw$font_DASH_size,"7vw",cljs.core.cst$kw$font_DASH_weight,"bolder"], null)], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1_SHARP_title,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(styles)], null),"Online Lenormand"], null);
});
online_lenormand.views.home.description = (function online_lenormand$views$home$description(){
var styles = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$color,online_lenormand.util.util.description_font_color(online_lenormand.views.home.hue),cljs.core.cst$kw$width,"70%",cljs.core.cst$kw$margin_DASH_top,".08em",cljs.core.cst$kw$margin_DASH_bottom,"4em",cljs.core.cst$kw$font_DASH_size,"1.4vw",cljs.core.cst$kw$font_DASH_family,"Lora",cljs.core.cst$kw$text_DASH_align,"center",cljs.core.cst$kw$opacity,(0)], null)], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p_SHARP_description,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(styles)], null),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."], null);
});
online_lenormand.views.home.prompt = (function online_lenormand$views$home$prompt(){
var styles = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$prompt,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$color,online_lenormand.util.util.title_font_color(online_lenormand.views.home.hue),cljs.core.cst$kw$font_DASH_family,"Charmonman",cljs.core.cst$kw$font_DASH_size,"3vw",cljs.core.cst$kw$opacity,(0)], null)], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1_SHARP_prompt,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$prompt.cljs$core$IFn$_invoke$arity$1(styles)], null),"What do you want to reflect about?"], null);
});
online_lenormand.views.home.input = (function online_lenormand$views$home$input(){
var styles = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$input,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$color,cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$transition,cljs.core.cst$kw$margin_DASH_top,cljs.core.cst$kw$width,cljs.core.cst$kw$background,cljs.core.cst$kw$opacity,cljs.core.cst$kw$padding,cljs.core.cst$kw$outline,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$border_DASH_bottom],[online_lenormand.util.util.title_font_color(online_lenormand.views.home.hue),"center","2em","border-bottom .5s",".3em","50vw","transparent",(0),".2em .5em","none","none","5px",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("1px solid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(online_lenormand.util.util.description_font_color(online_lenormand.views.home.hue))].join('')])], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_SHARP_promptInput,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$spellCheck,false,cljs.core.cst$kw$auto_DASH_focus,true,cljs.core.cst$kw$style,cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(styles),cljs.core.cst$kw$value,(function (){var G__15336 = (function (){var G__15337 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_question], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15337) : re_frame.core.subscribe.call(null,G__15337));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15336) : cljs.core.deref.call(null,G__15336));
})(),cljs.core.cst$kw$on_DASH_change,((function (styles){
return (function (p1__15332_SHARP_){
var G__15338 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_question,p1__15332_SHARP_.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15338) : re_frame.core.dispatch.call(null,G__15338));
});})(styles))
], null)], null)], null);
});
online_lenormand.views.home.button = (function online_lenormand$views$home$button(){
var styles = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$container,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$color,cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$margin_DASH_top,cljs.core.cst$kw$background,cljs.core.cst$kw$cursor,cljs.core.cst$kw$opacity,cljs.core.cst$kw$padding,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius],[online_lenormand.util.util.title_font_color(online_lenormand.views.home.hue),"center","1.5vw","2.5vw","transparent","pointer",(0),"1vw 2vw",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("1px solid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(online_lenormand.util.util.title_font_color(online_lenormand.views.home.hue))].join(''),"100vw"])], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_go_DASH_button$gobutton,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.cst$kw$container.cljs$core$IFn$_invoke$arity$1(styles),cljs.core.cst$kw$on_DASH_click,((function (styles){
return (function (){
var G__15340 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_state,"reading"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15340) : re_frame.core.dispatch.call(null,G__15340));
});})(styles))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Go!"], null)], null);
});
online_lenormand.views.home.writing = (function online_lenormand$views$home$writing(){
var styles = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$container,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$background,online_lenormand.util.util.gradient_background(online_lenormand.views.home.hue),cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"column",cljs.core.cst$kw$align_DASH_items,"center",cljs.core.cst$kw$justify_DASH_content,"center"], null)], null);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$container.cljs$core$IFn$_invoke$arity$1(styles)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [online_lenormand.views.home.title], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [online_lenormand.views.home.description], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [online_lenormand.views.home.prompt], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [online_lenormand.views.home.input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [online_lenormand.views.home.button], null)], null);
});
online_lenormand.views.home.home = (function online_lenormand$views$home$home(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__15345 = (function (){var G__15346 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_state], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15346) : re_frame.core.subscribe.call(null,G__15346));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15345) : cljs.core.deref.call(null,G__15345));
})(),"writing")){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [online_lenormand.views.home.writing], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__15347 = (function (){var G__15348 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_state], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15348) : re_frame.core.subscribe.call(null,G__15348));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15347) : cljs.core.deref.call(null,G__15347));
})(),"reading")){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [online_lenormand.views.reading.reading], null);
} else {
return null;
}
}
});
