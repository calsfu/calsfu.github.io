<script>
    //will be used to show skills with loop
    const knownSkills = [
        {
            name: 'C++',
            icon: 'devicon-cplusplus-plain-wordmark'
        },
        {
            name: 'Python',
            icon: 'devicon-python-plain'
        },
        {
            name: 'MATLAB',
            icon: 'devicon-matlab-plain'
        },
        {
            name: 'Typescript',
            icon: 'devicon-typescript-plain'
        },
        {
            name: 'Algorithms',
            icon: 'devicon-thealgorithms-plain'
        },
        {
            name: 'Data Structures',
            icon: 'data-structure'
        },
        {
            name: 'Arduino',
            icon: 'devicon-arduino-plain'
        },
        {
            name: 'Rust',
            icon: 'devicon-rust-plain'
        },
        {
            name: 'Svelte',
            icon: 'devicon-svelte-plain'
        },
        {
            name: 'Python',
            icon: 'devicon-python-plain'
        },
        {
            name: 'OS',
            icon: 'operating-systems'
        },
        {
            name: 'Statistics',
            icon: 'statistics'
        },
    ];
    const learningSkills = [
        {
            name: 'Computer Architecture',
            icon: 'computer-arch'
        },
        
        {
            name: 'Machine Learning',
            icon: 'machine-learning'
        },
        {
            name: 'Deep Learning',
            icon: 'deep-learning-project'
        },
        {
            name: 'Computer Vision',
            icon: 'eye'
        }
    ];
</script>

<style>
    .skillList {
        list-style-type: none;
        display: grid;
        /* flex-wrap: wrap; */
        color: var(--white);
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
        background-color: var(--skill-text);
        /* display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center; */
    }
    .wholeIcon:hover {
        background-color: var(--header-color);
    }
    .picture {
        justify-content: center;
        align-items: center;
        position: relative;
        display: flex;
        padding: 7px;
        background-color: var(--skill-icon);
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
    .skills {
        font-family: 'Poppins', sans-serif;
        font-size: 2rem;
        text-align: center;  
        justify-content: center;
        height: 100vh;
        color: var(--text-color);
    }
    i {
        min-width: 32px;
    }
</style>
<section class = "skills" id="skills">
    <h1>SKILLS</h1>
                <p>Know</p>
                <ul class="skillList">
                    {#each knownSkills as {name, icon}}

                        <div class="poopy">
                            <li class="wholeIcon">
                                <div class="picture">
                                    {#if icon.startsWith('devicon')}
                                        <i class={icon}></i>
                                    {:else}
                                        <img src='/{icon}.svg' alt="" id="toobig">
                                    {/if}
                                </div>
                                <p class="skillText">{name}</p>
                            </li>
                        </div>
                    {/each}
                </ul>
                <p>Learning</p>
                <ul class="skillList">
                    {#each learningSkills as {name, icon}}
                        <div class="poopy">
                            <li class="wholeIcon">
                                <div class="picture">
                                    {#if icon.startsWith('devicon')}
                                        <i class={icon}></i>
                                    {:else}
                                        <img src='/{icon}.svg' alt="" id="toobig">
                                    {/if}
                                </div>
                                <p class="skillText">{name}</p>
                            </li>
                        </div>
                    {/each}
                    </ul>
</section>