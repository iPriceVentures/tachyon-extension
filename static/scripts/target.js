
#breadcrumb {
    padding-bottom: 4px;
    display: table; }
  #breadcrumb .image-container {
    display: table-cell;
    vertical-align: middle;
    position: relative; }
    @media (min-width: 840px) {
#breadcrumb .image-container {
        padding-right: 10px; } }
    #breadcrumb .image-container a {
    position: relative;
    display: block; }
    #breadcrumb .image-container img {
    height: 50px;
    width: 100px;
    border: 1px solid #f2f2f2;
    display: none; }
      @media (min-width: 840px) {
#breadcrumb .image-container img {
        display: block; } }
  #breadcrumb .breadcrumb-container {
    display: table-cell;
    vertical-align: middle;
    position: relative; }
    #breadcrumb .breadcrumb-container .crumb-wrapper > div span.mobile-crumb-nav {
    display: inline-block; }
      @media (min-width: 840px) {
#breadcrumb .breadcrumb-container .crumb-wrapper > div span.mobile-crumb-nav {
        display: none; } }
      #breadcrumb .breadcrumb-container .crumb-wrapper > div span.mobile-crumb-nav a {
    padding: 8px 0;
    display: inline-block; }
    #breadcrumb .breadcrumb-container .crumb-wrapper > div span.mobile-crumb {
    display: none; }
      @media (min-width: 840px) {
#breadcrumb .breadcrumb-container .crumb-wrapper > div span.mobile-crumb {
        display: inline-block; } }
    #breadcrumb .breadcrumb-container .header {
    float: left; }

.popup {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    opacity: 1.0;
    z-index: 1004;
    background-color: rgba(0, 0, 0, 0.7);
    transition: z-index 0s, opacity 0.5s ease-in;
    -webkit-transition: z-index 0s, opacity 0.5s ease-in;
    -moz-transition: z-index 0s, opacity 0.5s ease-in;
    -ms-transition: z-index 0s, opacity 0.5s ease-in;
    -o-transition: z-index 0s, opacity 0.5s ease-in; }

.popup.closed {
    opacity: 0;
    z-index: -1;
    transition: all .5s ease-out;
    -webkit-transition: all .5s ease-out;
    -moz-transition: all .5s ease-out;
    -ms-transition: all .5s ease-out;
    -o-transition: all .5s ease-out; }

.popup .inner {
    margin: 10% auto 0% auto;
    z-index: 1001;
    color: white; }

#star-rating-cont {
    position: relative;
    display: block;
    clear: both;
    width: 100%; }
  @media (min-width: 840px) {
#star-rating-cont {
        padding: 6px 10px 0 0;
        width: 150px;
        position: absolute;
        top: 105px; } }
  #star-rating-cont .load-reviews {
    text-align: center;
    height: 37px;
    position: relative;
    color: #2f8ec2; }
    #star-rating-cont .load-reviews span.saving span {
    font-size: 30px;
    animation-name: blink;
    animation-duration: 1.4s;
    animation-iteration-count: infinite;
    animation-fill-mode: both; }
      #star-rating-cont .load-reviews span.saving span:nth-child(2) {
    animation-delay: .2s; }
      #star-rating-cont .load-reviews span.saving span:nth-child(3) {
    animation-delay: .4s; }
  #star-rating-cont div.stars, #star-rating-cont div.stars div {
    display: block;
    background-image: url(https://cdn-qa.ipricegroup.com/images/stars-2x.png);
    background-size: 22px 36px;
    background-position: 0 -18px;
    width: 110px;
    height: 18px; }
  #star-rating-cont div.stars {
    display: inline-block;
    top: 2px;
    position: relative; }
    @media (min-width: 840px) {
#star-rating-cont div.stars {
        display: block; } }
  #star-rating-cont div.stars div {
    background-position: 0 0; }
  #star-rating-cont span.star-rating-avg {
    color: #666666;
    font-size: 12px;
    display: inline-block;
    position: relative; }
    @media (min-width: 840px) {
#star-rating-cont span.star-rating-avg {
        bottom: 0;
        padding-right: 10px; } }
    #star-rating-cont span.star-rating-avg.hide {
    display: none; }
  #star-rating-cont .popup {
    display: none;
    position: fixed;
    padding: 10px;
    height: 180px;
    top: 50%;
    margin-top: -100px;
    background-color: #fff;
    z-index: 9999;
    width: 100%;
    left: 0;
    margin-left: 0; }
    @media (min-width: 840px) {
#star-rating-cont .popup {
        width: 500px;
        left: 45%;
        margin-left: -150px; } }
    #star-rating-cont .popup.open {
    display: block; }
    #star-rating-cont .popup .popup-close {
    float: right; }
      #star-rating-cont .popup .popup-close span:before {
    content: "X";
    font-weight: bold; }
    #star-rating-cont .popup .popup-text {
    text-align: center;
    top: 35%;
    position: relative;
    color: #2f8ec2; }
      #star-rating-cont .popup .popup-text span {
    font-size: 18px;
    font-weight: bold; }
        #star-rating-cont .popup .popup-text span.saving {
    display: none; }
          #star-rating-cont .popup .popup-text span.saving span {
    animation-name: blink;
    animation-duration: 1.4s;
    animation-iteration-count: infinite;
    animation-fill-mode: both; }
            #star-rating-cont .popup .popup-text span.saving span:nth-child(2) {
    animation-delay: .2s; }
            #star-rating-cont .popup .popup-text span.saving span:nth-child(3) {
    animation-delay: .4s; }
    #star-rating-cont .popup:after {
    position: fixed;
    content: "";
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -2; }
    #star-rating-cont .popup:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #fff;
    z-index: -1;
    border-radius: 5px; }

