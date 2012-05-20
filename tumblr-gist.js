/* This script is based on this one: https://gist.github.com/2090021
 * Differences: - shorter, less commented (if you want an explanation of how
 *                this works, check the original. It's pretty well explained)
 *              - allows query string parameters in gist urls (such as `file`)
 */

/* USAGE: include this in a <script> tag at the end of <body>,
 * and use <a href="{gist-url}"></a> instead of <script> tags to
 * embed
 */

var real_docwrite = document.write;

$('a.gist').each(function(i, a_tag) {
    document.write = function(stylesheet) {
        $('head').append(stylesheet);

        document.write = function(gist) {
            $(a_tag).replaceWith(gist)
        }
    }

    $('body').append('<scr' + 'ipt src="' + a_tag.href + '"></scr' + 'ipt>');
});

document.write = real_docwrite;
