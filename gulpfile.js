var gulp = require('gulp');
var config = require('./config/gulp.config');
var lint = require('gulp-eslint');

var del = require('del');
var util = require('gulp-util');

var Server = require('karma').Server;
var mkdirp = require('mkdirp');

gulp.task('lint',function() {

    return gulp.src(config.srcJs)
        .pipe(lint({config : '.eslintrc.json'}))
        .pipe(lint.format())
        .pipe(lint.failAfterError());
});

gulp.task('test', [], function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('watch',function() {
    gulp.watch(config.srcJs,['lint']);
});

gulp.task('config',['clean-config'], function(done) {

    var configFile = require(config.config);

    var env = process.env.NODE_ENV || 'development';

    var currentEnvConfig = configFile[env];
    currentEnvConfig = currentEnvConfig || configFile['development'];

    var fs = require('fs');
    fs.writeFile(config.destConfig, `var config = ${JSON.stringify(currentEnvConfig)};\nexport default config;`, (err) => {
        if (err) throw err;
        console.log('Config generated');
        done();
    });
    
});

gulp.task('clean-config',function(done) {
    log('Cleaning config');
    var path = config.destConfig;
    clean(path,done);
});

gulp.task('clean-build',function(done) {
    log('Cleaning build');
    var path = config.build;
    clean(path,done);
});


function log(msg) {
    util.log(util.colors.yellow(msg));
}

function clean(path,done) {
    log('Cleaning: '+path);
    del(path).then(function (paths) {
        log('Cleaning Done');
        done();
    });
}
