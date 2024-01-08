<script lang="ts">
    import Projects from "./Projects.svelte";
    import Skills from "./Skills.svelte";
    let y = 50;
    let darkMode = false;

    let projectInput = 1;

    function scrollToHome() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    function scrollToAbout() {
        window.scrollTo({
            top: 1200,
            behavior: 'smooth'
        });
    }
    function scrollToSkills() {
        window.scrollTo({
            top: 2200,
            behavior: 'smooth'
        });
    }
    function scrollToProjects() {
        window.scrollTo({
            top: 3700,
            behavior: 'smooth'
        });
    }
    function toggleLightMode() {
        darkMode = !darkMode;
        if(darkMode) {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }

</script>
<header>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"> 
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Cole Resurreccion</title>

</header>
    <svelte:window bind:scrollY={y} />
<body>
    <div class="main">
        <nav class="header">
            <ul class="headerItems">
                <li class="topLeft">
                    <ul class="guide">
                        <li style="display:flex; flex-direction:row; align-items: center; justify-content:center;    ">
                            <button on:click={scrollToHome} id="mainBut" style="font-weight: 500;">Cole Resurreccion</button>
                            <a href="https://github.com/calsfu" target="_blank" rel="noopener noreferrer"><img src="/github-mark-white.png" alt="logo" class="logo"></a>
                            <button on:click={toggleLightMode} tabindex="0" style="background-color:transparent; border:0px; cursor:pointer"><img style=" width:25px; height:auto; margin-top:7px;"src="/moon-svgrepo-com.svg" alt="nightmode"></button>
                        </li>
                    </ul>
                </li>
                <li class="topRight">
                    <ul class="guide">
                        <li class="guideItem">
                            <button on:click={scrollToHome}>Home</button>
                        </li>
                        <li class="guideItem">
                            <button on:click={scrollToAbout}>About</button>
                        </li>
                        <li class="guideItem"> 
                            <button on:click={scrollToSkills}>Skills</button>
                        </li>
                        <li class="guideItem">
                            <button on:click={scrollToProjects}>Projects</button>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>  
        <section id="home" class="home">
            <h1 style="font-weight: 400; font-family: 'Poppins', sans-serif;">Hello, I'm <span class="color_name">Cole Resurreccion</span></h1>
            <h4 style="font-weight: 400;">Boston University Computer Engineering 25'</h4>
        </section>
        <section id="about" class="about">
            <p>I am a third year computer engineering at Boston University. Currently, I am on a software track that focuses on backend development and machine learning. 
            </p>
        </section>
        <section class = "skills">
                <Skills/>
                </section>
        <section class="projects">
            <h1 class="projectTitle">PROJECTS</h1>
            <!-- Choose type of projects -->
            <div class="chooseProject">
                <ul style="display:flex; flex-direction:row;  align-items: center;justify-content:center; list-style:none; border:none; gap:15px;">
                    <li><button class="button-62" on:click={() => projectInput = 1}>Systems</button></li>
                    <li><button class="button-62" on:click={() => projectInput = 2}>OS</button></li>
                    <li><button class="button-62" on:click={() => projectInput = 3}>Machine Learning</button></li>
                    <li><button class="button-62" on:click={() => projectInput = 4}>Hardware/Embedded</button></li>
                </ul>
                
                
                
            </div>


            <div class="projectBox">
                
                <Projects groupNum = {projectInput}/>
               
                
            </div>
            
            <p style="color: var(--text-color);">Find more <a href="https://github.com/calsfu" target="_blank" rel="noopener noreferrer">here</a></p>
        </section>
        <section class="footer">
            <div class="footerInfo"> 
                <a href="https://github.com/calsfu" target="_blank" rel="noopener noreferrer"><img src="/github-mark-white.png" alt="logo" class="logo"></a>
                <p>Made by Cole Resurreccion</p>
                <a href="mailto::coler2366@gmail.com" target="_blank" rel="noopener noreferrer">Contact Me</a>
            </div>
        </section>
    </div>
    
</body>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;700&display=swap');
    :root {
        --background-color: rgb(17, 17, 17); 
        --header-color: rgb(0, 0, 39)   ;
        --colored-text: rgb(77, 139, 255);
        --project-colored-text: rgb(77, 139, 255);
        --text-color: white;
        --white: white;
        --skill-text: rgb(39, 39, 39);
        --skill-icon: rgb(70, 70, 70);


        
    }
    :root[data-theme='light'] {
        --background-color: white; 
        --header-color: rgb(111, 0, 255);
        --colored-text: rgb(111, 0, 255);
        --project-colored-text: white;
        --text-color: black;
        --white: white;
        --skill-text: rgb(111, 0, 255);
        --skill-icon: rgb(71, 0, 163);
        
  }
    body {
        background-color: var(--background-color);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;

        /* display: inline-block; */
    }
    .header a {
        cursor: pointer;
        text-decoration: none;
        color: var(--white);
    }
    
    .main { 
        height: 100%;
        width: 100%;
        color : var(--text-color);
    }
    .header {
        font-size: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--header-color); 
        position: fixed;
        top: 0px;
        right: 0px;
        left: 0px;;
        z-index: 9999;
        
    }
    .headerItems {
        display: flex;
        width: 90%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        list-style-type: none;
        margin: auto;
    }
    .guide {
        display: flex;
        flex-direction: row;
        align-items: center;
        list-style-type: none;
        gap: 30px;
        padding-left: 0;
    }
    .logo {
        position: relative;
        display: inline-block;
        width: auto;
        height: 20px;
        padding-left: 4px;
    }
    .color_name {
        color: var(--colored-text);
    }
    #mainBut {
        background-color: var(--header-color);
        border: none;
        color: var(--white);
        font-size: 1.5rem;
        cursor: pointer;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
    }
    .guideItem {
        font-size: 1.4rem;
        text-align: center;
        justify-content: center;
        text-decoration: none;
    }
    .guideItem button {
        background-color: var(--header-color);
        border: none;
        color: var(--white);
        font-size: 1.4rem;
        cursor: pointer;
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
    }
    .topLeft {
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 100%;
    }
    .topRight {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        list-style-type: none;
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: .5rem;
    }
    .home {
        font-family: 'Poppins', sans-serif;
        font-size: 2rem;
        text-align: center; 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        font-weight: 300;
    }
    .about {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: 'Poppins', sans-serif;
        font-size: 1.5rem;
        text-align: center;
        width: 90%;
        height: 90vh;
        margin: auto;
    }
    .skills {
        font-family: 'Poppins', sans-serif;
        font-size: 2rem;
        text-align: center;  
        justify-content: center;
        height: 100vh;
        color: var(--text-color);
    }
    /* .skills ul {
        
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    } */
    
    .projects {
        font-family: 'Poppins', sans-serif;
        font-size: 2rem;
        color : var(--text-color);
        margin:5%;
    }
    .projectTitle {
        text-align: center;
    }
    .projectBox {
        color :var(--white);
        display: grid;
        margin: 0%;
        width: 95%;
        grid-template-columns: 50% 50%;
        gap: 50px;
        margin-bottom: 5%;
    }
   
    #verilog-symbol {
        width: 7%;
        height: auto;
    }
    #arduino-symbol {
        width: 7%;
        height: auto;
    }
    
    .footer {
        width: 100%;
        height: 50px;
        background-color: var(--header-color);
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: .85rem;
        color:var(--white);

    }
    .footerInfo {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        margin: auto;
        /* padding-top: .7%; */
    }

    /* <!-- HTML !-->
<button class="button-64" role="button"><span class="text">Button 64</span></button> */

/* CSS */


/* CSS */
.button-62 {
  background: var(--header-color);
  font-family: 'Poppins', sans-serif;
  border: 0;
  border-radius: 12px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
}

.button-62:not([disabled]):focus {
  box-shadow: 0 0 .25rem var(--header-color);
}

.button-62:not([disabled]):hover {
  box-shadow: 0 0 .25rem var(--header-color);
}

</style>