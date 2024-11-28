<script>
    export let darkMode = false;
    // let currentWidth = window.innerWidth;
    // window.addEventListener('resize', () => {
    //      currentWidth = window.innerWidth;
    //     console.log('Current Width:', currentWidth);
    // });
    function scrollToHome() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    function scrollToAbout() {
        const aboutSection = document.getElementById('about');
        const headerSection = document.getElementById('header');    
        if(aboutSection && headerSection) {
            window.scrollTo({
                top: aboutSection.offsetTop - headerSection.offsetHeight,
                behavior: 'smooth'
            });
        }
    }
    function scrollToSkills() {
        const skillsSection = document.getElementById('skills');
        const headerSection = document.getElementById('header');
        if(skillsSection && headerSection) {
            window.scrollTo({
                top: skillsSection.offsetTop - headerSection.offsetHeight * 3,
                behavior: 'smooth'
            });
        }
    }
    function scrollToProjects() {
        const projectsSection = document.getElementById('projects');
        const headerSection = document.getElementById('header');
        if(projectsSection && headerSection) {
            window.scrollTo({
                top: projectsSection.offsetTop - headerSection.offsetHeight,
                behavior: 'smooth'
            });
        }
        
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

<style>
    .header a {
        cursor: pointer;
        text-decoration: none;
        color: var(--white);
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
    .logo {
        position: relative;
        display: inline-block;
        width: auto;
        height: 20px;
        padding-left: 4px;
    }   
</style>

<nav class="header" id="header">
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
        <!-- {#if currentWidth > 800} -->
        <li class="topRight">
            <ul class="guide">
                <li class="guideItem">
                    <button on:click={scrollToHome}>Home</button>
                </li>
                <!-- <li class="guideItem">
                    <button on:click={scrollToAbout}>About</button>
                </li> -->
                <!-- <li class="guideItem"> 
                    <button on:click={scrollToSkills}>Skills</button>
                </li> -->
                <li class="guideItem">
                    <button on:click={scrollToProjects}>Projects</button>
                </li>
            </ul>
        </li>
        <!-- {/if} -->
    </ul>
</nav>  