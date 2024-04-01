
// chord : Maj7 7 6 9 sus4 b5 b9 baix_b79
var chord_alt = {'A': ['G','G#','F#','B','D','Eb','Bb','F'],
             'Bb': ['G#', 'A', 'G', 'C', 'Eb', 'E', 'B', 'F#'],
             'B': ['A','Bb','G#','C#','E','F','C','G'],
             'C': ['Bb','B','A','D','F','F#','C#', 'G#'],
             'C#': ['B','C','Bb','Eb','F#','G','D', 'A'],
             'D': ['C','C#','B','E','G','G#','Eb', 'Bb'],
             'Eb': ['C#','D','C','F','G#','A','E', 'B'],
             'E': ['D','Eb','C#','F#','A','Bb','F', 'C'],
             'F': ['Eb','E','D','G','Bb','B','F#', 'C#'],
             'F#': ['E','F','Eb','G#','B','C','G', 'D'],
             'G': ['F','F#','E','A','C','C#','G#','Eb'],
             'G#': ['F#','G','F','Bb','C#','D','A','E']
           }

 var chord = {'A-': ['A','C','E'],
              'AM': ['A','C#','E'],
              'Bb-': ['Bb','C#','F'],
              'BbM': ['Bb','D','F'],
              'B-': ['B','D','F#'],
              'BM': ['B','Eb','F#'],
              'C-': ['C','Eb','G'],
              'CM': ['C','E','G'],
              'C#-': ['C#','E','G#'],
              'C#M': ['C#','F','G#'],
              'D-': ['D','F','A'],
              'DM': ['D','F#','A'],
              'EbM': ['Eb','G','Bb'],
              'Eb-': ['Eb','F#','Bb'],
              'EM': ['E','G#','B'],
              'E-': ['E','G','B'],
              'FM': ['F','A','C'],
              'F-': ['F','G#','C'],
              'F#M': ['F#','Bb','C#'],
              'F#-': ['F#','A','C#'],
              'GM': ['G','B','D'],
              'G-': ['G','Bb','D'],
              'G#M': ['G#','C','Eb'],
              'G#-': ['G#','B','Eb'],
              'Aaug': ['A','C#','F'],
              'Bbaug': ['Bb','D','F#'],
              'Baug': ['B','Eb','G'],
              'Caug': ['C','E','G#'],
              'C#aug': ['C#','F','A'],
              'Daug': ['D','F#','Bb'],
              'Ebaug': ['Eb','G','B'],
              'Eaug': ['E','G#','C'],
              'Faug': ['F','A','C#'],
              'F#aug': ['F#','Bb','D'],
              'Gaug': ['G','B','Eb'],
              'G#aug': ['G#','C','E'],
              'Adim': ['A','C','Eb'],
              'Bbdim': ['Bb','C#','E'],
              'Bdim': ['B','D','F'],
              'Cdim': ['C','Eb','F#'],
              'C#dim': ['C#','E','G'],
              'Ddim': ['D','F','G#'],
              'Ebdim': ['Eb','F#','A'],
              'Edim': ['E','G','Bb'],
              'Fdim': ['F','G#','B'],
              'F#dim': ['F#','A','C'],
              'Gdim': ['G','Bb','C#'],
              'G#dim': ['G#','B','D'],
}



    $(document).ready(function(){
        window['actual_chord'] = ""
        window['actual_kind'] = ""
        window['actual_sub_kind'] = ""
        window['widget_chord'] = ""
        window['widget_kind'] = ""
        window['widget_sub_kind'] = ""
        window['estat'] = 'obrir'


        $( ".chord" ).click(function() {
          if (window['widget_chord']!=this) {
              if (window['widget_chord']!="") {
                $(window['widget_chord']).toggleClass('active');
              }
              window['actual_chord'] = $(this).attr('target-chord');
              window['widget_chord'] = this;
              $(this).toggleClass('active');
              actualitza();
            }
        });
        // FI CHORD CLICK

         $('#tancar').click(function() {
          if (window['estat'] == 'obrir') {
            window['estat'] = 'tancar';
            $(this).html('<span class="ui-btn-inner ui-btn-corner-all"><span class="ui-btn-text">Obrir</span></span>');
            visualitza();
            actualitza();
          } else {
            window['estat'] = 'obrir';
            $(this).html('<span class="ui-btn-inner ui-btn-corner-all"><span class="ui-btn-text">Tancar</span></span>');
            visualitza();
            actualitza();
          }
        });
        // FI TANCAR CLICK

        $(".kind_chord").click(function() {
         if (window['widget_kind']!=this) {
          if (window['widget_chord']!="") {
              if (window['widget_kind']!="") {
                $(window['widget_kind']).toggleClass('active');
              }
              window['actual_kind'] = $(this).attr('target-kind');
              window['widget_kind'] = this;
              if (window['actual_kind'] == 'M') {
                $('#primer_subtipus').html('<span class="ui-btn-inner"><span class="ui-btn-text">&Delta;</span></span>');
                $('#primer_subtipus').attr('target-kind','M7');
                $('#segon_subtipus').html('<span class="ui-btn-inner"><span class="ui-btn-text">7</span></span>');
                $('#segon_subtipus').attr('target-kind','7');
                $('#tercer_subtipus').html('<span class="ui-btn-inner"><span class="ui-btn-text">69</span></span>');
                $('#tercer_subtipus').attr('target-kind','69');
                $('#quart_subtipus').html('<span class="ui-btn-inner"><span class="ui-btn-text">s4</span></span>');
                $('#quart_subtipus').attr('target-kind','s4');
              }
              if (window['actual_kind'] == '-') {
                $('#primer_subtipus').html('<span class="ui-btn-inner"><span class="ui-btn-text">&Delta;</span></span>');
                $('#primer_subtipus').attr('target-kind','M7');
                $('#segon_subtipus').html('<span class="ui-btn-inner"><span class="ui-btn-text">7</span></span>');
                $('#segon_subtipus').attr('target-kind','7');
                $('#tercer_subtipus').html('<span class="ui-btn-inner"><span class="ui-btn-text">69</span></span>');
                $('#tercer_subtipus').attr('target-kind','69');
                $('#quart_subtipus').html('<span class="ui-btn-inner"><span class="ui-btn-text">&oslash;</span></span>');
                $('#quart_subtipus').attr('target-kind','7b5');
              }
              if (window['actual_kind'] == 'dim') {
                $('#primer_subtipus').html('<span class="ui-btn-inner"><span class="ui-btn-text">7</span></span>');
                $('#primer_subtipus').attr('target-kind','7');
                $('#segon_subtipus').html('<span class="ui-btn-inner"><span class="ui-btn-text">&oslash;</span></span>');
                $('#segon_subtipus').attr('target-kind','7b5');
                $('#tercer_subtipus').html('<span class="ui-btn-inner"><span class="ui-btn-text" style="font-size:0.7em">7b9</span></span>');
                $('#tercer_subtipus').attr('target-kind','7b9');
                $('#quart_subtipus').html('<span class="ui-btn-inner"><span class="ui-btn-text">-</span></span>');
                $('#quart_subtipus').attr('target-kind','-');
              }
              if (window['actual_kind'] == 'aug') {
                $('#primer_subtipus').html('<span class="ui-btn-inner"><span class="ui-btn-text">&Delta;</span></span>');
                $('#primer_subtipus').attr('target-kind','M7');
                $('#segon_subtipus').html('<span class="ui-btn-inner"><span class="ui-btn-text">7</span></span>');
                $('#segon_subtipus').attr('target-kind','7');
                $('#tercer_subtipus').html('<span class="ui-btn-inner"><span class="ui-btn-text">9</span></span>');
                $('#tercer_subtipus').attr('target-kind','9');
                $('#quart_subtipus').html('<span class="ui-btn-inner"><span class="ui-btn-text">-</span></span>');
                $('#quart_subtipus').attr('target-kind','-');
              }
              $(this).toggleClass('active');
          }
          if (window['widget_sub_kind']!="") {
                $(window['widget_sub_kind']).toggleClass('active');
          }
          window['actual_sub_kind'] = '';
          window['widget_sub_kind'] = '';
          actualitza();
         }
        });
        // FI KIND_CHORD CLICK
 

      $(".sub_kind_chord").click(function() {
         if (window['widget_sub_kind']!=this) {
          if (window['widget_sub_chord']!="") {
              if (window['widget_sub_kind']!="") {
                $(window['widget_sub_kind']).toggleClass('active');
              }
              window['actual_sub_kind'] = $(this).attr('target-kind');
              window['widget_sub_kind'] = this;
            }
              $(this).toggleClass('active');
          }
          actualitza();
         });
      // FI SUB KIND CHORD


      function visualitza() {
        if (window['estat'] == 'obrir') {
          for (var key in botons_dreta) {
            for (var j=0; j<botons_dreta[key].length; j++) {
              $('#boto'+botons_dreta[key][j]).html(key);
            }
          }
          var j = 0;
          for (var key in acords_obrint) {
            j++;
            $('#botoe'+j).html(acords_obrint[key]);
          }
        }
        if (window['estat'] == 'tancar') {
          for (var key in botons_dreta_tancant) {
            for (var j=0; j<botons_dreta_tancant[key].length; j++) {
              $('#boto'+botons_dreta_tancant[key][j]).html(key);
            }
          }
          var j = 0;
          for (var key in acords_tancant) {
            j++;
            $('#botoe'+j).html(acords_tancant[key]);
          }
        }
      }
      // FI VISUALITZA


      function activa_botons(botons, tipus) {
        for (var j = botons.length - 1; j >= 0; j--) {
          $('#boto'+botons[j]).addClass(tipus);
        };
      }

      function desactiva_botons(botons, tipus) {
        for (var j = botons.length - 1; j >= 0; j--) {
          $('#boto'+botons[j]).removeClass(tipus);
        };
      }

      function actualitza() {
          $('.botoactiu').each(function(index) {
            $(this).removeClass('botoactiu');
          })

          $('.botoseptima').each(function(index) {
            $(this).removeClass('botoseptima');
          })

          $('.botosisena').each(function(index) {
            $(this).removeClass('botosisena');
          })

          $('.botonovena').each(function(index) {
            $(this).removeClass('botonovena');
          })

          acordsTotal = window['actual_chord']+window['actual_kind'];
          notes = chord[acordsTotal];
          if (notes) {            
            if (window['estat']== 'obrir') {
              bd = botons_dreta;
              be = botons_esquerra;
            } else {
              bd = botons_dreta_tancant;
              be = botons_esquerra_tancant;
            }
            // tònica
            activa_botons(bd[notes[0]],'botoactiu');
            // 3a
            activa_botons(bd[notes[1]],'botoactiu');
            // Dominant
            activa_botons(bd[notes[2]],'botoactiu');

            if (window['actual_sub_kind']!='') {
              // Tenim un subtema
              if (window['actual_sub_kind']=='M7') {
                activa_botons(bd[chord_alt[window['actual_chord']][1]],'botoactiu');
              }
              if (window['actual_sub_kind']=='7'&& window['actual_kind']!='dim') {
                activa_botons(bd[chord_alt[window['actual_chord']][0]],'botoactiu');
              }
              if (window['actual_sub_kind']=='7'&& window['actual_kind']=='dim') {
                activa_botons(bd[chord_alt[window['actual_chord']][2]],'botoactiu');
              }
              if (window['actual_sub_kind']=='69') {
                activa_botons(bd[chord_alt[window['actual_chord']][2]],'botosisena');
                activa_botons(bd[chord_alt[window['actual_chord']][3]],'botoseptima');
              }
              if (window['actual_sub_kind']=='s4') {
                activa_botons(bd[chord_alt[window['actual_chord']][4]],'botoactiu');
                desactiva_botons(bd[notes[1]],'botoactiu');

              }
              if (window['actual_sub_kind']=='7b9') {
                activa_botons(bd[chord_alt[window['actual_chord']][2]],'botosisena');
                $('#botoe'+be[chord_alt[window['actual_chord']][7]+'M'][0]).addClass('botoactiu');
              }
              if (window['actual_sub_kind']=='7b5') {

                activa_botons(bd[chord_alt[window['actual_chord']][0]],'botoactiu');
                activa_botons(bd[chord_alt[window['actual_chord']][5]],'botoactiu');
              }
              if (window['actual_sub_kind']=='9') {
                activa_botons(bd[chord_alt[window['actual_chord']][3]],'botoactiu');

              }

            }
           
            botons = be[acordsTotal];
            if (botons) {
              for (var j = botons.length - 1; j >= 0; j--) {
                  $('#botoe'+botons[j]).addClass('botoactiu');
              };
            }
          };
        }
        // FI ACTUALITZA
      });