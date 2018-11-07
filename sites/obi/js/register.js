var requestUrl = 'https://obiclub-new-7.dev.bstd.ru/graphql/landing';

function showError(errors){
    $('#passError p').html(errors);
    $('#logoError').addClass('hide')
    $('#passError').removeClass('hide');
}

function hideError() {
    $('#passError').addClass('hide');
    $('#logoError').removeClass('hide');
}

$(document).ready(function(){

    $('#doRegister').on('click', function(e){
        e.preventDefault();
        
        $('#formRegister').validate().element( "#name");
        $('#formRegister').validate().element( "#date");
        $('#formRegister').validate().element( "#phone");
        $('#formRegister').validate().element( "#mail");

        $('#register-success').addClass('hide');
        $('#register-unsuccess').removeClass('hide');


        if($('#check').prop('checked') == false) {
            $('#check-error').removeClass('hide');
            return false;
        } else {
            $('#check-error').addClass('hide');
        }

        var name = $('#name').val();
        var mail = $('#mail').val();
        var phone = $('#phone').val().replace('+','').replace('(','').replace(')','').replace('-','').replace(/\s+/g,'');
        var bDate = $('#date').val().split('.');
        bDate = bDate[2] + '-' + bDate[1] + '-' + bDate[0];

        var content = 'mutation {' +
            'spb {'+
            'registration('+
            'firstName: "' + name + '",' +
            'email: "' + mail + '",' +
            'phone: "' + phone + '",' +
            'birthDate: "' + bDate + '"'+
            ') {'+
            '      status' +
            '      processingStatus' +
            '      profile {' +
            '        firstName' +
            '        phone' +
            '        email' +
            '        birthDate' +
            '      }'+
            '}'+
            '}'+
            '}';

        // var content = '';

        $.ajax({
            url: requestUrl,
            method: 'get',
            contentType: 'application/json',
            data: {
                query: content,
                variables: null
            },
            // dataType: 'json',
            // headers: {
            //     'Accept': 'application/json',
            //     'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7'
            // },
            success: function(response){
                if(response.data.spb.registration == null) {
                    var errors = '';
                    var attr;
                    for (k in response.errors) {
                        attr = response.errors[k]['message'];
                        for(errField in response.errors[k][attr]) {
                            for(errStr in response.errors[k][attr][errField])
                            errors += response.errors[k][attr][errField][errStr]+'<br>';
                        }
                    }
                    showError(errors);
                } else {
                    hideError();
                    $('#formRegister')[0].reset()
                    $('#section3').addClass('hide');
                    $('#register-success').removeClass('hide');
                }
            }, error: function(response){
                showError('Ошибка связи');
            }
        })
    })
})