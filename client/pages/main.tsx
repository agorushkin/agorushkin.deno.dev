import Config from '/config.json' assert { type: 'json' };

const { projects, contacts } = Config;

export const Portfolio = () => {
  return (
    <html lang='en'>
      <head lang='en'>
        <link rel='preload' href='/public/styles/emoji.css' as='style' />
        <link rel='preload' href='/public/styles/main.css' as='style' />
        <link rel='preload' href='/public/bundle/main.js' as='script' />

        <link rel='stylesheet' href='/public/styles/main.css' />
        <link rel='stylesheet' href='/public/styles/emoji.css' />
        <link rel='icon' href='/public/assets/favicon.svg' />

        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content={ 'I\'m 17 year old backend web engineer. Has passion for web, tech, and quality tools.' } />
        <meta property='og:title' content='agorushkin' />
        <meta property='og:description' content={ 'I\'m 17 year old backend web engineer. Has passion for web, tech, and quality tools.' } />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://goru.me/' />
        <meta name='theme-color' content='#24292e' />

        <title>agorushkin</title>
      </head>
      <body>
        <div id='container'>
          <h3 class='title'><div class='wave emoji'>👋</div> Hey there, I'm <a class='basiclink' href='https://github.com/agorushkin'>agorushkin</a>!</h3>
          <p id='about-me'>
            I'm a backend web developer who loves working with tools such as Deno and TypeScript
            Check some of my projects out!
          </p>
          
          <h3 class='title'><a class='basiclink' href='https://github.com/agorushkin?tab=repositories'>My Projects</a></h3>
          <ul class='list' id='projects'>
            { 
              ...projects.map(({ name, tooltip, icon, url }) => {
                return <li><a href={ url } data-title={ ` - ${ tooltip }` }><span class="emoji">{ icon }</span> { name }</a></li>
              })
            }
          </ul>

          <h3 class='title'>Hit Me Up</h3>
          <ul class='list' id='contacts'>
            {
              ...contacts.map(({ name, icon, url }) => {
                return <li><a href={ url }><span class='emoji'>{ icon }</span> { name }</a></li>
              })
            }
          </ul>
        </div>

        <script src='/public/bundle/main.js'></script>
      </body>
    </html>
  );
}