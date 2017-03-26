 $(function() {
            $( "#dialog-1" ).dialog({
               autoOpen: false,
               width: 800,
               height: 400,
                
            });
            $( "#opener" ).click(function() {
               $( "#dialog-1" ).dialog( "open" );
            });
});