.short-text {
    margin-top: 0;
    padding: 0;
    width: 100%;
    background: transparent;
    color: #086a87; }
  @media (max-width: 639px) {
.short-text {
        display: none; } }
.short-text p {
    margin-bottom: 10px; }
.short-text p a {
    color: #086a87;
    background: #f2f2f2;
    padding: 0 3px; }

.orange .action {
    padding-right: 2px;
    padding-left: 8px; }

.orange .flip-main {
    color: #fff;
    background-color: #ff6633;
    border-color: #e55b2d; }

.orange .flip-main:hover {
    color: #fff;
    background-color: #ff531a;
    border-color: #e63900; }

.orange .flip-block {
    display: block;
    width: 100%;
    padding-left: 8px;
    padding-right: 0; }

.orange .flip-button {
    position: relative;
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    border: 1px solid transparent;
    white-space: nowrap;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 5px;
    transition: background-color 250ms, border-color 250ms;
    height: 35px;
    -o-user-select: "none";
    -webkit-user-select: "none";
    -moz-user-select: "none";
    -ms-user-select: "none";
    user-select: "none"; }

.orange .label {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    vertical-align: middle;
    padding: 6px 7px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 0 5px 5px 0;
    -webkit-transition: background-color 250ms, border-color 250ms;
    transition: background-color 250ms, border-color 250ms;
    background-color: #fff;
    text-align: right;
    background-clip: padding-box;
    border: solid 1px #ff531a;
    position: absolute;
    top: 0;
    right: 0;
    direction: rtl;
    height: 33px;
    padding-top: 3px;
    -o-user-select: "none";
    -webkit-user-select: "none";
    -moz-user-select: "none";
    -ms-user-select: "none";
    user-select: "none"; }
.orange .label::before {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background: -webkit-linear-gradient(52deg, #e63900 0, #b24723 49%, rgba(0, 122, 198, 0) 50%, rgba(255, 255, 255, 0) 100%) 0 6px no-repeat transparent;
    background: linear-gradient(38deg, #e63900 0, #b24723 49%, rgba(0, 122, 198, 0) 50%, rgba(255, 255, 255, 0) 100%) 0 6px no-repeat transparent;
    border-radius: 6px;
    content: "";
    height: 35px;
    position: absolute;
    right: 9px;
    top: 4px;
    width: 35px;
    z-index: 1;
    -webkit-transform: rotateZ(22deg) translate(0, -10px) scaleX(0.9);
    transform: rotateZ(22deg) translate(0, -10px) scaleX(0.9);
    -webkit-transition: -webkit-transform 250ms ease 0s, background-position 250ms ease 0s;
    transition: transform 250ms ease 0s, background-position 250ms ease 0s; }
.orange .label::after {
    background-color: #ff6633;
    bottom: -2px;
    content: "";
    height: 34px;
    right: 26px;
    position: absolute;
    width: 45px;
    -webkit-transform: skew(26deg, 0deg);
    transform: skew(26deg, 0deg);
    -webkit-transition: right 250ms ease 0s;
    transition: right 250ms ease 0s; }
.orange .label > span {
    direction: rtl;
    display: block;
    font-size: 18px;
    line-height: 18px;
    width: 34px;
    padding-top: 3px;
    color: #000; }

.orange .flip-effect:hover .label::after {
    right: 39px;
    background-color: #ff531a; }

.orange .flip-effect:hover .label::before {
    background-position: 0 0;
    -webkit-transform: rotateZ(15deg) translate(-8px, -3px) scaleX(1);
    transform: rotateZ(15deg) translate(-8px, -3px) scaleX(1); }

.button {
    height: 40px;
    white-space: nowrap;
    font-size: 13px;
    line-height: 32px; }
.button i {
    margin-top: 2px; }
  @media (min-width: 840px) {
.button {
        width: 190px;
        height: 35px; } }

#coupon-popup .inner {
    background-color: white;
    color: #086a87; }
  @media (max-width: 639px) {
#coupon-popup .inner {
        max-width: 320px;
        padding: 0; } }
  @media (max-width: 640px) {
#coupon-popup .inner {
        max-width: 500px; } }
  @media (min-width: 840px) {
#coupon-popup .inner {
        max-width: 785px;
        padding: 15px 40px; } }
  #coupon-popup .inner .header {
    position: relative; }
    #coupon-popup .inner .header .close-poppup {
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    height: 30px;
    background: #33cccc;
    padding: 1px 8px;
    font-size: 20px;
    color: white;
    opacity: 0.5; }
      @media (min-width: 840px) {
#coupon-popup .inner .header .close-poppup {
        top: -35px;
        right: -40px;
        opacity: 1; } }
    #coupon-popup .inner .header .coupon-popup-name {
    display: block;
    font-size: 18px;
    margin: 0 20px;
    text-align: center;
    padding-top: 10px; }
      @media (min-width: 640px) {
#coupon-popup .inner .header .coupon-popup-name {
        padding-top: 0; } }
      @media (min-width: 840px) {
#coupon-popup .inner .header .coupon-popup-name {
        margin: 20px 0;
        width: 81%;
        text-align: left; } }
    #coupon-popup .inner .header .coupon-popup-img {
    display: none; }
      @media (min-width: 640px) {
#coupon-popup .inner .header .coupon-popup-img {
        display: block; } }
      #coupon-popup .inner .header .coupon-popup-img img {
    height: 60px;
    display: block;
    margin: 30px auto 5px auto; }
        @media (min-width: 640px) {
#coupon-popup .inner .header .coupon-popup-img img {
        display: block;
        margin: 40px auto 5px auto; } }
        @media (min-width: 840px) {
#coupon-popup .inner .header .coupon-popup-img img {
        float: right;
        width: 18%;
        margin: 5px auto 5px auto; } }
  #coupon-popup .inner .coupon-popup-text {
    display: none;
    margin-bottom: 20px; }
    @media (min-width: 840px) {
#coupon-popup .inner .coupon-popup-text {
        display: inline-block; } }
    #coupon-popup .inner .coupon-popup-text p {
    font-size: 13px;
    color: #086a87; }
  #coupon-popup .inner .body {
    border-top: none;
    color: #086a87; }
    @media (min-width: 640px) {
#coupon-popup .inner .body {
        padding-top: 17px; } }
    @media (min-width: 840px) {
#coupon-popup .inner .body {
        border-top: solid 1px #086a87; } }
    #coupon-popup .inner .body .code-title {
    display: none; }
      @media (min-width: 640px) {
#coupon-popup .inner .body .code-title {
        display: none; } }
      @media (min-width: 840px) {
#coupon-popup .inner .body .code-title {
        display: block;
        text-align: center;
        font-size: 20px;
        line-height: 20px;
        margin-bottom: 10px; } }
    #coupon-popup .inner .body .code-subtitle {
    font-size: 14px;
    display: block;
    text-align: center;
    margin: 0 60px 0 60px; }
      #coupon-popup .inner .body .code-subtitle a {
    color: #33cccc;
    text-decoration: underline; }
    #coupon-popup .inner .body .coupon-popup-code-table {
    display: table;
    border-spacing: 15px 10px;
    padding-bottom: 5px;
    width: 100%;
    text-align: center; }
      #coupon-popup .inner .body .coupon-popup-code-table .code-text-row {
    background-color: white;
    display: table-row; }
        @media (min-width: 640px) {
#coupon-popup .inner .body .coupon-popup-code-table .code-text-row {
        display: inline-block; } }
        @media (min-width: 840px) {
#coupon-popup .inner .body .coupon-popup-code-table .code-text-row {
        display: inline-block; } }
        #coupon-popup .inner .body .coupon-popup-code-table .code-text-row .code-text-cell {
    border: dashed 1px #086a87;
    padding: 10px 0;
    font-size: 22px;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    font-weight: bold;
    border-radius: 5px; }
          @media (min-width: 640px) {
#coupon-popup .inner .body .coupon-popup-code-table .code-text-row .code-text-cell {
        display: inline-block;
        padding: 7px 0;
        width: 280px; } }
          @media (min-width: 840px) {
#coupon-popup .inner .body .coupon-popup-code-table .code-text-row .code-text-cell {
        display: inline-block;
        padding: 7px 0;
        width: 280px; } }
      #coupon-popup .inner .body .coupon-popup-code-table .copy-code-row {
    display: table-row;
    vertical-align: middle; }
        @media (min-width: 640px) {
#coupon-popup .inner .body .coupon-popup-code-table .copy-code-row {
        display: inline-block; } }
        #coupon-popup .inner .body .coupon-popup-code-table .copy-code-row .copy-code-cell {
    background-color: #ff6633;
    text-align: center;
    min-width: 140px;
    margin-left: 0;
    margin-top: 5px;
    border-radius: 5px; }
          @media (min-width: 640px) {
#coupon-popup .inner .body .coupon-popup-code-table .copy-code-row .copy-code-cell {
        margin-left: 15px;
        margin-top: 0; } }
          #coupon-popup .inner .body .coupon-popup-code-table .copy-code-row .copy-code-cell .copy-code-button,
          #coupon-popup .inner .body .coupon-popup-code-table .copy-code-row .copy-code-cell .show-code-button {
    display: block;
    font-size: 16px;
    color: white;
    padding: 12px; }
    #coupon-popup .inner .body .coupon-popup-nocode-table {
    display: table;
    border-spacing: 15px 10px;
    padding-bottom: 5px;
    width: 100%;
    text-align: center; }
      #coupon-popup .inner .body .coupon-popup-nocode-table .nocode-text-row {
    background-color: white;
    display: table-row;
    min-width: 283px;
    max-width: 400px; }
        @media (min-width: 640px) {
#coupon-popup .inner .body .coupon-popup-nocode-table .nocode-text-row {
        display: inline-block; } }
        #coupon-popup .inner .body .coupon-popup-nocode-table .nocode-text-row .nocode-text-cell {
    border: dashed 1px #086a87;
    padding: 10px 0;
    font-size: 22px;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    font-weight: bold;
    width: 100%; }
          @media (min-width: 640px) {
#coupon-popup .inner .body .coupon-popup-nocode-table .nocode-text-row .nocode-text-cell {
        display: inline-block;
        padding: 13px 15px; } }
          @media (min-width: 840px) {
#coupon-popup .inner .body .coupon-popup-nocode-table .nocode-text-row .nocode-text-cell {
        display: inline-block; } }
      #coupon-popup .inner .body .coupon-popup-nocode-table .go-store-row {
    display: table-cell;
    vertical-align: middle;
    min-width: 140px;
    max-width: 400px;
    margin-top: 15px;
    margin-left: 0; }
        @media (min-width: 840px) {
#coupon-popup .inner .body .coupon-popup-nocode-table .go-store-row {
        display: inline-block;
        margin-top: 0;
        margin-left: 15px; } }
        #coupon-popup .inner .body .coupon-popup-nocode-table .go-store-row .go-store-cell {
    background-color: #ff6633;
    text-align: center;
    padding: 12px 15px; }
          #coupon-popup .inner .body .coupon-popup-nocode-table .go-store-row .go-store-cell .go-store-button,
          #coupon-popup .inner .body .coupon-popup-nocode-table .go-store-row .go-store-cell .show-code-button {
    font-size: 16px;
    color: white; }

