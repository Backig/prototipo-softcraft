/**
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/**
 * This is based, in part, on [fkadeveloper](https://github.com/fkadeveloper)'s
 * [lorem.js](https://github.com/fkadeveloper/loremjs).
 */
angular.module( 'ngPlaceholders', [] )

  .factory( 'PlaceholderTextService', function () {

    var words = [ "Usuario Común"];


    var name = {
      "first_name": ["Mariana","Luis","Marco","Valeria"],
      "last_name": ["Rojas","Guzman","Vargas","Corrales"]
    };

    var icons = [
      "md-menu", "md-arrow-drop-down", "md-flag", "md-home", "md-warning", "md-play-circle-fill",
      "md-forum", "md-content-paste", "md-battery-80", "md-format-textdirection-l-to-r", "md-folder-open",
      "md-desktop-windows", "md-collections", "md-directions-bike", "md-apps", "md-phone-in-talk", "md-people",
      "md-star-half", "md-arrow-drop-down", "md-file-download md-lg", "md-3d-rotation", "md-accessibility",
      "md-account-balance", "md-account-balance-wallet", "md-account-box", "md-account-child", "md-account-circle",
      "md-add-shopping-cart", "md-alarm", "md-alarm-add", "md-alarm-off", "md-alarm-on", "md-android", "md-announcement",
      "md-aspect-ratio", "md-assessment", "md-assignment", "md-assignment-ind", "md-assignment-late", "md-assignment-return",
      "md-assignment-returned", "md-assignment-turned-in", "md-autorenew", "md-backup", "md-book", "md-bookmark",
      "md-bookmark-outline", "md-bug-report", "md-cached", "md-class", "md-credit-card", "md-dashboard", "md-delete",
      "md-description", "md-dns", "md-done", "md-done-all", "md-event", "md-exit-to-app", "md-explore", "md-extension",
      "md-face-unlock", "md-favorite", "md-favorite-outline", "md-find-in-page", "md-find-replace", "md-flip-to-back",
      "md-flip-to-front", "md-get-app", "md-grade", "md-group-work", "md-help", "md-highlight-remove", "md-history",
      "md-home", "md-https", "md-info", "md-info-outline", "md-input", "md-invert-colors", "md-label", "md-label-outline",
      "md-language", "md-launch", "md-list", "md-lock", "md-lock-open", "md-lock-outline", "md-loyalty", "md-markunread-mailbox",
      "md-note-add", "md-open-in-browser", "md-open-in-new", "md-open-with", "md-pageview", "md-payment", "md-perm-camera-mic",
      "md-perm-contact-cal", "md-perm-data-setting", "md-perm-device-info", "md-perm-identity", "md-perm-media", "md-perm-phone-msg",
      "md-perm-scan-wifi", "md-picture-in-picture", "md-polymer", "md-print", "md-query-builder", "md-question-answer", "md-receipt",
      "md-redeem", "md-report-problem", "md-restore", "md-room", "md-schedule", "md-search", "md-settings", "md-settings-applications",
      "md-settings-backup-restore", "md-settings-bluetooth", "md-settings-cell", "md-settings-display", "md-settings-ethernet",
      "md-settings-input-antenna", "md-settings-input-component", "md-settings-input-composite", "md-settings-input-hdmi",
      "md-settings-input-svideo", "md-settings-overscan", "md-settings-phone", "md-settings-power", "md-settings-remote",
      "md-settings-voice", "md-shop", "md-shopping-basket", "md-shopping-cart", "md-shop-two", "md-speaker-notes",
      "md-spellcheck", "md-star-rate", "md-stars", "md-store", "md-subject", "md-swap-horiz", "md-swap-vert",
      "md-swap-vert-circle", "md-system-update-tv", "md-tab", "md-tab-unselected", "md-theaters", "md-thumb-down",
      "md-thumbs-up-down", "md-thumb-up", "md-toc", "md-today", "md-track-changes", "md-translate", "md-trending-down",
      "md-trending-neutral", "md-trending-up", "md-turned-in", "md-turned-in-not", "md-verified-user", "md-view-agenda",
      "md-view-array", "md-view-carousel", "md-view-column", "md-view-day", "md-view-headline", "md-view-list", "md-view-module",
      "md-view-quilt", "md-view-stream", "md-view-week", "md-visibility", "md-visibility-off", "md-wallet-giftcard", "md-wallet-membership",
      "md-wallet-travel", "md-work", "md-error", "md-warning", "md-album", "md-av-timer", "md-closed-caption", "md-equalizer", "md-explicit",
      "md-fast-forward", "md-fast-rewind", "md-games", "md-hearing", "md-high-quality", "md-loop", "md-mic", "md-mic-none",
      "md-mic-off", "md-movie", "md-my-library-add", "md-my-library-books", "md-my-library-music", "md-new-releases", "md-not-interested",
      "md-pause", "md-pause-circle-fill", "md-pause-circle-outline", "md-play-arrow", "md-play-circle-fill",
      "md-play-circle-outline", "md-playlist-add", "md-play-shopping-bag", "md-queue", "md-queue-music", "md-radio",
      "md-recent-actors", "md-repeat", "md-repeat-one", "md-replay", "md-shuffle", "md-skip-next", "md-skip-previous",
      "md-snooze", "md-stop", "md-subtitles", "md-surround-sound", "md-videocam", "md-videocam-off", "md-video-collection",
      "md-volume-down", "md-volume-mute", "md-volume-off", "md-volume-up", "md-web", "md-business", "md-call", "md-call-end",
      "md-call-made", "md-call-merge", "md-call-missed", "md-call-received", "md-call-split", "md-chat", "md-clear-all",
      "md-comment", "md-contacts", "md-dialer-sip", "md-dialpad", "md-dnd-on", "md-email", "md-forum", "md-import-export",
      "md-invert-colors-off", "md-invert-colors-on", "md-live-help", "md-location-off", "md-location-on", "md-message",
      "md-messenger", "md-no-sim", "md-phone", "md-portable-wifi-off", "md-quick-contacts-dialer", "md-quick-contacts-mail",
      "md-ring-volume", "md-stay-current-landscape", "md-stay-current-portrait", "md-stay-primary-landscape",
      "md-stay-primary-portrait", "md-swap-calls", "md-textsms", "md-voicemail", "md-vpn-key", "md-add", "md-add-box",
      "md-add-circle", "md-add-circle-outline", "md-archive", "md-backspace", "md-block", "md-clear", "md-content-copy",
      "md-content-cut", "md-content-paste", "md-create", "md-drafts", "md-filter-list", "md-flag", "md-forward",
      "md-gesture", "md-inbox", "md-link", "md-mail", "md-markunread", "md-redo", "md-remove", "md-remove-circle",
      "md-remove-circle-outline", "md-reply", "md-reply-all", "md-report", "md-save", "md-select-all", "md-send",
      "md-sort", "md-text-format", "md-undo", "md-access-alarm", "md-access-alarms", "md-access-time", "md-add-alarm",
      "md-airplanemode-off", "md-airplanemode-on", "md-battery-20", "md-battery-30", "md-battery-50", "md-battery-60",
      "md-battery-80", "md-battery-90", "md-battery-alert", "md-battery-charging-20", "md-battery-charging-30",
      "md-battery-charging-50", "md-battery-charging-60", "md-battery-charging-80", "md-battery-charging-90",
      "md-battery-charging-full", "md-battery-full", "md-battery-std", "md-battery-unknown", "md-bluetooth",
      "md-bluetooth-connected", "md-bluetooth-disabled", "md-bluetooth-searching", "md-brightness-auto", "md-brightness-high",
      "md-brightness-low", "md-brightness-medium", "md-data-usage", "md-developer-mode", "md-devices", "md-dvr",
      "md-gps-fixed", "md-gps-not-fixed", "md-gps-off", "md-location-disabled", "md-location-searching",
      "md-multitrack-audio", "md-network-cell", "md-network-wifi", "md-nfc", "md-now-wallpaper", "md-now-widgets",
      "md-screen-lock-landscape", "md-screen-lock-portrait", "md-screen-lock-rotation", "md-screen-rotation", "md-sd-storage",
      "md-settings-system-daydream", "md-signal-cellular-0-bar", "md-signal-cellular-1-bar", "md-signal-cellular-2-bar",
      "md-signal-cellular-3-bar", "md-signal-cellular-4-bar", "md-signal-cellular-connected-no-internet-0-bar",
      "md-signal-cellular-connected-no-internet-1-bar", "md-signal-cellular-connected-no-internet-2-bar",
      "md-signal-cellular-connected-no-internet-3-bar", "md-signal-cellular-connected-no-internet-4-bar",
      "md-signal-cellular-no-sim", "md-signal-cellular-null", "md-signal-cellular-off", "md-signal-wifi-0-bar",
      "md-signal-wifi-1-bar", "md-signal-wifi-2-bar", "md-signal-wifi-3-bar", "md-signal-wifi-4-bar", "md-signal-wifi-off",
      "md-storage", "md-usb", "md-wifi-lock", "md-wifi-tethering", "md-attach-file", "md-attach-money", "md-border-all",
      "md-border-bottom", "md-border-clear", "md-border-color", "md-border-horizontal", "md-border-inner", "md-border-left",
      "md-border-outer", "md-border-right", "md-border-style", "md-border-top", "md-border-vertical", "md-format-align-center",
      "md-format-align-justify", "md-format-align-left", "md-format-align-right", "md-format-bold", "md-format-clear",
      "md-format-color-fill", "md-format-color-reset", "md-format-color-text", "md-format-indent-decrease",
      "md-format-indent-increase", "md-format-italic", "md-format-line-spacing", "md-format-list-bulleted",
      "md-format-list-numbered", "md-format-paint", "md-format-quote", "md-format-size", "md-format-strikethrough",
      "md-format-textdirection-l-to-r", "md-format-textdirection-r-to-l", "md-format-underline", "md-functions",
      "md-insert-chart", "md-insert-comment", "md-insert-drive-file", "md-insert-emoticon", "md-insert-invitation",
      "md-insert-link", "md-insert-photo", "md-merge-type", "md-mode-comment", "md-mode-edit", "md-publish",
      "md-vertical-align-bottom", "md-vertical-align-center", "md-vertical-align-top", "md-wrap-text", "md-attachment",
      "md-cloud", "md-cloud-circle", "md-cloud-done", "md-cloud-download", "md-cloud-off", "md-cloud-queue",
      "md-cloud-upload", "md-file-download", "md-file-upload", "md-folder", "md-folder-open", "md-folder-shared",
      "md-cast", "md-cast-connected", "md-computer", "md-desktop-mac", "md-desktop-windows", "md-dock", "md-gamepad",
      "md-headset", "md-headset-mic", "md-keyboard", "md-keyboard-alt", "md-keyboard-arrow-down", "md-keyboard-arrow-left",
      "md-keyboard-arrow-right", "md-keyboard-arrow-up", "md-keyboard-backspace", "md-keyboard-capslock",
      "md-keyboard-control", "md-keyboard-hide", "md-keyboard-return", "md-keyboard-tab", "md-keyboard-voice",
      "md-laptop", "md-laptop-chromebook", "md-laptop-mac", "md-laptop-windows", "md-memory", "md-mouse",
      "md-phone-android", "md-phone-iphone", "md-phonelink", "md-phonelink-off", "md-security", "md-sim-card",
      "md-smartphone", "md-speaker", "md-tablet", "md-tablet-android", "md-tablet-mac", "md-tv", "md-watch",
      "md-add-to-photos", "md-adjust", "md-assistant-photo", "md-audiotrack", "md-blur-circular", "md-blur-linear",
      "md-blur-off", "md-blur-on", "md-brightness-1", "md-brightness-2", "md-brightness-3", "md-brightness-4",
      "md-brightness-5", "md-brightness-6", "md-brightness-7", "md-brush", "md-camera", "md-camera-alt", "md-camera-front",
      "md-camera-rear", "md-camera-roll", "md-center-focus-strong", "md-center-focus-weak", "md-collections", "md-colorize",
      "md-color-lens", "md-compare", "md-control-point", "md-control-point-duplicate", "md-crop", "md-crop-3-2", "md-crop-5-4",
      "md-crop-7-5", "md-crop-16-9", "md-crop-din", "md-crop-free", "md-crop-landscape", "md-crop-original", "md-crop-portrait",
      "md-crop-square", "md-dehaze", "md-details", "md-edit", "md-exposure", "md-exposure-minus-1", "md-exposure-minus-2",
      "md-exposure-zero", "md-exposure-plus-1", "md-exposure-plus-2", "md-filter", "md-filter-1", "md-filter-2", "md-filter-3",
      "md-filter-4", "md-filter-5", "md-filter-6", "md-filter-7", "md-filter-8", "md-filter-9", "md-filter-9-plus", "md-filter-b-and-w",
      "md-filter-center-focus", "md-filter-drama", "md-filter-frames", "md-filter-hdr", "md-filter-none", "md-filter-tilt-shift",
      "md-filter-vintage", "md-flare", "md-flash-auto", "md-flash-off", "md-flash-on", "md-flip", "md-gradient", "md-grain",
      "md-grid-off", "md-grid-on", "md-hdr-off", "md-hdr-on", "md-hdr-strong", "md-hdr-weak", "md-healing", "md-image",
      "md-image-aspect-ratio", "md-iso", "md-landscape", "md-leak-add", "md-leak-remove", "md-lens", "md-looks", "md-looks-1",
      "md-looks-2", "md-looks-3", "md-looks-4", "md-looks-5", "md-looks-6", "md-loupe", "md-movie-creation", "md-nature",
      "md-nature-people", "md-navigate-before", "md-navigate-next", "md-palette", "md-panorama", "md-panorama-fisheye",
      "md-panorama-horizontal", "md-panorama-vertical", "md-panorama-wide-angle", "md-photo", "md-photo-album", "md-photo-camera",
      "md-photo-library", "md-portrait", "md-remove-red-eye", "md-rotate-left", "md-rotate-right", "md-slideshow", "md-straighten",
      "md-style", "md-switch-camera", "md-switch-video", "md-tag-faces", "md-texture", "md-timelapse", "md-timer", "md-timer-3",
      "md-timer-10", "md-timer-auto", "md-timer-off", "md-tonality", "md-transform", "md-tune", "md-wb-auto", "md-wb-cloudy",
      "md-wb-incandescent", "md-wb-irradescent", "md-wb-sunny", "md-beenhere", "md-directions", "md-directions-bike",
      "md-directions-bus", "md-directions-car", "md-directions-ferry", "md-directions-subway", "md-directions-train",
      "md-directions-transit", "md-directions-walk", "md-flight", "md-hotel", "md-layers", "md-layers-clear", "md-local-airport",
      "md-local-atm", "md-local-attraction", "md-local-bar", "md-local-cafe", "md-local-car-wash", "md-local-convenience-store",
      "md-local-drink", "md-local-florist", "md-local-gas-station", "md-local-grocery-store", "md-local-hospital", "md-local-hotel",
      "md-local-laundry-service", "md-local-library", "md-local-mall", "md-local-movies", "md-local-offer", "md-local-parking",
      "md-local-pharmacy", "md-local-phone", "md-local-pizza", "md-local-play", "md-local-post-office", "md-local-print-shop",
      "md-local-restaurant", "md-local-see", "md-local-shipping", "md-local-taxi", "md-location-history", "md-map",
      "md-my-location", "md-navigation", "md-pin-drop", "md-place", "md-rate-review", "md-restaurant-menu", "md-satellite",
      "md-store-mall-directory", "md-terrain", "md-traffic", "md-apps", "md-cancel", "md-arrow-drop-down-circle",
      "md-arrow-drop-down", "md-arrow-drop-up", "md-arrow-back", "md-arrow-forward", "md-check", "md-close", "md-chevron-left",
      "md-chevron-right", "md-expand-less", "md-expand-more", "md-fullscreen", "md-fullscreen-exit", "md-menu", "md-more-horiz",
      "md-more-vert", "md-refresh", "md-unfold-less", "md-unfold-more", "md-adb", "md-bluetooth-audio", "md-disc-full",
      "md-dnd-forwardslash", "md-do-not-disturb", "md-drive-eta", "md-event-available", "md-event-busy", "md-event-note",
      "md-folder-special", "md-mms", "md-more", "md-network-locked", "md-phone-bluetooth-speaker", "md-phone-forwarded",
      "md-phone-in-talk", "md-phone-locked", "md-phone-missed", "md-phone-paused", "md-play-download", "md-play-install",
      "md-sd-card", "md-sim-card-alert", "md-sms", "md-sms-failed", "md-sync", "md-sync-disabled", "md-sync-problem",
      "md-system-update", "md-tap-and-play", "md-time-to-leave", "md-vibration", "md-voice-chat", "md-vpn-lock", "md-cake",
      "md-domain", "md-location-city", "md-mood", "md-notifications-none", "md-notifications", "md-notifications-off",
      "md-notifications-on", "md-notifications-paused", "md-pages", "md-party-mode", "md-group", "md-group-add", "md-people",
      "md-people-outline", "md-person", "md-person-add", "md-person-outline", "md-plus-one", "md-poll", "md-public", "md-school",
      "md-share", "md-whatshot", "md-check-box", "md-check-box-outline-blank", "md-radio-button-off", "md-radio-button-on",
      "md-star", "md-star-half", "md-star-outline", "md-home", "md-warning", "md-play-circle-fill", "md-forum",
      "md-content-paste", "md-battery-80", "md-format-textdirection-l-to-r", "md-folder-open", "md-desktop-windows",
      "md-collections", "md-directions-bike", "md-apps", "md-phone-in-talk", "md-people", "md-star-half"
    ];


    var img = [
      "ad.svg", "button.svg", "converse.svg", "fire extinguisher.svg", "lamp.svg", "passport.svg", "skate.svg",
      "theatre.svg", "turntable.svg", "wacom.svg", "bill.svg", "buzzer.svg","conveyor.svg", "helmet.svg", "luggage.svg",
      "presentation.svg","smart watch.svg", "tie.svg", "umbrella.svg", "workspace.svg", "bowling.svg", "calculator.svg",
      "demoltion.svg", "icecream.svg", "microscope.svg", "server.svg", "switcher.svg", "tower.svg", "vespa.svg", "wrench.svg"
    ];

    var colors = [
      "pink","red","purple","indigo","blue",
      "light-blue","cyan","teal","green","light-green",
      "lime","yellow","amber","orange","deep-orange"
    ];
    var colorVariation = [
      "lighten-2", "lighten-1",
      //"base",
      "darken-1", "darken-2",
      //"accent-1", "accent-2", "accent-3", "accent-4"
    ];



    function randomInt ( min, max ) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return {

      createFirstname: function(i){
        return name.first_name[i-1];
      },

      createLastname: function(i){
        return name.last_name[i-1];
      },

      createIcon: function(color){
        color = color || false;

        if(!color){
          return '<i class="md '+icons[randomInt(0, icons.length - 1)]+'"></i>';
        }

        var c = colors[randomInt(0, colors.length-1)];
        var cv = colorVariation[randomInt(0, colorVariation.length-1)];

        return '<i class="md '+icons[randomInt(0, icons.length - 1)]+' '+c+' '+cv+' icon-color"></i>';
      },

      createImg: function(){
        return img[randomInt(0, img.length - 1)];
      },

      createName: function(){
        return this.createFirstname()+' '+this.createLastname();
      },

      createSentence: function ( sentenceLength ) {
        var wordIndex,
          sentence;

        // Determine how long the sentence should be. Do it randomly if one was not
        // provided.
        sentenceLength = sentenceLength || randomInt( 1, 1 );

        // Now we determine were we are going to start in the array randomly. We
        // are just going to take a slice of the array, so we have to ensure
        // whereever we start has enough places left in the array to accommodate
        // the random sentence length from above.
        wordIndex = randomInt(0, words.length - sentenceLength - 1);

        // And pull out the words, join them together, separating words by spaces
        // (duh), and removing any commas that may appear at the end of the
        // sentence. Finally, add a period.
        sentence = words.slice(wordIndex, wordIndex + sentenceLength)
          .join(' ')
          .replace(/\,$/g, '') + '.';

        // Capitalize the first letter - it is a sentence, after all.
        sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

        return sentence;
      },
      createSentences: function ( numSentences ) {
        var sentences = [],
          i = 0;

        // Determine how many sentences we should do. Do it randomly if one was not
        // provided.
        numSentences = numSentences || randomInt( 1, 1 );

        // For each paragraph, we should generate between 3 and 5 sentences.
        for ( i = 0; i < numSentences; i++ ) {
          sentences.push( this.createSentence() );
        }

        // And then we just return the array of sentences, concatenated with spaces.
        return sentences.join( ' ' );
      },
      createParagraph: function ( numSentences, html ) {
        var sentences = this.createSentences( numSentences );

        // Make the sentences into a paragraph and return.
        if(html){
          return "<p>" + sentences + "</p>";
        }

        return sentences + "\n";
      },
      createParagraphs: function ( numParagraphs, numSentences, html ) {
        var paragraphs = [],
          i = 0;

        numParagraphs = numParagraphs || randomInt( 3, 7 );

        // Create the number of paragraphs requested.
        for ( i = 0; i < numParagraphs; i++ ) {
          paragraphs.push( this.createParagraph( numSentences, html ) );
        }

        // Return the paragraphs, concatenated with newlines.
        return paragraphs.join( '\n' );
      }
    };
  })

  .directive( 'placeholderText', [ 'PlaceholderTextService', function ( PlaceholderTextService ) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs, ngModel) {

        numParagraphs = attrs.sentences || 1;
        numSentences = attrs.paragraphs || 6;
        html = attrs.html || true;

        element.html(
          PlaceholderTextService.createParagraphs(numParagraphs, numSentences, true)
        );

      }
    };
  }])

  .directive( 'placeholderTitle', [ 'PlaceholderTextService', function ( PlaceholderTextService ) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        element.html(
          PlaceholderTextService.createSentence(5)
        );
      }
    };
  }])

  .directive( 'placeholderName', [ 'PlaceholderTextService', function ( PlaceholderTextService ) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs, ngModel) {
        element.html(
          PlaceholderTextService.createName()
        );
      }
    };
  }])

  .directive( 'placeholderP', [ 'PlaceholderTextService', function ( PlaceholderTextService ) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs, ngModel) {
        element.html(
          PlaceholderTextService.createParagraph(1, 3, false)
        );
      }
    };
  }])

  .directive( 'placeholderImg', [ 'PlaceholderTextService', function ( PlaceholderTextService ) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs, ngModel) {
        element.attr('src', 'assets/img/icons/ballicons/'+PlaceholderTextService.createImg());
      }
    };
  }])

  .directive( 'placeholderIcon', [ 'PlaceholderTextService', function ( PlaceholderTextService ) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs, ngModel) {
        element.html(
          PlaceholderTextService.createIcon(false)
        );
      }
    };
  }])

  .directive( 'placeholderForm', [ 'PlaceholderTextService', function ( PlaceholderTextService ) {
    return {
      restrict: 'C',
      link: function(scope, element, attrs, ngModel) {

        angular.forEach(element.find('input, textarea'), function(el){
          elem = angular.element(el);

          switch (el.type) {
            case 'textarea':
              el.bla = 'hi';
              elem.val(PlaceholderTextService.createParagraphs(1, 4));
              break;
            case 'text':
              elem.val(PlaceholderTextService.createSentence());
              break;
            case 'password':
              elem.val('nakama?');
              break;
            case 'checkbox':
              elem.attr('checked','checked');
              break;
          }

          if(elem.val()){
            elem.parent().addClass("filled");
          }
        });

      }
    };
  }])


  .directive( 'placeholderImage', function () {
    return {
      restrict: 'A',
      scope: { dimensions: '@placeholderImage' },
      link: function( scope, element, attr ) {

        // A reference to a canvas that we can reuse
        var canvas;
        var config = {
          text_size: 10,
          fill_color: '#EEEEEE',
          text_color: '#AAAAAA'
        };

        /**
         * When the provided dimensions change, re-pull the width and height and
         * then redraw the image.
         */
        scope.$watch('dimensions', function () {
          if( ! angular.isDefined( scope.dimensions ) ) {
            return;
          }
          var matches = scope.dimensions.match( /^(\d+)x(\d+)$/ ),
            dataUrl;

          if(  ! matches ) {
            console.error("Expected '000x000'. Got " + scope.dimensions);
            return;
          }

          // Grab the provided dimensions.
          scope.size = { w: matches[1], h: matches[2] };

          // FIXME: only add these if not already present
          element.prop( "title", scope.dimensions );
          element.prop( "alt", scope.dimensions );

          // And draw the image, getting the returned data URL.
          dataUrl = drawImage();

          // If this is an `img` tag, set the src as the data URL. Else, we set
          // the CSS `background-image` property to same.
          if ( element.prop( "tagName" ) === "IMG" ) {
            element.prop( 'src', dataUrl );
          } else {
            element.css( 'background-image', 'url("' + dataUrl + '")' );
          }
        });

        /**
         * Calculate the maximum height of the text we can draw, based on the
         * requested dimensions of the image.
         */
        function getTextSize() {
          var dimension_arr = [scope.size.h, scope.size.w].sort(),
            maxFactor = Math.round(dimension_arr[1] / 16);

          return Math.max(config.text_size, maxFactor);
        }

        /**
         * Using the HTML5 canvas API, draw a placeholder image of the requested
         * size with text centered vertically and horizontally that specifies its
         * dimensions. Returns the data URL that can be used as an `img`'s `src`
         * attribute.
         */
        function drawImage() {
          // Create a new canvas if we don't already have one. We reuse the canvas
          // when if gets redrawn so as not to be wasteful.
          canvas = canvas || document.createElement( 'canvas' );

          // Obtain a 2d drawing context on which we can add the placeholder
          // image.
          var context = canvas.getContext( '2d' ),
            text_size,
            text;

          // Set the canvas to the appropriate size.
          canvas.width = scope.size.w;
          canvas.height = scope.size.h;

          // Draw the placeholder image square.
          // TODO: support other shapes
          // TODO: support configurable colors
          context.fillStyle = config.fill_color;
          context.fillRect( 0, 0, scope.size.w, scope.size.h );

          // Add the dimension text.
          // TODO: support configurable font
          // FIXME: ensure text will fit and resize if it doesn't
          text_size = getTextSize();
          text = scope.dimensions;
          context.fillStyle = config.text_color;
          context.textAlign = 'center';
          context.textBaseline = 'middle';
          context.font = 'bold '+text_size+'pt sans-serif';

          // If the text is too long to fit, reduce it until it will.
          if (context.measureText( text ).width / scope.size.w > 1) {
            text_size = config.text_size / (context.measureText( text ).width / scope.size.w);
            context.font = 'bold '+text_size+'pt sans-serif';
          }

          // Finally, draw the text in its calculated position.
          context.fillText( scope.dimensions, scope.size.w / 2, scope.size.h / 2 );

          // Get the data URL and return it.
          return canvas.toDataURL("image/png");
        }
      }
    };
  });