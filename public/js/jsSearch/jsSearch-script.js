document.write('<script type="javascript/text" src="js/jsMainGui/jsMainGui-script.js"></script>');

var eventoClick = new ClassSearchDinamy();
var result;
var timeLoad = 0;
var cant = 0;
var inputElements = [];
var config = {
  statusUserConfig: null,
  statusTypeUserConfig: null,
  statusRollUserConfig: null,
  userPhotonName: null,
  userID: null,
  userAuthStatus: null
};
var showFilter = false;

$(document).ready(function() {


  $("#v_frmCrls_btn_showFilters_arrow").css({
    'transition': 'transform .7s ease-in'
  });

  $("#frmCtrl_Roll").css({
    'display': 'none'
  });


  $("#v_frmCtrl_switchBtn_statusUser").click(function() {
    if ($("#v_frmCtrl_switchBtn_statusUser").is(':checked')) {
      statusUsers = 1;
      $("#v_frmCtrl_switchBtn_statusUser_title").html('On');
      eventoClick.searchInformation();
    } else {
      statusUsers = 0;
      eventoClick.searchInformation();
    }
  });

  eventoClick.searchInformation();

  $.each($("select"), function(i, k) {
    var selector = $(k).attr('name');
    //console.log(selector);
    eventoClick.selectPerformaceMaterialize(selector);
  });

  $("#v_frmCtrl_btn_back_search").click(function() {
    window.location = location.protocol + '//' + location.host + '/Admin/buscar-usuario';
  });

  var dataStatusAuths = null;

  var v_Height_content = screen.height - 355;
  var v_Height = screen.height - 156.8;
  //console.log(v_Height);
  var url = location.href;
  var numerId = location.href;
  var dataId_1 = numerId.replace(location.protocol + "//" + location.host + "/Admin/perfil/", "");
  var dataId_2 = numerId.replace(location.protocol + "//" + location.host + "/Admin/MyFiles/", "");

  var urlDato = null;
  if (dataId_1 == numerId.replace(location.protocol + "//" + location.host + "/Admin/perfil/", "")) {
    var idData = dataId_1;
    urlDato = numerId.replace(dataId_1, "");
  }
  if (dataId_2 == numerId.replace(location.protocol + "//" + location.host + "/Admin/MyFiles/", "")) {
    var idData = dataId_2;
    urlDato = numerId.replace(dataId_2, "");
  }






  if (url == location.protocol + "//" + location.host + "/Admin") {
    $(".content-perfil-header").css({
      'margin-top': '-52px'
    });
    //console.log('index');
  } else if (url == location.protocol + "//" + location.host + "/Admin/buscar-usuario") {
    $(".content-perfil-header").css({
      'margin-top': '-45px'
    });
    //console.log('buscar');
  } else if (url == location.protocol + "//" + location.host + "/Admin/buscar-agenda") {
    $(".content-perfil-header").css({
      'margin-top': '-52px'
    });
    //console.log('crear usuario');
  } else if (url == location.protocol + "//" + location.host + "/Admin/crear/usuario") {
    $(".content-perfil-header").css({
      'margin-top': '-52px'
    });
    //console.log('crear usuario');
  } else if (url == urlDato + idData) {
    $(".content-perfil-header").css({
      'margin-top': '-52px'
    });
    //console.log('crear usuario');
  }



  $('#form-content-search-user').css({
    'width': '80%',
    'height': '550px'
  });

  $(".form-content-search").css({
    'height': '250px',
    'top': '40px',
    'left': ($(window).width() - $('.form-content-search').outerWidth())/2,
    'position': 'fixed'
  });

  $(".form-article-search").css({
    'height': '' + (v_Height_content - 100) + 'px',
    'top': '-4px',
    'position': 'relative'
  });



  $(".form-toolt-hide-show").css({
    'height': '' + (v_Height + 33) + 'px',
    'top': '35px'
  });

  $(".form-search-agenda").css({
    'height': '' + (v_Height) + 'px'
  });




  $(".form-content-filters").css({
    'top': '52px',
    'height': '' + (v_Height + 36) + 'px'
  });

  $(".form-content-ctrls").css({
    'top': '52px',
    'height': '' + (v_Height + 36) + 'px'
  });



  $("div[id^=targetItem]").click(function() {

  });


  $("div[id=v_frmCrls_btn_showFilters]").click(function() {
    //console.log($(this).attr("id"));
    eventoClick.tooltSearchShow();
  });

  $("#v_frmUserToolts_status_active").click(function() {
    eventoClick.searhFunctionShowInformation();
  });

  $("#v_frmUserToolts_status_inhable").click(function() {
    eventoClick.searhFunctionShowInformation();
  });

  if ($("#v_frmCtrl_searchUser").val() != null) {
    $("#v_frmCtrl_searchUser").keyup(function() {
      eventoClick.searchInformation();
    });
  }




  $("#form-mssg-alert-action-error").css({
    'display': 'none'
  });
  $("#form-mssg-alert-action-validity-disabled").css({
    'display': 'none'
  });
  $("#form-mssg-alert-action-validity-enable").css({
    'display': 'none'
  });

  $("#v_frmCtrl_btn_close_mssg_alert").click(function() {
    $("#form-mssg-alert-action-error").css({
      'display': 'none'
    });
    $("#form-mssg-alert-action-validity-disabled").css({
      'display': 'none'
    });
    $("#form-mssg-alert-action-validity-enable").css({
      'display': 'none'
    });
  });
  $("#v_frmCtrl_btn_close_confirm_disabled_mssg_alert").click(function() {
    $("#form-mssg-alert-action-error").css({
      'display': 'none'
    });
    $("#form-mssg-alert-action-validity-disabled").css({
      'display': 'none'
    });
    $("#form-mssg-alert-action-validity-enable").css({
      'display': 'none'
    });
  });
  $("#v_frmCtrl_btn_close_confirm_enable_mssg_alert").click(function() {
    $("#form-mssg-alert-action-error").css({
      'display': 'none'
    });
    $("#form-mssg-alert-action-validity-disabled").css({
      'display': 'none'
    });
    $("#form-mssg-alert-action-validity-enable").css({
      'display': 'none'
    });
  });

  config.userID = $("body").attr('data_info_id');
  eventoClick.setupCheckBox();



});
$("#formSearchIncludeInformation").ready(function() {
  config.statusRollUserConfig = $("select[name=v_frmCtrl_Roll] option:selected").val();
  config.statusTypeUserConfig = $("select[name=v_frmCtrl_TypeUser] option:selected").val();
  eventoClick.searchInformation();
});