#coupon-popup .coupon-newsletter {
    display: table;
    width: 100%;
    margin-top: 0;
    padding: 0;
    background-color: #33cccc; }
  #coupon-popup .coupon-newsletter .newsletter {
    display: inline-block;
    width: 100%; }
  #coupon-popup .coupon-newsletter .separator {
    display: none;
    width: 1%; }
    #coupon-popup .coupon-newsletter .separator img {
    height: 80px;
    margin-top: 25px; }
  @media (min-width: 840px) {
#coupon-popup .coupon-newsletter .newsletter {
        width: 80%; } }

#coupon-header {
    margin-bottom: 18px;
    display: table;
    width: 100%; }
  #coupon-header .left-wrapper .breadcrumb {
    color: #666666;
    font-size: 12px; }
    #coupon-header .left-wrapper .breadcrumb span {
    font-size: 12px; }
    #coupon-header .left-wrapper .breadcrumb img {
    width: 12px; }
  #coupon-header .left-wrapper .logo-holder {
    display: table; }
    @media (max-width: 639px) {
#coupon-header .left-wrapper .logo-holder {
        display: table-cell; } }
    #coupon-header .left-wrapper .logo-holder .logo {
    padding-right: 8px;
    padding-left: 10px;
    background-position: center;
    display: table-cell; }
      @media (min-width: 640px) {
#coupon-header .left-wrapper .logo-holder .logo {
        vertical-align: top;
        padding-top: 9px; } }
      @media (min-width: 640px) {
#coupon-header .left-wrapper .logo-holder .logo .logo-mobile {
        display: none; } }
      @media (max-width: 639px) {
#coupon-header .left-wrapper .logo-holder .logo .store-logo-border {
        display: none; }
        #coupon-header .left-wrapper .logo-holder .logo .logo-mobile img {
        height: 40px; } }
      #coupon-header .left-wrapper .logo-holder .logo .store-logo-border {
    border: 1px solid #f2f2f2; }
      #coupon-header .left-wrapper .logo-holder .logo.background-logo {
    background-image: url(https://cdn-qa.ipricegroup.com/images/coupon-header.png);
    background-repeat: no-repeat; }
        @media (max-width: 639px) {
#coupon-header .left-wrapper .logo-holder .logo.background-logo {
        background-size: 80px;
        width: 80px;
        height: 40px; } }
        @media (min-width: 640px) {
#coupon-header .left-wrapper .logo-holder .logo.background-logo {
        height: 69px;
        width: 138px; } }
      #coupon-header .left-wrapper .logo-holder .logo .store-logo-border img, #coupon-header .left-wrapper .logo-holder .logo .other-logo-border img {
    height: 76px; }
      @media (max-width: 639px) {
#coupon-header .left-wrapper .logo-holder .logo .store-logo-border, #coupon-header .left-wrapper .logo-holder .logo .other-logo-border {
        width: 90px;
        height: auto; }
          #coupon-header .left-wrapper .logo-holder .logo .store-logo-border.spacing, #coupon-header .left-wrapper .logo-holder .logo .other-logo-border.spacing {
        margin: 0 auto;
        display: block; } }
      #coupon-header .left-wrapper .logo-holder .logo .overview-header img {
    height: 69px; }
      @media (max-width: 639px) {
#coupon-header .left-wrapper .logo-holder .logo .other-logo-border {
        display: none; } }
  #coupon-header .left-wrapper .info {
    margin-top: 0;
    padding-left: 30px;
    vertical-align: top;
    display: table-cell; }
    @media (min-width: 640px) {
#coupon-header .left-wrapper .info {
        padding-left: 50px; } }
    @media (min-width: 840px) {
#coupon-header .left-wrapper .info.store {
        min-height: 110px;
        height: 120px;
        max-height: 200px; } }
    #coupon-header .left-wrapper .info h1 {
    padding-bottom: 5px;
    padding-top: 5px;
    font-size: 18px;
    line-height: 24px;
    color: #086a87; }
    @media (max-width: 639px) {
#coupon-header .left-wrapper .info .subheading, #coupon-header .left-wrapper .info .coupon-link {
        display: none; } }
    #coupon-header .left-wrapper .info .subheading {
    color: #666666;
    font-size: 12px; }
    #coupon-header .left-wrapper .info .short-text {
    width: 100%;
    overflow: visible;
    max-height: auto;
    padding-top: 5px;
    padding-bottom: 10px;
    line-height: 18px; }
      @media (max-width: 840px) {
#coupon-header .left-wrapper .info .short-text {
        display: none; } }
    #coupon-header .left-wrapper .info .hide-text {
    max-height: 48px;
    overflow: hidden; }
    #coupon-header .left-wrapper .info .text-toggle {
    display: none; }
      #coupon-header .left-wrapper .info .text-toggle span {
    color: #086a87;
    float: right;
    margin-top: 6px; }
        #coupon-header .left-wrapper .info .text-toggle span img {
    vertical-align: middle;
    padding-left: 2px; }
      @media (max-width: 840px) {
#coupon-header .left-wrapper .info .text-toggle {
        display: none !important; } }
    #coupon-header .left-wrapper .info .hide {
    display: none; }
    #coupon-header .left-wrapper .info .coupon-link {
    padding-top: 5px;
    height: 25px; }
      #coupon-header .left-wrapper .info .coupon-link > * {
    display: inline-block; }
