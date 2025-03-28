/**
 * Created by valentecruz on 14/09/16.
 */

function logoutUser(){
    var parameters = null;

    var conn = $.ajax({
        data:  parameters,
        url : '/cgi/epicLogout.php',
        type:  'post',
        timeout: 10000,
        beforeSend: function () {

        },
        success:  function (response) {
            //console.log("response: "+response);
            var data = jQuery.parseJSON(response);
            window.location.href = data['path'];

        }
    }).fail(function(jqXHR, textStatus, errorThrown){


        console.log(textStatus+' '+errorThrown);
    });
}
