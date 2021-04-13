let gulp = require("gulp");





let connect = require("gulp-connect");


//配置服务器
gulp.task("server",async function(){
	connect.server({
		root:"../fbml",
		host:"10.35.161.3:8080",
		livereload:true
	});
})

//任务
gulp.task("workall",async function(){
	
	//1、拷贝
	gulp.watch("*.html",async function(){
		gulp.src("*.html")
		.pipe(gulp.dest("D:\\xxxxxx\\fbml"));
	});
	
	gulp.watch("images/*.{img,png}",async function(){
		gulp.src("images/*.{jpg,png}")
		.pipe(gulp.dest("D:\\xxxxxx\\fbml\\images"));
	});
	
	// //2、合并后拷贝
	// gulp.watch(["js/index.js","js/login.js"],async function(){
		
	// })
	
	
});