#coupon-header .left-wrapper .info .coupon-link a {
    margin: 0;
    padding: 0;
    font-size: 11px;
    line-height: 26px;
    color: #086a87; }
      #coupon-header .left-wrapper .info .coupon-link .separator {
    color: #939597;
    padding-right: 5px;
    padding-left: 5px; }
        #coupon-header .left-wrapper .info .coupon-link .separator:last-child {
    display: none; }
  #coupon-header .right-wrapper {
    width: 0;
    position: relative; }
    @media (min-width: 1066px) {
#coupon-header .right-wrapper {
        width: 142px; } }
    #coupon-header .right-wrapper .networks {
    width: 50px;
    vertical-align: top;
    margin-left: 10px;
    display: none; }
      @media (min-width: 730px) {
#coupon-header .right-wrapper .networks {
        display: inline-block;
        margin-top: 16px; } }
  @media (min-width: 801px) {
#coupon-header.overview .left-wrapper .info h1, #coupon-header.store .left-wrapper .info h1 {
        font-size: 25px;
        line-height: 25px; } }
  @media (min-width: 615px) {
#coupon-header.overview .left-wrapper .info .coupon-link a, #coupon-header.store .left-wrapper .info .coupon-link a {
        font-size: 12px; } }

#coupon-store {
    width: 100%;
    margin: auto; }
  @media (min-width: 705px) {
#coupon-store > .content {
        display: table-cell; } }
  @media (min-width: 1066px) {
#coupon-store > .content > .container > .content {
        display: table-cell; } }
  #coupon-store .store-coupon-list .title.active {
    color: #086a87; }
  #coupon-store .store-coupon-list .title {
    font-size: 18px;
    line-height: 25px;
    padding-top: 30px;
    color: #a1a1a1;
    margin-bottom: 10px; }
  #coupon-store .store-coupon-list .item {
    display: block; }
    #coupon-store .store-coupon-list .item:not(:last-child) {
    margin-bottom: 13px; }
    #coupon-store .store-coupon-list .item .coupon-details {
    width: 100%;
    max-height: 170px;
    background-color: #f2f2f2;
    display: table; }
      #coupon-store .store-coupon-list .item .coupon-details .no-text {
    height: 0; }
      #coupon-store .store-coupon-list .item .coupon-details .info-details {
    width: 298px;
    display: table-cell;
    padding-left: 25px;
    padding-right: 10px;
    line-height: 20px; }
        @media (max-width: 639px) {
#coupon-store .store-coupon-list .item .coupon-details .info-details {
        display: block;
        width: 100%;
        padding-right: 25px; }
            #coupon-store .store-coupon-list .item .coupon-details .info-details .text {
        padding-bottom: 15px; } }
        #coupon-store .store-coupon-list .item .coupon-details .info-details .text {
    color: #666; }
      #coupon-store .store-coupon-list .item .coupon-details .holder {
    padding-left: 15px;
    display: table-cell; }
        #coupon-store .store-coupon-list .item .coupon-details .holder .fields {
    display: table-cell;
    color: #000; }
          #coupon-store .store-coupon-list .item .coupon-details .holder .fields table thead tr {
    text-align: left; }
            #coupon-store .store-coupon-list .item .coupon-details .holder .fields table thead tr th:first-child {
    padding-right: 20px; }
          #coupon-store .store-coupon-list .item .coupon-details .holder .fields table tbody tr td:first-child {
    font-weight: bold; }
          #coupon-store .store-coupon-list .item .coupon-details .holder .fields table thead th:nth-child(2), #coupon-store .store-coupon-list .item .coupon-details .holder .fields table tbody td:nth-child(2) {
    padding-left: 15px; }
          @media (min-width: 640px) {
#coupon-store .store-coupon-list .item .coupon-details .holder .fields div:last-child {
        padding-bottom: 9px; } }
        @media (max-width: 639px) {
#coupon-store .store-coupon-list .item .coupon-details .holder {
        display: block; }
            #coupon-store .store-coupon-list .item .coupon-details .holder .fields {
        padding-left: 10px; } }
    #coupon-store .store-coupon-list .item .coupon-details {
    width: 100%;
    overflow: visible;
    max-height: auto;
    padding-bottom: 5px; }
    #coupon-store .store-coupon-list .item .hide-details {
    display: none; }
    #coupon-store .store-coupon-list .item .details-toggle {
    height: 22px;
    background-color: #f2f2f2; }
      @media (max-width: 639px) {
#coupon-store .store-coupon-list .item .details-toggle {
        height: 28px;
        margin-top: 6px;
        padding-top: 4px; } }
      #coupon-store .store-coupon-list .item .details-toggle span {
    color: #086a87;
    float: right;
    padding-right: 14px;
    margin-right: 25px; }
    #coupon-store .store-coupon-list .item .inner {
    width: 100%;
    border-collapse: separate;
    table-layout: fixed; }
      @media (max-width: 639px) {
#coupon-store .store-coupon-list .item .inner {
        display: block; } }
      #coupon-store .store-coupon-list .item .inner .left {
    display: table-cell;
    min-width: 85px;
    width: 85px;
    vertical-align: middle;
    text-align: center; }
        @media (min-width: 640px) {
#coupon-store .store-coupon-list .item .inner .left .logo-text .logo {
        display: none; } }
        @media (min-width: 640px) {
#coupon-store .store-coupon-list .item .inner .left {
        min-width: 105px;
        width: 105px;
        padding-top: 0; } }
        #coupon-store .store-coupon-list .item .inner .left a {
    display: block; }
        #coupon-store .store-coupon-list .item .inner .left .offer-text.nocode, #coupon-store .store-coupon-list .item .inner .left .logo-text.nocode {
    color: #086a87; }
        #coupon-store .store-coupon-list .item .inner .left .offer-text.code, #coupon-store .store-coupon-list .item .inner .left .logo-text.code {
    color: #ff6633; }
        #coupon-store .store-coupon-list .item .inner .left .offer-text {
    display: table-cell;
    width: 85px;
    min-width: 100px;
    max-width: 120px;
    max-height: 137px;
    padding: 5px;
    table-layout: fixed;
    font-size: 20px;
    overflow: hidden; }
          @media (min-width: 640px) {
#coupon-store .store-coupon-list .item .inner .left .offer-text {
        width: 105px;
        min-width: 123px;
        max-width: 130px;
        border-right: 1px solid #f2f2f2;
        vertical-align: middle;
        height: 80px; } }
          #coupon-store .store-coupon-list .item .inner .left .offer-text img {
    line-height: normal;
    width: 60px; }
          #coupon-store .store-coupon-list .item .inner .left .offer-text span {
    line-height: 32px;
    display: block; }
          #coupon-store .store-coupon-list .item .inner .left .offer-text:first-line {
    font-size: 30px; }
        #coupon-store .store-coupon-list .item .inner .left .logo-text {
    text-align: center;
    display: initial;
    min-width: 85px;
    width: 85px;
    vertical-align: middle;
    height: 80px;
    max-height: 137px;
    border-color: inherit; }
          @media (min-width: 640px) {
#coupon-store .store-coupon-list .item .inner .left .logo-text {
        min-width: 105px;
        width: 105px; } }
          #coupon-store .store-coupon-list .item .inner .left .logo-text .logo {
    height: 60%; }
            #coupon-store .store-coupon-list .item .inner .left .logo-text .logo img {
    width: 100%;
    padding: 0 10px; }
              @media (max-width: 639px) {
#coupon-store .store-coupon-list .item .inner .left .logo-text .logo img {
        width: auto;
        height: 32px; } }
          #coupon-store .store-coupon-list .item .inner .left .logo-text .text {
    width: inherit;
    height: 80px;
    color: #333;
    line-height: 14px;
    padding: 7px 5px 0 5px; }
            @media (min-width: 640px) {
#coupon-store .store-coupon-list .item .inner .left .logo-text .text {
        border-right: 1px solid #f2f2f2;
        line-height: 19px; } }
            #coupon-store .store-coupon-list .item .inner .left .logo-text .text span {
    display: block;
    font-size: 11px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; }
              @media (min-width: 640px) {
#coupon-store .store-coupon-list .item .inner .left .logo-text .text span {
        font-size: 14px; } }
        #coupon-store .store-coupon-list .item .inner .left .code .text {
    color: #ff6633; }
        #coupon-store .store-coupon-list .item .inner .left .nocode .text {
    color: #086a87; }
      #coupon-store .store-coupon-list .item .inner .right {
    display: table-cell;
    width: 100%;
    vertical-align: middle; }
        #coupon-store .store-coupon-list .item .inner .right .right-inner {
    padding-left: 15px; }
          #coupon-store .store-coupon-list .item .inner .right .right-inner .tags {
    display: flex;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    height: 26px; }
            @media (min-width: 640px) {
#coupon-store .store-coupon-list .item .inner .right .right-inner .tags {
        padding-top: 10px; } }
            #coupon-store .store-coupon-list .item .inner .right .right-inner .tags span {
    font-size: 10px; }
              @media (min-width: 640px) {
#coupon-store .store-coupon-list .item .inner .right .right-inner .tags span {
        font-size: 11px; } }
            #coupon-store .store-coupon-list .item .inner .right .right-inner .tags .tag {
    margin-right: 10px;
    display: inline-block; }
              #coupon-store .store-coupon-list .item .inner .right .right-inner .tags .tag.recommended, #coupon-store .store-coupon-list .item .inner .right .right-inner .tags .tag.exclusive {
    font-weight: bold;
    text-transform: uppercase; }
                #coupon-store .store-coupon-list .item .inner .right .right-inner .tags .tag.recommended.code, #coupon-store .store-coupon-list .item .inner .right .right-inner .tags .tag.exclusive.code {
    color: #ff6633; }
                #coupon-store .store-coupon-list .item .inner .right .right-inner .tags .tag.recommended.nocode, #coupon-store .store-coupon-list .item .inner .right .right-inner .tags .tag.exclusive.nocode {
    color: #086a87; }
              #coupon-store .store-coupon-list .item .inner .right .right-inner .tags .tag.verified {
    display: none; }
                @media (min-width: 836px) {
#coupon-store .store-coupon-list .item .inner .right .right-inner .tags .tag.verified {
        display: inline-block; } }
                #coupon-store .store-coupon-list .item .inner .right .right-inner .tags .tag.verified i.icon-valid, #coupon-store .store-coupon-list .item .inner .right .right-inner .tags .tag.verified i.icon-valid-gray {
    margin-bottom: 3px; }
              #coupon-store .store-coupon-list .item .inner .right .right-inner .tags .tag.validity i.icon-expiry, #coupon-store .store-coupon-list .item .inner .right .right-inner .tags .tag.validity i.icon-expiry-gray {
    margin-bottom: 3px; }
              #coupon-store .store-coupon-list .item .inner .right .right-inner .tags .tag > span {
    vertical-align: top;
    padding: 0 0 0 5px; }
          #coupon-store .store-coupon-list .item .inner .right .right-inner .name {
    display: inline-block;
    padding-bottom: 7px; }
            #coupon-store .store-coupon-list .item .inner .right .right-inner .name h3 {
    display: inline-block;
    padding: 5px 0 0 0;
    font-size: 18px;
    line-height: 20px;
    color: #333333;
    max-height: 46px;
    margin-bottom: 10px; }
              @media (min-width: 840px) {
#coupon-store .store-coupon-list .item .inner .right .right-inner .name h3 {
        line-height: 26px;
        max-height: 56px; } }
              #coupon-store .store-coupon-list .item .inner .right .right-inner .name h3:hover {
    color: #086A87; }
          #coupon-store .store-coupon-list .item .inner .right .right-inner .text {
    display: inline-block;
    width: 100%;
    padding: 0 10px 0 0; }
            #coupon-store .store-coupon-list .item .inner .right .right-inner .text .text-inner {
    display: table;
    width: 100%;
    border-collapse: separate;
    table-layout: fixed; }
              #coupon-store .store-coupon-list .item .inner .right .right-inner .text .text-inner .collapsed {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden; }
                #coupon-store .store-coupon-list .item .inner .right .right-inner .text .text-inner .collapsed * {
    text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden; }
