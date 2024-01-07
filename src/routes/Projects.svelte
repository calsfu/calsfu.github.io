<script lang="ts">
    export let groupNum = 1;
    let projects = [
        //EMBEDDED/HARDWARE
        {
            id: 1,
            title: 'Model Processor',
            subtitle: 'Digital Logic',
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
            link: 's',
            image: '/BikeLightPhoto.png',
            group: 4
        },
        //SOFTWARE SYSTEMS
        {
            id: 11,
            title: 'Scheduling Discord Bot',
            subtitle: 'Typescript',
            description: 'Engineered a custom Discord bot for scheduling events and activities using the discord.js API. Utilized a SQLite database to store server specific events and send reminders an hour before an even',
            link: 'https://github.com/calsfu/scheduling-bot',
            image: '/scheduling-2.png',
            group: 1
        },
        {
            id: 12,
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
        //OS
        {
            id: 31,
            title: 'Threading Library',
            subtitle: 'C',
            description: 'Created a threading library in C that supports mutexes, semaphores, and condition variables. Implemented a scheduler that supports round robin, priority, and lottery scheduling.',
            link: 's',
            image: '/BikeLightPhoto.png',
            group: 2
        },
        {
            id: 32,
            title: 'Virtual File System',
            subtitle: 'C',
            description: 'Created a file system in C that supports multiple files, directories, and permissions.',
            link: 's',
            image: '/BikeLightPhoto.png',
            group: 2
        },
        {
            id: 33,
            title: 'Linux Shell',
            subtitle: 'C',
            description: 'Created a shell in C that supports multiple commands, pipes, and redirection.',
            link: '',
            image: '/BikeLightPhoto.png',
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
</style>

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