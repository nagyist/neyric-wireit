if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/terminal-input/terminal-input.js']) {
   __coverage__['build/terminal-input/terminal-input.js'] = {"path":"build/terminal-input/terminal-input.js","s":{"1":0,"2":0,"3":0},"b":{},"f":{"1":0,"2":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":26},"end":{"line":1,"column":45}}},"2":{"name":"(anonymous_2)","line":18,"loc":{"start":{"line":18,"column":16},"end":{"line":18,"column":28}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":44,"column":44}},"2":{"start":{"line":16,"column":0},"end":{"line":41,"column":3}},"3":{"start":{"line":19,"column":4},"end":{"line":19,"column":30}}},"branchMap":{},"code":["(function () { YUI.add('terminal-input', function (Y, NAME) {","","/**"," * @module terminal-input"," */","","'use strict';","","/**"," * Class that extends Terminal to differenciate Input/Output terminals"," * @class TerminalInput"," * @extends Terminal"," * @constructor"," * @param {Object} oConfigs The user configuration for the instance."," */","Y.TerminalInput = Y.Base.create(\"terminal-input\", Y.Terminal, [], {","","  getClassName: function(n) {","    return \"yui3-terminal-\"+n;","  }","","}, {","  ATTRS: {","","    dir: {","      value: [-0.3, 0]","    },","","    ddGroupsDrag: {","      value: ['input']","    },","","    ddGroupsDrop: {","      value: ['output']","    }","","    // TODO","    // nMaxWires: 1,","","  }","});","","","}, '@VERSION@', {\"requires\": [\"terminal\"]});","","}());"]};
}
var __cov_TH7Q83r5C61TH$2o6FLSig = __coverage__['build/terminal-input/terminal-input.js'];
__cov_TH7Q83r5C61TH$2o6FLSig.s['1']++;YUI.add('terminal-input',function(Y,NAME){'use strict';__cov_TH7Q83r5C61TH$2o6FLSig.f['1']++;__cov_TH7Q83r5C61TH$2o6FLSig.s['2']++;Y.TerminalInput=Y.Base.create('terminal-input',Y.Terminal,[],{getClassName:function(n){__cov_TH7Q83r5C61TH$2o6FLSig.f['2']++;__cov_TH7Q83r5C61TH$2o6FLSig.s['3']++;return'yui3-terminal-'+n;}},{ATTRS:{dir:{value:[-0.3,0]},ddGroupsDrag:{value:['input']},ddGroupsDrop:{value:['output']}}});},'@VERSION@',{'requires':['terminal']});
