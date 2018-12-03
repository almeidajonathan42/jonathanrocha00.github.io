// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_14784 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));

try{try{var seq__14785 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__14786 = null;
var count__14787 = (0);
var i__14788 = (0);
while(true){
if((i__14788 < count__14787)){
var vec__14789 = chunk__14786.cljs$core$IIndexed$_nth$arity$2(null,i__14788);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14789,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14789,(1),null);
var temp__4655__auto___14805 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___14805)){
var effect_fn_14806 = temp__4655__auto___14805;
(effect_fn_14806.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14806.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14806.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}

var G__14807 = seq__14785;
var G__14808 = chunk__14786;
var G__14809 = count__14787;
var G__14810 = (i__14788 + (1));
seq__14785 = G__14807;
chunk__14786 = G__14808;
count__14787 = G__14809;
i__14788 = G__14810;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14785);
if(temp__4657__auto__){
var seq__14785__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14785__$1)){
var c__8004__auto__ = cljs.core.chunk_first(seq__14785__$1);
var G__14811 = cljs.core.chunk_rest(seq__14785__$1);
var G__14812 = c__8004__auto__;
var G__14813 = cljs.core.count(c__8004__auto__);
var G__14814 = (0);
seq__14785 = G__14811;
chunk__14786 = G__14812;
count__14787 = G__14813;
i__14788 = G__14814;
continue;
} else {
var vec__14792 = cljs.core.first(seq__14785__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14792,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14792,(1),null);
var temp__4655__auto___14815 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___14815)){
var effect_fn_14816 = temp__4655__auto___14815;
(effect_fn_14816.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14816.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14816.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}

var G__14817 = cljs.core.next(seq__14785__$1);
var G__14818 = null;
var G__14819 = (0);
var G__14820 = (0);
seq__14785 = G__14817;
chunk__14786 = G__14818;
count__14787 = G__14819;
i__14788 = G__14820;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14542__auto___14821 = re_frame.interop.now();
var duration__14543__auto___14822 = (end__14542__auto___14821 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14543__auto___14822,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__14542__auto___14821);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_14784;
}} else {
var seq__14795 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__14796 = null;
var count__14797 = (0);
var i__14798 = (0);
while(true){
if((i__14798 < count__14797)){
var vec__14799 = chunk__14796.cljs$core$IIndexed$_nth$arity$2(null,i__14798);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14799,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14799,(1),null);
var temp__4655__auto___14823 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___14823)){
var effect_fn_14824 = temp__4655__auto___14823;
(effect_fn_14824.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14824.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14824.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}

var G__14825 = seq__14795;
var G__14826 = chunk__14796;
var G__14827 = count__14797;
var G__14828 = (i__14798 + (1));
seq__14795 = G__14825;
chunk__14796 = G__14826;
count__14797 = G__14827;
i__14798 = G__14828;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14795);
if(temp__4657__auto__){
var seq__14795__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14795__$1)){
var c__8004__auto__ = cljs.core.chunk_first(seq__14795__$1);
var G__14829 = cljs.core.chunk_rest(seq__14795__$1);
var G__14830 = c__8004__auto__;
var G__14831 = cljs.core.count(c__8004__auto__);
var G__14832 = (0);
seq__14795 = G__14829;
chunk__14796 = G__14830;
count__14797 = G__14831;
i__14798 = G__14832;
continue;
} else {
var vec__14802 = cljs.core.first(seq__14795__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14802,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14802,(1),null);
var temp__4655__auto___14833 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___14833)){
var effect_fn_14834 = temp__4655__auto___14833;
(effect_fn_14834.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14834.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14834.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}

var G__14835 = cljs.core.next(seq__14795__$1);
var G__14836 = null;
var G__14837 = (0);
var G__14838 = (0);
seq__14795 = G__14835;
chunk__14796 = G__14836;
count__14797 = G__14837;
i__14798 = G__14838;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
var seq__14839 = cljs.core.seq(value);
var chunk__14840 = null;
var count__14841 = (0);
var i__14842 = (0);
while(true){
if((i__14842 < count__14841)){
var map__14843 = chunk__14840.cljs$core$IIndexed$_nth$arity$2(null,i__14842);
var map__14843__$1 = ((((!((map__14843 == null)))?((((map__14843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14843.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14843):map__14843);
var effect = map__14843__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14843__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14843__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__14839,chunk__14840,count__14841,i__14842,map__14843,map__14843__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__14839,chunk__14840,count__14841,i__14842,map__14843,map__14843__$1,effect,ms,dispatch))
,ms);
}

var G__14847 = seq__14839;
var G__14848 = chunk__14840;
var G__14849 = count__14841;
var G__14850 = (i__14842 + (1));
seq__14839 = G__14847;
chunk__14840 = G__14848;
count__14841 = G__14849;
i__14842 = G__14850;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14839);
if(temp__4657__auto__){
var seq__14839__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14839__$1)){
var c__8004__auto__ = cljs.core.chunk_first(seq__14839__$1);
var G__14851 = cljs.core.chunk_rest(seq__14839__$1);
var G__14852 = c__8004__auto__;
var G__14853 = cljs.core.count(c__8004__auto__);
var G__14854 = (0);
seq__14839 = G__14851;
chunk__14840 = G__14852;
count__14841 = G__14853;
i__14842 = G__14854;
continue;
} else {
var map__14845 = cljs.core.first(seq__14839__$1);
var map__14845__$1 = ((((!((map__14845 == null)))?((((map__14845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14845.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14845):map__14845);
var effect = map__14845__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14845__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14845__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__14839,chunk__14840,count__14841,i__14842,map__14845,map__14845__$1,effect,ms,dispatch,seq__14839__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__14839,chunk__14840,count__14841,i__14842,map__14845,map__14845__$1,effect,ms,dispatch,seq__14839__$1,temp__4657__auto__))
,ms);
}

var G__14855 = cljs.core.next(seq__14839__$1);
var G__14856 = null;
var G__14857 = (0);
var G__14858 = (0);
seq__14839 = G__14855;
chunk__14840 = G__14856;
count__14841 = G__14857;
i__14842 = G__14858;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if(!(cljs.core.sequential_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__14859 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__14860 = null;
var count__14861 = (0);
var i__14862 = (0);
while(true){
if((i__14862 < count__14861)){
var event = chunk__14860.cljs$core$IIndexed$_nth$arity$2(null,i__14862);
re_frame.router.dispatch(event);

var G__14863 = seq__14859;
var G__14864 = chunk__14860;
var G__14865 = count__14861;
var G__14866 = (i__14862 + (1));
seq__14859 = G__14863;
chunk__14860 = G__14864;
count__14861 = G__14865;
i__14862 = G__14866;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14859);
if(temp__4657__auto__){
var seq__14859__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14859__$1)){
var c__8004__auto__ = cljs.core.chunk_first(seq__14859__$1);
var G__14867 = cljs.core.chunk_rest(seq__14859__$1);
var G__14868 = c__8004__auto__;
var G__14869 = cljs.core.count(c__8004__auto__);
var G__14870 = (0);
seq__14859 = G__14867;
chunk__14860 = G__14868;
count__14861 = G__14869;
i__14862 = G__14870;
continue;
} else {
var event = cljs.core.first(seq__14859__$1);
re_frame.router.dispatch(event);

var G__14871 = cljs.core.next(seq__14859__$1);
var G__14872 = null;
var G__14873 = (0);
var G__14874 = (0);
seq__14859 = G__14871;
chunk__14860 = G__14872;
count__14861 = G__14873;
i__14862 = G__14874;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__14875 = cljs.core.seq(value);
var chunk__14876 = null;
var count__14877 = (0);
var i__14878 = (0);
while(true){
if((i__14878 < count__14877)){
var event = chunk__14876.cljs$core$IIndexed$_nth$arity$2(null,i__14878);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));

var G__14879 = seq__14875;
var G__14880 = chunk__14876;
var G__14881 = count__14877;
var G__14882 = (i__14878 + (1));
seq__14875 = G__14879;
chunk__14876 = G__14880;
count__14877 = G__14881;
i__14878 = G__14882;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14875);
if(temp__4657__auto__){
var seq__14875__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14875__$1)){
var c__8004__auto__ = cljs.core.chunk_first(seq__14875__$1);
var G__14883 = cljs.core.chunk_rest(seq__14875__$1);
var G__14884 = c__8004__auto__;
var G__14885 = cljs.core.count(c__8004__auto__);
var G__14886 = (0);
seq__14875 = G__14883;
chunk__14876 = G__14884;
count__14877 = G__14885;
i__14878 = G__14886;
continue;
} else {
var event = cljs.core.first(seq__14875__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));

var G__14887 = cljs.core.next(seq__14875__$1);
var G__14888 = null;
var G__14889 = (0);
var G__14890 = (0);
seq__14875 = G__14887;
chunk__14876 = G__14888;
count__14877 = G__14889;
i__14878 = G__14890;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if(!(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.db.app_db) : cljs.core.deref.call(null,re_frame.db.app_db)) === value))){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,value) : cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value));
} else {
return null;
}
}));
