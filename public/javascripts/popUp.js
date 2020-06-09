// $( document ).on( "pageinit", function() {
//     $( '#popupMenu-Bench-Press' ).on({
//         popupafterclose: function() {
//             setTimeout( function(){ $( '#subPopUpMenu-Bench-Press' ).popup( 'open' ) }, 100 );
//         }
//     });
// });

$( document ).ready(function() {
    $( '#popupMenu-Bench-Press' ).on({
        popupafterclose: function() {
            setTimeout( function(){ $( '#subPopUpMenu-Bench-Press' ).popup( 'open' ) }, 100 );
        }
    });
});