function ClassSearchDinamy() {

  var status_session;

  this.setupCheckBox = function() {

    if ($("#v_frmCtrl_switchBtn_statusUser").is(':checked')) {
      $("#v_frmCtrl_switchBtn_statusUser_title").html('On');
      config.statusUserConfig = 1;
      eventoClick.searchInformation();
    }

    $("#v_frmCtrl_switchBtn_statusUser").click(function() {
      if ($("#v_frmCtrl_switchBtn_statusUser").is(':checked')) {

        config.statusUserConfig = 1;
        $("#v_frmCtrl_switchBtn_statusUser_title").html('On');
        eventoClick.searchInformation();
      } else {
        config.statusUserConfig = 0;
        eventoClick.searchInformation();
      }
    });

  }


  this.tooltSearchShow = function() {
    if (showFilter == false) {
      showFilter = true;
      $("#v_frmCrls_btn_showFilters_arrow").css({
        'transform': 'rotate(270deg)'
      });
      $(".form-content-filters").css({
        'transition': 'transform .7s ease-in',
        'transform': 'translateX(0%)'
      });
      $(".form-content-ctrls").css({
        'transition': 'transform .7s ease-in',
        'transform': 'translateX(0%)'
      });


    } else {
      showFilter = false;
      $("#v_frmCrls_btn_showFilters_arrow").css({
        'transform': 'rotate(90deg)'
      });
      $(".form-content-filters").css({
        'transition': 'transform .7s ease-in',
        'transform': 'translateX(-100%)'
      });
      $(".form-content-ctrls").css({
        'transition': 'transform .7s ease-in',
        'transform': 'translateX(-1035%)'
      });

    }
  }

  this.searchInformation = function() {

    var search = $("#v_frmCtrl_searchUser").val();
    var token = $("input[name=_token]").val();
    var route = location.protocol + "//" + location.host + "/Admin/buscar-usuario/get";
    var namesearch = $("input[name=v_search-buscar-usuario").val();
    if ($("#v_frmUserToolts_status_active").is(':checked')) {
      var status = 1;
    } else if ($("#v_frmUserToolts_status_inhable").is(':checked')) {
      var status = 0;
    }
    var status_user = status;
    //console.log(roll);
    var appendData = $('#formSearchIncludeInformation');
    $.ajax({
      url: route,
      headers: {
        'X-CSRF-TOKEN': token
      },
      type: "GET",
      dataType: 'json',
      data: {
        v_formUserSearch: search,
        v_formUserStatus: config.statusUserConfig,
        v_formCrtUs_roll: config.statusRollUserConfig
      },
      success: function(us) {

        cant = $(us).length;
        //console.log('Cantidad de registro:'+cant);
        timeLoad = cant * 75 / 100;
        //console.log('Cantidad de tiempo  :'+timeLoad);

        //console.log('Tiempo:'+(1000+timeLoad));
        setTimeout(function() {
          appendData.empty();
          $.each(us, function(i, r) {
            if (r.estp_activeordesable == 0) {
              var dataHTML = '<div class="form-search-col form-search-col-small-dm-w-1 form-search-col-dm-h-3">' + '<div class="input-group-btn btn-dm-2">' + '<button type="button" id="btnEnable" class="btn btn-enable" data="' + r.dp_id + '"></button>' + '</div>' + '</div>';
            } else if (r.estp_activeordesable == 1) {
              var dataHTML = '<div class="form-search-col form-search-col-small-dm-w-1 form-search-col-dm-h-3">' + '<div class="input-group-btn btn-dm-2">' + '<button type="button" id="btnDisable" class="btn btn-disabled" data="' + r.dp_id + '"></button>' + '</div>' + '</div>';
            }
            if (r.pp_src_filename == '') {
              var photo = '<img src="' + location.protocol + '//' + location.host + '/' + 'img/icon/header/userDefault.png" class="img-dm-8 cicle-bisel-1" style="margin-top:6.5px;">';
            } else {
              var photo = '<img src="' + location.protocol + '//' + location.host + '/' + r.pp_src_dir + '/' + r.pp_src_filename + '" class="img-dm-8 cicle-bisel-1" style="margin-top:6.5px;">';
            }
            if (r.g_wordkey_genero == "wordkey_fm") {
              var information = '<button type="button" id="btnMore" class="btn btn-more_frm_fm" data="' + r.dp_id + '"/>';
            } else if (r.g_wordkey_genero == "wordkey_mc") {
              var information = '<button type="button" id="btnMore" class="btn btn-more_frm_mc" data="' + r.dp_id + '"/>';
            }
            appendData.append('<div class="form-rows-card form-rows-card_' + r.dp_id + '" data-id="' + r.dp_id + '" id="form-rows-card" >' +
              '<div class="form-search-col form-search-col-dm-w-1 form-search-col-dm-h-2 ">' +
              photo +
              '</div>' +
              '<div class="form-search-col form-search-col-dm-w-2 form-search-col-dm-h-2">' +
              '<label>' +
              r.dp_nombre +
              '</label>' +
              '</div>' +
              '<div class="form-search-col form-search-col-dm-w-2 form-search-col-dm-h-2">' +
              '<label>' +
              r.dp_telefono +
              '</label>' +
              '</div>' +
              '<div class="form-search-col form-search-col-dm-w-3 form-search-col-dm-h-2">' +
              '<label>' +
              r.us_email +
              '</label>' +
              '</div>' +
              '<div class="form-search-col form-search-col-dm-w-2 form-search-col-dm-h-2">' +
              '<div class="form-search-col-action form-search-col-dm-h-2">' +
              '<div class="input-group-btn btn-dm-2">' +
              information +
              '</div>' +
              '</div>' +
              '<div class="form-search-col-action form-search-col-dm-h-2">' +
              '<div class="input-group-btn btn-dm-2">' +
              dataHTML +
              '</div>' +
              '</div>' +
              '</div>' +
              '</div>');
          });
          eventoClick.EventClickSearch();


        }, (100 + timeLoad));




      }
    });

  }

  this.hexc = function(colorval) {
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
      parts[i] = parseInt(parts[i]).toString(16);
      if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    color = '#' + parts.join('');

    return color;
  }

  this.EnableFunction = function(id, status) {


    var search = $("#search").val();
    var token = $("input[name=_token]").val();
    var route = location.protocol + "//" + location.host + "/Admin/buscar-usuario/setUpdateEnableUser";
    var id = id;
    var status = status;
    $.ajax({
      url: route,
      headers: {
        'X-CSRF-TOKEN': token
      },
      type: "POST",
      dataType: 'json',
      data: {
        v_formIdUser: id,
        v_formUserStatus: status
      },
      success: function() {
        eventoClick.searchInformation();
      }
    });
    $("#form-mssg-alert-action-error").hide();
    $("#form-mssg-alert-action-validity_disable").hide();



  }
  this.DisableFunction = function(id, status) {
    var search = $("#search").val();
    var token = $("input[name=_token]").val();
    var route = location.protocol + "//" + location.host + "/Admin/buscar-usuario/setUpdateDisableUser";
    var id = id;
    var status = status;
    $.ajax({
      url: route,
      headers: {
        'X-CSRF-TOKEN': token
      },
      type: "POST",
      dataType: 'json',
      data: {
        v_formIdUser: id,
        v_formUserStatus: status
      },
      success: function() {
        eventoClick.searchInformation();
      }
    });

  }

  this.selectPerformaceMaterialize = function(id) {
    var selectAppend = null;
    $.each($("select[name=" + id + "] option"), function(indx, elements) {
      var v_value = elements.value;
      var v_text = elements.text;
      //console.log(v_value+':'+v_text);
      $("#" + id).html('<div class="select_Content_Title"><span data-value="' + '">Seleccione una opción</span></div><div class="select_Icon select_icon_circle select_icon-dm-1"><img src="' + location.protocol + '//' + location.host + '/img/icon/form/arrowHover.png" class="select_icon" id="select_arrow' + id + '"></div>');
      $("#select_arrow" + id).css({
        'transform': 'rotate(180deg)'
      });
    });
    $("#" + id).click(function() {
      if ($("#" + id).hasClass('desactivateSelect')) {
        $("#" + id).removeClass('desactivateSelect').addClass('activateSelect');
        $("#" + id + "_Title").removeClass('selectTitleDesactivate').addClass('selectTitleActive');
        $("#select_arrow" + id).css({
          'transform': 'rotate(0deg)'
        }).fadeIn('slow');
        $("#select_arrow" + id).attr('src', location.protocol + '//' + location.host + '/img/icon/form/arrowselectUp.png').fadeIn('slow');
      } else if ($("#" + id).hasClass('activateSelect')) {
        $("#" + id).removeClass('activateSelect').addClass('desactivateSelect');
        $("#" + id + "_Title").removeClass('selectTitleActive').addClass('selectTitleDesactivate');
        $("#select_arrow" + id).css({
          'transform': 'rotate(180deg)'
        }).fadeIn('slow');
        $("#select_arrow" + id).attr('src', location.protocol + '//' + location.host + '/img/icon/form/arrowHover.png').fadeIn('slow');
      }
      $("#" + id + "_content").empty();
      $("#" + id + "_content").append('<div class="select_Content_Title disableSelectChouse"><span>Seleccione una opción</span></div>');
      if ($("#" + id + "_content").css('display') == 'none') {
        $("#" + id + "_content").show();
      } else {
        $("#" + id + "_content").fadeOut(10);
      }
      $.each($("select[name=" + id + "] option"), function(indx, elements) {
        var v_value = elements.value;
        var v_text = elements.text;
        $("#" + id + "_content").append('<div class="select_Content_Title hover" id="' + id + '_' + v_value + '"><span data-value="' + v_value + '">' + v_text + '</span></div>');
        eventoClick.SelectOption(id, v_value);
      });


    });

  }
  this.SelectOption = function(id, value) {
    $("#" + id + '_' + value).click(function() {
      var data = $(this).attr('id');
      var text = $(this).text();
      var tamstring = data.length;
      var inictial = "v_frmCtrl_";
      var tamini = inictial.length;
      var sustringData = data.substring(tamini, (tamstring - 2));

      $("select[name=" + id + "]").val(value).change();
      $("#" + id).html('<div class="select_Content_Title"><span data-value="' + '">' + text + '</span></div><div class="select_Icon select_icon_circle select_icon-dm-1"><img src="' + location.protocol + '//' + location.host + '/img/icon/form/arrowHover.png" class="select_icon" id="select_arrow' + id + '"></div>');
      $("#select_arrow" + id).css({
        'transform': 'rotate(180deg)'
      });
      $("#" + id + "_content").fadeOut(10);
      $("#" + id).removeClass('activateSelect').addClass('desactivateSelect');
      $("#" + id + "_Title").removeClass('selectTitleActive').addClass('selectTitleDesactivate');

      eventoClick.SelectFunction($("select[name=" + id + "] option[value=" + value + "]").text());
      eventoClick.searchInformation();

    });

  }

  this.SelectFunction = function(id) {
    switch (id) {
      case "Administrador":
        config.statusRollUserConfig = 1;
        break;
      case "Administrator":
        config.statusRollUserConfig = 1;
        break;
      case "Auxiliar":
        config.statusRollUserConfig = 2;
        break;
      case "Assistan":
        config.statusRollUserConfig = 2;
        break;
      case "Asistente del sistema":
        $("#frmCtrl_Roll").css({
          'transition': 'all .5s ease',
          'display': 'block'
        });
        $("#frm_system_user_1").show('slow');
        $("#frm_system_user_2").show('slow');
        $("#frm_system_user_3").show('slow');
        $("#frm_system_user_4").show('slow');
        $("#frm_system_user_5").show('slow');
        $("#frm_beneficier_1").hide('slow');
        $("#frm_beneficier_2").hide('slow');
        $("#frm_beneficier_3").hide('slow');
        $("#frm_beneficier_4").hide('slow');
        $("#frm_beneficier_5").hide('slow');
        config.statusTypeUserConfig = 1;
        break;
      case "Beneficiario":
        $("#frmCtrl_Roll").css({
          'transition': 'all .5s ease',
          'display': 'none'
        });
        $("#frm_system_user_1").hide('slow');
        $("#frm_system_user_2").hide('slow');
        $("#frm_system_user_3").hide('slow');
        $("#frm_system_user_4").hide('slow');
        $("#frm_system_user_5").hide('slow');
        $("#frm_beneficier_1").show('slow');
        $("#frm_beneficier_2").show('slow');
        $("#frm_beneficier_3").show('slow');
        $("#frm_beneficier_4").show('slow');
        $("#frm_beneficier_5").show('slow');
        config.statusRollUserConfig = 3;
        config.statusTypeUserConfig = 2;
        break;
      case "Profesor":
        $("#frmCtrl_Roll").css({
          'transition': 'all .5s ease',
          'display': 'none'
        });
        $("#frm_system_user_1").hide('slow');
        $("#frm_system_user_2").hide('slow');
        $("#frm_system_user_3").hide('slow');
        $("#frm_system_user_4").hide('slow');
        $("#frm_system_user_5").hide('slow');
        $("#frm_beneficier_1").hide('slow');
        $("#frm_beneficier_2").hide('slow');
        $("#frm_beneficier_3").hide('slow');
        $("#frm_beneficier_4").hide('slow');
        $("#frm_beneficier_5").hide('slow');
        config.statusRollUserConfig = 3;
        config.statusTypeUserConfig = 3;
        break;
      case "Padre o Madre":
        $("#frmCtrl_Roll").css({
          'transition': 'all .5s ease',
          'display': 'none'
        });
        $("#frm_system_user_1").hide('slow');
        $("#frm_system_user_2").hide('slow');
        $("#frm_system_user_3").hide('slow');
        $("#frm_system_user_4").hide('slow');
        $("#frm_system_user_5").hide('slow');
        $("#frm_beneficier_1").hide('slow');
        $("#frm_beneficier_2").hide('slow');
        $("#frm_beneficier_3").hide('slow');
        $("#frm_beneficier_4").hide('slow');
        $("#frm_beneficier_5").hide('slow');
        config.statusRollUserConfig = 3;
        config.statusTypeUserConfig = 4;
        break;
      case "Voluntario":
        $("#frmCtrl_Roll").css({
          'transition': 'all .5s ease',
          'display': 'none'
        });
        $("#frm_system_user_1").hide('slow');
        $("#frm_system_user_2").hide('slow');
        $("#frm_system_user_3").hide('slow');
        $("#frm_system_user_4").hide('slow');
        $("#frm_system_user_5").hide('slow');
        $("#frm_beneficier_1").hide('slow');
        $("#frm_beneficier_2").hide('slow');
        $("#frm_beneficier_3").hide('slow');
        $("#frm_beneficier_4").hide('slow');
        $("#frm_beneficier_5").hide('slow');
        config.statusRollUserConfig = 3;
        config.statusTypeUserConfig = 5;
        break;

    }
  }

  this.EventClickSearch = function() {
    $("button[id=btnEnable]").click(function() {
      var id = $(this).attr('data');

      if ($("div[id=form-mssg-alert-action-validity-enable]").css('display') == 'none') {
        $("div[id=form-mssg-alert-action-validity-enable]").css({
          'display': 'block'
        });
        $("#v_frmCtrl_btn_confirm_enable_mssg_alert").attr('data-unic', id);
      }
      $("#v_frmCtrl_btn_confirm_enable_mssg_alert").click(function() {
        if ($("#v_frmCtrl_btn_confirm_enable_mssg_alert").attr('data-unic') == id) {
          eventoClick.EnableFunction(id, 1);
          $("#form-mssg-alert-action-error").hide();
          $("#form-mssg-alert-action-validity-disabled").hide();
          $("#form-mssg-alert-action-validity-enable").hide();
          $("#v_frmCtrl_btn_confirm_enable_mssg_alert").attr('data-unic', '');
        }

      });


    });
    $("button[id=btnDisable]").click(function() {
      var token = $("input[name=_token]").val();
      var id = $(this).attr('data');
      $.ajax({
        url: location.protocol + "//" + location.host + "/Admin/buscar-usuario/authConfirm",
        headers: {
          'X-CSRF-TOKEN': token
        },
        type: "GET",
        dataType: 'json',
        data: {
          v_formIdUser: id
        },
        success: function(data) {

          $.each(data, function(indx, elements) {
            if (elements == "1") {
              config.userAuthStatus = true;
            }
          });

          if (config.userID != id) {
            if ($("div[id=form-mssg-alert-action-validity-disabled]").css('display') == 'none') {
              $("div[id=form-mssg-alert-action-validity-disabled]").css({
                'display': 'block'
              });
              $("#v_frmCtrl_btn_confirm_disabled_mssg_alert").attr('data-unic', id);
            }
            $("#v_frmCtrl_btn_confirm_disabled_mssg_alert").click(function() {
              if ($("#v_frmCtrl_btn_confirm_disabled_mssg_alert").attr('data-unic') == id) {
                eventoClick.DisableFunction(id, 0);
                eventoClick.searchInformation();
                $("#form-mssg-alert-action-error").hide();
                $("#form-mssg-alert-action-validity-disabled").hide();
                $("#form-mssg-alert-action-validity-enable").hide();
                $("#v_frmCtrl_btn_confirm_disabled_mssg_alert").attr('data-unic', '');
              }
            });
          }

          if ((config.userAuthStatus == true) && (config.userID == id)) {
            if ($("div[id=form-mssg-alert-action-error]").css('display') == 'none') {
              $("div[id=form-mssg-alert-action-error]").css({
                'display': 'block'
              });
            }
          }

        }

      });

    });
    $("button[id=btnMore]").click(function() {
      var id = $(this).attr('data');
      window.location = location.protocol + '//' + location.host + '/Admin/viewPerfil/' + id;

    });




  }
}
