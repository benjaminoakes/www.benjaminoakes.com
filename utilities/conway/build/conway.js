(function() {
  var AliveCell, CLIApp, CanvasDisplay, ConsoleDisplay, ConwayWorker, DeadCell, NoiseGenerator, Producer, Time, WebServer, WebWorkerObserver, World, http, root, static, _, _ref;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  if (typeof require !== "undefined" && require !== null) {
    _ = require('underscore');
    ConsoleDisplay = require('../lib/ConsoleDisplay').ConsoleDisplay;
    Producer = require('../lib/Producer').Producer;
  }
  CLIApp = (function() {
    CLIApp.prototype.defaultCount = 100;
    function CLIApp(args) {
      this.args = args;
      this.progname = this.args[1];
      this.processArgs();
      this.producer = new Producer;
      this.producer.registerObserver(new ConsoleDisplay);
    }
    CLIApp.prototype.showUsage = function() {
      console.log("Usage: " + this.progname + " [--help] [generationCount]\n\nSimple implementation of Conway's Game of Life\n\n  --help              Show this help text.\n  generationCount     Run for this many generations (e.g., 1, 10, 100, etc)\n                      Default: " + this.defaultCount);
      return process.exit(-1);
    };
    CLIApp.prototype.processArgs = function() {
      if (_.include(this.args, '--help')) {
        return this.showUsage();
      } else {
        return this.generationCount = Number(this.args[2]) || this.defaultCount;
      }
    };
    CLIApp.prototype.start = function() {
      return this.producer.produce(this.generationCount);
    };
    return CLIApp;
  })();
  root = typeof exports !== "undefined" && exports !== null ? exports : this;
  root.CLIApp = CLIApp;
  CanvasDisplay = (function() {
    function CanvasDisplay() {}
    return CanvasDisplay;
  })();
  DeadCell = (function() {
    function DeadCell() {}
    DeadCell.prototype.count = 0;
    DeadCell.prototype.alive = false;
    DeadCell.prototype.dead = true;
    DeadCell.prototype.next = function(neighborCount) {
      if (neighborCount === 3) {
        return new AliveCell;
      } else {
        return this;
      }
    };
    return DeadCell;
  })();
  AliveCell = (function() {
    function AliveCell() {}
    AliveCell.prototype.count = 1;
    AliveCell.prototype.alive = true;
    AliveCell.prototype.dead = false;
    AliveCell.prototype.next = function(neighborCount) {
      if (neighborCount < 2 || neighborCount > 3) {
        return new DeadCell;
      } else {
        return this;
      }
    };
    return AliveCell;
  })();
  root = typeof exports !== "undefined" && exports !== null ? exports : this;
  root.DeadCell = DeadCell;
  root.AliveCell = AliveCell;
  ConsoleDisplay = (function() {
    function ConsoleDisplay() {}
    ConsoleDisplay.prototype.notify = function(message, observable) {
      switch (message) {
        case 'changed':
          console.log('---');
          return console.dir(observable);
      }
    };
    return ConsoleDisplay;
  })();
  root = typeof exports !== "undefined" && exports !== null ? exports : this;
  root.ConsoleDisplay = ConsoleDisplay;
  ConwayWorker = (function() {
    function ConwayWorker() {}
    ConwayWorker.prototype.start = function() {
      var grid, time, world;
      grid = (new NoiseGenerator).generate(100, 100);
      world = new World(grid);
      world.registerObserver(new WebWorkerObserver);
      time = new Time(world);
      return time.pass(1000);
    };
    return ConwayWorker;
  })();
  root = typeof exports !== "undefined" && exports !== null ? exports : this;
  root.ConwayWorker = ConwayWorker;
  NoiseGenerator = (function() {
    function NoiseGenerator() {}
    NoiseGenerator.prototype.generate = function(width, height) {
      var grid, _i, _results;
      grid = [];
      (function() {
        _results = [];
        for (var _i = 0; 0 <= height ? _i <= height : _i >= height; 0 <= height ? _i++ : _i--){ _results.push(_i); }
        return _results;
      }).apply(this).map(function() {
        var row, _i, _results;
        row = (function() {
          _results = [];
          for (var _i = 0; 0 <= width ? _i <= width : _i >= width; 0 <= width ? _i++ : _i--){ _results.push(_i); }
          return _results;
        }).apply(this).map(function() {
          if (Math.random() > 0.5) {
            return 1;
          } else {
            return 0;
          }
        });
        return grid.push(row);
      });
      return grid;
    };
    return NoiseGenerator;
  })();
  root = typeof exports !== "undefined" && exports !== null ? exports : this;
  root.NoiseGenerator = NoiseGenerator;
  if (typeof require !== "undefined" && require !== null) {
    NoiseGenerator = require('../lib/NoiseGenerator').NoiseGenerator;
    Time = require('../lib/Time').Time;
    World = require('../lib/World').World;
  }
  Producer = (function() {
    function Producer() {
      this.grid = (new NoiseGenerator).generate(25, 25);
      this.world = new World(this.grid);
    }
    Producer.prototype.registerObserver = function(observer) {
      return this.world.registerObserver(observer);
    };
    Producer.prototype.produce = function(generationCount) {
      var time;
      time = new Time(this.world);
      return time.pass(generationCount);
    };
    return Producer;
  })();
  root = typeof exports !== "undefined" && exports !== null ? exports : this;
  root.Producer = Producer;
  Time = (function() {
    function Time(subject) {
      this.subject = subject;
    }
    Time.prototype.tick = function() {
      return this.subject.tick();
    };
    Time.prototype.pass = function(duration) {
      var i, _results;
      _results = [];
      for (i = 1; 1 <= duration ? i <= duration : i >= duration; 1 <= duration ? i++ : i--) {
        _results.push(this.tick());
      }
      return _results;
    };
    return Time;
  })();
  root = typeof exports !== "undefined" && exports !== null ? exports : this;
  root.Time = Time;
  if (typeof require !== "undefined" && require !== null) {
    http = require('http');
    static = require('node-static');
  }
  WebServer = (function() {
    function WebServer() {}
    WebServer.prototype.start = function(port) {
      var httpServer, staticServer;
      if (port == null) {
        port = 8080;
      }
      staticServer = new static.Server('./public');
      httpServer = http.createServer(function(req, res) {
        return req.addListener('end', function() {
          return staticServer.serve(req, res);
        });
      });
      httpServer.listen(port);
      return port;
    };
    return WebServer;
  })();
  root = typeof exports !== "undefined" && exports !== null ? exports : this;
  root.WebServer = WebServer;
  WebWorkerObserver = (function() {
    function WebWorkerObserver() {}
    WebWorkerObserver.prototype.notify = function(message, observable) {
      var ps;
      ps = [];
      observable.grid.forEach(function(row, y) {
        return row.forEach(function(cell, x) {
          if (cell.alive) {
            return ps.push([x, y]);
          }
        });
      });
      postMessage({
        message: 'clear'
      });
      return postMessage({
        message: 'points',
        coords: JSON.stringify(ps)
      });
    };
    return WebWorkerObserver;
  })();
  root = typeof exports !== "undefined" && exports !== null ? exports : this;
  root.WebWorkerObserver = WebWorkerObserver;
  if (typeof require !== "undefined" && require !== null) {
    _ref = require('../lib/Cell'), DeadCell = _ref.DeadCell, AliveCell = _ref.AliveCell;
  }
  World = (function() {
    function World(grid) {
      this.observers = [];
      this.grid = grid.map(function(row) {
        return row.map(function(rawCell) {
          if (rawCell === 0) {
            return new DeadCell;
          } else if (rawCell === 1) {
            return new AliveCell;
          } else {
            return rawCell;
          }
        });
      });
    }
    World.prototype.inspect = function() {
      var lines;
      lines = this.grid.map(function(row) {
        var strings;
        strings = row.map(function(cell) {
          if (cell.alive) {
            return 'o';
          } else if (cell.dead) {
            return '_';
          } else {
            return 'x';
          }
        });
        return strings.join('');
      });
      return lines.join('\n');
    };
    World.prototype.equals = function(other) {
      return this.inspect() === other.inspect();
    };
    World.prototype.countNeighbors = function(x, y) {
      var grid, sum;
      sum = 0;
      grid = this.grid;
      [-1, 0, 1].forEach(function(j) {
        return [-1, 0, 1].forEach(function(i) {
          var inner, outer;
          if (!(i === 0 && j === 0)) {
            if (outer = grid[y + j]) {
              if (inner = outer[x + i]) {
                return sum += inner.count;
              }
            }
          }
        });
      });
      return sum;
    };
    World.prototype.next = function() {
      var next;
      return next = this.grid.map(__bind(function(row, y) {
        return row.map(__bind(function(cell, x) {
          return cell.next(this.countNeighbors(x, y));
        }, this));
      }, this));
    };
    World.prototype.tick = function() {
      this.grid = this.next();
      return this.notifyObservers('changed');
    };
    World.prototype.registerObserver = function(observer) {
      return this.observers.push(observer);
    };
    World.prototype.notifyObservers = function(message) {
      return this.observers.forEach(__bind(function(observer) {
        return observer.notify(message, this);
      }, this));
    };
    return World;
  })();
  root = typeof exports !== "undefined" && exports !== null ? exports : this;
  root.World = World;
}).call(this);
