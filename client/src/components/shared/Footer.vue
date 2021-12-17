<template>
    <footer class="py-1">
        <div class="container px-4 px-lg-5">
            <p class="m-0 text-center text-white">
                Copyright © - Designed and Created by: <a class="text-white" href="https://www.cmurestudillos.es" target="_blank" rel="noopener noreferrer"><strong>Carlos Mur</strong></a>                
            </p>
            <p class="m-0 text-center text-white">
                <small><i>Version: {{version}}</i></small>            
            </p>
        </div>
    </footer>
</template>

<script>
import packageInfo  from '../../../package.json';

export default {
    data() {
        return {
            version: packageInfo.version
        }
    }
}
</script>

<style scoped>
    footer{
        background: linear-gradient( 90deg,#000,#37d843 100%,#00d4ff 0 );
    }
</style>
