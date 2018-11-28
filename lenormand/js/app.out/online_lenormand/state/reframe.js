// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('online_lenormand.state.reframe');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state,"writing",cljs.core.cst$kw$question,""], null);
}));
var G__15245_15247 = cljs.core.cst$kw$get_DASH_state;
var G__15246_15248 = ((function (G__15245_15247){
return (function (db,_){
return cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(db);
});})(G__15245_15247))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__15245_15247,G__15246_15248) : re_frame.core.reg_sub.call(null,G__15245_15247,G__15246_15248));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_state,(function (db,p__15249){
var vec__15250 = p__15249;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15250,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15250,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$state,val);
}));
var G__15253_15255 = cljs.core.cst$kw$get_DASH_question;
var G__15254_15256 = ((function (G__15253_15255){
return (function (db,_){
return cljs.core.cst$kw$question.cljs$core$IFn$_invoke$arity$1(db);
});})(G__15253_15255))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__15253_15255,G__15254_15256) : re_frame.core.reg_sub.call(null,G__15253_15255,G__15254_15256));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_question,(function (db,p__15257){
var vec__15258 = p__15257;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15258,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15258,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$question,val);
}));
