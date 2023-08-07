<script>
    let y = 50;
    function scrollToHome() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    function scrollToAbout() {
        window.scrollTo({
            top: 730,
            behavior: 'smooth'
        });
    }
    function scrollToSkills() {
        window.scrollTo({
            top: 1460,
            behavior: 'smooth'
        });
    }
    function scrollToProjects() {
        window.scrollTo({
            top: 2290,
            behavior: 'smooth'
        });
    }
</script>
<header>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"> 
</header>
    <svelte:window bind:scrollY={y} />
<body>
    <div class="main">
        <nav class="header">
            <ul class="headerItems">
                <li class="topLeft">
                    <ul class="guide">
                        <li>
                            <button on:click={scrollToHome} id="mainBut">Cole Resurreccion</button>
                            <a href="https://github.com/calsfu" target="_blank" rel="noopener noreferrer"><img src="/src/lib/images/github-mark-white.png" alt="logo" class="logo"></a>
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
            <h1>Hello, I'm <span class="color_name">Cole Resurreccion</span></h1>
            <h4>Boston University Computer Engineering 25'</h4>
        </section>
        <section id="about" class="about">
            <p>I am a third year computer engineering at Boston University. Currently, I am on a software track. I am learning C++ and Verilog, but am self-teaching myself
                other front end languages. 
            </p>
        </section>
        <section class = "skills">
            <h1>SKILLS</h1>
            <p>Proficient</p>
            <ul class="skillList">
                <div class="poopy">
                    <li class="wholeIcon">
                        <div class="picture">
                            <i class="devicon-cplusplus-plain-wordmark"></i>
                        </div>
                        <p class="skillText">C++</p>
                    </li>
                </div>
                <!-- Repeat this for Verilog, MATLAB, Typescript, HTML, CSS, Svelte, Git, Rust -->
                <div class="poopy">
                    <li class="wholeIcon">
                        <div class="picture">
                            <img id="toobig" src="/src/lib/images/verilog-svgrepo-com.svg">
                        </div>
                        <p class="skillText">Verilog</p>
                    </li>
                </div>
                <div class="poopy">
                    <li class="wholeIcon">
                        <div class="picture">
                            <i class="devicon-matlab-plain"></i>
                        </div>
                        <p class="skillText">MATLAB</p>
                    </li>
                </div>
                <div class="poopy">
                    <li class="wholeIcon">
                        <div class="picture">
                            <i class="devicon-typescript-plain"></i>
                        </div>
                        <p class="skillText">Typescript</p>
                    </li>
                </div>
                <div class="poopy">
                    <li class="wholeIcon">
                        <div class="picture">
                            <i class="devicon-html5-plain"></i>
                        </div>
                        <p class="skillText">HTML</p>
                    </li>
                </div>
                <div class="poopy">
                    <li class="wholeIcon">
                        <div class="picture">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"></path></svg>
                        </div>
                        <p class="skillText">CSS</p>
                    </li>
                </div>
                <div class="poopy">
                    <li class="wholeIcon">
                        <div class="picture">
                            <i class="devicon-arduino-plain"></i>
                        </div>
                        <p class="skillText">Arduino</p>
                    </li>
                </div>
                <div class="poopy">
                    <li class="wholeIcon">
                        <div class="picture">
                            <i class="devicon-rust-plain"></i>
                        </div>
                        <p class="skillText">Rust</p>
                    </li>
                </div>
                <div class="poopy">
                    <li class="wholeIcon">
                        <div class="picture">
                            <i class="devicon-svelte-plain"></i>
                        </div>
                        <p class="skillText">Svelte</p>
                    </li>
                </div>
            </ul>
            <p>Learning</p>
                <ul class="skillList">
                    <div class="poopy">
                        <li class="wholeIcon">
                            <div class="picture">
                                <i class="devicon-python-plain"></i>
                            </div>
                            <p class="skillText">Python</p>
                        </li>
                    </div>
                    <!-- Repeat this for Verilog, MATLAB, Typescript, HTML, CSS, Svelte, Git, Rust -->
                    <div class="poopy">
                        <li class="wholeIcon">
                            <div class="picture">
                                <i class="devicon-thealgorithms-plain"></i>
                            </div>
                            <p class="skillText">Algorithms</p>
                        </li>
                    </div>
                    <div class="poopy">
                        <li class="wholeIcon">
                            <div class="picture">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"></path></svg>
                            </div>
                            <p class="skillText">Data Structures</p>
                        </li>
                    </div>
                    <div class="poopy">
                        <li class="wholeIcon">
                            <div class="picture">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"></path></svg>
                            </div>
                            <p class="skillText">OS</p>
                        </li>
                    </div>
                    <div class="poopy">
                        <li class="wholeIcon">
                            <div class="picture">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"></path></svg>
                            </div>
                            <p class="skillText">Computer Architecture</p>
                        </li>
                    </div>
                    <div class="poopy">
                        <li class="wholeIcon">
                            <div class="picture">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"></path></svg>
                            </div>
                            <p class="skillText">Statistics</p>
                        </li>
                    </div>
                    <div class="poopy">
                        <li class="wholeIcon">
                            <div class="picture">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"></path></svg>
                            </div>
                            <p class="skillText">Machine Learning</p>
                        </li>
                    </div>
                    <div class="poopy">
                        <li class="wholeIcon">
                            <div class="picture">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"></path></svg>
                            </div>
                            <p class="skillText">Deep Learning</p>
                        </li>
                    </div>
                    <div class="poopy">
                        <li class="wholeIcon">
                            <div class="picture">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"></path></svg>
                            </div>
                            <p class="skillText">Computer Vision</p>
                        </li>
                    </div>
                </ul>
                <!-- <li>Python</li>
                <li>MongoDB</li>
                <li>SQL</li>
                <li>Algorithms</li>
                <li>Data Structures</li>
                <li>OS</li>
                <li>Computer Architecture</li>
                <li>Statistics</li>
                <li>Machine Learning</li>
                <li>Deep Learning</li>
                <li>Computer Vision</li> -->
                </section>
        <section class="projects">
            <h1 class="projectTitle">PROJECTS</h1>
            <div class="projectBox">
                <div class="textBox">
                    <h2>Model Processor</h2>
                    <h4>Digital Logic</h4>
                    <p>Created a model CPU with 8 registers and a 16-bit bus. Supports 8 functions lie, ADD, SUB, MULT, JUMP. Recieved information from ROM storage and a program conter. Supports FPGA.</p>
                    <div class="projectInfo">
                        <img src="/src/lib/images/verilog-svgrepo-com.svg" alt="verilog-symbol" id="verilog-symbol">
                        <a href="https://github.com/calsfu/verilog_processor" target="_blank" rel="noopener noreferrer" id="seemorebutton">
                            See More
                        </a>
                    </div>
                </div>
                <div class="imgBox">
                    <img src="/src/lib/images/ModelProcessor.png" alt="Model Processor" class="projectImg">
                </div>
            </div>
            <div class="projectBox">
                <div class="imgBox">
                    <img src="/src/lib/images/BikeLightPhoto.png" alt="Bike Light" class="projectImg">
                </div>
                <div class="textBox">
                    <h2>Bike Light</h2>
                    <h4>Microcontroller Intergration</h4>
                    <p>A bike light that turns off in bright settings and gets brighter as speed increases. Collaborated in a group to create a circuit diagram, reasearch and purchas parts
                        , and wrote code for an Arduino microcontroller.  </p>
                    <div class="projectInfo">
                        <img src="/src/lib/images/arduino-svgrepo-com.svg" alt="arduino-symbol" id="arduino-symbol">
                        <a href="https://github.com/calsfu/verilog_processor" target="_blank" rel="noopener noreferrer" id="seemorebutton">
                            See More
                        </a>
                    </div>
                </div>
            </div>
            <div class="projectBox">
                <div class="textBox">
                    <h2>ASCII Pokemon Game</h2>
                    <h4>C++ Terminal Game</h4>
                    <p>Pokemon game using C++ in the terminal. Uses classes, inheritance, polymorphism, and more. </p>
                    <div class="projectInfo">
                        <img src="/src/lib/images/c++-icon.svg" alt="cpp-symbol" id="cpp-symbol">
                        <a href="https://github.com/calsfu/ASCII-Pokemon-Game" target="_blank" rel="noopener noreferrer" id="seemorebutton">
                            See More
                        </a>
                    </div>
                </div>
                <div class="imgBox">
                    <img src="/src/lib/images/ModelProcessor.png" alt="Model Processor" class="projectImg">
                </div>
            </div>
            <p>Find more <a href="https://github.com/calsfu?tab=repositories">here</a></p>
        </section>
        <section class="footer">
            <div class="footerInfo"> 
                <a href="https://github.com/calsfu" target="_blank" rel="noopener noreferrer"><img src="/src/lib/images/github-mark-white.png" alt="logo" class="logo"></a>
                <p>© 2023 Cole Resurreccion</p>
                <a href="mailto::business@gmail.com" target="_blank" rel="noopener noreferrer">Contact Me</a>
            </div>
        </section>
    </div>
    