#coupon-store .store-coupon-list .item.expired .inner .left .offer-text {
    opacity: 0.4; }
    #coupon-store .store-coupon-list .item.expired .inner .left .logo-text .logo {
    opacity: 0.3; }
    #coupon-store .store-coupon-list .item.expired .inner .left .logo-text .text {
    opacity: 0.4; }
    #coupon-store .store-coupon-list .item.expired .inner .left .offer-text, #coupon-store .store-coupon-list .item.expired .inner .left .logo-text {
    opacity: 0.4; }
    #coupon-store .store-coupon-list .item.expired .inner .right .tags .recommended, #coupon-store .store-coupon-list .item.expired .inner .right .tags .code {
    opacity: 0.4; }
      #coupon-store .store-coupon-list .item.expired .inner .right .tags .recommended span, #coupon-store .store-coupon-list .item.expired .inner .right .tags .code span {
    opacity: 0.4; }
    #coupon-store .store-coupon-list .item.expired .inner .right .tags .exclusive {
    opacity: 0.4; }
      #coupon-store .store-coupon-list .item.expired .inner .right .tags .exclusive span {
    opacity: 0.4; }
    #coupon-store .store-coupon-list .item.expired .inner .right .tags .verified, #coupon-store .store-coupon-list .item.expired .inner .right .tags .validity {
    opacity: 0.4; }
    #coupon-store .store-coupon-list .item.expired .inner .right .name span, #coupon-store .store-coupon-list .item.expired .inner .right .name h3, #coupon-store .store-coupon-list .item.expired .inner .right .text span, #coupon-store .store-coupon-list .item.expired .inner .right .text h3 {
    cursor: default;
    opacity: 0.4; }
      #coupon-store .store-coupon-list .item.expired .inner .right .name span:hover, #coupon-store .store-coupon-list .item.expired .inner .right .name h3:hover, #coupon-store .store-coupon-list .item.expired .inner .right .text span:hover, #coupon-store .store-coupon-list .item.expired .inner .right .text h3:hover {
    color: #333333;
    opacity: 0.4; }
    #coupon-store .store-coupon-list .item.expired .action {
    opacity: 0.4; }
      #coupon-store .store-coupon-list .item.expired .action .button {
    cursor: default; }
    #coupon-store .store-coupon-list .item.expired .store-picture img {
    padding: 0 7px 0 7px;
    opacity: 0.4; }
    #coupon-store .store-coupon-list .item.expired .details-toggle span {
    opacity: 0.4; }
    #coupon-store .store-coupon-list .item.expired .coupon-details .text {
    opacity: 0.4; }
    #coupon-store .store-coupon-list .item.expired .coupon-details .holder .fields div {
    opacity: 0.4; }
  #coupon-store .store-coupon-list .inner .store-picture {
    display: none; }
    #coupon-store .store-coupon-list .inner .store-picture img {
    height: 80px;
    width: auto;
    border-right: 1px solid #f2f2f2;
    margin: 10px 0;
    padding: 0 7px; }
    @media (min-width: 740px) {
#coupon-store .store-coupon-list .inner .store-picture {
        display: table-cell; } }
  #coupon-store .store-coupon-list .inner .offer-text {
    height: 100px; }
  #coupon-store.store .left-inner-wrapper .left {
    padding-top: 10px;
    vertical-align: top; }
    #coupon-store.store .left-inner-wrapper .left .logo-text {
    display: table-cell; }

