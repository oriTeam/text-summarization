if (self.CavalryLogger) { CavalryLogger.start_js(["qM0SB"]); }

__d("XUISubNavigation",["cx","CSS","Event","Parent","SubscriptionsHandler","URI","XUISubNavigationLoader"],(function(a,b,c,d,e,f,g){__p&&__p();var h,i="_8ue",j="_2yaa",k=!1;a=function(){"use strict";__p&&__p();function a(a,c,d){__p&&__p();var e=this;d===void 0&&(d=!1);this.$1=a;this.$3=d;b("XUISubNavigationLoader").registerHandler(function(a){return e.$4(a)});this.$2=new(b("SubscriptionsHandler"))();this.$2&&this.$2.addSubscriptions(b("Event").listen(this.$1,"click",function(a){a=b("Parent").byClass(a.target,j);a instanceof HTMLElement&&a.getAttribute("data-endpoint")&&b("XUISubNavigationLoader").setSelected(a,e.$3)}),b("Event").listen(this.$1,"focusin",this.$5.bind(this)),b("Event").listen(this.$1,"focusout",this.$6.bind(this)),b("XUISubNavigationLoader").onLeave(this.destroy.bind(this)));c&&(this.$2&&this.$2.addSubscriptions(b("Event").listen(c,"click",function(a){a.preventDefault(),b("CSS").addClass(e.$1,"_5rll"),b("Event").fire(e.$1,"resize")})))}var c=a.prototype;c.destroy=function(){this.$2&&this.$2.release(),this.$2=null};c.$5=function(a){a=b("Parent").byClass(a.target,j);a&&b("CSS").addClass(a,i)};c.$6=function(a){var c=b("Parent").byClass(a.target,j);c&&!c.contains(a.relatedTarget)&&b("CSS").removeClass(c,i)};c.$4=function(a){__p&&__p();if(k){k=!1;return!1}var c=a.getPath(),d=Array.prototype.find.call(this.$1.getElementsByTagName("a"),function(a){return new(h||(h=b("URI")))(a.href).getPath()===c&&a.hasAttribute("data-endpoint")});if(d){var e=b("Parent").byClass(d,j);if(e instanceof HTMLElement){b("XUISubNavigationLoader").sendRequest(a,new(h||(h=b("URI")))(d.getAttribute("data-endpoint")),e,this.$3);return!0}return!1}return!1};a.skipNextTransition=function(){k=!0};return a}();e.exports=a}),null);
__d("VideoChannelViewVariablesDynamic",["VideoChannelViewVariables"],(function(a,b,c,d,e,f){"use strict";e.exports=b("VideoChannelViewVariables")}),null);
__d("ReactCSSTransitionGroupChild",["React","ReactDOM","ReactTransitionEvents","fbjs/lib/CSSCore"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=17;c=(a=b("React")).createClass({displayName:"ReactCSSTransitionGroupChild",propTypes:{name:a.PropTypes.oneOfType([a.PropTypes.string,a.PropTypes.shape({enter:a.PropTypes.string,leave:a.PropTypes.string,active:a.PropTypes.string}),a.PropTypes.shape({enter:a.PropTypes.string,enterActive:a.PropTypes.string,leave:a.PropTypes.string,leaveActive:a.PropTypes.string,appear:a.PropTypes.string,appearActive:a.PropTypes.string})]).isRequired,appear:a.PropTypes.bool,enter:a.PropTypes.bool,leave:a.PropTypes.bool,appearTimeout:a.PropTypes.number,enterTimeout:a.PropTypes.number,leaveTimeout:a.PropTypes.number},transition:function(a,c,d){__p&&__p();var e=b("ReactDOM").findDOMNode(this);if(!e){c&&c();return}var f=this.props.name[a]||this.props.name+"-"+a,g=this.props.name[a+"Active"]||f+"-active",h=null;a=function a(d){if(d&&d.target!==e)return;clearTimeout(h);b("fbjs/lib/CSSCore").removeClass(e,f);b("fbjs/lib/CSSCore").removeClass(e,g);b("ReactTransitionEvents").removeEndEventListener(e,a);c&&c()};b("fbjs/lib/CSSCore").addClass(e,f);this.queueClassAndNode(g,e);d?(h=setTimeout(a,d),this.transitionTimeouts.push(h)):b("ReactTransitionEvents").addEndEventListener(e,a)},queueClassAndNode:function(a,b){this.classNameAndNodeQueue.push({className:a,node:b}),this.timeout||(this.timeout=setTimeout(this.flushClassNameAndNodeQueue,g))},flushClassNameAndNodeQueue:function(){this.isMounted()&&this.classNameAndNodeQueue.forEach(function(a){b("fbjs/lib/CSSCore").addClass(a.node,a.className)}),this.classNameAndNodeQueue.length=0,this.timeout=null},UNSAFE_componentWillMount:function(){this.classNameAndNodeQueue=[],this.transitionTimeouts=[]},componentWillUnmount:function(){this.timeout&&clearTimeout(this.timeout),this.transitionTimeouts.forEach(function(a){clearTimeout(a)}),this.classNameAndNodeQueue.length=0},componentWillAppear:function(a){this.props.appear?this.transition("appear",a,this.props.appearTimeout):a()},componentWillEnter:function(a){this.props.enter?this.transition("enter",a,this.props.enterTimeout):a()},componentWillLeave:function(a){this.props.leave?this.transition("leave",a,this.props.leaveTimeout):a()},render:function(){return b("React").Children.only(this.props.children)}});e.exports=c}),null);
__d("ReactTransitionChildMapping",["React","emptyFunction","warning"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("emptyFunction");c={getChildMapping:function(a){if(!a)return a;var c={};b("React").Children.toArray(a).forEach(function(a){var b=a.key,d=c[b]===void 0;d&&(c[b]=a)});return c},mergeChildMappings:function(a,b){__p&&__p();a=a||{};b=b||{};function c(c){if(Object.prototype.hasOwnProperty.call(b,c))return b[c];else return a[c]}var d={},e=[];for(var f in a)Object.prototype.hasOwnProperty.call(b,f)?e.length&&(d[f]=e,e=[]):e.push(f);var g,h={};for(var i in b){if(Object.prototype.hasOwnProperty.call(d,i))for(g=0;g<d[i].length;g++){var j=d[i][g];h[d[i][g]]=c(j)}h[i]=c(i)}for(g=0;g<e.length;g++)h[e[g]]=c(e[g]);return h}};e.exports=c}),null);
__d("ReactTransitionGroup",["React","ReactTransitionChildMapping","fbjs/lib/emptyFunction"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={children:b("ReactTransitionChildMapping").getChildMapping(d.props.children)},d.performAppear=function(a){d.currentlyTransitioningKeys[a]=!0;var b=d.refs[a];b.componentWillAppear?b.componentWillAppear(d.$1.bind(babelHelpers.assertThisInitialized(d),a)):d.$1(a)},d.$1=function(a){var c=d.refs[a];c.componentDidAppear&&c.componentDidAppear();delete d.currentlyTransitioningKeys[a];c=b("ReactTransitionChildMapping").getChildMapping(d.props.children);(!c||!Object.prototype.hasOwnProperty.call(c,a))&&d.performLeave(a)},d.performEnter=function(a){d.currentlyTransitioningKeys[a]=!0;var b=d.refs[a];b.componentWillEnter?b.componentWillEnter(d.$2.bind(babelHelpers.assertThisInitialized(d),a)):d.$2(a)},d.$2=function(a){var c=d.refs[a];c.componentDidEnter&&c.componentDidEnter();delete d.currentlyTransitioningKeys[a];c=b("ReactTransitionChildMapping").getChildMapping(d.props.children);(!c||!Object.prototype.hasOwnProperty.call(c,a))&&d.performLeave(a)},d.performLeave=function(a){d.currentlyTransitioningKeys[a]=!0;var b=d.refs[a];b.componentWillLeave?b.componentWillLeave(d.$3.bind(babelHelpers.assertThisInitialized(d),a)):d.$3(a)},d.$3=function(a){var c=d.refs[a];c.componentDidLeave&&c.componentDidLeave();delete d.currentlyTransitioningKeys[a];c=b("ReactTransitionChildMapping").getChildMapping(d.props.children);c&&Object.prototype.hasOwnProperty.call(c,a)?d.performEnter(a):d.setState(function(b){b=Object.assign({},b.children);delete b[a];return{children:b}})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.UNSAFE_componentWillMount=function(){this.currentlyTransitioningKeys={},this.keysToEnter=[],this.keysToLeave=[]};d.componentDidMount=function(){var a=this.state.children;for(var b in a)a[b]&&this.performAppear(b)};d.UNSAFE_componentWillReceiveProps=function(a){__p&&__p();a=b("ReactTransitionChildMapping").getChildMapping(a.children);var c=this.state.children;this.setState({children:b("ReactTransitionChildMapping").mergeChildMappings(c,a)});var d;for(d in a){var e=c&&Object.prototype.hasOwnProperty.call(c,d);a[d]&&!e&&!this.currentlyTransitioningKeys[d]&&this.keysToEnter.push(d)}for(d in c){e=a&&Object.prototype.hasOwnProperty.call(a,d);c[d]&&!e&&!this.currentlyTransitioningKeys[d]&&this.keysToLeave.push(d)}};d.componentDidUpdate=function(){var a=this.keysToEnter;this.keysToEnter=[];a.forEach(this.performEnter);a=this.keysToLeave;this.keysToLeave=[];a.forEach(this.performLeave)};d.render=function(){__p&&__p();var a=[];for(var c in this.state.children){var d=this.state.children[c];d&&a.push(b("React").cloneElement(this.props.childFactory(d),{ref:c,key:c}))}d=Object.assign({},this.props);delete d.transitionLeave;delete d.transitionName;delete d.transitionAppear;delete d.transitionEnter;delete d.childFactory;delete d.transitionLeaveTimeout;delete d.transitionEnterTimeout;delete d.transitionAppearTimeout;delete d.component;return b("React").createElement(this.props.component,d,a)};return c}(b("React").Component);a.displayName="ReactTransitionGroup";a.propTypes={component:b("React").PropTypes.any,childFactory:b("React").PropTypes.func};a.defaultProps={component:"span",childFactory:b("fbjs/lib/emptyFunction").thatReturnsArgument};e.exports=a}),null);
__d("ReactCSSTransitionGroup",["React","ReactCSSTransitionGroupChild","ReactTransitionGroup"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){var b="transition"+a+"Timeout",c="transition"+a;return function(a){if(a[c])if(a[b]==null)return new Error(b+" wasn't supplied to ReactCSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");else if(typeof a[b]!=="number")return new Error(b+" must be a number (in milliseconds)")}}d=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(a){return b("React").createElement(b("ReactCSSTransitionGroupChild"),{name:d.props.transitionName,appear:d.props.transitionAppear,enter:d.props.transitionEnter,leave:d.props.transitionLeave,appearTimeout:d.props.transitionAppearTimeout,enterTimeout:d.props.transitionEnterTimeout,leaveTimeout:d.props.transitionLeaveTimeout},a)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){return b("React").createElement(b("ReactTransitionGroup"),Object.assign({},this.props,{childFactory:this.$1}))};return c}((c=b("React")).Component);d.displayName="ReactCSSTransitionGroup";d.propTypes={transitionName:b("ReactCSSTransitionGroupChild").propTypes.name,transitionAppear:c.PropTypes.bool,transitionEnter:c.PropTypes.bool,transitionLeave:c.PropTypes.bool,transitionAppearTimeout:a("Appear"),transitionEnterTimeout:a("Enter"),transitionLeaveTimeout:a("Leave")};d.defaultProps={transitionAppear:!1,transitionEnter:!0,transitionLeave:!0};e.exports=d}),null);