</body>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;700&display=swap');
    body {
        background-color: rgb(17, 17, 17);
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
        color: white;
    }
    .projectBox a {
        cursor: pointer;
        text-decoration: underline;
        color: white;
        text-align: center;
    }
    .main { 
        height: 100%;
        width: 100%;
        color : white;
    }
    .header {
        font-size: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgb(0, 0, 39); 
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
        color: rgb(77, 139, 255);
    }
    #mainBut {
        background-color: rgb(0, 0, 39);
        border: none;
        color: white;
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
        background-color: rgb(0, 0, 39);
        border: none;
        color: white;
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
        height: 100vh;
        margin: auto;
    }
    .skills {
        font-family: 'Poppins', sans-serif;
        font-size: 2rem;
        text-align: center;  
        justify-content: center;
    }
    /* .skills ul {
        
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    } */
    .skillList {
        list-style-type: none;
        display: grid;
        /* flex-wrap: wrap; */
        /* justify-content: center; */
        grid-template-columns: repeat(3, 16rem);
        gap: 25px;
        justify-content: center;
        padding-left: 0px;
    }
    .wholeIcon {
        display: grid;
        grid-template-columns: max-content 1fr;
        grid-template-rows: 1fr;
        background-color: rgb(39, 39, 39);
        /* display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center; */
    }
    .picture {
        justify-content: center;
        align-items: center;
        position: relative;
        display: flex;
        padding: 7px;
        background-color: rgb(70, 70, 70);
    }
    #toobig {
        width: 32px;
        height: auto;
    }
    .skillText {
        font-size: 1rem;
        position: relative;
        text-align: center;
    }
    .projects {
        font-family: 'Poppins', sans-serif;
        font-size: 2rem;
        color : white;
        margin:5%;
    }
    .projectTitle {
        text-align: center;
    }
    .projectBox {
        display: grid;
        margin: 0%;
        width: 95%;
        grid-template-columns: 50% 50%;
        gap: 50px;
        margin-bottom: 5%;
    }
    .textBox {
        background-color: rgb(0, 0, 39);
        height: 70%;
        margin-top: 2%;
        padding: 4%;
        position: relative;
    }
    .textBox h2 {
        font-size: 2rem;
        margin: 0px;
    }
    .textBox h4 {
        font-size: 1.2rem;
        margin: 0px;
    }
    .textBox p {
        font-size: 1rem;
    }
    .projectInfo {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 4%;
    }
    #verilog-symbol {
        width: 7%;
        height: auto;
    }
    #arduino-symbol {
        width: 7%;
        height: auto;
    }
    #cpp-symbol {
        width: 7%;
        height: auto;
    }
    .imgBox {
        /* width: 40%;
        height: auto;
        position: absolute;
        left:auto;
        overflow: hidden; */

        float:right;
        left: auto;
        right: 0px;
        height: auto;
        padding-top: 0px;
        overflow: hidden;
    }
    .projectImg {
        width: 100%;
        height: auto;
        display: block;
        right: 0px;
    }
    .footer {
        width: 100%;
        height: 50px;
        background-color: rgb(0, 0, 39);
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: .6rem;

    }
    .footerInfo {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        margin: auto;
        padding-top: .7%;
    }

</style>