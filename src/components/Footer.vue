<template>
    <footer class="flex flex-col gap-2 items-center">
        <div class="flex text-lg gap-6">
            <a
                href="https://twitter.com/mariagrandury"
                target="_blank"
                class="hover:text-accent-500"
            >
                <i-uil-twitter />
            </a>
            <a
                href="https://linkedin.com/in/mariagrandury/"
                target="_blank"
                class="hover:text-accent-500"
            >
                <i-uil-linkedin />
            </a>
            <a
                href="https://github.com/mariagrandury"
                target="_blank"
                class="hover:text-accent-500"
            >
                <i-uil-github />
            </a>
        </div>
        <div>© María Grandury {{ (new Date()).getFullYear() }}</div>
    </footer>
</template>
