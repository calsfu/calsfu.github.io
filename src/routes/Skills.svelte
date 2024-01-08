<script>
    //will be used to show skills with loop
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
</style>
<section class = "skills" id="skills">
    <h1>SKILLS</h1>
                <p>Know</p>
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
                        <!-- <li class="wholeIcon">
                            <div class="picture">
                                <img id="toobig" alt="poopy" src="/verilog-svgrepo-com.svg">
                            </div>
                            <p class="skillText">Verilog</p>
                        </li> -->
                        <li class="wholeIcon">
                            <div class="picture">
                                <i class="devicon-python-plain"></i>
                            </div>
                            <p class="skillText">Python</p>
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
                                <i class="devicon-thealgorithms-plain"></i>
                            </div>
                            <p class="skillText">Algorithms</p>
                        </li>
                    </div>
                    <div class="poopy">
                        <li class="wholeIcon">
                            <div class="picture">
                                <img src="/data-structure.svg" alt="datas" id="toobig">
                            </div>
                            <p class="skillText">Data Structures</p>
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
                                    <img src="/operating-systems.svg" alt="datas" id="toobig">
                                </div>
                                <p class="skillText">OS</p>
                            </li>
                        </div>
                        <div class="poopy">
                            <li class="wholeIcon">
                                <div class="picture">
                                    <img src="/computer-arch.svg" alt="datas" id="toobig">
                                </div>
                                <p class="skillText">Computer Architecture</p>
                            </li>
                        </div>
                        <div class="poopy">
                            <li class="wholeIcon">
                                <div class="picture">
                                    <img src="/statistics.svg" alt="datas" id="toobig">
                                </div>
                                <p class="skillText">Statistics</p>
                            </li>
                        </div>
                        <div class="poopy">
                            <li class="wholeIcon">
                                <div class="picture">
                                    <img src="/machine-learning.svg" alt="datas" id="toobig">
                                </div>
                                <p class="skillText">Machine Learning</p>
                            </li>
                        </div>
                        <div class="poopy">
                            <li class="wholeIcon">
                                <div class="picture">
                                    <img src="/deep-learning-project-svgrepo-com.svg" alt="datas" id="toobig">
                                </div>
                                <p class="skillText">Deep Learning</p>
                            </li>
                        </div>
                        <div class="poopy">
                            <li class="wholeIcon">
                                <div class="picture">
                                    <img src="/eye.svg" alt="datas" id="toobig">
                                </div>
                                <p class="skillText">Computer Vision</p>
                            </li>
                        </div>
                    </ul>
</section>