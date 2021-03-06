/**

 @author Darryl Tam

 Thanks to Aaron Saray's FeedlyBackgroundTab extension (http://aaronsaray.com) for informaton on how to implement this.

This file is part of Background Tab for NewsBlur.

    Background Tab for NewsBlur is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Background Tab for NewsBlur is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Background Tab for NewsBlur.  If not, see <http://www.gnu.org/licenses/>.
 */
(function(){

  var NewsBlurBackgroundTab = function() {

		var hotkey = 59; // ";" key on keyboard


		this.keyPressHandler = function(e) {
			if ( e.keyCode == hotkey && (!e.metaKey && !e.altKey && !e.ctrlKey) ) {
				var popover = document.getElementsByClassName("NB-popover"); // Ignore if popup to add a new feed is visible
				elems = document.getElementsByClassName("NB-story-title NB-selected");
				if ( (popover.length == 0) && elems.length) {
					var elems2 = elems.item(0).getElementsByClassName("story_title")
					if (elems2.length) {
						chrome.extension.sendMessage({url: elems2.item(0).href});
					}
				}
		
			}
		}
	};

	if (window == top) {
		var nbt = new NewsBlurBackgroundTab();
		window.addEventListener('keypress', nbt.keyPressHandler, false);
	}
})();
