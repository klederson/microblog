'use strict';

var $ = require('jquery');
//var SocialMedia = require('./kisphp/SocialMedia');
var foundation = require('foundation-sites');

require('./kisphp/StringFormat');
require('./custom/example');

$(document).ready(function(){

    $(document).foundation();

    //var SM = new SocialMedia({});

    //$('.social-icon a.social-button').click(function(e){
    //    e.preventDefault();
    //
    //    var socialType = $(this).data('social');
    //
    //    SM.share(socialType, socialMediaShareUrl);
    //});
});
