function actionDownload(){downloadPictureElem[0].click()}function actionImitationClick(){$("#label-upload")[0].click()}function actionCopyToClipboard(a){copyToClipboard(a),notification.css("opacity","1"),notification.css("top","100px"),setTimeout(function(){notification.css("opacity",".0"),notification.css("top","80px")},2e3)}function setMain(){body.css("background-color","#34495E"),480<screen.width?(main.css("top","70px"),main.css("left","25px"),main.css("right","25px"),main.css("bottom","70px")):(main.css("top","225px"),main.css("left","25px"),main.css("right","25px"),main.css("bottom","170px")),footer.css("background-color","transparent"),footer.css("bottom",$(".arrow-box").length?"-44px":"0"),$(".url-input").css("background-color","#2C3E50")}function setPictureReg(a,b){picture.css("max-width",a),picture.css("max-height",b)}function calcViewRotateDeg(){if(!(1==Math.abs(rotateDeg)/90%2))calculateView(0,1)||(setMain(),setPictureReg("100%","100%"));else if(!calculateView(1,0)){setMain();var a="0px"===main.css("left");setPictureReg(main.height()-(a?140:0),main.width()-(a?50:0))}}function actionRotateZ(a){rotateDeg+=a,calcViewRotateDeg(),picture.css("transform","rotateZ("+rotateDeg+"deg)")}function actionSendURL(a){13==a.keyCode&&(ajaxSendURL($(".url-input").val()),$(".url-input").val(""))}var site=window.location.protocol+"//"+window.location.host+"/";