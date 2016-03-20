exports.task = {
    dist: {
        options: {
            style: 'expanded',
            lineNumbers: true,
            sourcemap: 'none'
        },
        files: [{
            expand: true,
            cwd: './assets/css/sass', // read by the gruntfile.js file, under the /grunt directory. '..' refers to project root directory
            src: ['**/*.scss'],
            dest: './assets/css',
            ext: '.css'
        }]
    }
};