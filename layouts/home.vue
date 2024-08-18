<template>
    <div class="h-full">
        <header class="hero min-h-1/4 bg-cover bg-top lg:bg-center xl:bg-bottom">
                <div class="pt-0 md:pt-2"></div>
                <TopNav />
            <!-- <h2 class="pt-24 text-center text-7xl font-bold tracking-wide text-yellow-100">Hello!</h2> -->
            <div class="flex justify-center mt-10">
                <img src="../assets/images/me_grad_pic.jpg" alt="Me" class="w-64 h-64 rounded-full">
            </div>
            
        </header>
        <main><slot /></main>
        <Footer />
    </div>
</template>
<style scoped>
.hero{
    background-image: linear-gradient(rgba(0,0,0,0) 10%, rgba(9,0,37,1) 80%), url("/assets/images/bg-image.jpg");
}
</style>