@media (min-width: 640px) {
.store-coupon-list .inner {
        border: 1px solid #f2f2f2;
        border-top-right-radius: 4px;
        border-top-left-radius: 4px;
        height: 104px;
        display: table; }
.store-coupon-list .inner .left {
        margin: 10px 0; } }

.related-stores {
    margin-bottom: 50px; }
.related-stores p {
    padding-bottom: 20px;
    padding-top: 40px;
    font-size: 18px;
    line-height: 24px;
    color: #086a87; }
.related-stores a {
    color: #95989a; }
.related-stores .related-store-item a {
    outline: 0; }
.related-stores .related-store-item img {
    padding: 5px; }
  @media (max-width: 639px) {
.related-stores .related-store-item {
        display: inline-block;
        max-width: 32%;
        height: auto;
        position: relative;
        margin: 5px auto;
        text-align: center;
        vertical-align: top; }
.related-stores .related-store-item img {
        height: auto;
        max-width: 100%;
        display: block;
        border: 1px solid #f2f2f2; }
.related-stores .related-store-item p {
        font-size: 13px;
        font-weight: 400;
        word-break: break-all; } }
  @media (min-width: 640px) {
.related-stores {
        font-size: 0; }
.related-stores .related-store-item {
        text-align: center;
        display: inline-block;
        vertical-align: top; }
.related-stores .related-store-item img {
        height: auto;
        margin-right: 10px;
        max-width: 149px;
        border: 1px solid #f2f2f2; }
.related-stores .related-store-item p {
        max-width: 149px; }
.related-stores .related-store-item:nth-child(6n+1) {
        margin-right: -10px; } }
  @media (min-width: 840px) {
.related-stores .related-store-item p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis; } }

@media (min-width: 840px) {
#coupon-header #star-rating-cont {
        top: 114px;
        left: 38px; } }

@media (min-width: 840px) {
#coupon-header #star-rating-cont div.stars {
        margin: 0 auto; } }

#coupon-header #star-rating-cont span.star-rating-avg {
    width: 150px;
    text-align: left;
    padding-left: 4px; }
  @media (min-width: 840px) {
#coupon-header #star-rating-cont span.star-rating-avg {
        text-align: center;
        padding: 5px 13px 0 0; } }

.coupon .action {
    padding: 0 22px 8px;
    border-radius: 5px; }
  @media (min-width: 640px) {
.coupon .action {
        display: table-cell;
        vertical-align: middle;
        width: 234px; } }
.coupon .action.nocode .button:hover {
    background-color: #07576e; }

