if (self.CavalryLogger) { CavalryLogger.start_js(["8aST5"]); }

__d("ViewableImpressionUtils",["csx","CSS"],(function(a,b,c,d,e,f,g){a={isHorizontallyOffscreen:function(a,c,d){var e=Math.max(c.x,0);d=Math.min(c.x+c.width,d.width);return d-e<c.width||b("CSS").matchesSelector(a,".desktop_hscroll_offscreen")}};e.exports=a}),null);
__d("FullViewLogger",["Banzai","ScriptPath","SubscriptionsHandler","URI"],(function(a,b,c,d,e,f){__p&&__p();var g;a=function(){"use strict";__p&&__p();function a(){}a.logFromViewableImpressionTracker=function(b){var c=new a();c.subscribeToTrackerEvents(b)};var c=a.prototype;c.subscribeToTrackerEvents=function(a){this.subscriptionsHandler=new(b("SubscriptionsHandler"))(),this.subscriptionsHandler.addSubscriptions(a.addListener("full_view",this.onFullView,this))};c.onFullView=function(a){this.$1()&&this.$2(a);a={token:a.token,fullViewType:a.fullViewType,scriptPath:b("ScriptPath").getTopViewEndpoint()};b("Banzai").post("xtrackable:full_view",a);this.$1()&&this.$3(a)};c.$1=function(){return 0};c.$2=function(a){};c.$3=function(a){};return a}();e.exports=a}),null);
__d("FBImpressionValidationUtils",["DataAttributeUtils"],(function(a,b,c,d,e,f){"use strict";a={getFBFeedLocation:function(a){try{a=JSON.parse(b("DataAttributeUtils").getDataFt(a));return a?a.fbfeed_location:null}catch(a){return null}}};e.exports=a}),null);
__d("ViewabilityFramework",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({VIEWABLE_TRACKER_BLUE:"current_blue",VIEWABLE_TRACKER_BLUE_RHC:"current_blue_rhc",VIEWABLE_TRACKER_BLUE_EXIT:"current_blue_exit",VIEWABLE_TRACKER_BLUE_AFTER_DEDUP:"current_blue_after_dedup",IMPRESSION_API_COMET_ENTER:"impression_api_comet_enter",IMPRESSION_API_COMET_EXIT:"impression_api_comet_exit",IMPRESSION_API_COMET_AFTER_DEDUP:"impression_api_comet_after_dedup",IMPRESSION_API_COMET_AFTER_DEDUP_ORIGINAL:"impression_api_comet_after_dedup_original",INTERSECTION_OBSERVER_BLUE:"intersection_observer_blue",INTERSECTION_OBSERVER_BLUE_RHC:"intersection_observer_blue_rhc",INTERSECTION_OBSERVER_BLUE_EXIT:"intersection_observer_blue_exit",INTERSECTION_OBSERVER_BLUE_AFTER_DEDUP:"intersection_observer_blue_after_dedup",SCROLL_BASED_BLUE:"scroll_based_blue",SCROLL_BASED_BLUE_RHC:"scroll_based_blue_rhc",INTERSECTION_OBSERVER_COMET:"intersection_observer_comet",INTERSECTION_OBSERVER_COMET_AFTER_DEDUP:"intersection_observer_comet_after_dedup",INTERSECTION_OBSERVER_COMET_AFTER_DEDUP_ORIGINAL:"intersection_observer_comet_after_dedup_original",INTERSECTION_OBSERVER_COMET_EXIT:"intersection_observer_comet_exit",SCROLL_COMET:"scroll_comet",SCROLL_COMET_AFTER_DEDUP:"scroll_comet_after_dedup",SCROLL_COMET_EXIT:"scroll_comet_exit",AD_UNIT_GENERIC_API_COMET:"ad_unit_generic_api_comet",AD_UNIT_GENERIC_API_COMET_EXIT:"ad_unit_generic_api_comet_exit",AD_UNIT_GENERIC_API_COMET_AFTER_DEDUP:"ad_unit_generic_api_comet_after_dedup",AD_UNIT_OBSERVER_COMET:"ad_unit_observer_comet",AD_UNIT_OBSERVER_COMET_EXIT:"ad_unit_observer_comet_exit",AD_UNIT_OBSERVER_COMET_AFTER_DEDUP:"ad_unit_observer_comet_after_dedup",AD_UNIT_SCROLL_COMET:"ad_unit_scroll_comet",AD_UNIT_SCROLL_COMET_EXIT:"ad_unit_scroll_comet_exit",AD_UNIT_SCROLL_COMET_AFTER_DEDUP:"ad_unit_scroll_comet_after_dedup",COMET_FULL_VIEW:"comet_full_view"})}),null);
__d("ViewableImpressionTracker",["csx","cx","requireCond","AdImpressionLoggingConfig","Banzai","BanzaiODS","BrowseClientEventLogger","DataAttributeUtils","DOM","FBFeedImpressionTopMarginGetter","FBImpressionValidationUtils","FBSiteWhiteOps","FeedAdXoutEventTracker","GHLDelay","GHLTestElement","NonBlockingIFrame","PercentVisible","Run","Style","URI","ViewabilityFramework","ViewableImpressionUtils","cr:1095627","ViewableSessionStore","Visibility","WebSession","WebStorage","ge","getCentralImpressionTimeAfterRefresh","getElementPosition","cr:943110","getViewportDimensions","ghlTestUBT","gkx","isImpressionTargetOccluded","mixInEventEmitter","randomInt","cr:1095628","ScriptPath"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i,j,k=b("FBFeedImpressionTopMarginGetter").getTopMargin,l=b("ViewableSessionStore").onEventLogged,m=(i||(i=b("WebStorage"))).getLocalStorage(),n="imp_seq_num";a=function(){"use strict";__p&&__p();function a(a,c,d){__p&&__p();var e=this;this.checkAndLogImpressionIfPendingOnExit=function(){b("AdImpressionLoggingConfig").enableFlushDelayLogOnCleanup&&e.waitForDelayLogged&&(clearTimeout(e.delayedLoggingTimeout),e.delayLogImpression())};this.delayLogImpression=function(){__p&&__p();e.waitForDelayLogged=!1;var a="other";e.element.id.startsWith("hyperfeed")&&(a="16");a=b("GHLTestElement").testElementI(e.element,".vit."+a);if(a){e.$14();b("AdImpressionLoggingConfig").logForHiddenAds&&e.logImpression(1,!0,{});return}e.logImpression(1,!1,{});e.$12()};this.id=a;this.element=c;this.config=d;this.iframe=null;this.viewableTimeout=null;this.delayedLoggingTimeout=null;this.clearSubsequentTimeout=null;this.waitForSubsequent=!1;this.waitForLogged=!1;this.waitForDelayLogged=!1;this.isNonViewableLogged=!1;this.isVisible=!1;this.iframeLogged=!1;this.banzaiLogged=!1;this.topLeftInViewport=!1;this.bottomRightInViewport=!1;this.isHidden=!0;this.lastInvisibleReason=null;this.isSubsequentImp=!1;this.lastHiddenCause="none";this.lastImpressedAt=null;this.lastEnterWithPercent=null;b("Run").onUnload(this.checkAndLogImpressionIfPendingOnExit);b("Run").onLeave(this.checkAndLogImpressionIfPendingOnExit);b("ghlTestUBT")(function(a){a===!0&&b("GHLDelay").setEnabled(!0)})}var c=a.prototype;c.getID=function(){return this.id};c.getConfig=function(){return this.config};c.getPercentInViewport=function(){var a=b("getViewportDimensions")(),c=b("getElementPosition")(this.element);return this.$1(a,c)};c.$2=function(a,c,d,e){__p&&__p();d===void 0&&(d=0);e===void 0&&(e=!1);var f={target_rect:c,root:{x:0,y:d,height:a.height-d,width:a.width}};if(c.height===0||c.width===0)return{rects:f,percentage:0,invisibleReason:"TARGET_SIZE_0"};var g=b("Style").get(this.element,"visibility")==="hidden",h=b("Style").get(this.element,"opacity")==="0";if(c.x<a.width&&c.x+c.width>0&&c.y<a.height&&c.y+c.height>d&&!g&&!h){var i=Math.max(c.x,0),j=Math.min(c.x+c.width,a.width);d=Math.max(c.y,d);a=Math.min(c.y+c.height,a.height);if(c.height*c.width===0)return{rects:f,percentage:100,invisibleReason:null};c=100*(j-i)*(a-d)/(c.height*c.width);var k=!1;if(c>0&&(e||this.config.should_not_log_on_occlusion)){k=b("isImpressionTargetOccluded")(this.element,{x:i,y:d,width:j-i,height:a-d});if(this.config.should_not_log_on_occlusion&&k)return{rects:f,percentage:0,invisibleReason:"IS_OCCLUDED"}}return{rects:f,percentage:c,invisibleReason:c>0?null:"NOT_IN_VIEWPORT",isOccluded:k}}return{rects:f,percentage:0,invisibleReason:g?"TARGET_HIDDEN":h?"TARGET_TRANSPARENT":"NOT_IN_VIEWPORT"}};c.$3=function(a,b,c){c===void 0&&(c=0);return this.$2(a,b,c).percentage};c.$4=function(a,c,d,e){d===void 0&&(d=0);e===void 0&&(e=!1);return this.config.require_horizontally_onscreen&&b("ViewableImpressionUtils").isHorizontallyOffscreen(this.element,c,a)?{rects:{target_rect:c},percentage:0,invisibleReason:"NOT_IN_VIEWPORT"}:this.$2(a,c,d,e)};c.$1=function(a,b,c){c===void 0&&(c=0);return this.$4(a,b,c).percentage};c.$5=function(a,c,d){a=this.$3(a,c,d);if(a===0)return b("PercentVisible").NO_VISIBLE;else if(a<50)return b("PercentVisible").VISIBLE_0_PCT;else if(a<100)return b("PercentVisible").VISIBLE_50_PCT;else return b("PercentVisible").VISIBLE_100_PCT};c.$6=function(a,c,d){d===void 0&&(d=0);var e=Math.max(c.y,d);c=Math.min(c.y+c.height,a.height);c=100*(c-e)/(a.height-d);if(c<50)return b("PercentVisible").VISIBLE_0_PCT;else if(c<100)return b("PercentVisible").VISIBLE_50_PCT;else return b("PercentVisible").VISIBLE_100_PCT};c.$7=function(a,c){__p&&__p();var d=0,e=b("ge")("pagelet_bluebar");e&&e.offsetHeight&&(d=e.offsetHeight+e.offsetTop);if(this.config.should_log_viewport_duration){e=this.$6(a,c,d);switch(e){case b("PercentVisible").VISIBLE_0_PCT:case b("PercentVisible").VISIBLE_50_PCT:case b("PercentVisible").VISIBLE_100_PCT:this.emit("viewport_viewability",{tracker:this,id:this.getID(),token:this.getToken(),percentVisible:e});break;default:break}}e=this.$5(a,c,d);switch(e){case b("PercentVisible").VISIBLE_0_PCT:case b("PercentVisible").VISIBLE_50_PCT:case b("PercentVisible").VISIBLE_100_PCT:this.emit("viewability",{tracker:this,id:this.getID(),token:this.getToken(),percentVisible:e});break;default:this.emit("hidden",{id:this.getID(),token:this.getToken()});break}};c.$8=function(a,c){if(b("Style").get(this.element,"visibility")==="hidden"||b("Style").get(this.element,"opacity")==="0")return!1;var d=c.x,e=c.y,f=c.x+c.width;c=c.y+c.height;this.topLeftInViewport=this.topLeftInViewport||d>=0&&d<=a.width&&e>=0&&e<=a.height;this.bottomRightInViewport=this.bottomRightInViewport||f>=0&&f<=a.width&&c>=0&&c<=a.height;return this.topLeftInViewport&&this.bottomRightInViewport};c.$9=function(a,b){if(this.hasEmittedFullViewEvent)return;this.$8(a,b)&&(this.emit("full_view",{tracker:this,id:this.getID(),token:this.getToken(),fullViewType:1}),this.hasEmittedFullViewEvent=!0)};c.$10=function(a,c,d,e,f){f===void 0&&(f=!1);a=a>0;d=d;a&&b("Visibility").isHidden()&&(a=!1,d="PAGE_VISIBILITY_HIDDEN");a&&this.isHidden?(this.lastImpressedAt=Date.now(),this.lastEnterWithPercent=c,this.logViewabilityEventsForAudit(c,this.lastInvisibleReason,e,f),this.isHidden=!1,b("cr:1095627")&&b("cr:1095627").onItemEnterViewport(b("ViewabilityFramework").VIEWABLE_TRACKER_BLUE,this.element),b("cr:1095628")&&b("cr:1095628")(b("ViewabilityFramework").VIEWABLE_TRACKER_BLUE,this.element,"enter","blue")):!a&&!this.isHidden&&(this.isHidden=!0,this.lastInvisibleReason=d,this.lastHiddenCause="none",b("gkx")("961555")&&this.logViewabilityExitEventsForAudit(e),b("cr:1095627")&&b("cr:1095627").onItemExitViewport(b("ViewabilityFramework").VIEWABLE_TRACKER_BLUE,this.element),b("cr:1095628")&&b("cr:1095628")(b("ViewabilityFramework").VIEWABLE_TRACKER_BLUE,this.element,"exit","blue"))};c.onVisible=function(a){__p&&__p();var c=this;a=this.isVisible;var d=b("getViewportDimensions")(),e=b("getElementPosition")(this.element),f=this.config.count_blue_bar_height?k():0;f=this.$4(d,e,f,this.config.detect_occlusion||!1);var g=f.percentage,h=f.invisibleReason,i=f.rects;f=f.isOccluded;var j=g>this.config.pixel_in_percentage;this.config.log_viewability_events_for_infra_validation&&this.$10(j,g,h,i,f);var l=[];h=[];(this.config.skip_imp_if_no_images||this.config.check_images_before_log)&&(l=Array.from(this.element.querySelectorAll("img")),h=Array.from(this.element.getElementsByClassName("_7cqq")),b("BanzaiODS").bumpEntityKey(2966,"feed_ads","ViewableImpressionTracker.delayLogImpression.isFeedLoadedCheck."+(l.length===0)+"."+(h.length===0)));if(this.config.skip_imp_if_no_images&&l.length===0){this.handleLogNonViewableOnInvisible(a);this.isVisible=!1;return}this.emit("visible",{tracker:this,id:this.getID(),token:this.getToken(),percentInViewport:g});this.config.should_log_viewability_duration&&this.$7(d,e);this.$9(d,e);if(!j){this.$11();this.handleLogNonViewableOnInvisible(a);this.isVisible=!1;return}this.isLogged()?this.$12():this.$13();i=this.config.fam_delivery_integrity_enable_user_hide_ads_check_and_is_feed?b("FeedAdXoutEventTracker").checkIfHidden(this.element):!1;this.isVisible=!(b("AdImpressionLoggingConfig").blockInvisible&&b("Visibility").isHidden())&&!i;f=this.isVisible&&!a;this.isVisible||this.handleLogNonViewableOnInvisible(a);(this.config.client_no_dedup?f:this.isVisible)&&!this.waitForLogged&&!this.waitForDelayLogged&&!this.isLogged()&&(this.waitForLogged=!0,this.viewableTimeout=setTimeout(function(){__p&&__p();c.waitForLogged=!1;if(b("AdImpressionLoggingConfig").blockInvisible&&b("Visibility").isHidden())return;var a=c.getPercentInViewport();a=a>c.config.pixel_in_percentage;if(!a){c.$14();return}c.config.check_images_before_log&&(l.length===0&&b("BanzaiODS").bumpEntityKey(2966,"feed_ads","ViewableImpressionTracker.log_without_load."+c.config.trackable_identifier));if(b("GHLDelay").getEnabled()&&c.config.can_delay_log_impression===!0){c.waitForDelayLogged=!0;a=b("AdImpressionLoggingConfig").maxHiddenCheckDelay;a=a-c.config.duration_in_ms;a<0&&(a=0);c.delayedLoggingTimeout=setTimeout(c.delayLogImpression,a)}else c.logImpression(1,!1,{}),c.$12()},this.config.duration_in_ms))};c.handleLogNonViewableOnInvisible=function(a){this.config.log_initial_nonviewable&&!this.isLogged()&&!this.isNonViewableLogged?this.logNonViewableImpression():!this.config.log_initial_nonviewable&&!this.isLogged()&&a&&this.logNonViewableImpression()};c.onHidden=function(a){__p&&__p();var c=this;this.lastHiddenCause=a;if(!this.isHidden){this.isHidden=!0;this.lastInvisibleReason="NOT_IN_VIEWPORT";if(b("gkx")("961555")){a=b("getViewportDimensions")();var d=b("getElementPosition")(this.element),e=k();this.logViewabilityExitEventsForAudit({target_rect:d,root:{x:0,y:e,height:a.height-e,width:a.width}})}b("cr:1095627")&&b("cr:1095627").onItemExitViewport(b("ViewabilityFramework").VIEWABLE_TRACKER_BLUE,this.element);b("cr:1095628")&&b("cr:1095628")(b("ViewabilityFramework").VIEWABLE_TRACKER_BLUE,this.element,"exit","blue")}this.emit("hidden",{id:this.getID(),token:this.getToken()});d=this.isVisible;this.handleLogNonViewableOnInvisible(d);this.isVisible=!1;this.waitForLogged&&(this.waitForLogged=!1,clearTimeout(this.viewableTimeout));this.config.client_no_dedup&&this.config.subsequent_gap_in_ms===0&&this.config.client_track_subsequent_impression?this.reset():this.isLogged()&&!this.waitForSubsequent&&this.config.subsequent_gap_in_ms>=0&&this.config.client_track_subsequent_impression&&(this.waitForSubsequent=!0,this.clearSubsequentTimeout=setTimeout(function(){c.waitForSubsequent=!1,c.reset(),c.isVisible&&c.onVisible()},this.config.subsequent_gap_in_ms));this.$14()};c.onRemoved=function(){this.isVisible=!1};c.getToken=function(){return b("DataAttributeUtils").getDataAttribute(this.element,"data-xt")};c.logViewabilityEventsForAudit=function(a,c,d,e){var f=this.getToken(),g=Math.floor(Date.now()/1e3),h=this.$15(),i=b("FBImpressionValidationUtils").getFBFeedLocation(this.element);f={xt:f,cts:g,csp:h,endpoint:b("ScriptPath").getTopViewEndpoint(),vp:a,fbfeed_location:i,scroll_speed:b("cr:943110")?b("cr:943110")():null,time_from_load:b("getCentralImpressionTimeAfterRefresh")(),sk:b("WebSession").getId(),pre_rs:c,sub_imp:this.isSubsequentImp,last_hidden_cause:this.lastHiddenCause,rects:d,behind_popout:e};g=babelHelpers["extends"]({},b("Banzai").VITAL);g.signal=!0;b("Banzai").post("viewability_events:"+(this.config.is_rhc?b("ViewabilityFramework").VIEWABLE_TRACKER_BLUE_RHC:b("ViewabilityFramework").VIEWABLE_TRACKER_BLUE),f,g);this.isSubsequentImp=!0};c.logViewabilityExitEventsForAudit=function(a){var c=this.getToken(),d=this.$15(),e=b("FBImpressionValidationUtils").getFBFeedLocation(this.element);c={xt:c,cts:this.lastImpressedAt,csp:d,endpoint:b("ScriptPath").getTopViewEndpoint(),duration:this.lastImpressedAt?Date.now()-this.lastImpressedAt:null,exit_rs:this.lastInvisibleReason,vp:0,fbfeed_location:e,scroll_speed:b("cr:943110")?b("cr:943110")():null,time_from_load:b("getCentralImpressionTimeAfterRefresh")(),sk:b("WebSession").getId(),pre_rs:null,pre_vp:this.lastEnterWithPercent,rects:a,last_hidden_cause:this.lastHiddenCause};d=babelHelpers["extends"]({},b("Banzai").VITAL);d.signal=!0;b("Banzai").post("viewability_events:"+b("ViewabilityFramework").VIEWABLE_TRACKER_BLUE_EXIT,c,d)};c.logImpression=function(a,c,d){__p&&__p();if(this.isLogged())return;var e=this.getToken(),f=Math.floor(Date.now()/1e3),g=this.$15(),h=Date.now()+"_"+(b("randomInt")(0,4294967295)+1);e={xt:e,isv:a,cts:f,csp:g,hba:c,etid:h,sender:"ViewableImpressionTracker"};this.config.should_log_endpoint_info&&(e.me=b("ScriptPath").getTopViewEndpoint());if(b("gkx")("940796")&&m){a=m.getItem(n);a==null&&(a=0);e.event_count=parseInt(a,10);m.setItem(n,e.event_count+1)}if(b("Banzai").isEnabled("xtrackable_clientview_batch")&&this.config.should_batch||this.config.vital_mode_for_ss||this.config.signal_mode_for_ss){e.transmission_channel="banzai";f=this.config.vital_mode_for_ss?babelHelpers["extends"]({},b("Banzai").VITAL):{};f.signal=this.config.signal_mode_for_ss;this.logWithBanzai(e,f);b("AdImpressionLoggingConfig").runBotDetection&&b("FBSiteWhiteOps").appendToWindow(h,"FACEBOOK_WEB_ADS","IMPRESSION")}else e.transmission_channel="iframe",this.logWithIFrame(Object.assign(e,d));if(b("gkx")("876709"))try{g=JSON.parse(b("DataAttributeUtils").getDataFt(this.element));c=g.page_id;a=g.top_level_post_id;f=g.fbfeed_location;c&&a&&l("page_post_impression",a,f)}catch(a){b("BanzaiODS").bumpEntityKey(2966,"impression_logging_debug","viewable_session_validation_exception."+a.message)}};c.logNonViewableImpression=function(){if(this.config.nonviewableEnabled){var a=this.getToken();b("Banzai").post("xtrackable:nonviewable",{xt:a})}this.isNonViewableLogged=!0};c.isLogged=function(){return this.iframeLogged||this.banzaiLogged};c.reset=function(){this.iframeLogged&&(this.iframeLogged=!1),this.iframe&&(b("DOM").remove(this.iframe),this.iframe=null),this.banzaiLogged&&(this.banzaiLogged=!1),this.isNonViewableLogged=!1,this.isVisible=!1,this.waitForLogged=!1,this.waitForDelayLogged=!1,this.waitForSubsequent=!1};c.logWithBanzai=function(a,c){this.banzaiLogged=!0;b("BrowseClientEventLogger").maybeLogClientViewEvent(a);b("Banzai").post("xtrackable:clientview_batch",a,c);b("cr:1095628")&&b("cr:1095628")(b("ViewabilityFramework").VIEWABLE_TRACKER_BLUE,this.element,"log","blue");if(this.config.log_viewability_events_for_infra_validation){c=babelHelpers["extends"]({},b("Banzai").VITAL);c.signal=!0;b("Banzai").post("viewability_events:"+b("ViewabilityFramework").VIEWABLE_TRACKER_BLUE_AFTER_DEDUP,babelHelpers["extends"]({},a,{fbfeed_location:b("FBImpressionValidationUtils").getFBFeedLocation(this.element),scroll_speed:b("cr:943110")?b("cr:943110")():null,time_from_load:b("getCentralImpressionTimeAfterRefresh")(),sk:b("WebSession").getId()}),c)}};c.logWithIFrame=function(a){this.iframeLogged=!0,this.config.is_instream_story?b("NonBlockingIFrame").loadIFrame(new(j||(j=b("URI")))(this.config.impressionURL).addQueryData(a).toString()):(this.iframe=b("DOM").create("iframe",{src:new(j||(j=b("URI")))(this.config.impressionURL).addQueryData(a).toString(),width:0,height:0,frameborder:0,scrolling:"no",className:"fbEmuTracking"}),this.iframe.setAttribute("aria-hidden","true"),b("DOM").appendContent(this.element,this.iframe))};c.$15=function(){__p&&__p();var a=b("DataAttributeUtils").getDataAttribute(this.element,"data-dedupekey");if(a===null)return null;var c=this.$16();if(c===null||c.length===0)return null;var d=c.length;while(--d>=0){var e=b("DataAttributeUtils").getDataAttribute(c[d],"data-dedupekey");if(e!==null&&a===e)break}return d+1};c.$16=function(){__p&&__p();var a=b("ge")("contentArea");if(a){var c="._5jmm";a=b("DOM").scry(a,c);return a.filter(function(a){return b("DataAttributeUtils").getDataAttribute(a,"data-dedupekey")})}else{c=b("ge")("m_newsfeed_stream");return c===null?null:c.getElementsByTagName("article")}};c.$17=function(){return 0};c.$11=function(){this.$17()&&(b("Style").set(this.element,"background-color","#abab9a"),b("Style").set(this.element,"outline","3px solid #abab9a"))};c.$13=function(){this.$17()&&(b("Style").set(this.element,"background-color","#e4f70a"),b("Style").set(this.element,"outline","3px solid #e4f70a"))};c.$14=function(){this.$17()&&(b("Style").set(this.element,"background-color",null),b("Style").set(this.element,"outline",null))};c.$12=function(){this.$17()&&(b("Style").set(this.element,"background-color","#047515"),b("Style").set(this.element,"outline","3px solid #047515"))};return a}();b("mixInEventEmitter")(a,{visible:!0,hidden:!0,full_view:!0,viewability:!0,viewport_viewability:!0,viewability_debug:!0});e.exports=a}),null);
__d("VisibilityUnitType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({FEED_UNIT:"feed_unit",VIEWPORT:"viewport"})}),null);
__d("ViewabilityDurationSegmentLogger",["Banzai","PercentVisible","ViewableImpressionTracker","VisibilityUnitType"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=8e3;a=function(){__p&&__p();a.logFromViewableImpressionTracker=function(b){var c=new a();c.subscribeToTrackerEvents(b)};function a(){this.$1=new Map(),this.$2=new Map(),this.$3=new Map(),this.$4=new Map(),this.$5=new Map()}var c=a.prototype;c.subscribeToTrackerEvents=function(a){a.addListener("viewability",this.onViewable.bind(this)),a.addListener("viewport_viewability",this.onViewport.bind(this)),a.addListener("hidden",this.onHidden.bind(this))};c.onViewable=function(a){__p&&__p();var c=a.id,d=a.percentVisible,e=Date.now(),f;switch(d){case b("PercentVisible").VISIBLE_0_PCT:d=this.$1.get(c);!d?this.$6(a,b("PercentVisible").VISIBLE_0_PCT,e,"feed_unit"):this.$7(d,c,e);d=this.$2.get(c);d&&(f=this.$8(d,c,e,!0),this.$9(f,c));d=this.$4.get(c);d&&(f=this.$8(d,c,e,!0),this.$9(f,c));break;case b("PercentVisible").VISIBLE_50_PCT:d=this.$1.get(c);!d?this.$6(a,b("PercentVisible").VISIBLE_0_PCT,e,"feed_unit"):this.$7(d,c,e);d=this.$2.get(c);!d?this.$6(a,b("PercentVisible").VISIBLE_50_PCT,e,"feed_unit"):this.$7(d,c,e);d=this.$4.get(c);d&&(f=this.$8(d,c,e,!0),this.$9(f,c));break;case b("PercentVisible").VISIBLE_100_PCT:d=this.$1.get(c);!d?this.$6(a,b("PercentVisible").VISIBLE_0_PCT,e,"feed_unit"):this.$7(d,c,e);d=this.$2.get(c);!d?this.$6(a,b("PercentVisible").VISIBLE_50_PCT,e,"feed_unit"):this.$7(d,c,e);d=this.$4.get(c);!d?this.$6(a,b("PercentVisible").VISIBLE_100_PCT,e,"feed_unit"):this.$7(d,c,e);break}};c.onViewport=function(a){__p&&__p();var c=a.id,d=a.percentVisible,e=Date.now(),f;switch(d){case b("PercentVisible").VISIBLE_0_PCT:d=this.$3.get(c);d&&(f=this.$8(d,c,e,!0),this.$9(f,c));d=this.$5.get(c);d&&(f=this.$8(d,c,e,!0),this.$9(f,c));break;case b("PercentVisible").VISIBLE_50_PCT:d=this.$3.get(c);!d?this.$6(a,b("PercentVisible").VISIBLE_50_PCT,e,"viewport"):this.$7(d,c,e);d=this.$5.get(c);d&&(f=this.$8(d,c,e,!0),this.$9(f,c));break;case b("PercentVisible").VISIBLE_100_PCT:d=this.$3.get(c);!d?this.$6(a,b("PercentVisible").VISIBLE_50_PCT,e,"viewport"):this.$7(d,c,e);d=this.$5.get(c);!d?this.$6(a,b("PercentVisible").VISIBLE_100_PCT,e,"viewport"):this.$7(d,c,e);break}};c.onHidden=function(a){a=a.id;var b=Date.now(),c=this.$1.get(a),d=this.$2.get(a),e=this.$3.get(a),f=this.$4.get(a),g=this.$5.get(a);c&&this.$9(this.$8(c,a,b,!0),a);d&&this.$9(this.$8(d,a,b,!0),a);e&&this.$9(this.$8(e,a,b,!0),a);f&&this.$9(this.$8(f,a,b,!0),a);g&&this.$9(this.$8(g,a,b,!0),a)};c.$6=function(a,c,d,e){d={token:a.token,startedTrackingTS:d,percentVisible:c,visibilityUnit:e,intervalMs:0,cumulativeMs:0,segmentIdx:0};switch(c){case b("PercentVisible").VISIBLE_0_PCT:this.$1.set(a.id,d);break;case b("PercentVisible").VISIBLE_50_PCT:e==="feed_unit"?this.$2.set(a.id,d):this.$3.set(a.id,d);break;case b("PercentVisible").VISIBLE_100_PCT:e==="feed_unit"?this.$4.set(a.id,d):this.$5.set(a.id,d);break}};c.$8=function(a,c,d,e){__p&&__p();d=d-a.startedTrackingTS;var f=d-a.cumulativeMs,g=a.percentVisible;f={token:a.token,startedTrackingTS:a.startedTrackingTS,percentVisible:g,visibilityUnit:a.visibilityUnit,intervalMs:f,cumulativeMs:d,segmentIdx:++a.segmentIdx};e&&(f.duration=d);switch(g){case b("PercentVisible").VISIBLE_0_PCT:this.$1.set(c,f);break;case b("PercentVisible").VISIBLE_50_PCT:a.visibilityUnit==="feed_unit"?this.$2.set(c,f):this.$3.set(c,f);break;case b("PercentVisible").VISIBLE_100_PCT:a.visibilityUnit==="feed_unit"?this.$4.set(c,f):this.$5.set(c,f);break}return f};c.$7=function(a,c,d){var e=a.intervalMs,f=d-a.startedTrackingTS-a.cumulativeMs;if(this.$10(e,f)){e=this.$8(a,c,d,!1);b("Banzai").post("xtrackable:viewability",e,b("Banzai").VITAL)}};c.$10=function(a,b){if(a>=g)return!1;if(a==0)return!0;if(a<1e3)return b>=1e3;a=a/1e3;b=b/1e3;return b>=2*a};c.$9=function(a,c){var d=a.percentVisible;switch(d){case b("PercentVisible").VISIBLE_0_PCT:this.$1["delete"](c);break;case b("PercentVisible").VISIBLE_50_PCT:a.visibilityUnit==="feed_unit"?this.$2["delete"](c):this.$3["delete"](c);break;case b("PercentVisible").VISIBLE_100_PCT:a.visibilityUnit==="feed_unit"?this.$4["delete"](c):this.$5["delete"](c);break}b("Banzai").post("xtrackable:viewability",a,b("Banzai").VITAL)};return a}();e.exports=a}),null);
__d("ViewableImpressionDurationLogger",["Banzai"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();a.logFromViewableImpressionTracker=function(b){var c=new a();c.subscribeToTrackerEvents(b)};function a(){this.$1=new Map()}var c=a.prototype;c.subscribeToTrackerEvents=function(a){a.addListener("visible",this.onElementVisible.bind(this)),a.addListener("hidden",this.onElementHidden.bind(this))};c.onElementVisible=function(a){if(this.$1.get(a.id))return null;var b={token:a.token,startedTrackingTS:this.getTimeNow()};this.$1.set(a.id,b);return b};c.onElementHidden=function(a){var b=this.$1.get(a.id);if(!b)return!1;b.trackingDuration=this.getTimeNow()-b.startedTrackingTS;return this.sendLog(a.id)};c.sendLog=function(a){var c=this.$1.get(a);if(!c||!c.trackingDuration)return!1;b("Banzai").post("xtrackable:duration",c);this.$1["delete"](a);return!0};c.getTimeNow=function(){return parseFloat((Date.now()/1e3).toFixed(2))};return a}();e.exports=a}),null);
__d("ViewableImpressionHeatmapLogger",["Banzai"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();a.logFromViewableImpressionTracker=function(b,c){c=new a(c);c.subscribeToTrackerEvents(b)};function a(a){this.loggingDurationMS=a,this.trackingEntries={}}var c=a.prototype;c.subscribeToTrackerEvents=function(a){this.visibleSubscription=a.addListener("visible",this.onElementVisible,this),this.hiddenSubscription=a.addListener("hidden",this.onElementHidden,this)};c.onElementVisible=function(a){var b=this.getCurrentTimestamp(),c=this.trackingEntries[a.id];c||(c=this.createTrackingEntry(a),this.beginTracking(a.id,c),b=c.startedTrackingTS);c.viewportProgressEvents.push({timestamp:b,percentInViewport:a.percentInViewport.toFixed(2)})};c.onElementHidden=function(a){var b=this.getCurrentTimestamp();a=this.trackingEntries[a.id];if(!a)return;a.viewportProgressEvents.push({timestamp:b,percentInViewport:0})};c.onTrackingCompleted=function(a){var b=this.trackingEntries[a];b.viewportProgressEvents.push({timestamp:this.getCurrentTimestamp(),percentInViewport:b.tracker.getPercentInViewport().toFixed(2)});this.$1()&&this.$2(a,b);this.logToServer(b);delete this.trackingEntries[a]};c.logToServer=function(a){a=a;delete a.tracker;b("Banzai").post("xtrackable:heatmap",a)};c.beginTracking=function(a,b){var c=this;this.trackingEntries[a]=b;setTimeout(function(){return c.onTrackingCompleted(a)},this.loggingDurationMS)};c.createTrackingEntry=function(a){return{tracker:a.tracker,token:a.token,startedTrackingTS:this.getCurrentTimestamp(),viewportProgressEvents:[]}};c.getCurrentTimestamp=function(){return(Date.now()/1e3).toFixed(2)};c.$1=function(){return 0};c.$2=function(a,b){var c="Completed tracking for id "+a+" token="+b.token+" startedTrackingTS="+b.startedTrackingTS+"\n";b.viewportProgressEvents.forEach(function(a){c+="% in view: "+a.percentInViewport+" timestamp="+a.timestamp+"\n"})};return a}();e.exports=a}),null);
__d("ViewableImpressionEventHandler",["DataAttributeUtils","FullViewLogger","ViewabilityDurationSegmentLogger","ViewableImpressionDurationLogger","ViewableImpressionHeatmapLogger","ViewableImpressionTracker","VisibilityTracking"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=1;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.extraInit=function(){this.impressionTrackers={}};d.getDataFromConfig=function(b){a.prototype.getDataFromConfig.call(this,b),this.doHeatmapLogging=b.doHeatmapLogging,this.heatmapLoggingDurationMS=b.heatmapLoggingDurationMS,b.impressionURL=b.impressionURL!==void 0?b.impressionURL:"/xti.php",b.nonviewableEnabled=b.nonviewableEnabled!==void 0?b.nonviewableEnabled:!1};d.getImpressionTracking=function(a){__p&&__p();var c=this.getElementID(a),d=this.impressionTrackers[c];if(!d){var e=babelHelpers["extends"]({},this.getConfigFromElement(a),this.config);d=new(b("ViewableImpressionTracker"))(c,a,e);this.impressionTrackers[c]=d;e.log_impression_duration&&b("ViewableImpressionDurationLogger").logFromViewableImpressionTracker(d);this.doHeatmapLogging&&b("ViewableImpressionHeatmapLogger").logFromViewableImpressionTracker(d,this.heatmapLoggingDurationMS);e.should_log_full_views&&b("FullViewLogger").logFromViewableImpressionTracker(d);e.should_log_viewability_duration&&b("ViewabilityDurationSegmentLogger").logFromViewableImpressionTracker(d)}return d};d.handleEvent=function(a,b){var c=this.getImpressionTracking(a);if(!c)return;if(b.name==="visible")c.onVisible(b),this.visibleElementInfo[c.getID()]||(this.visibleElementInfo[c.getID()]={elem:a});else if(b.name==="hidden"){a=c.getConfig();b.cause==="default"||a.log_visibility_hidden_when_browser_inactive&&b.cause==="browser"||a.addCauseToAllHiddenEvents&&(b.cause==="updateVisible"||b.cause==="unload")?(c.onHidden(b.cause),delete this.visibleElementInfo[c.getID()]):b.cause==="removed"&&(c.onRemoved(),delete this.visibleElementInfo[c.getID()],delete this.impressionTrackers[c.getID()])}};d.isInstreamAdStoryElement=function(a){a=babelHelpers["extends"]({},this.getConfigFromElement(a),this.config);return!!a.is_instream_story};d.getConfigFromElement=function(a){return JSON.parse(b("DataAttributeUtils").getDataAttribute(a,"data-xt-vimp"))};d.getElementID=function(a){a.getAttribute("id")||a.setAttribute("id","xt_uniq_"+g++);return a.getAttribute("id")};return c}(b("VisibilityTracking"));e.exports=a}),null);
__d("ViewableImpressionTracking",["Arbiter","DesktopHscrollUnitEventConstants","ErrorUtils","LitestandMessages","Run","ViewableImpressionConfig","ViewableImpressionEventHandler"],(function(a,b,c,d,e,f){var g;a={init:function(){b("ViewableImpressionEventHandler").instance===void 0&&(b("ViewableImpressionEventHandler").instance=new(b("ViewableImpressionEventHandler"))(b("ViewableImpressionConfig")),b("ViewableImpressionEventHandler").instance.listeners.addSubscriptions(b("Arbiter").subscribe([b("LitestandMessages").STORIES_INSERTED,"AdsRefreshHandler/AdsLoaded","MPPInsights/ChartView","PhotoSnowliftAds/displayUnits","WebMessengerAdsControl/adjustAds",b("DesktopHscrollUnitEventConstants").HSCROLL_ITEM_INSERTED_EVENT,"WebVideoChannelAds/AdsLoaded","Stories/cardChanged"],(g||(g=b("ErrorUtils"))).guard(function(a){b("ViewableImpressionEventHandler").instance.refreshAndFireEvent(a)},"ViewableImpressionTracking")))),b("Run").onLoad(function(){b("ViewableImpressionEventHandler").instance.refreshAndFireEvent()})}};e.exports=a}),null);