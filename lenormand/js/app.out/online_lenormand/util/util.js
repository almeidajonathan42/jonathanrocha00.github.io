// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('online_lenormand.util.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('clojure.string');
online_lenormand.util.util.convert = (function online_lenormand$util$util$convert(value){
if((value instanceof cljs.core.Keyword)){
return cljs.core.name(value);
} else {
if(typeof value === 'number'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join('');
} else {
return value;

}
}
});
online_lenormand.util.util.s = (function online_lenormand$util$util$s(var_args){
var args__8305__auto__ = [];
var len__8298__auto___15264 = arguments.length;
var i__8299__auto___15265 = (0);
while(true){
if((i__8299__auto___15265 < len__8298__auto___15264)){
args__8305__auto__.push((arguments[i__8299__auto___15265]));

var G__15266 = (i__8299__auto___15265 + (1));
i__8299__auto___15265 = G__15266;
continue;
} else {
}
break;
}

var argseq__8306__auto__ = ((((0) < args__8305__auto__.length))?(new cljs.core.IndexedSeq(args__8305__auto__.slice((0)),(0),null)):null);
return online_lenormand.util.util.s.cljs$core$IFn$_invoke$arity$variadic(argseq__8306__auto__);
});

online_lenormand.util.util.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(online_lenormand.util.util.convert,args));
});

online_lenormand.util.util.s.cljs$lang$maxFixedArity = (0);

online_lenormand.util.util.s.cljs$lang$applyTo = (function (seq15263){
return online_lenormand.util.util.s.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15263));
});

online_lenormand.util.util.random_color = (function online_lenormand$util$util$random_color(){
var random_number = cljs.core.rand_int((360));
if(((random_number > (20))) && ((random_number < (160)))){
return (random_number + (100));
} else {
return random_number;
}
});
online_lenormand.util.util.title_font_color = (function online_lenormand$util$util$title_font_color(hue){
var saturation = (100);
var lightness = (95);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("hsl("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hue),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(saturation),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lightness),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%)")].join('');
});
online_lenormand.util.util.description_font_color = (function online_lenormand$util$util$description_font_color(hue){
var saturation = (100);
var lightness = (80);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("hsl("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hue),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(saturation),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lightness),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%)")].join('');
});
online_lenormand.util.util.card_color = (function online_lenormand$util$util$card_color(hue){
var saturation = (100);
var lightness = (80);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("hsl("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hue),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(saturation),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lightness),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%)")].join('');
});
online_lenormand.util.util.card_font_color = (function online_lenormand$util$util$card_font_color(hue){
var saturation = (100);
var lightness = (30);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("hsl("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hue),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(saturation),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lightness),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%)")].join('');
});
online_lenormand.util.util.gradient_background = (function online_lenormand$util$util$gradient_background(hue){
var saturation = (70);
var lightness = (65);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("linear-gradient(to top, hsl("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hue),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(saturation),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lightness),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%), hsl("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hue),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(saturation),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((lightness - (5))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%))")].join('');
});
