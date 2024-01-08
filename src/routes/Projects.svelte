<script lang="ts">
    let groupNum = 1;
    let projects = [
        //EMBEDDED/HARDWARE
        {
            id: 1,
            title: 'Model Processor',
            subtitle: 'Verilog Digital Logic',
            description: 'Created a model CPU with 8 registers and a 16-bit bus. Supports 8 functions lie, ADD, SUB, MULT, JUMP. Recieved information from ROM storage and a program conter. Supports FPGA.',
            link: 'https://github.com/calsfu/verilog_processor',
            image: '/modelProcessor.png',
            group: 4
        },
        {
            id: 2,
            title: 'Bike Light',
            subtitle: 'Microcontroller Intergration',
            description: 'A bike light that turns off in bright settings and gets brighter as speed increases. Collaborated in a group to create a circuit diagram, reasearch and purchase parts, and wrote code for an Arduino microcontroller.',
            link: '',
            image: '/BikeLightPhoto.png',
            group: 4
        },
        //SOFTWARE SYSTEMS
        {
            id: 11,
            title: 'Training App',
            subtitle: 'Typescript, React Native, PostgreSQL, Python, Flask, AWS',
            description: 'Created a mobile app using React Native and Typescript. Utilized a PostgreSQL database to store user information and a Flask server to handle requests. Deployed server on AWS EC2 instance.',
            link: '',
            image: '/trainingapp.png',
            group: 1
        },
        {
            id: 12,
            title: 'Scheduling Discord Bot',
            subtitle: 'Typescript, SQLite, Discord.js',
            description: 'Engineered a custom Discord bot for scheduling events and activities using the discord.js API. Utilized a SQLite database to store server specific events and send reminders an hour before an even',
            link: 'https://github.com/calsfu/scheduling-bot',
            image: '/scheduling-2.png',
            group: 1
        },
        {
            id: 13,
            title: 'ASCII Pokemon Game',
            subtitle: 'C++ Terminal Game',
            description: 'Pokemon game using C++ in the terminal. Uses classes, inheritance, polymorphism, and more.',
            link: 'https://github.com/calsfu/Terminal-Pokemon-Game',
            image: '/pokemon.png',
            group: 1
        },
        //MACHINE LEARNING
        {
            id: 21,
            title: 'Reinforcement Learning Driving Game',
            subtitle: 'PyTorch Neural Network',
            description: 'Created a Deep Q Learning (DQN) Neural Network with PyTorch to finish a race. Optimized network to receive maximum reward from the OpenAI Gymnasium API.',
            link: 'https://github.com/calsfu/ASCII-Pokemon-Game',
            image: '/Steps_2000.gif',
            group: 3
        },
        {
            id: 22,
            title: 'Street Sign Image Classifier',
            subtitle: 'PyTorch Neural Network',
            description: 'Created a Convolutional Neural Network (CNN) with PyTorch to classify street signs. Optimized network to receive 99% accuracy on the German Traffic Sign Recognition Benchmark (GTSRB).',
            link: 'https://github.com/calsfu/streetsign-image-detection',
            image: '/gtsrb.jpg',
            group: 3
        },
        //OS
        {
            id: 31,
            title: 'Threading Library',
            subtitle: 'C',
            description: 'Created a threading library in C that supports mutexes, semaphores, and condition variables. Implemented a scheduler that supports round robin, priority, and lottery scheduling.',
            link: '',
            image: '/thread.png',
            group: 2
        },
        {
            id: 32,
            title: 'Virtual File System',
            subtitle: 'C',
            description: 'Created a file system in C that supports multiple files, directories, and permissions.',
            link: '',
            image: '/vfs.png',
            group: 2
        },
        {
            id: 33,
            title: 'Linux Shell',
            subtitle: 'C',
            description: 'Created a shell in C that supports multiple commands, pipes, and redirection. Followed REPL design pattern.',
            link: '',
            image: '/shell.png',
            group: 2
        }
    ]
</script>

<style>
        .textBox {
        background-color: var(--header-color);
        border-radius: 4%;
        height: fit-content;
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
        color: var(--project-colored-text);
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
    .imgBox {
        /* width: 40%;
        height: auto;
        position: absolute;
        left:auto;
        overflow: hidden; */
        /* transition: 300ms; */
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
<section class="projects" id="projects">
    <h1 class="projectTitle">PROJECTS</h1>
    <!-- Choose type of projects -->
    <div class="chooseProject">
        <ul style="display:flex; flex-direction:row;  align-items: center;justify-content:center; list-style:none; border:none; gap:15px;">
            <li><button class="button-62" on:click={() => groupNum = 1}>Systems</button></li>
            <li><button class="button-62" on:click={() => groupNum = 2}>OS</button></li>
            <li><button class="button-62" on:click={() => groupNum = 3}>Machine Learning</button></li>
            <li><button class="button-62" on:click={() => groupNum = 4}>Hardware/Embedded</button></li>
        </ul>
        
        
        
    </div>


    <div class="projectBox">
        
        {#each projects.filter(project => project.group === groupNum) as project (project.id)}
    {#if project.id % 2 === 0}
    <div class="textBox">
         <h2>{project.title}</h2>
        <h4 >{project.subtitle}</h4>
        <p>{project.description}</p>    
         <div class="projectInfo"> 
             <!-- <i class="devicon-typescript-plain"></i>  -->
             <a href={project.link} target="_blank" rel="noopener noreferrer" id="seemorebutton">
                See More
            </a> 
         </div> 
    </div> 
     <div class="imgBox">
        <img src={project.image} alt={project.title} class="projectImg"> 
    </div> 
    {:else}
    <div class="imgBox">
        <img src={project.image} alt={project.title} class="projectImg"> 
    </div>
    <div class="textBox">
        <h2>{project.title}</h2>
       <h4 >{project.subtitle}</h4>
       <p>{project.description}</p>    
        <div class="projectInfo"> 
            <!-- <i class="devicon-typescript-plain"></i>  -->
            {#if project.link}
            <a href={project.link} target="_blank" rel="noopener noreferrer" id="seemorebutton">
               See More
           </a> 
              {/if}
        </div> 
   </div> 
    {/if}
    

{/each}
       
        
    </div>
    
    <p style="color: var(--text-color);">Find more <a href="https://github.com/calsfu" target="_blank" rel="noopener noreferrer">here</a></p>
</section>

