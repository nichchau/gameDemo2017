$(function() {
            $( "#dialog-1" ).dialog({
               autoOpen: false,
               width: 400,
               height: 300,
                
            });
            $( "#opener" ).click(function() {
               $( "#dialog-1" ).dialog( "open" );
            });
});