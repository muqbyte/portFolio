<script>

</script>

<template>
    <div class="flex flex-col items-center justify-center" style="border:2px solid">
        <div class="mb-2">
            <h1 class="text-3xl font-bold">Stack skills</h1>
        </div>

        <div class="w-full grid-cols-3 md:grid justify-items-center" style="border:2px solid;" id="secondDiv">
            <div style="border:2px solid" class="flex flex-col items-center justify-center">
                <div>
                    <h2 class="text-xl font-semibold">Front end stacks</h2>
                </div>
               <div style="display: flex; justify-content: center;" >
                    <div style="border: 2px solid;" class="flex flex-col items-center justify-center">
                        <img src="/react.png" alt="Example Image" style="width: 70px; height: auto;"/>
                        <p>React</p>
                    </div>

                    <div style="border: 2px solid;" class="flex flex-col items-center justify-center">
                        <img src="/nuxt.png" alt="Example Image" style="width: 70px; height: auto;"/>
                        <p>Nuxt.js</p>
                    </div>
                </div>
            </div>

            <div class="flex flex-col items-center justify-center">
                <div>
                    <h2 class="text-xl font-semibold">Front end stacks</h2>
                </div>
               <div style="display: flex; justify-content: center;" >
                    <img src="/nuxt.png" alt="Example Image" style="width: 70px; height: auto;"/>
                </div>
            </div>

            <div>
                <div>
                    <h2 class="text-xl font-semibold">IoT applications</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

  h1,h2{
    font-family: "Dosis";
  }
  p{
    font-family: "Roboto";
  }
  </style>