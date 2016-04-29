'use strict';

function FacebookShare() {
    this.share = function(url){
        return 'http://www.facebook.com/sharer.php?u={0}'.format(url);
    };
}

function TwitterShare() {
    this.share = function(url){
        var shareString = 'https://twitter.com/share?url={0}&text={1}&via={2}&hashtags={2}';

        return shareString.format(url, socialMediaShareTitle, 'Comunicatedeafaceri.ro');
    };
}

function GooglePlusShare() {
    this.share = function(url){
        return 'https://plus.google.com/share?url={0}'.format(url);
    };
}

function PinterestShare() {
    this.share = function(url){
        var shareString = 'https://pinterest.com/pin/create/bookmarklet/?url={0}&description={1}&media={2}&is_video={3}';

        return shareString.format(url, socialMediaShareTitle, socialMediaShareImage, false);
    };
}

function LinkedinShare() {
    this.share = function(url){
        return 'http://www.linkedin.com/shareArticle?url={0}&title={1}'.format(url, socialMediaShareTitle);
    };
}

module.exports = function(options){
    var windowWidth = options.width || 500;
    var windowHeight = options.height || 380;

    var shares = {
        facebook: new FacebookShare(),
        twitter: new TwitterShare(),
        'google-plus': new GooglePlusShare(),
        pinterest: new PinterestShare(),
        linkedin: new LinkedinShare()
    };

    this.share = function(type, url){
        var shareUrlFormated = shares[type].share(url);

        window.open(shareUrlFormated, '_blank', "width={0},height={1}".format(windowWidth, windowHeight));
    }
};
