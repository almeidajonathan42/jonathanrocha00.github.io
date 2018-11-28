// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('online_lenormand.app');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('online_lenormand.views.home');
goog.require('online_lenormand.views.reading');
goog.require('re_frame.core');
goog.require('online_lenormand.state.reframe');
online_lenormand.app.init = (function online_lenormand$app$init(){
var G__15366_15369 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialize], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__15366_15369) : re_frame.core.dispatch_sync.call(null,G__15366_15369));

var G__15367 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [online_lenormand.views.home.home], null);
var G__15368 = document.getElementById("container");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__15367,G__15368) : reagent.core.render_component.call(null,G__15367,G__15368));
});
