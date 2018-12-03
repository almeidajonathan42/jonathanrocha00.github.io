// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('online_lenormand.views.home');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('online_lenormand.views.reading_reflection');
goog.require('online_lenormand.views.reading_prediction');
goog.require('online_lenormand.util.util');
online_lenormand.views.home.hue = online_lenormand.util.util.random_color();
online_lenormand.views.home.title = (function online_lenormand$views$home$title(){
var styles = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$title,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$color,online_lenormand.util.util.title_font_color(online_lenormand.views.home.hue),cljs.core.cst$kw$font_DASH_family,"Charmonman",cljs.core.cst$kw$font_DASH_size,"6vw",cljs.core.cst$kw$font_DASH_weight,"bolder"], null)], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1_SHARP_title,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(styles)], null),"Online Lenormand"], null);
});
online_lenormand.views.home.mini_card = (function online_lenormand$views$home$mini_card(number,name){
var lowercase_name = clojure.string.lower_case(name);
var styles = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$container,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$width,cljs.core.cst$kw$background,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$display,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$height,cljs.core.cst$kw$margin],["center","5vw",online_lenormand.util.util.card_color(online_lenormand.views.home.hue),"space-between","flex",".5vw","column","8vw",".2vw"]),cljs.core.cst$kw$number_DASH_container,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$align_DASH_self,"flex-start",cljs.core.cst$kw$color,online_lenormand.util.util.card_font_color(online_lenormand.views.home.hue),cljs.core.cst$kw$font_DASH_family,"Lora",cljs.core.cst$kw$font_DASH_size,"1vw",cljs.core.cst$kw$margin,".5vw"], null),cljs.core.cst$kw$card_DASH_name_DASH_container,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$color,online_lenormand.util.util.card_font_color(online_lenormand.views.home.hue),cljs.core.cst$kw$font_DASH_family,"Lora",cljs.core.cst$kw$font_DASH_size,"1vw",cljs.core.cst$kw$margin,"1vw"], null),cljs.core.cst$kw$image,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"2.7vw",cljs.core.cst$kw$filter,"invert(100%)",cljs.core.cst$kw$opacity,".7"], null)], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$container.cljs$core$IFn$_invoke$arity$1(styles)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$number_DASH_container.cljs$core$IFn$_invoke$arity$1(styles)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,number], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$image_DASH_container.cljs$core$IFn$_invoke$arity$1(styles)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("images/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lowercase_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".png")].join(''),cljs.core.cst$kw$style,cljs.core.cst$kw$image.cljs$core$IFn$_invoke$arity$1(styles)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$card_DASH_name_DASH_container.cljs$core$IFn$_invoke$arity$1(styles)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,name], null)], null)], null)], null);
});
online_lenormand.views.home.card_container = (function online_lenormand$views$home$card_container(){
var styles = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$container,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"row",cljs.core.cst$kw$align_DASH_items,"center",cljs.core.cst$kw$justify_DASH_content,"center"], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$container.cljs$core$IFn$_invoke$arity$1(styles)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [online_lenormand.views.home.mini_card,(18),"Dog"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [online_lenormand.views.home.mini_card,(7),"Snake"], null)], null);
});
online_lenormand.views.home.description = (function online_lenormand$views$home$description(){
var styles = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$color,online_lenormand.util.util.description_font_color(online_lenormand.views.home.hue),cljs.core.cst$kw$width,"70%",cljs.core.cst$kw$margin_DASH_top,"1vw",cljs.core.cst$kw$margin_DASH_bottom,"2vw",cljs.core.cst$kw$font_DASH_size,"1.4vw",cljs.core.cst$kw$font_DASH_family,"Lora",cljs.core.cst$kw$text_DASH_align,"center",cljs.core.cst$kw$opacity,(0)], null)], null);
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_description,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(styles)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"1. Choose the type of reading you want"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"2. Think about a question..."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"3. Read the cards in pairs."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [online_lenormand.views.home.card_container], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"The second card becomes a caracteristic of the first"], null)], null);
});
online_lenormand.views.home.button = (function online_lenormand$views$home$button(text,state){
var styles = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$container,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$color,cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$margin_DASH_top,cljs.core.cst$kw$background,cljs.core.cst$kw$cursor,cljs.core.cst$kw$opacity,cljs.core.cst$kw$padding,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius],[online_lenormand.util.util.title_font_color(online_lenormand.views.home.hue),"center","1.5vw","2.5vw","transparent","pointer",(0),"1vw 2vw",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("1px solid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(online_lenormand.util.util.title_font_color(online_lenormand.views.home.hue))].join(''),"100vw"])], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_go_DASH_button$gobutton,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.cst$kw$container.cljs$core$IFn$_invoke$arity$1(styles),cljs.core.cst$kw$on_DASH_click,((function (styles){
return (function (){
var G__15394 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_state,state], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15394) : re_frame.core.dispatch.call(null,G__15394));
});})(styles))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,text], null)], null);
});
online_lenormand.views.home.prompt = (function online_lenormand$views$home$prompt(){
var styles = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$prompt,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$color,online_lenormand.util.util.title_font_color(online_lenormand.views.home.hue),cljs.core.cst$kw$font_DASH_family,"Charmonman",cljs.core.cst$kw$font_DASH_size,"3vw",cljs.core.cst$kw$opacity,(0)], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1_SHARP_prompt,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$prompt.cljs$core$IFn$_invoke$arity$1(styles)], null),"What type of reading do you want?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [online_lenormand.views.home.button,"Prediction","reading-prediction"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [online_lenormand.views.home.button,"Reflection","reading-reflection"], null)], null);
});
online_lenormand.views.home.input = (function online_lenormand$views$home$input(){
var styles = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$input,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$color,cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$transition,cljs.core.cst$kw$margin_DASH_top,cljs.core.cst$kw$width,cljs.core.cst$kw$background,cljs.core.cst$kw$opacity,cljs.core.cst$kw$padding,cljs.core.cst$kw$outline,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$border_DASH_bottom],[online_lenormand.util.util.title_font_color(online_lenormand.views.home.hue),"center","2em","border-bottom .5s",".3em","50vw","transparent",(0),".2em .5em","none","none","5px",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("1px solid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(online_lenormand.util.util.description_font_color(online_lenormand.views.home.hue))].join('')])], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_SHARP_promptInput,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$spellCheck,false,cljs.core.cst$kw$auto_DASH_focus,true,cljs.core.cst$kw$style,cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(styles),cljs.core.cst$kw$value,(function (){var G__15399 = (function (){var G__15400 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_question], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15400) : re_frame.core.subscribe.call(null,G__15400));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15399) : cljs.core.deref.call(null,G__15399));
})(),cljs.core.cst$kw$on_DASH_change,((function (styles){
return (function (p1__15395_SHARP_){
var G__15401 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_question,p1__15395_SHARP_.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15401) : re_frame.core.dispatch.call(null,G__15401));
});})(styles))
], null)], null)], null);
});
online_lenormand.views.home.writing = (function online_lenormand$views$home$writing(){
var styles = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$container,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$background,online_lenormand.util.util.gradient_background(online_lenormand.views.home.hue),cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"column",cljs.core.cst$kw$align_DASH_items,"center",cljs.core.cst$kw$justify_DASH_content,"center"], null)], null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$container.cljs$core$IFn$_invoke$arity$1(styles)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [online_lenormand.views.home.title], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [online_lenormand.views.home.description], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [online_lenormand.views.home.prompt], null)], null);
});
online_lenormand.views.home.home = (function online_lenormand$views$home$home(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__15408 = (function (){var G__15409 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_state], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15409) : re_frame.core.subscribe.call(null,G__15409));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15408) : cljs.core.deref.call(null,G__15408));
})(),"writing")){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [online_lenormand.views.home.writing], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__15410 = (function (){var G__15411 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_state], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15411) : re_frame.core.subscribe.call(null,G__15411));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15410) : cljs.core.deref.call(null,G__15410));
})(),"reading-reflection")){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [online_lenormand.views.reading_reflection.reading_reflection], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__15412 = (function (){var G__15413 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_state], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15413) : re_frame.core.subscribe.call(null,G__15413));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15412) : cljs.core.deref.call(null,G__15412));
})(),"reading-prediction")){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [online_lenormand.views.reading_prediction.reading_prediction], null);
} else {
return null;
}
}
}
});
