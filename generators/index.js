// 此文件作为Generator的核心入口
// 需要导出一个继承自Yeoman Generator 的类型
// Yeoman Generator 在工作时会自动调动我们在此类型中定义的一些生命周期方法
// 我们在这些方法中可以通过调用父类提供的一些工具方法实现一些功能，例如文件写入
const Generator = require('yeoman-generator')
// 发起命令行交互的询问，使用generator中的prompting方法
module.exports = class extends Generator {
    prompting () {
        // yeoman在询问用户环节会自动调用此方法
        // 在此方法中可以调用父类的prompt()方法发出对用户的命令询问
        // 接受一个数字参数，数组的每一项都是一个问题对象
        return this.prompt ([ //返回一个promise对象（是一个promise方法）
            {
                //还用用户输入的方式，让用户提交信息
                type: 'input',
                //最终得到结果的一个键
                name: 'name',
                //在界面中给用户提示，即问题
                message: 'Your project name',
                //appname为项目生成目录名称
                default: this.appname
            }
            // 用户输入之后的结果
        ]).then(answers => {
            // 以对象的形式出现
            // answers = >{ name:'user input value'}
            this.answers = answers
        })
    }
    writing (){
        // Yeoman 自动在生成文件阶段调用writing方法
         const templates = [
              '.browserslistrc',
              '.editorconfig',
              '.env.development',
              '.env.production',
              '.eslintrc.js',
              '.gitignore',
              'babel.config.js',
              'package.json',
              'postcss.config.js',
              'README.md',
              'public/favicon.ico',
              'public/index.html',
              'src/App.vue',
              'src/main.js',
              'src/router.js',
              'src/assets/logo.png',
              'src/components/HelloWorld.vue',
              'src/store/actions.js',
              'src/store/getters.js',
              'src/store/index.js',
              'src/store/mutations.js',
              'src/store/state.js',
              'src/utils/request.js',
              'src/views/About.vue',
              'src/views/Home.vue'
          ]
        templates.forEach(item => {
            // item每个文件路径
            // copyTpl(模板文件路径，输出目标路径，模板数据上下文)
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answers
            )
        })

    }
}