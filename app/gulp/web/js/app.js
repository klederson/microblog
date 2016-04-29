'use strict';

var $ = require('jquery');
var SocialMedia = require('./kisphp/SocialMedia');

require('./kisphp/StringFormat');
require('./custom/example');

$(function(){
    var SM = new SocialMedia({});

    //$('.social-icon a.social-button').click(function(e){
    //    e.preventDefault();
    //
    //    var socialType = $(this).data('social');
    //
    //    SM.share(socialType, socialMediaShareUrl);
    //});
});
