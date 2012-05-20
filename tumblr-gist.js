/* This script is based on this one: https://gist.github.com/2090021
 * Differences: - shorter, less commented (if you want an explanation of how
 *                this works, check the original. It's pretty well explained)
 *              - allows query string parameters in gist urls (such as `file`)
 */

/* USAGE: include this in a <script> tag at the end of <body>,
 * and use <a href="{gist-url}"></a> instead of <script> tags to
 * embed
 */

var real_docwrite = document.write,
    body = $('body');

(function insertGists(a_tags) {
    if (a_tags.length > 0) {
        a_tag = a_tags.shift()

        document.write = function(stylesheet) {
            $('head').append(stylesheet);
        
            document.write = function(gist) {
                $(a_tag).replaceWith(gist)
                insertGists(a_tags);
            }
        }
        
        body.append('<scr' + 'ipt src="' + a_tag.href + '"></scr' + 'ipt>');
        
    } else
        document.write = real_docwrite;
        
})($('a.gist').get());