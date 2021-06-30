jQuery(document).ready(function($) {
  anim_gif();
});

var gif = {
  frame_height: (window.innerWidth * 0.15),
  num_frames: 67,
  loop_frame: 39,
  frame_duration: 125
};

var gif1 = {
  cur_frame: 0
};

var gif2 = {
  cur_frame: 0
};

var gif3 = {
  cur_frame: 0
};

var gif4 = {
  cur_frame: 0
};

function anim_gif() {
  window.setInterval(
    function() {
      $('#blue').css('top',
        (-gif.frame_height * gif1.cur_frame) + 'px'
      );
      gif1.cur_frame = (gif1.cur_frame + 1) % gif.num_frames;

      $('#black').css('top',
        (-gif.frame_height * gif2.cur_frame) + 'px'
      );
      gif2.cur_frame = (gif2.cur_frame + 1) % gif.num_frames;

      $('#red').css('top',
        (-gif.frame_height * gif3.cur_frame) + 'px'
      );
      gif3.cur_frame = (gif3.cur_frame + 1) % gif.num_frames;

      $('#green').css('top',
        (-gif.frame_height * gif4.cur_frame) + 'px'
      );
      gif4.cur_frame = (gif4.cur_frame + 1) % gif.num_frames;

      if (gif1.cur_frame == gif.loop_frame || gif2.cur_frame == gif.loop_frame || gif3.cur_frame == gif.loop_frame || gif4.cur_frame == gif.loop_frame) {
        var scelta_gif = Math.floor(Math.random() * 4);
        if (scelta_gif == 0) {
          var rand = Math.floor(Math.random() * 8);
          if (rand <= 5) {
            gif1.cur_frame = 39;
            gif2.cur_frame = 0;
            gif3.cur_frame = 0;
            gif4.cur_frame = 0;
          } else {
            gif1.cur_frame = 0;
            gif2.cur_frame = 0;
            gif3.cur_frame = 0;
            gif4.cur_frame = 0;
          };
        } else if (scelta_gif == 1) {
          var rand = Math.floor(Math.random() * 8);
          if (rand <= 5) {
            gif1.cur_frame = 0;
            gif2.cur_frame = 39;
            gif3.cur_frame = 0;
            gif4.cur_frame = 0;
          } else {
            gif1.cur_frame = 0;
            gif2.cur_frame = 0;
            gif3.cur_frame = 0;
            gif4.cur_frame = 0;
          };
        } else if (scelta_gif == 2) {
          var rand = Math.floor(Math.random() * 8);
          if (rand <= 5) {
            gif1.cur_frame = 0;
            gif2.cur_frame = 0;
            gif3.cur_frame = 39;
            gif4.cur_frame = 0;
          } else {
            gif1.cur_frame = 0;
            gif2.cur_frame = 0;
            gif3.cur_frame = 0;
            gif4.cur_frame = 0;
          };
        } else {
          var rand = Math.floor(Math.random() * 8);
          if (rand <= 5) {
            gif1.cur_frame = 0;
            gif2.cur_frame = 0;
            gif3.cur_frame = 0;
            gif4.cur_frame = 39;
          } else {
            gif1.cur_frame = 0;
            gif2.cur_frame = 0;
            gif3.cur_frame = 0;
            gif4.cur_frame = 0;
          };
        };
      };
    },
    gif.frame_duration
  );
};
