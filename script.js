jQuery(document).ready(function($) {
  anim_blue_gif();
  anim_black_gif();
  anim_red_gif();
  anim_green_gif();
});

function anim_blue_gif() {
  var ani = {
    frame_height: (window.innerWidth * 0.15),
    num_frames: 67,
    loop_frame: 39,
    frame_duration: 125,
    cur_frame: 0
  };
  window.setInterval(
    function() {
      $('#blue').css('top',
        (-ani.frame_height * ani.cur_frame) + 'px'
      );
      ani.cur_frame = (ani.cur_frame + 1) % ani.num_frames;
      if (ani.cur_frame == ani.loop_frame) {
        var rand = Math.floor(Math.random() * 10);
        if (rand <= 2) {
          ani.cur_frame = 39;
        } else {
          ani.cur_frame = 0;
        };
      };
      // if (ani.cur_frame == 0) ani.cur_frame = ani.loop_frame;
    },
    ani.frame_duration
  );
}

function anim_black_gif() {
  var ani = {
    frame_height: (window.innerWidth * 0.15),
    num_frames: 67,
    loop_frame: 39,
    frame_duration: 125,
    cur_frame: 0
  };
  window.setInterval(
    function() {
      $('#black').css('top',
        (-ani.frame_height * ani.cur_frame) + 'px'
      );
      ani.cur_frame = (ani.cur_frame + 1) % ani.num_frames;
      if (ani.cur_frame == ani.loop_frame) {
        var rand = Math.floor(Math.random() * 10);
        if (rand <= 2) {
          ani.cur_frame = 39;
        } else {
          ani.cur_frame = 0;
        };
      };
      // if (ani.cur_frame == 0) ani.cur_frame = ani.loop_frame;
    },
    ani.frame_duration
  );
}

function anim_red_gif() {
  var ani = {
    frame_height: (window.innerWidth * 0.15),
    num_frames: 67,
    loop_frame: 39,
    frame_duration: 125,
    cur_frame: 0
  };
  window.setInterval(
    function() {
      $('#red').css('top',
        (-ani.frame_height * ani.cur_frame) + 'px'
      );
      ani.cur_frame = (ani.cur_frame + 1) % ani.num_frames;
      if (ani.cur_frame == ani.loop_frame) {
        var rand = Math.floor(Math.random() * 10);
        if (rand <= 2) {
          ani.cur_frame = 39;
        } else {
          ani.cur_frame = 0;
        };
      };
      // if (ani.cur_frame == 0) ani.cur_frame = ani.loop_frame;
    },
    ani.frame_duration
  );
}

function anim_green_gif() {
  var ani = {
    frame_height: (window.innerWidth * 0.15),
    num_frames: 67,
    loop_frame: 39,
    frame_duration: 125,
    cur_frame: 0
  };
  window.setInterval(
    function() {
      $('#green').css('top',
        (-ani.frame_height * ani.cur_frame) + 'px'
      );
      ani.cur_frame = (ani.cur_frame + 1) % ani.num_frames;
      if (ani.cur_frame == ani.loop_frame) {
        var rand = Math.floor(Math.random() * 10);
        if (rand <= 2) {
          ani.cur_frame = 39;
        } else {
          ani.cur_frame = 0;
        };
      };
      // if (ani.cur_frame == 0) ani.cur_frame = ani.loop_frame;
    },
    ani.frame_duration
  );
}
