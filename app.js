
$(document).ready(function () {
  $("#casoestrangeiro").hide();

  $("#averiguar").on('change', function () {
    $("#documentos").toggle(!$(this).is(":checked"));
    $("#casoestrangeiro").toggle($(this).is(":checked"));
  });

  $('.dropbtn').click(function () {
    $('#myDropdown').toggleClass('show');
  });

  $('#faturar').on('change', function () {
    if ($(this).is(':checked')) {
      $('#segundoforms').css({
        'top': '1700px'
      });
    } else {
      $('#segundoforms').css({
        'top': '1300px',
        'left': '360px'
      });
    }
  });

  $('.dropbtn').click(function () {
    $('#myDropdown').toggleClass('show');
  });

  $('#faturar').on('change', function () {
    if ($(this).is(':checked')) {
      $('#terceiraparte').css({
        'top': '2300px'
      });
    } else {
      $('#terceiraparte').css({
        'top': '2000px',
        'left': '360px'
      });
    }
  });

  $('.dropbtn').click(function () {
    $('#myDropdown').toggleClass('show');
  });

  $('#faturar').on('change', function () {
    if ($(this).is(':checked')) {
      $('#footer').css({
        'top': '3900px'
      });
    } else {
      $('#footer').css({
        'top': '3650px',
      });
    }
  });

  let clickedCartao = false;
  let clickedPix = false;
  let clickedBoleto = false;

  $('#pagarcartao').on('mouseenter', function () {
    if (!clickedCartao) {
      $(this).css('border-color', 'green');
      $(this).find('p').css('color', 'green');
    }
  });

  $('#pagarcartao').on('mouseleave', function () {
    if (!clickedCartao) {
      $(this).css('border-color', 'gray');
      $(this).find('p').css('color', 'gray');
    }
  });

  $('#pagarcartao').on('click', function () {
    clickedCartao = true;
    $(this).css('border-color', 'green');
    $(this).find('p').css('color', 'green');
    clickedPix = false;
    $('#pagarpix').css('border-color', 'gray');
    $('#pagarpix').find('p').css('color', 'gray');
    clickedBoleto = false;
    $('#pagarboleto').css('border-color', 'gray');
    $('#pagarboleto').find('p').css('color', 'gray');
  });

  $('#pagarpix').on('mouseenter', function () {
    if (!clickedPix) {
      $(this).css('border-color', 'green');
      $(this).find('p').css('color', 'green');
    }
  });

  $('#pagarpix').on('mouseleave', function () {
    if (!clickedPix) {
      $(this).css('border-color', 'gray');
      $(this).find('p').css('color', 'gray');
    }
  });

  $('#pagarpix').on('click', function () {
    clickedPix = true;
    $(this).css('border-color', 'green');
    $(this).find('p').css('color', 'green');
    clickedCartao = false;
    $('#pagarcartao').css('border-color', 'gray');
    $('#pagarcartao').find('p').css('color', 'gray');
    clickedBoleto = false;
    $('#pagarboleto').css('border-color', 'gray');
    $('#pagarboleto').find('p').css('color', 'gray');
  });

  $('#pagarboleto').on('mouseenter', function () {
    if (!clickedBoleto) {
      $(this).css('border-color', 'green');
      $(this).find('p').css('color', 'green');
    }
  });

  $('#pagarboleto').on('mouseleave', function () {
    if (!clickedBoleto) {
      $(this).css('border-color', 'gray');
      $(this).find('p').css('color', 'gray');
    }
  });

  $('#pagarboleto').on('click', function () {
    clickedBoleto = true;
    $(this).css('border-color', 'green');
    $(this).find('p').css('color', 'green');
    clickedCartao = false;
    $('#pagarcartao').css('border-color', 'gray');
    $('#pagarcartao').find('p').css('color', 'gray');
    clickedPix = false;
    $('#pagarpix').css('border-color', 'gray');
    $('#pagarpix').find('p').css('color', 'gray');
  });

  $("#casodepix").hide();
  $("#casodeboleto").hide();

  $(document).ready(function () {
    $('#pagarcartao').on('click', function () {
      $('#casodecartao').show();
      $('#casodepix').hide();
      $('#casodeboleto').hide();
    });

    $('#pagarpix').on('click', function () {
      $('#casodecartao').hide();
      $('#casodepix').show();
      $('#casodeboleto').hide();
    });

    $('#pagarboleto').on('click', function () {
      $('#casodecartao').hide();
      $('#casodepix').show();
      $('#casodeboleto').show();
    });
  });



  $(window).click(function (event) {
    if (!$(event.target).closest('.dropbtn, #myDropdown').length) {
      $('#myDropdown').removeClass('show');
    }
  });

  $("#copias").hide();

  $("#faturar").on('change', function () {
    $("#copias").toggle($(this).is(":checked"));
  });

  //teste do novo dropdown
  $(document).ready(function () {
    $('#parcelar-input-unique').on('focus', function () {
      $('#parcelar-dropdown-unique').show();
    });

    $('#parcelar-input-unique').on('blur', function () {
      setTimeout(function () {
        $('#parcelar-dropdown-unique').hide();
      }, 100);
    });

    $('.option-unique').on('click', function () {
      var value = $(this).data('value');
      $('#parcelar-input-unique').val(value);
      $('#parcelar-dropdown-unique').hide();
    });

    $('#parcelar-input-unique').on('input', function () {
      var value = $(this).val().toLowerCase();
      $('.option-unique').each(function () {
        var optionText = $(this).text().toLowerCase();
        $(this).toggle(optionText.indexOf(value) > -1);
      });
    });
  });
  //fm do teste



  $('#aplicando').on('mouseenter', function () {
    $(this).css('border-color', 'blue');
    $(this).find('p').css('color', 'blue');
  });

  $('#aplicando').on('mouseleave', function () {
    $(this).css('border-color', 'gray');
    $(this).find('p').css('color', 'gray');
  });

  $('#desejacupom').on('click', function () {
    $('#cupomdescont').toggleClass('show');
  });


  $('.quadradofuncionario').hover(
    function () {
      $(this).css('opacity', 1);
    },
    function () {
      $(this).css('opacity', 0.60);
    }
  );


  $('.quadradocolaboradores').hover(
    function () {
      $(this).css('opacity', 1);
    },
    function () {
      $(this).css('opacity', 0.60);
    }
  );

  function checkWidth() {
    if (window.innerWidth <= 799 && window.location.href.indexOf('mobile.html') === -1) {
        window.location.href = 'mobile.html'; 
    } else if (window.innerWidth > 799 && window.location.href.indexOf('index.html') === -1) {
        window.location.href = 'index.html'; 
    }
}

window.onload = checkWidth;
window.onresize = checkWidth;





  /*$('#desejacupom').on('click', function() {
    $('#estrutura2').css({
      'top': '4000px',
    });
  });*/

});