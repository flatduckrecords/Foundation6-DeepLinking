/*
 * Deep linking for Foundation 6 Tabs using Javascript
 *
 * We will check if we have a hash in the page url and if so, use it.
 *
 * By Christian Haensel
 * chris@chaensel.de
 * www.chaensel.de
 * @author     Christian Hänsel <chris@chaensel.de>
 * @copyright  Copyright (c) 2016 by Christian Hänsel
 * @license    https://opensource.org/licenses/MIT MIT License
 */
window.location.hash && $(".tabs, .accordion").find('a[href="' + window.location.hash + '"]').click();