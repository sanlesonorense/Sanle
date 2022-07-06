function socialicons_imStickyBar_pluginAppObj_01() {
    
    var containerWidth;
    var btnWidth;
    var btnHeight;
    var btnMargin;
    var numBtn; 
    
    x5engine.boot.push(function(){
        
        btnWidth = 50;
        btnHeight = 50;
        btnMargin = 10;
        numBtn = $("#imStickyBar_pluginAppObj_01 .social-icon").length;
        
        $('#imContent').on('breakpointChangedOrFluid', function (e, breakpoint) {
            resizeSocials_imStickyBar_pluginAppObj_01();
        });
        resizeSocials_imStickyBar_pluginAppObj_01();
    });

       function resizeSocials_imStickyBar_pluginAppObj_01() {
           
           /*reset margins*/
           $("#imStickyBar_pluginAppObj_01 .social-icon").removeClass("last-item-row");
           $("#imStickyBar_pluginAppObj_01 .social-icon").removeClass("last-row");
           $("#imStickyBar_pluginAppObj_01 .social-icon").removeClass("one-row");
                 
           containerWidth = $('#imStickyBar_pluginAppObj_01').width();
           
           var buttonPerRow = 1;
           if("horizontal" === "horizontal")
                buttonPerRow = getButtonPerRow();
               
           if(buttonPerRow == 1){
               $("#imStickyBar_pluginAppObj_01 .social-icon:last-child").addClass("last-row");
           }
           else if(numBtn == buttonPerRow){
               $("#imStickyBar_pluginAppObj_01 .social-icon").addClass("last-row");
               $("#imStickyBar_pluginAppObj_01 .social-icon:last-child").addClass("last-item-row");  
            }
           else{
               $("#imStickyBar_pluginAppObj_01 .social-icon:nth-child(" + buttonPerRow + "n)").addClass("last-item-row");
               $("#imStickyBar_pluginAppObj_01 .social-icon:nth-child(n+" + parseInt(buttonPerRow+1) + ")").addClass("last-row");
           }
             
           var fact = containerWidth < btnWidth ? containerWidth / btnWidth : 1;
           $('#imStickyBar_pluginAppObj_01 .social-icon, #imStickyBar_pluginAppObj_01 .sides-container').css({
               width: btnWidth * fact,
               height: btnHeight * fact
           });
       }

        function getButtonPerRow() {
            var remaining = containerWidth - btnWidth;
            var count = 1;
            while (remaining >= btnWidth + (count == numBtn-1 ? 0 : btnMargin)) {
                count++;
                if(count == numBtn)
                    break;
                
                remaining -= btnWidth + btnMargin;
            }           
            return count;
        }
}