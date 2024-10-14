$(document).ready(function () {
  $("#partedoendereco").hide();

  $('.userendereco').click(function () {
      $('#partedoendereco').toggle();
  });
  $('.dropbtncopia').click(function () {
    $('#myDropdown').toggleClass('show');
  });
    $(".copiandoterceiros").hide(); 

    $('#faturar').change(function () {
        if ($(this).is(':checked')) {
            $('.copiandoterceiros').show();
        } else {
            $('.copiandoterceiros').hide();
        }
    });
    $(document).ready(function () {
        $('#input-parcelamento').on('focus', function () {
            $('#dropdown-parcelamento').show();
        });
    
        $('#input-parcelamento').on('blur', function () {
            setTimeout(function () {
                $('#dropdown-parcelamento').hide();
            }, 100);
        });
    
        $('.opcao-parcelamento').on('click', function () {
            var value = $(this).data('value');
            $('#input-parcelamento').val(value);
            $('#dropdown-parcelamento').hide();
        });
    
        $('#input-parcelamento').on('input', function () {
            var value = $(this).val().toLowerCase();
            $('.opcao-parcelamento').each(function () {
                var optionText = $(this).text().toLowerCase();
                $(this).toggle(optionText.indexOf(value) > -1);
            });
        });
    });
    
    $("#casodepix").hide();
    
    $('#pagarpix').click(function () {
        $('.sobrecartao').hide('show');
      });

    $('#pagarcartao').click(function () {
        $('.sobrecartao').show('show');
      });

    $('#pagarboleto').click(function () {
        $('.sobrecartao').hide('show');
      });


      document.querySelector('.dropbtn').addEventListener('click', function(event) {
        event.preventDefault(); 
    });

    document.querySelector('.dropbtncopia').addEventListener('click', function(event) {
        event.preventDefault(); 
    });

    $('.userendereco').click(function () {
        if ($('#partedoendereco').is(':visible')) {
            $('.bolinhasecond').css({
                'top': '1547px'
            });
        } else {
            $('.bolinhasecond').css({
                'top': '1300px'
            });
        }
    });

    $('.userendereco').click(function () {
        if ($('#partedoendereco').is(':visible')) {
            $('.demonstrasecond').css({
                'top': '1555px'
            });
        } else {
            $('.demonstrasecond').css({
                'top': '1307px'
            });
        }
    });

      $('#faturar').on('change', function () {
        if ($(this).is(':checked')) {
          $('.bolinhasecond').css({
            'top': '1645px'
          });
        } else {
          $('.bolinhasecond').css({
            'top': '1300px'
          });
        }
      });
      $('#faturar').on('change', function () {
        if ($(this).is(':checked')) {
          $('.demonstrasecond').css({
            'top': '1655px'
          });
        } else {
          $('.demonstrasecond').css({
            'top': '1310px'
          });
        }
      });

      $('.userendereco').click(function () {
        if ($('#partedoendereco').is(':visible') && $('.copiandoterceiros').is(':visible')) {
            $('.bolinhasecond').css({
                'top': '1895px'
            });
        }
    });
    
    $('#faturar').on('change', function () {
        if ($('#partedoendereco').is(':visible') && $('.copiandoterceiros').is(':visible')) {
            $('.bolinhasecond').css({
                'top': '1895px'
            });
        }
    });

    $('.userendereco').click(function () {
        if ($('#partedoendereco').is(':visible') && $('.copiandoterceiros').is(':visible')) {
            $('.demonstrasecond').css({
                'top': '1905px'
            });
        }
    });
    
    $('#faturar').on('change', function () {
        if ($('#partedoendereco').is(':visible') && $('.copiandoterceiros').is(':visible')) {
            $('.demonstrasecond').css({
                'top': '1905px'
            });
        }
    });
});
