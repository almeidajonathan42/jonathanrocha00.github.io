// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,(0)) : cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0)));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = (function (){var G__14564 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14564) : cljs.core.atom.call(null,G__14564));
})();
if(typeof re_frame.trace.traces !== 'undefined'){
} else {
re_frame.trace.traces = (function (){var G__14565 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14565) : cljs.core.atom.call(null,G__14565));
})();
}
if(typeof re_frame.trace.next_delivery !== 'undefined'){
} else {
re_frame.trace.next_delivery = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.array_seq(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__14566){
var map__14569 = p__14566;
var map__14569__$1 = ((((!((map__14569 == null)))?((((map__14569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14569.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14569):map__14569);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14569__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14569__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14569__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14569__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__7185__auto__ = child_of;
if(cljs.core.truth_(or__7185__auto__)){
return or__7185__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__14587_14603 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.trace.trace_cbs) : cljs.core.deref.call(null,re_frame.trace.trace_cbs)));
var chunk__14588_14604 = null;
var count__14589_14605 = (0);
var i__14590_14606 = (0);
while(true){
if((i__14590_14606 < count__14589_14605)){
var vec__14591_14607 = chunk__14588_14604.cljs$core$IIndexed$_nth$arity$2(null,i__14590_14606);
var k_14608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14591_14607,(0),null);
var cb_14609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14591_14607,(1),null);
try{var G__14595_14610 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.trace.traces) : cljs.core.deref.call(null,re_frame.trace.traces));
(cb_14609.cljs$core$IFn$_invoke$arity$1 ? cb_14609.cljs$core$IFn$_invoke$arity$1(G__14595_14610) : cb_14609.call(null,G__14595_14610));
}catch (e14594){var e_14611 = e14594;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k_14608,"while storing",(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.trace.traces) : cljs.core.deref.call(null,re_frame.trace.traces)),e_14611], 0));
}
var G__14612 = seq__14587_14603;
var G__14613 = chunk__14588_14604;
var G__14614 = count__14589_14605;
var G__14615 = (i__14590_14606 + (1));
seq__14587_14603 = G__14612;
chunk__14588_14604 = G__14613;
count__14589_14605 = G__14614;
i__14590_14606 = G__14615;
continue;
} else {
var temp__4657__auto___14616 = cljs.core.seq(seq__14587_14603);
if(temp__4657__auto___14616){
var seq__14587_14617__$1 = temp__4657__auto___14616;
if(cljs.core.chunked_seq_QMARK_(seq__14587_14617__$1)){
var c__8004__auto___14618 = cljs.core.chunk_first(seq__14587_14617__$1);
var G__14619 = cljs.core.chunk_rest(seq__14587_14617__$1);
var G__14620 = c__8004__auto___14618;
var G__14621 = cljs.core.count(c__8004__auto___14618);
var G__14622 = (0);
seq__14587_14603 = G__14619;
chunk__14588_14604 = G__14620;
count__14589_14605 = G__14621;
i__14590_14606 = G__14622;
continue;
} else {
var vec__14596_14623 = cljs.core.first(seq__14587_14617__$1);
var k_14624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14596_14623,(0),null);
var cb_14625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14596_14623,(1),null);
try{var G__14600_14626 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.trace.traces) : cljs.core.deref.call(null,re_frame.trace.traces));
(cb_14625.cljs$core$IFn$_invoke$arity$1 ? cb_14625.cljs$core$IFn$_invoke$arity$1(G__14600_14626) : cb_14625.call(null,G__14600_14626));
}catch (e14599){var e_14627 = e14599;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k_14624,"while storing",(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.trace.traces) : cljs.core.deref.call(null,re_frame.trace.traces)),e_14627], 0));
}
var G__14628 = cljs.core.next(seq__14587_14617__$1);
var G__14629 = null;
var G__14630 = (0);
var G__14631 = (0);
seq__14587_14603 = G__14628;
chunk__14588_14604 = G__14629;
count__14589_14605 = G__14630;
i__14590_14606 = G__14631;
continue;
}
} else {
}
}
break;
}

var G__14601 = re_frame.trace.traces;
var G__14602 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14601,G__14602) : cljs.core.reset_BANG_.call(null,G__14601,G__14602));
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if((((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.trace.next_delivery) : cljs.core.deref.call(null,re_frame.trace.next_delivery)) - (10)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

var G__14634 = re_frame.trace.next_delivery;
var G__14635 = (now + re_frame.trace.debounce_time);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14634,G__14635) : cljs.core.reset_BANG_.call(null,G__14634,G__14635));
} else {
return null;
}
});
