if (self.CavalryLogger) { CavalryLogger.start_js(["ewtY7"]); }

__d("Button.react",["cx","AbstractButton.react","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=b("React").PropTypes;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props.use||"default",c=this.props.size||"medium";c="_42fu"+(a==="special"?" _42gz":"")+(a==="confirm"?" _42g-":"")+(c==="large"?" _42gy":"")+(this.props.suppressed?" _42gx":"")+(a!=="default"?" selected":"");return b("React").jsx(b("AbstractButton.react"),babelHelpers["extends"]({},this.props,{label:this.props.label,className:b("joinClasses")(this.props.className,c)}))};return c}(b("React").Component);c.propTypes={use:a.oneOf(["special","confirm","default"]),size:a.oneOf(["medium","large"]),suppressed:a.bool};e.exports=c}),null);
__d("TabBar",["ArbiterMixin","ReactDOM","mixin"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(d,e,f){var g;g=a.call(this)||this;e.props=babelHelpers["extends"]({},e.props,{onTabClick:function(a){return g.inform(c.TAB_CLICK,a)}});b("ReactDOM").render(d(e),f);return g}return c}(b("mixin")(b("ArbiterMixin")));a.TAB_CLICK="onTabClick";e.exports=a}),null);
__d("XPageRecommendationFeedAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/social_rex/page_feed/",{page_id:{type:"Int",required:!0},sort_order:{type:"Enum",required:!0,enumType:1},feed_container_id:{type:"String",required:!0}})}),null);
__d("PageRecommendationFeedController",["AsyncRequest","Run","SubscriptionsHandler","TabBar","XPageRecommendationFeedAsyncController"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports={initializeTab:function(a,c){var d=this,e=new(b("SubscriptionsHandler"))();e.addSubscriptions(a.subscribe(b("TabBar").TAB_CLICK,function(a,e){d.toggleLoadingSpinner_(!0);d.updateFeedContainer_();a=b("XPageRecommendationFeedAsyncController").getURIBuilder().setInt("page_id",c).setEnum("sort_order",e).setString("feed_container_id",d.feedContainer_.id).getURI();new(b("AsyncRequest"))().setURI(a).setFinallyHandler(function(a){d.toggleLoadingSpinner_(!1)}).send()}));b("Run").onLeave(function(){return e.release()})},setLoadingSpinner:function(a){this.loadingSpinner_=a},setFeedContainer:function(a){window.feedContainer=a,this.version_=0,this.feedContainer_=a},updateFeedContainer_:function(){this.feedContainer_.id="feed_container"+this.version_++;while(this.feedContainer_.firstChild)this.feedContainer_.removeChild(this.feedContainer_.firstChild)},toggleLoadingSpinner_:function(a){this.loadingSpinner_.style.display=a?"block":"none"}}}),null);
__d("TabBarShim",["DOMContainer.react","React","isNode"],(function(a,b,c,d,e,f){__p&&__p();a=function a(c){__p&&__p();var d;c.children&&(d=c.children.map(function(c,d){if(typeof c==="object"&&typeof c.ctor==="function")return a(c);else if(b("isNode")(c)){d=b("React").jsx(b("DOMContainer.react"),{children:c},"TabBarShim-"+d);return d}else return c}),d.length===1&&(d=d[0]));var e=c.ctor;return b("React").jsx(e,babelHelpers["extends"]({},c.props,{children:d}))};e.exports=a}),null);
__d("QuickMarkersBlue",["Banzai","GeneratedLoggerUtils","performanceNow"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h,i;function a(a){h=a.cavalry_lid,i=a.weight,j("ClientInit")}function j(a){if(h==null)return;var c=Math.floor((g||(g=b("performanceNow")))());k({cavalry_lid:h,marker_id:a,page_time:c,weight:i})}function k(a){b("GeneratedLoggerUtils").log("logger:QuickMarkersBlueLoggerConfig",a,b("Banzai").VITAL)}e.exports={init:a,mark:j}}),null);
__d("XWoodhengeSignupFlowDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/becomesupporter/dialog/",{page_id:{type:"FBID",required:!0},surface:{type:"String"},entrypoint_surface:{type:"String"},post_id:{type:"String"}})}),null);