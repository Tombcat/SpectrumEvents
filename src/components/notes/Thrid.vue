<template>
    <!-- Created with Inkscape (http://www.inkscape.org/) -->
   

</template>

<script>
    export default {
        name: 'Third Note',
        props: ['top', 'left', 'right', 'white', 'rotate', 'scale', 'note'],

        computed: {
            style () {
                return `top: ${this.top ?? 'none'};
                left: ${this.left ?? 'none'};
                right: ${this.right?? 'none'};
                filter: ${this.white ? 'invert(99%) sepia(43%) saturate(0%) hue-rotate(320deg) brightness(111%) contrast(100%)' : 'none'};
                transform: rotate(${this.rotate ?? 0}deg) scale(${this.scale ?? 1});
                transform-origin: center;
                position: absolute;`
            }
        }
    }
</script>

<style>


</style>