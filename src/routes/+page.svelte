<script lang="ts">
    import About from "./About.svelte";
    import Header from "./Header.svelte";
    import Home from "./Home.svelte";
    import Projects from "./Projects.svelte";
    import Skills from "./Skills.svelte";
    import Footer from "./Footer.svelte";
    let y = 50;
    

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
        <Header/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Footer/>
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
    
    
    .main { 
        height: 100%;
        width: 100%;
        color : var(--text-color);
    }
    
    
    
    
    /* .skills ul {
        
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    } */
    
    
/*    
    #verilog-symbol {
        width: 7%;
        height: auto;
    }
    #arduino-symbol {
        width: 7%;
        height: auto;
    } */
    
   
    

    /* <!-- HTML !-->
<button class="button-64" role="button"><span class="text">Button 64</span></button> */

/* CSS */


/* CSS */


</style>