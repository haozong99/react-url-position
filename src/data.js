export const data = [
    {
        title:"Hello world",
        content:`
        最简易的 React 示例如下：
        
        ReactDOM
          .createRoot(document.getElementById('root'))
          .render(<h1>Hello, world!</h1>);
        它将在页面上展示一个 “Hello, world!” 的标题。
        
        在 CodePen 上试试
        
        点击链接打开在线编辑器。随意更改内容，查看它们会怎样影响展示。本指南中的大多数页面都有像这样的可编辑的示例。
        
        如何阅读本指南
        在本指南中，我们将研究 React 应用程序的组成部分：元素和组件。一旦你掌握了它们，便可以使用这些可复用的小片段组成复杂的应用。
        
        提示
        
        本指南专为喜欢逐步学习概念的人士设计。如果你想边学边做，请查阅我们的实用教程。你会发现该指南与教程是相互补充的。
        
        本文是 React 核心概念分步指南的第一章。你可以在侧边导航栏中找到所有章节的列表。如果你是通过移动设备阅读此内容，你可以通过点击屏幕右下角的按钮来查看导航栏。
        
        本指南中的每一章节都以其前述章节中介绍的知识点为基础。你可以按照侧边导航栏中显示的顺序阅读浏览 “核心概念” 的指南章节。以了解 React 的大部分内容。 例如，“JSX 简介”就是本文的下一章节。
        
        预备知识
        React 是一个 JavaScript 库，所以我们假设你对 JavaScript 语言已有基本的了解。如果你对自己的基础不自信，我们推荐通过 JavaScript 教程检查你的基础知识储备水平，使得你能够无压力的阅读本指南。这可能会花费你 30 分钟到 1 个小时的时间，但这样做的好处是你不会觉得同时在学习 React 和 JavaScript。
        
        注意
        
        本指南的示例中偶尔会使用一些 JavaScript 新语法。如果你在过去几年中并没有使用过 JavaScript，大多数情况下这三点应该能帮到你。
        让我们开始吧！
        继续向下滚动，你将在网站页脚右侧找到下一篇指南的链接。
        Is this page useful?编辑此页面`
    },
    {
        title:"JSX 简介",
        content:`设想如下变量声明：

        const element = <h1>Hello, world!</h1>;
        这个有趣的标签语法既不是字符串也不是 HTML。
        
        它被称为 JSX，是一个 JavaScript 的语法扩展。我们建议在 React 中配合使用 JSX，JSX 可以很好地描述 UI 应该呈现出它应有交互的本质形式。JSX 可能会使人联想到模板语言，但它具有 JavaScript 的全部功能。
        
        JSX 可以生成 React “元素”。我们将在下一章节中探讨如何将这些元素渲染为 DOM。下面我们看下学习 JSX 所需的基础知识。
        
        为什么使用 JSX？
        React 认为渲染逻辑本质上与其他 UI 逻辑内在耦合，比如，在 UI 中需要绑定处理事件、在某些时刻状态发生变化时需要通知到 UI，以及需要在 UI 中展示准备好的数据。
        
        React 并没有采用将标记与逻辑进行分离到不同文件这种人为地分离方式，而是通过将二者共同存放在称之为“组件”的松散耦合单元之中，来实现关注点分离。我们将在后面章节中深入学习组件。如果你还没有适应在 JS 中使用标记语言，这个会议讨论应该可以说服你。
        
        React 不强制要求使用 JSX，但是大多数人发现，在 JavaScript 代码中将 JSX 和 UI 放在一起时，会在视觉上有辅助作用。它还可以使 React 显示更多有用的错误和警告消息。
        
        搞清楚这个问题后，我们就开始学习 JSX 吧！
        
        在 JSX 中嵌入表达式
        在下面的例子中，我们声明了一个名为 name 的变量，然后在 JSX 中使用它，并将它包裹在大括号中：
        
        const name = 'Josh Perez';
        const element = <h1>Hello, {name}</h1>;
        在 JSX 语法中，你可以在大括号内放置任何有效的 JavaScript 表达式。例如，2 + 2，user.firstName 或 formatName(user) 都是有效的 JavaScript 表达式。
        
        在下面的示例中，我们将调用 JavaScript 函数 formatName(user) 的结果，并将结果嵌入到 <h1> 元素中。
        
        function formatName(user) {
          return user.firstName + ' ' + user.lastName;
        }
        
        const user = {
          firstName: 'Harper',
          lastName: 'Perez'
        };
        
        const element = (
          <h1>
            Hello, {formatName(user)}!
          </h1>
        );
        在 CodePen 上试试
        
        为了便于阅读，我们会将 JSX 拆分为多行。同时，我们建议将内容包裹在括号中，虽然这样做不是强制要求的，但是这可以避免遇到自动插入分号陷阱。
        
        JSX 也是一个表达式
        在编译之后，JSX 表达式会被转为普通 JavaScript 函数调用，并且对其取值后得到 JavaScript 对象。
        
        也就是说，你可以在 if 语句和 for 循环的代码块中使用 JSX，将 JSX 赋值给变量，把 JSX 当作参数传入，以及从函数中返回 JSX：
        
        function getGreeting(user) {
          if (user) {
            return <h1>Hello, {formatName(user)}!</h1>;
          }
          return <h1>Hello, Stranger.</h1>;
        }
        JSX 中指定属性
        你可以通过使用引号，来将属性值指定为字符串字面量：
        
        const element = <a href="https://www.reactjs.org"> link </a>;
        也可以使用大括号，来在属性值中插入一个 JavaScript 表达式：
        
        const element = <img src={user.avatarUrl}></img>;
        在属性中嵌入 JavaScript 表达式时，不要在大括号外面加上引号。你应该仅使用引号（对于字符串值）或大括号（对于表达式）中的一个，对于同一属性不能同时使用这两种符号。
        
        警告：
        
        因为 JSX 语法上更接近 JavaScript 而不是 HTML，所以 React DOM 使用 camelCase（小驼峰命名）来定义属性的名称，而不使用 HTML 属性名称的命名约定。
        
        例如，JSX 里的 class 变成了 className，而 tabindex 则变为 tabIndex。
        
        使用 JSX 指定子元素
        假如一个标签里面没有内容，你可以使用 /> 来闭合标签，就像 XML 语法一样：
        
        const element = <img src={user.avatarUrl} />;
        JSX 标签里能够包含很多子元素:
        
        const element = (
          <div>
            <h1>Hello!</h1>
            <h2>Good to see you here.</h2>
          </div>
        );
        JSX 防止注入攻击
        你可以安全地在 JSX 当中插入用户输入内容：
        
        const title = response.potentiallyMaliciousInput;
        // 直接使用是安全的：
        const element = <h1>{title}</h1>;
        React DOM 在渲染所有输入内容之前，默认会进行转义。它可以确保在你的应用中，永远不会注入那些并非自己明确编写的内容。所有的内容在渲染之前都被转换成了字符串。这样可以有效地防止 XSS（cross-site-scripting, 跨站脚本）攻击。
        
        JSX 表示对象
        Babel 会把 JSX 转译成一个名为 React.createElement() 函数调用。
        
        以下两种示例代码完全等效：
        
        const element = (
          <h1 className="greeting">
            Hello, world!
          </h1>
        );
        const element = React.createElement(
          'h1',
          {className: 'greeting'},
          'Hello, world!'
        );
        React.createElement() 会预先执行一些检查，以帮助你编写无错代码，但实际上它创建了一个这样的对象：
        
        // 注意：这是简化过的结构
        const element = {
          type: 'h1',
          props: {
            className: 'greeting',
            children: 'Hello, world!'
          }
        };
        这些对象被称为 “React 元素”。它们描述了你希望在屏幕上看到的内容。React 通过读取这些对象，然后使用它们来构建 DOM 以及保持随时更新。
        
        我们将在下一章节中探讨如何将 React 元素渲染为 DOM。
        
        提示：
        
        我们推荐在你使用的编辑器中，使用 “Babel” 提供的语言定义，来正确地高亮显示 ES6 和 JSX 代码。
        
        Is this page useful?编辑此页面`
    },
    {
        title:"事件处理",
        content:`在 React 中，你可以创建不同的组件来封装各种你需要的行为。然后，依据应用的不同状态，你可以只渲染对应状态下的部分内容。

        React 中的条件渲染和 JavaScript 中的一样，使用 JavaScript 运算符 if 或者条件运算符去创建元素来表现当前的状态，然后让 React 根据它们来更新 UI。
        
        观察这两个组件:
        
        function UserGreeting(props) {
          return <h1>Welcome back!</h1>;
        }
        
        function GuestGreeting(props) {
          return <h1>Please sign up.</h1>;
        }
        再创建一个 Greeting 组件，它会根据用户是否登录来决定显示上面的哪一个组件。
        
        function Greeting(props) {
          const isLoggedIn = props.isLoggedIn;
          if (isLoggedIn) {
            return <UserGreeting />;
          }
          return <GuestGreeting />;
        }
        
        ReactDOM.render(
          // Try changing to isLoggedIn={true}:
          <Greeting isLoggedIn={false} />,
          document.getElementById('root')
        );
        在 CodePen 上尝试
        
        这个示例根据 isLoggedIn 的值来渲染不同的问候语。
        
        元素变量
        你可以使用变量来储存元素。 它可以帮助你有条件地渲染组件的一部分，而其他的渲染部分并不会因此而改变。
        
        观察这两个组件，它们分别代表了注销和登录按钮：
        
        function LoginButton(props) {
          return (
            <button onClick={props.onClick}>
              Login
            </button>
          );
        }
        
        function LogoutButton(props) {
          return (
            <button onClick={props.onClick}>
              Logout
            </button>
          );
        }
        在下面的示例中，我们将创建一个名叫 LoginControl 的有状态的组件。
        
        它将根据当前的状态来渲染 <LoginButton /> 或者 <LogoutButton />。同时它还会渲染上一个示例中的 <Greeting />。
        
        class LoginControl extends React.Component {
          constructor(props) {
            super(props);
            this.handleLoginClick = this.handleLoginClick.bind(this);
            this.handleLogoutClick = this.handleLogoutClick.bind(this);
            this.state = {isLoggedIn: false};
          }
        
          handleLoginClick() {
            this.setState({isLoggedIn: true});
          }
        
          handleLogoutClick() {
            this.setState({isLoggedIn: false});
          }
        
          render() {
            const isLoggedIn = this.state.isLoggedIn;
            let button;
            if (isLoggedIn) {
              button = <LogoutButton onClick={this.handleLogoutClick} />;
            } else {
              button = <LoginButton onClick={this.handleLoginClick} />;
            }
        
            return (
              <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
              </div>
            );
          }
        }
        
        ReactDOM.render(
          <LoginControl />,
          document.getElementById('root')
        );
        在 CodePen 上尝试
        
        声明一个变量并使用 if 语句进行条件渲染是不错的方式，但有时你可能会想使用更为简洁的语法。接下来，我们将介绍几种在 JSX 中内联条件渲染的方法。
        
        与运算符 &&
        通过花括号包裹代码，你可以在 JSX 中嵌入表达式。这也包括 JavaScript 中的逻辑与 (&&) 运算符。它可以很方便地进行元素的条件渲染：
        
        function Mailbox(props) {
          const unreadMessages = props.unreadMessages;
          return (
            <div>
              <h1>Hello!</h1>
              {unreadMessages.length > 0 &&
                <h2>
                  You have {unreadMessages.length} unread messages.
                </h2>
              }
            </div>
          );
        }
        
        const messages = ['React', 'Re: React', 'Re:Re: React'];
        ReactDOM.render(
          <Mailbox unreadMessages={messages} />,
          document.getElementById('root')
        );
        在 CodePen 上尝试
        
        之所以能这样做，是因为在 JavaScript 中，true && expression 总是会返回 expression, 而 false && expression 总是会返回 false。
        
        因此，如果条件是 true，&& 右侧的元素就会被渲染，如果是 false，React 会忽略并跳过它。
        
        请注意，返回 false 的表达式会使 && 后面的元素被跳过，但会返回 false 表达式。在下面示例中，render 方法的返回值是 <div>0</div>。
        
        render() {
          const count = 0;
          return (
            <div>
              {count && <h1>Messages: {count}</h1>}
            </div>
          );
        }
        三目运算符
        另一种内联条件渲染的方法是使用 JavaScript 中的三目运算符 condition ? true : false。
        
        在下面这个示例中，我们用它来条件渲染一小段文本
        
        render() {
          const isLoggedIn = this.state.isLoggedIn;
          return (
            <div>
              The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
            </div>
          );
        }
        同样的，它也可以用于较为复杂的表达式中，虽然看起来不是很直观：
        
        render() {
          const isLoggedIn = this.state.isLoggedIn;
          return (
            <div>
              {isLoggedIn
                ? <LogoutButton onClick={this.handleLogoutClick} />
                : <LoginButton onClick={this.handleLoginClick} />
              }
            </div>
          );
        }
        就像在 JavaScript 中一样，你可以根据团队的习惯来选择可读性更高的代码风格。需要注意的是，如果条件变得过于复杂，那你应该考虑如何提取组件。
        
        阻止组件渲染
        在极少数情况下，你可能希望能隐藏组件，即使它已经被其他组件渲染。若要完成此操作，你可以让 render 方法直接返回 null，而不进行任何渲染。
        
        下面的示例中，<WarningBanner /> 会根据 prop 中 warn 的值来进行条件渲染。如果 warn 的值是 false，那么组件则不会渲染:
        
        function WarningBanner(props) {
          if (!props.warn) {
            return null;
          }
        
          return (
            <div className="warning">
              Warning!
            </div>
          );
        }
        
        class Page extends React.Component {
          constructor(props) {
            super(props);
            this.state = {showWarning: true};
            this.handleToggleClick = this.handleToggleClick.bind(this);
          }
        
          handleToggleClick() {
            this.setState(state => ({
              showWarning: !state.showWarning
            }));
          }
        
          render() {
            return (
              <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                  {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
              </div>
            );
          }
        }
        
        ReactDOM.render(
          <Page />,
          document.getElementById('root')
        );
        在 CodePen 上尝试
        
        在组件的 render 方法中返回 null 并不会影响组件的生命周期。例如，上面这个示例中，componentDidUpdate 依然会被调用。`
    }
]