<template>
    <div class="text-center">
        <b-card no-body class="overflow-hidden tarjeta" v-for="(item, index) in usuarios" :key="item.id.value" border-variant="success">
            <b-row no-gutters>
                <b-col md="4">
                    <b-card-img :src="usuarios[index].avatar" :alt="usuarios[index].first_name" :title="usuarios[index].first_name" img-left class="imagen shadow p-3 mb-2 bg-white rounded"></b-card-img>
                </b-col>
                <b-col md="8">
                    <b-card-body class="cuerpo-tarjeta">
                        <b-card-text>
                            <strong>Nombre:</strong> {{usuarios[index].first_name + ' ' + usuarios[index].last_name}} <br>
                            <strong>Correo:</strong> {{usuarios[index].email}}<br>
                        </b-card-text>
                        <b-row>
                            <b-col>
                                <b-button block pill variant="outline-warning" size="lg">Modificar</b-button>
                            </b-col>
                            <b-col>
                                <b-button block pill variant="outline-danger" size="lg">Eliminar</b-button>
                            </b-col>                            
                        </b-row>
                    </b-card-body>
                </b-col>
            </b-row>
        </b-card> 
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    computed: {
        ...mapState(['usuarios'])
    },
    methods: {
    }
}
</script>

<style scoped>
    .tarjeta{
        max-width: auto;
        padding: 1em;
        margin: 1em;
    }
    .imagen{
        width: auto;
        height: auto;
    }
    .cuerpo-tarjeta{
        text-align: left;
    }
</style>