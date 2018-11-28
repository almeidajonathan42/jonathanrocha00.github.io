// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('online_lenormand.views.reading');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('online_lenormand.data.cards_meanings');
goog.require('clojure.string');
goog.require('online_lenormand.util.util');
online_lenormand.views.reading.hue = online_lenormand.util.util.random_color();
online_lenormand.views.reading.title = (function online_lenormand$views$reading$title(){
var styles = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$title,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$color,online_lenormand.util.util.title_font_color(online_lenormand.views.reading.hue),cljs.core.cst$kw$font_DASH_size,"4vw",cljs.core.cst$kw$font_DASH_family,"Lora",cljs.core.cst$kw$font_DASH_weight,"bolder",cljs.core.cst$kw$margin_DASH_bottom,"3vw"], null)], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1_SHARP_title,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(styles)], null),(function (){var G__15273 = (function (){var G__15274 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_question], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15274) : re_frame.core.subscribe.call(null,G__15274));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15273) : cljs.core.deref.call(null,G__15273));
})()], null);
});
online_lenormand.views.reading.select_meaning = (function online_lenormand$views$reading$select_meaning(selected_meaning,new_meaning,is_open){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(is_open) : cljs.core.deref.call(null,is_open)))){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(selected_meaning,new_meaning) : cljs.core.reset_BANG_.call(null,selected_meaning,new_meaning));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(is_open,false) : cljs.core.reset_BANG_.call(null,is_open,false));
} else {
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(is_open,true) : cljs.core.reset_BANG_.call(null,is_open,true));
}
});
online_lenormand.views.reading.meanings = (function online_lenormand$views$reading$meanings(number,is_open,selected_meaning){
var keyword_number = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(number)].join(''));
var styles = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$container,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$width,"12vw",cljs.core.cst$kw$height,"7.8em",cljs.core.cst$kw$margin,"1em",cljs.core.cst$kw$cursor,"pointer",cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"column",cljs.core.cst$kw$align_DASH_items,"center",cljs.core.cst$kw$justify_DASH_content,"flex-begin"], null),cljs.core.cst$kw$container_DASH_closed,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$color,cljs.core.cst$kw$width,cljs.core.cst$kw$background,cljs.core.cst$kw$cursor,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$display,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$margin],["center",online_lenormand.util.util.gradient_background(online_lenormand.views.reading.hue),"12vw",online_lenormand.util.util.description_font_color(online_lenormand.views.reading.hue),"pointer","center","flex","none","1em","column","1em"]),cljs.core.cst$kw$meaning,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$color,cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$width,cljs.core.cst$kw$background,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$display,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$height,cljs.core.cst$kw$margin],["center",online_lenormand.util.util.card_font_color(online_lenormand.views.reading.hue),"1vw","100%",online_lenormand.util.util.card_color(online_lenormand.views.reading.hue),"center","flex","1em","column","2.2vw",".2em"])], null);
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(is_open) : cljs.core.deref.call(null,is_open)))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$container.cljs$core$IFn$_invoke$arity$1(styles)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$meaning,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.cst$kw$meaning.cljs$core$IFn$_invoke$arity$1(styles),cljs.core.cst$kw$on_DASH_click,((function (keyword_number,styles){
return (function (){
return online_lenormand.views.reading.select_meaning(selected_meaning,(1),is_open);
});})(keyword_number,styles))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(online_lenormand.data.cards_meanings.cards_meanings,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$en,keyword_number,cljs.core.cst$kw$meaning_DASH_1], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$meaning,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.cst$kw$meaning.cljs$core$IFn$_invoke$arity$1(styles),cljs.core.cst$kw$on_DASH_click,((function (keyword_number,styles){
return (function (){
return online_lenormand.views.reading.select_meaning(selected_meaning,(2),is_open);
});})(keyword_number,styles))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(online_lenormand.data.cards_meanings.cards_meanings,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$en,keyword_number,cljs.core.cst$kw$meaning_DASH_2], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$meaning,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.cst$kw$meaning.cljs$core$IFn$_invoke$arity$1(styles),cljs.core.cst$kw$on_DASH_click,((function (keyword_number,styles){
return (function (){
return online_lenormand.views.reading.select_meaning(selected_meaning,(3),is_open);
});})(keyword_number,styles))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(online_lenormand.data.cards_meanings.cards_meanings,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$en,keyword_number,cljs.core.cst$kw$meaning_DASH_3], null))], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$container.cljs$core$IFn$_invoke$arity$1(styles)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_meaning) : cljs.core.deref.call(null,selected_meaning))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$meaning,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.cst$kw$meaning.cljs$core$IFn$_invoke$arity$1(styles),cljs.core.cst$kw$on_DASH_click,((function (keyword_number,styles){
return (function (){
return online_lenormand.views.reading.select_meaning(selected_meaning,(1),is_open);
});})(keyword_number,styles))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(online_lenormand.data.cards_meanings.cards_meanings,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$en,keyword_number,cljs.core.cst$kw$meaning_DASH_1], null))], null)], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_meaning) : cljs.core.deref.call(null,selected_meaning))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$meaning,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.cst$kw$meaning.cljs$core$IFn$_invoke$arity$1(styles),cljs.core.cst$kw$on_DASH_click,((function (keyword_number,styles){
return (function (){
return online_lenormand.views.reading.select_meaning(selected_meaning,(2),is_open);
});})(keyword_number,styles))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(online_lenormand.data.cards_meanings.cards_meanings,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$en,keyword_number,cljs.core.cst$kw$meaning_DASH_2], null))], null)], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_meaning) : cljs.core.deref.call(null,selected_meaning))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$meaning,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.cst$kw$meaning.cljs$core$IFn$_invoke$arity$1(styles),cljs.core.cst$kw$on_DASH_click,((function (keyword_number,styles){
return (function (){
return online_lenormand.views.reading.select_meaning(selected_meaning,(3),is_open);
});})(keyword_number,styles))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(online_lenormand.data.cards_meanings.cards_meanings,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$en,keyword_number,cljs.core.cst$kw$meaning_DASH_3], null))], null)], null):null)], null);
}
});
online_lenormand.views.reading.card = (function online_lenormand$views$reading$card(number,name){
var is_open = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var selected_meaning = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var lowercase_name = clojure.string.lower_case(name);
var styles = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$container,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$width,cljs.core.cst$kw$background,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$display,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$height,cljs.core.cst$kw$margin],["center","12vw",online_lenormand.util.util.card_color(online_lenormand.views.reading.hue),"space-between","flex","1em","column","18vw","1em"]),cljs.core.cst$kw$number_DASH_container,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$align_DASH_self,"flex-start",cljs.core.cst$kw$color,online_lenormand.util.util.card_font_color(online_lenormand.views.reading.hue),cljs.core.cst$kw$font_DASH_family,"Lora",cljs.core.cst$kw$font_DASH_size,"1.5vw",cljs.core.cst$kw$margin,"1vw"], null),cljs.core.cst$kw$card_DASH_name_DASH_container,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$color,online_lenormand.util.util.card_font_color(online_lenormand.views.reading.hue),cljs.core.cst$kw$font_DASH_family,"Lora",cljs.core.cst$kw$font_DASH_size,"1.5vw",cljs.core.cst$kw$margin,"1vw"], null),cljs.core.cst$kw$image,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"9vw",cljs.core.cst$kw$filter,"invert(100%)",cljs.core.cst$kw$opacity,".7"], null)], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$container.cljs$core$IFn$_invoke$arity$1(styles)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$number_DASH_container.cljs$core$IFn$_invoke$arity$1(styles)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,number], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$image_DASH_container.cljs$core$IFn$_invoke$arity$1(styles)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("images/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lowercase_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".png")].join(''),cljs.core.cst$kw$style,cljs.core.cst$kw$image.cljs$core$IFn$_invoke$arity$1(styles)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$card_DASH_name_DASH_container.cljs$core$IFn$_invoke$arity$1(styles)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,name], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [online_lenormand.views.reading.meanings,number,is_open,selected_meaning], null)], null);
});
online_lenormand.views.reading.remove_element = (function online_lenormand$views$reading$remove_element(coll,element){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__15275_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element,p1__15275_SHARP_);
}),coll));
});
online_lenormand.views.reading.include_element = (function online_lenormand$views$reading$include_element(coll,element){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,element);
});
online_lenormand.views.reading.draw_cards = (function online_lenormand$views$reading$draw_cards(number){
var card_numbers = (function (){var G__15284 = cljs.core.vec(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(37)));
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15284) : cljs.core.atom.call(null,G__15284));
})();
var drawn_cards = (function (){var G__15285 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15285) : cljs.core.atom.call(null,G__15285));
})();
var seq__15286_15292 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
var chunk__15288_15293 = null;
var count__15289_15294 = (0);
var i__15290_15295 = (0);
while(true){
if((i__15290_15295 < count__15289_15294)){
var i_15296 = chunk__15288_15293.cljs$core$IIndexed$_nth$arity$2(null,i__15290_15295);
var random_15297 = cljs.core.rand_nth((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(card_numbers) : cljs.core.deref.call(null,card_numbers)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(card_numbers,online_lenormand.views.reading.remove_element,random_15297);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(drawn_cards,online_lenormand.views.reading.include_element,random_15297);

var G__15298 = seq__15286_15292;
var G__15299 = chunk__15288_15293;
var G__15300 = count__15289_15294;
var G__15301 = (i__15290_15295 + (1));
seq__15286_15292 = G__15298;
chunk__15288_15293 = G__15299;
count__15289_15294 = G__15300;
i__15290_15295 = G__15301;
continue;
} else {
var temp__4657__auto___15302 = cljs.core.seq(seq__15286_15292);
if(temp__4657__auto___15302){
var seq__15286_15303__$1 = temp__4657__auto___15302;
if(cljs.core.chunked_seq_QMARK_(seq__15286_15303__$1)){
var c__8004__auto___15304 = cljs.core.chunk_first(seq__15286_15303__$1);
var G__15305 = cljs.core.chunk_rest(seq__15286_15303__$1);
var G__15306 = c__8004__auto___15304;
var G__15307 = cljs.core.count(c__8004__auto___15304);
var G__15308 = (0);
seq__15286_15292 = G__15305;
chunk__15288_15293 = G__15306;
count__15289_15294 = G__15307;
i__15290_15295 = G__15308;
continue;
} else {
var i_15309 = cljs.core.first(seq__15286_15303__$1);
var random_15310 = cljs.core.rand_nth((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(card_numbers) : cljs.core.deref.call(null,card_numbers)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(card_numbers,online_lenormand.views.reading.remove_element,random_15310);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(drawn_cards,online_lenormand.views.reading.include_element,random_15310);

var G__15311 = cljs.core.next(seq__15286_15303__$1);
var G__15312 = null;
var G__15313 = (0);
var G__15314 = (0);
seq__15286_15292 = G__15311;
chunk__15288_15293 = G__15312;
count__15289_15294 = G__15313;
i__15290_15295 = G__15314;
continue;
}
} else {
}
}
break;
}

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(drawn_cards) : cljs.core.deref.call(null,drawn_cards));
});
online_lenormand.views.reading.cards = (function online_lenormand$views$reading$cards(){
var drawn_cards = online_lenormand.views.reading.draw_cards((5));
var styles = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$container,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"row",cljs.core.cst$kw$align_DASH_items,"flex-start",cljs.core.cst$kw$justify_DASH_content,"center",cljs.core.cst$kw$opacity,(0)], null)], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_card_DASH_container,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$container.cljs$core$IFn$_invoke$arity$1(styles)], null),(function (){var iter__7973__auto__ = ((function (drawn_cards,styles){
return (function online_lenormand$views$reading$cards_$_iter__15321(s__15322){
return (new cljs.core.LazySeq(null,((function (drawn_cards,styles){
return (function (){
var s__15322__$1 = s__15322;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__15322__$1);
if(temp__4657__auto__){
var s__15322__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15322__$2)){
var c__7971__auto__ = cljs.core.chunk_first(s__15322__$2);
var size__7972__auto__ = cljs.core.count(c__7971__auto__);
var b__15324 = cljs.core.chunk_buffer(size__7972__auto__);
if((function (){var i__15323 = (0);
while(true){
if((i__15323 < size__7972__auto__)){
var number = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7971__auto__,i__15323);
var keyword_number = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(number)].join(''));
cljs.core.chunk_append(b__15324,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [online_lenormand.views.reading.card,number,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(online_lenormand.data.cards_meanings.cards_meanings,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$en,keyword_number,cljs.core.cst$kw$name], null))], null));

var G__15327 = (i__15323 + (1));
i__15323 = G__15327;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15324),online_lenormand$views$reading$cards_$_iter__15321(cljs.core.chunk_rest(s__15322__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15324),null);
}
} else {
var number = cljs.core.first(s__15322__$2);
var keyword_number = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(number)].join(''));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [online_lenormand.views.reading.card,number,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(online_lenormand.data.cards_meanings.cards_meanings,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$en,keyword_number,cljs.core.cst$kw$name], null))], null),online_lenormand$views$reading$cards_$_iter__15321(cljs.core.rest(s__15322__$2)));
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
})()], null);
});
online_lenormand.views.reading.button = (function online_lenormand$views$reading$button(){
var styles = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$container,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$color,cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$margin_DASH_top,cljs.core.cst$kw$background,cljs.core.cst$kw$cursor,cljs.core.cst$kw$padding,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius],[online_lenormand.util.util.title_font_color(online_lenormand.views.reading.hue),"center","1.5vw","2.5vw","transparent","pointer","1vw 2vw",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("1px solid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(online_lenormand.util.util.title_font_color(online_lenormand.views.reading.hue))].join(''),"100vw"])], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$gobutton,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.cst$kw$container.cljs$core$IFn$_invoke$arity$1(styles),cljs.core.cst$kw$on_DASH_click,((function (styles){
return (function (){
var G__15329 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_state,"writing"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15329) : re_frame.core.dispatch.call(null,G__15329));
});})(styles))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Go back"], null)], null);
});
online_lenormand.views.reading.reading = (function online_lenormand$views$reading$reading(){
var styles = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$container,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$background,online_lenormand.util.util.gradient_background(online_lenormand.views.reading.hue),cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"column",cljs.core.cst$kw$align_DASH_items,"center",cljs.core.cst$kw$justify_DASH_content,"center"], null)], null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$container.cljs$core$IFn$_invoke$arity$1(styles)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [online_lenormand.views.reading.title], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [online_lenormand.views.reading.cards], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [online_lenormand.views.reading.button], null)], null);
});
