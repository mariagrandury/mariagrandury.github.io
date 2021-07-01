<template>
    <footer class="flex flex-col items-center gap-2">
        <div class="flex gap-6 text-lg">
            <a href="https://twitter.com/mariagrandury" target="_blank" class="hover:text-gray-500">
                <i-uil-twitter />
            </a>
            <a
                href="https://linkedin.com/in/mariagrandury/"
                target="_blank"
                class="hover:text-gray-500"
            >
                <i-uil-linkedin />
            </a>
            <a href="https://github.com/mariagrandury" target="_blank" class="hover:text-gray-500">
                <i-uil-github />
            </a>
        </div>
        <div>© María Grandury {{ (new Date()).getFullYear() }}</div>
    </footer>
</template>
