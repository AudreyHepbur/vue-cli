module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
	rules: {
		// 不需要
		'space-before-function-paren': 0, // 函数定义时括号前面要不要有空格
		'eol-last': 0, // 文件以单一的换行符结束
		'semi': 0, // 语句强制分号结尾
		'eqeqeq': 0, // 必须使用全等
		'one-var': 0, // 连续声明
		'no-undef': 0, // 可以 有未定义的变量
		'no-unused-vars': 0, // 不能有声明后未被使用的变量或参数
		'no-tabs': 'off',
		'no-unused-expressions': 0, // 禁止无用的表达式

		// 警告
		'no-extra-boolean-cast': 1, // 不必要的bool转换
		'no-extra-parens': 1, // 非必要的括号
		'no-empty': 1, // 块语句中的内容不能为空
		'no-use-before-define': [1, 'nofunc'], // 未定义前不能使用
		'complexity': [1, 10], // 循环复杂度

		// 错误
		'no-extra-semi': 2, // 可以多余的冒号
		'comma-dangle': [2, 'never'], // 对象字面量项尾不能有逗号
		'no-debugger': 2, // 禁止使用debugger
		'no-constant-condition': 2, // 禁止在条件中使用常量表达式 if(true) if(1)
		'no-dupe-args': 2, // 函数参数不能重复
		'no-dupe-keys': 2, // 在创建对象字面量时不允许键重复 {a:1,a:1}
		'no-duplicate-case': 2, // switch中的case标签不能重复
		'no-empty-character-class': 2, // 正则表达式中的[]内容不能为空
		'no-invalid-regexp': 2, // 禁止无效的正则表达式
		'no-func-assign': 2, // 禁止重复的函数声明
		'valid-typeof': 2, // 必须使用合法的typeof的值
		'no-unreachable': 2, // 不能有无法执行的代码
		'no-unexpected-multiline': 2, // 避免多行表达式
		'no-sparse-arrays': 2, // 禁止稀疏数组， [1,,2]
		'no-shadow-restricted-names': 2, // 严格模式中规定的限制标识符不能作为声明时的变量名使用
		'no-cond-assign': 2, // 禁止在条件表达式中使用赋值语句
		'no-native-reassign': 2, // 不能重写native对象

		// 代码风格
		'indent': ['error', 'tab'], // 缩进风格
		'no-else-return': 1, // 如果if语句里面有return,后面不能跟else语句
		'no-multi-spaces': 1, // 不能用多余的空格
		'key-spacing': [1, { // 对象字面量中冒号的前后空格
			'beforeColon': false,
			'afterColon': true
		}],
		// 不允许空格和 tab 混合缩进
		'no-mixed-spaces-and-tabs': 2,
		'block-scoped-var': 2, // 块语句中使用var
		'consistent-return': 2, // return 后面是否允许省略
		'accessor-pairs': 2, // 在对象中使用getter/setter
		'dot-location': [2, 'property'], // 对象访问符的位置，换行的时候在行首还是行尾
		'no-lone-blocks': 2, // 禁止不必要的嵌套块
		'no-labels': 2, // 禁止标签声明
		'no-extend-native': 2, // 禁止扩展native对象
		'no-floating-decimal': 2, // 禁止省略浮点数中的0 .5 3.
		'no-loop-func': 2, // 禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
		'no-new-func': 2, // 禁止使用new Function
		'no-self-compare': 2, // 不能比较自身
		'no-sequences': 2, // 禁止使用逗号运算符
		'no-throw-literal': 2, // 禁止抛出字面量错误 throw "error";
		'no-return-assign': [2, 'always'], // return 语句中不能有赋值表达式
		'no-redeclare': [2, { // 禁止重复声明变量
			'builtinGlobals': true
		}],

		'no-useless-call': 2, // 禁止不必要的call和apply
		'no-useless-concat': 2,
		'no-void': 2, // 禁用void操作符
		'no-with': 2, // 禁用with
		'space-infix-ops': 2, // 中缀操作符周围要不要有空格
		'valid-jsdoc': [2, { // jsdoc规则
			'requireParamDescription': true,
			'requireReturnDescription': true
		}],
		'no-warning-comments': [2, { // 不能有警告备注
			'terms': ['todo', 'fixme', 'any other term'],
			'location': 'anywhere'
		}],
		'curly': 1, // 必须使用 if(){} 中的{}

		// common js
		// "no-duplicate-imports": 1,

		// 要求箭头函数体使用大括号
		'arrow-body-style': 2,
		// 要求箭头函数的参数使用圆括号
		// "arrow-parens": 2,
		// "arrow-spacing":[2,{ "before": true, "after": true }],
		// 强制在子类构造函数中用super()调用父类构造函数，TypeScrip的编译器也会提示
		'constructor-super': 0,
		// 强制 generator 函数中 * 号周围使用一致的空格
		'generator-star-spacing': [2, { 'before': true, 'after': true }],
		// 禁止修改类声明的变量
		'no-class-assign': 2,
		// 不允许箭头功能，在那里他们可以混淆的比较
		'no-confusing-arrow': 0,
		// 禁止修改 const 声明的变量
		'no-const-assign': 2,
		// 禁止类成员中出现重复的名称
		'no-dupe-class-members': 2,
		// 不允许复制模块的进口
		'no-duplicate-imports': 0,
		// 禁止 Symbol  的构造函数
		'no-new-symbol': 2,
		// 允许指定模块加载时的进口
		'no-restricted-imports': 0,
		// 禁止在构造函数中，在调用 super() 之前使用 this 或 super
		'no-this-before-super': 2,
		// 禁止不必要的计算性能键对象的文字
		'no-useless-computed-key': 0,
		// 要求使用 let 或 const 而不是 var
		'no-var': 0,
		// 要求或禁止对象字面量中方法和属性使用简写语法
		'object-shorthand': 0,
		// 要求使用箭头函数作为回调
		'prefer-arrow-callback': 0,
		// 要求使用 const 声明那些声明后不再被修改的变量
		'prefer-const': 0,
		// 要求在合适的地方使用 Reflect 方法
		'prefer-reflect': 0,
		// 要求使用扩展运算符而非 .apply()
		'prefer-spread': 0,
		// 要求使用模板字面量而非字符串连接
		'prefer-template': 0,
		// Suggest using the rest parameters instead of arguments
		'prefer-rest-params': 0,
		// 要求generator 函数内有 yield
		'require-yield': 0,
		// enforce spacing between rest and spread operators and their expressions
		'rest-spread-spacing': 0,
		// 强制模块内的 import 排序
		'sort-imports': 0,
		// 要求或禁止模板字符串中的嵌入表达式周围空格的使用
		'template-curly-spacing': 1,
		// 强制在 yield* 表达式中 * 周围使用空格
		'yield-star-spacing': 2
	},
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};
