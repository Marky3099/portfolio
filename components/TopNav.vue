<template>
    <nav class="h-10 w-full mx-auto md:w-4/5 rounded-2xl hover:shadow-lg shadow-md shadow-blue-600 hover:shadow-blue-500 bg-primary bg-opacity-30 p-8 backdrop-blur-sm">
        <ul class="flex h-full items-center justify-around font-bold">
            <li><NuxtLink to="/" active-class="text-yellow-300" class="cursor-pointer duration-500 hover:text-yellow-300">Home</NuxtLink></li>
            <span class="h-8 border-2 border-yellow-100"></span>
            <li><NuxtLink to="/skills" active-class="text-yellow-300" class="cursor-pointer duration-500 hover:text-yellow-300">Skills</NuxtLink></li>
            <span class="h-8 border-2 border-yellow-100"></span>
            <li><NuxtLink to="/projects" active-class="text-yellow-300" class="cursor-pointer duration-500 hover:text-yellow-300">Projects</NuxtLink></li>
            <span class="h-8 border-2 border-yellow-100"></span>
            <li><NuxtLink to="/contact" active-class="bg-orange-500" class="cursor-pointer duration-500 bg-orange-200 rounded-full px-3 py-2 text-gray-900 font-extrabold hover:bg-opacity-75">Contact</NuxtLink></li>
        </ul>
    </nav>
</template>