interface Project {
  icon: string;
  name: string;
  tooltip: string;
  url: string;
}

export const MainPage = (projects: Project[]) => {
  return (
    <>
      <head lang='en'>
        <link rel='stylesheet' href='/client/pages/main/main.css' />
        <link rel='icon' href='/client/assets/logo.png' />
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta property='og:title' content='agorushkin' />
        <meta property='og:description' content="I'm a backend web developer, check my website out!" />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://agorushkin.deno.dev/' />
        <meta name='theme-color' content='#24292e' />
    
        <title>agorushkin</title>
      </head>
      <body>
        <div id='container'>
          <h3 class='title'><div class='wave emoji'>👋</div> Hey there, I'm <a class='basiclink' href='https://github.com/agorushkin'>agorushkin</a>!</h3>
          <p>
            I'm a backend web developer who loves working with tools such as Deno and TypeScript
            Check some of my projects out!
          </p>
          
          <h3 class='title'><a class='basiclink' href='https://github.com/agorushkin?tab=repositories'>My Projects</a></h3>
          <ul class='list' id='projects'>
            { 
              ...projects.map(({ name, tooltip, url, icon }) => {
                return <li><a href={ url } data-title={ ` - ${ tooltip }` }><span class="emoji">{ icon }</span> { name }</a></li>
              })
            }
          </ul>

          <h3 class='title'>Hit Me Up</h3>
          <ul class='list' id='contacts'>
            <li><a href='https://github.com/agorushkin'><span class="emoji">🐈‍⬛</span> Github</a></li>
            <li><a href='https://discordapp.com/users/827106952500346880'><span class="emoji">👾</span> Discord</a></li>
            <li><a href='https://www.linkedin.com/in/arsenii-goriushkin/'><span class="emoji">🔗</span> LinkedIn</a></li>
          </ul>
        </div>
      </body>
    </>
  );
};