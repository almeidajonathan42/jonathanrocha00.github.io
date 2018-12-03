// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('online_lenormand.views.reading_prediction');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('online_lenormand.data.cards_meanings');
goog.require('clojure.string');
goog.require('online_lenormand.util.util');
online_lenormand.views.reading_prediction.hue = online_lenormand.util.util.random_color();
online_lenormand.views.reading_prediction.title = (function online_lenormand$views$reading_prediction$title(){
var styles = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$title,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$color,online_lenormand.util.util.title_font_color(online_lenormand.views.reading_prediction.hue),cljs.core.cst$kw$font_DASH_size,"4vw",cljs.core.cst$kw$font_DASH_family,"Lora",cljs.core.cst$kw$font_DASH_weight,"bolder",cljs.core.cst$kw$margin_DASH_bottom,"3vw"], null)], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1_SHARP_title,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(styles)], null),(function (){var G__15334 = (function (){var G__15335 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_question], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15335) : re_frame.core.subscribe.call(null,G__15335));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15334) : cljs.core.deref.call(null,G__15334));
})()], null);
});
online_lenormand.views.reading_prediction.select_meaning = (function online_lenormand$views$reading_prediction$select_meaning(selected_meaning,new_meaning,is_open){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(is_open) : cljs.core.deref.call(null,is_open)))){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(selected_meaning,new_meaning) : cljs.core.reset_BANG_.call(null,selected_meaning,new_meaning));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(is_open,false) : cljs.core.reset_BANG_.call(null,is_open,false));
} else {
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(is_open,true) : cljs.core.reset_BANG_.call(null,is_open,true));
}
});
online_lenormand.views.reading_prediction.meanings = (function online_lenormand$views$reading_prediction$meanings(number,is_open,selected_meaning){
var keyword_number = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(number)].join(''));
var styles = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$container,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$width,"12vw",cljs.core.cst$kw$height,"8vw",cljs.core.cst$kw$margin,"1em",cljs.core.cst$kw$cursor,"pointer",cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"column",cljs.core.cst$kw$align_DASH_items,"center",cljs.core.cst$kw$justify_DASH_content,"flex-begin"], null),cljs.core.cst$kw$container_DASH_closed,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$color,cljs.core.cst$kw$width,cljs.core.cst$kw$background,cljs.core.cst$kw$cursor,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$display,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$margin],["center",online_lenormand.util.util.gradient_background(online_lenormand.views.reading_prediction.hue),"12vw",online_lenormand.util.util.description_font_color(online_lenormand.views.reading_prediction.hue),"pointer","center","flex","none","1em","column","1em"]),cljs.core.cst$kw$meaning,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$color,cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$width,cljs.core.cst$kw$background,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$display,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$height,cljs.core.cst$kw$margin],["center",online_lenormand.util.util.card_font_color(online_lenormand.views.reading_prediction.hue),"1vw","100%",online_lenormand.util.util.card_color(online_lenormand.views.reading_prediction.hue),"center","flex","1em","column","2.2vw",".2em"])], null);
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(is_open) : cljs.core.deref.call(null,is_open)))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$container.cljs$core$IFn$_invoke$arity$1(styles)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$meaning,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.cst$kw$meaning.cljs$core$IFn$_invoke$arity$1(styles),cljs.core.cst$kw$on_DASH_click,((function (keyword_number,styles){
return (function (){
return online_lenormand.views.reading_prediction.select_meaning(selected_meaning,(1),is_open);
});})(keyword_number,styles))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(online_lenormand.data.cards_meanings.cards_meanings,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$en,keyword_number,cljs.core.cst$kw$meaning_DASH_1], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$meaning,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.cst$kw$meaning.cljs$core$IFn$_invoke$arity$1(styles),cljs.core.cst$kw$on_DASH_click,((function (keyword_number,styles){
return (function (){
return online_lenormand.views.reading_prediction.select_meaning(selected_meaning,(2),is_open);
});})(keyword_number,styles))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(online_lenormand.data.cards_meanings.cards_meanings,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$en,keyword_number,cljs.core.cst$kw$meaning_DASH_2], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$meaning,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.cst$kw$meaning.cljs$core$IFn$_invoke$arity$1(styles),cljs.core.cst$kw$on_DASH_click,((function (keyword_number,styles){
return (function (){
return online_lenormand.views.reading_prediction.select_meaning(selected_meaning,(3),is_open);
});})(keyword_number,styles))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(online_lenormand.data.cards_meanings.cards_meanings,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$en,keyword_number,cljs.core.cst$kw$meaning_DASH_3], null))], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$container.cljs$core$IFn$_invoke$arity$1(styles)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_meaning) : cljs.core.deref.call(null,selected_meaning))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$meaning,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.cst$kw$meaning.cljs$core$IFn$_invoke$arity$1(styles),cljs.core.cst$kw$on_DASH_click,((function (keyword_number,styles){
return (function (){
return online_lenormand.views.reading_prediction.select_meaning(selected_meaning,(1),is_open);
});})(keyword_number,styles))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(online_lenormand.data.cards_meanings.cards_meanings,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$en,keyword_number,cljs.core.cst$kw$meaning_DASH_1], null))], null)], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_meaning) : cljs.core.deref.call(null,selected_meaning))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$meaning,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.cst$kw$meaning.cljs$core$IFn$_invoke$arity$1(styles),cljs.core.cst$kw$on_DASH_click,((function (keyword_number,styles){
return (function (){
return online_lenormand.views.reading_prediction.select_meaning(selected_meaning,(2),is_open);
});})(keyword_number,styles))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(online_lenormand.data.cards_meanings.cards_meanings,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$en,keyword_number,cljs.core.cst$kw$meaning_DASH_2], null))], null)], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_meaning) : cljs.core.deref.call(null,selected_meaning))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$meaning,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.cst$kw$meaning.cljs$core$IFn$_invoke$arity$1(styles),cljs.core.cst$kw$on_DASH_click,((function (keyword_number,styles){
return (function (){
return online_lenormand.views.reading_prediction.select_meaning(selected_meaning,(3),is_open);
});})(keyword_number,styles))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(online_lenormand.data.cards_meanings.cards_meanings,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$en,keyword_number,cljs.core.cst$kw$meaning_DASH_3], null))], null)], null):null)], null);
}
});
online_lenormand.views.reading_prediction.card = (function online_lenormand$views$reading_prediction$card(number,name,clicked){
var is_open = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var selected_meaning = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var lowercase_name = clojure.string.lower_case(name);
var styles = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$container,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$width,cljs.core.cst$kw$background,cljs.core.cst$kw$cursor,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$display,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$height,cljs.core.cst$kw$margin],["center","12vw",online_lenormand.util.util.card_color(online_lenormand.views.reading_prediction.hue),"pointer","space-between","flex","1em","column","18vw","1em"]),cljs.core.cst$kw$flip_DASH_container,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$width,cljs.core.cst$kw$background,cljs.core.cst$kw$cursor,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$display,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$height,cljs.core.cst$kw$margin],["center","12vw",online_lenormand.util.util.card_color(online_lenormand.views.reading_prediction.hue),"pointer","center","flex","1em","column","18vw","1em"]),cljs.core.cst$kw$number_DASH_container,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$align_DASH_self,"flex-start",cljs.core.cst$kw$color,online_lenormand.util.util.card_font_color(online_lenormand.views.reading_prediction.hue),cljs.core.cst$kw$font_DASH_family,"Lora",cljs.core.cst$kw$font_DASH_size,"1.5vw",cljs.core.cst$kw$margin,"1vw"], null),cljs.core.cst$kw$card_DASH_name_DASH_container,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$color,online_lenormand.util.util.card_font_color(online_lenormand.views.reading_prediction.hue),cljs.core.cst$kw$font_DASH_family,"Lora",cljs.core.cst$kw$font_DASH_size,"1.5vw",cljs.core.cst$kw$margin,"1vw"], null),cljs.core.cst$kw$image,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"9vw",cljs.core.cst$kw$filter,"invert(100%)",cljs.core.cst$kw$opacity,".7"], null),cljs.core.cst$kw$interrogation,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$font_DASH_size,"10vw",cljs.core.cst$kw$font_DASH_family,"Lora",cljs.core.cst$kw$color,online_lenormand.util.util.card_font_color(online_lenormand.views.reading_prediction.hue)], null)], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (is_open,selected_meaning,lowercase_name,styles){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(clicked,true) : cljs.core.reset_BANG_.call(null,clicked,true));
});})(is_open,selected_meaning,lowercase_name,styles))
], null),(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clicked) : cljs.core.deref.call(null,clicked)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$container.cljs$core$IFn$_invoke$arity$1(styles)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$number_DASH_container.cljs$core$IFn$_invoke$arity$1(styles)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,number], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$image_DASH_container.cljs$core$IFn$_invoke$arity$1(styles)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("images/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lowercase_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".png")].join(''),cljs.core.cst$kw$style,cljs.core.cst$kw$image.cljs$core$IFn$_invoke$arity$1(styles)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$card_DASH_name_DASH_container.cljs$core$IFn$_invoke$arity$1(styles)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,name], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [online_lenormand.views.reading_prediction.meanings,number,is_open,selected_meaning], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$flip_DASH_container.cljs$core$IFn$_invoke$arity$1(styles)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$interrogation.cljs$core$IFn$_invoke$arity$1(styles)], null),"?"], null)], null))], null);
});
online_lenormand.views.reading_prediction.remove_element = (function online_lenormand$views$reading_prediction$remove_element(coll,element){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__15336_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element,p1__15336_SHARP_);
}),coll));
});
online_lenormand.views.reading_prediction.include_element = (function online_lenormand$views$reading_prediction$include_element(coll,element){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,element);
});
online_lenormand.views.reading_prediction.draw_cards = (function online_lenormand$views$reading_prediction$draw_cards(number){
var card_numbers = (function (){var G__15345 = cljs.core.vec(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(37)));
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15345) : cljs.core.atom.call(null,G__15345));
})();
var drawn_cards = (function (){var G__15346 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15346) : cljs.core.atom.call(null,G__15346));
})();
var seq__15347_15353 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(number));
var chunk__15349_15354 = null;
var count__15350_15355 = (0);
var i__15351_15356 = (0);
while(true){
if((i__15351_15356 < count__15350_15355)){
var i_15357 = chunk__15349_15354.cljs$core$IIndexed$_nth$arity$2(null,i__15351_15356);
var random_15358 = cljs.core.rand_nth((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(card_numbers) : cljs.core.deref.call(null,card_numbers)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(card_numbers,online_lenormand.views.reading_prediction.remove_element,random_15358);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(drawn_cards,online_lenormand.views.reading_prediction.include_element,random_15358);

var G__15359 = seq__15347_15353;
var G__15360 = chunk__15349_15354;
var G__15361 = count__15350_15355;
var G__15362 = (i__15351_15356 + (1));
seq__15347_15353 = G__15359;
chunk__15349_15354 = G__15360;
count__15350_15355 = G__15361;
i__15351_15356 = G__15362;
continue;
} else {
var temp__4657__auto___15363 = cljs.core.seq(seq__15347_15353);
if(temp__4657__auto___15363){
var seq__15347_15364__$1 = temp__4657__auto___15363;
if(cljs.core.chunked_seq_QMARK_(seq__15347_15364__$1)){
var c__8004__auto___15365 = cljs.core.chunk_first(seq__15347_15364__$1);
var G__15366 = cljs.core.chunk_rest(seq__15347_15364__$1);
var G__15367 = c__8004__auto___15365;
var G__15368 = cljs.core.count(c__8004__auto___15365);
var G__15369 = (0);
seq__15347_15353 = G__15366;
chunk__15349_15354 = G__15367;
count__15350_15355 = G__15368;
i__15351_15356 = G__15369;
continue;
} else {
var i_15370 = cljs.core.first(seq__15347_15364__$1);
var random_15371 = cljs.core.rand_nth((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(card_numbers) : cljs.core.deref.call(null,card_numbers)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(card_numbers,online_lenormand.views.reading_prediction.remove_element,random_15371);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(drawn_cards,online_lenormand.views.reading_prediction.include_element,random_15371);

var G__15372 = cljs.core.next(seq__15347_15364__$1);
var G__15373 = null;
var G__15374 = (0);
var G__15375 = (0);
seq__15347_15353 = G__15372;
chunk__15349_15354 = G__15373;
count__15350_15355 = G__15374;
i__15351_15356 = G__15375;
continue;
}
} else {
}
}
break;
}

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(drawn_cards) : cljs.core.deref.call(null,drawn_cards));
});
online_lenormand.views.reading_prediction.separator = (function online_lenormand$views$reading_prediction$separator(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"22vw",cljs.core.cst$kw$height,"1vw"], null)], null)], null);
});
online_lenormand.views.reading_prediction.separator2 = (function online_lenormand$views$reading_prediction$separator2(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"18vw",cljs.core.cst$kw$height,"1vw"], null)], null)], null);
});
online_lenormand.views.reading_prediction.cards = (function online_lenormand$views$reading_prediction$cards(){
var drawn_cards = online_lenormand.views.reading_prediction.draw_cards((6));
var styles = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$container,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"column",cljs.core.cst$kw$align_DASH_items,"flex-start",cljs.core.cst$kw$justify_DASH_content,"center",cljs.core.cst$kw$opacity,(0)], null),cljs.core.cst$kw$label_DASH_container,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$max_DASH_height,cljs.core.cst$kw$color,cljs.core.cst$kw$min_DASH_height,cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$width,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$display,cljs.core.cst$kw$font_DASH_family,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$height,cljs.core.cst$kw$margin],["center","3vw",online_lenormand.util.util.description_font_color(online_lenormand.views.reading_prediction.hue),"3vw","3vw","100%","center","flex","Lora","row","3vw",".08vw"]),cljs.core.cst$kw$inner_DASH_container,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$height,"30vw",cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"row",cljs.core.cst$kw$align_DASH_items,"flex-start",cljs.core.cst$kw$justify_DASH_content,"center"], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_card_DASH_container,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$container.cljs$core$IFn$_invoke$arity$1(styles)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$label_DASH_container.cljs$core$IFn$_invoke$arity$1(styles)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"PAST"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [online_lenormand.views.reading_prediction.separator], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"PRESENT"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [online_lenormand.views.reading_prediction.separator2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"FUTURE"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$inner_DASH_container.cljs$core$IFn$_invoke$arity$1(styles)], null),(function (){var iter__7973__auto__ = ((function (drawn_cards,styles){
return (function online_lenormand$views$reading_prediction$cards_$_iter__15382(s__15383){
return (new cljs.core.LazySeq(null,((function (drawn_cards,styles){
return (function (){
var s__15383__$1 = s__15383;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__15383__$1);
if(temp__4657__auto__){
var s__15383__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15383__$2)){
var c__7971__auto__ = cljs.core.chunk_first(s__15383__$2);
var size__7972__auto__ = cljs.core.count(c__7971__auto__);
var b__15385 = cljs.core.chunk_buffer(size__7972__auto__);
if((function (){var i__15384 = (0);
while(true){
if((i__15384 < size__7972__auto__)){
var number = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7971__auto__,i__15384);
var keyword_number = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(number)].join(''));
var clicked = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
cljs.core.chunk_append(b__15385,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [online_lenormand.views.reading_prediction.card,number,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(online_lenormand.data.cards_meanings.cards_meanings,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$en,keyword_number,cljs.core.cst$kw$name], null)),clicked], null));

var G__15388 = (i__15384 + (1));
i__15384 = G__15388;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15385),online_lenormand$views$reading_prediction$cards_$_iter__15382(cljs.core.chunk_rest(s__15383__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15385),null);
}
} else {
var number = cljs.core.first(s__15383__$2);
var keyword_number = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(number)].join(''));
var clicked = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [online_lenormand.views.reading_prediction.card,number,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(online_lenormand.data.cards_meanings.cards_meanings,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$en,keyword_number,cljs.core.cst$kw$name], null)),clicked], null),online_lenormand$views$reading_prediction$cards_$_iter__15382(cljs.core.rest(s__15383__$2)));
}
} else {
return null;
}
break;
}
});})(drawn_cards,styles))
,null,null));
});})(drawn_cards,styles))
;
return iter__7973__auto__(drawn_cards);
})()], null)], null);
});
online_lenormand.views.reading_prediction.button = (function online_lenormand$views$reading_prediction$button(){
var styles = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$container,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$color,cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$margin_DASH_top,cljs.core.cst$kw$background,cljs.core.cst$kw$cursor,cljs.core.cst$kw$padding,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius],[online_lenormand.util.util.title_font_color(online_lenormand.views.reading_prediction.hue),"center","1.5vw","1.5vw","transparent","pointer","1vw 2vw",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("1px solid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(online_lenormand.util.util.title_font_color(online_lenormand.views.reading_prediction.hue))].join(''),"100vw"])], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$gobutton,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.cst$kw$container.cljs$core$IFn$_invoke$arity$1(styles),cljs.core.cst$kw$on_DASH_click,((function (styles){
return (function (){
var G__15390 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_state,"writing"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15390) : re_frame.core.dispatch.call(null,G__15390));
});})(styles))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Go back"], null)], null);
});
online_lenormand.views.reading_prediction.reading_prediction = (function online_lenormand$views$reading_prediction$reading_prediction(){
var styles = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$container,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$background,online_lenormand.util.util.gradient_background(online_lenormand.views.reading_prediction.hue),cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"column",cljs.core.cst$kw$align_DASH_items,"center",cljs.core.cst$kw$justify_DASH_content,"center"], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$container.cljs$core$IFn$_invoke$arity$1(styles)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [online_lenormand.views.reading_prediction.cards], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [online_lenormand.views.reading_prediction.button], null)], null);
});
