
function Stopwatch(){
  let running, startTime, endTime, duration = 0;
  this.start = function(){
    if(running)
      throw new Error('Stopwatch is already running!');
    running = true;
    startTime = new Date();
  },
  this.stop = function(){
    if(!running)
      throw new Error('Stopwatch is not running!');
    running = false;
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };
  this.reset = function (){
    duration = 0;
    startTime = null;
    endTime = null;
    running = false;
  };
  Object.defineProperty(this, 'duration', {
    get: function(){
      return duration;
    }
  });
};
