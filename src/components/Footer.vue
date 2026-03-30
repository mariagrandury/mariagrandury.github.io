<template>
    <footer class="flex flex-col gap-2 items-center">
        <div class="flex text-lg gap-6">
            <a href="https://linkedin.com/in/mariagrandury/" target="_blank" class="hover:text-accent-500">
                <i-uil-linkedin />
            </a>
            <a href="https://x.com/mariagrandury" target="_blank" class="content hover:text-accent-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width:1em;height:1em">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
            </a>
            <a href="https://github.com/mariagrandury" target="_blank" class="hover:text-accent-500">
                <i-uil-github />
            </a>
            <a href="https://huggingface.co/mariagrandury" target="_blank" class="hover:text-accent-500">
                <i-noto:hugging-face />
            </a>
        </div>
        <div>© María Grandury {{ (new Date()).getFullYear() }}. All Rights Reserved |
            <router-link class="hover:underline underline-2px underline-accent-500" to="/cookie-policy">Cookie Policy
            </router-link>
        </div>
    </footer>
</template>
