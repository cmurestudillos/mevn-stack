<template>
    <div class="text-center">
        <b-card no-body class="overflow-hidden tarjeta" v-for="(item, index) in usuarios" :key="item.id.value" border-variant="success">
            <b-row no-gutters>
                <b-col md="4">
                    <b-card-img v-if="usuarios[index].avatar" :src="usuarios[index].avatar" :alt="usuarios[index].first_name" :title="usuarios[index].first_name" img-left class="imagen shadow p-3 mb-2 bg-white rounded"></b-card-img>
                    <b-card-img v-else src="https://www.w3schools.com/howto/img_avatar.png" :alt="usuarios[index].first_name" :title="usuarios[index].first_name" img-left class="noimagen shadow p-3 mb-2 bg-white rounded"></b-card-img>
                </b-col>
                <b-col md="8">
                    <b-card-body class="cuerpo-tarjeta">
                        <b-card-text>
                            <strong>Nombre:</strong> {{usuarios[index].first_name + ' ' + usuarios[index].last_name}} <br>
                            <strong>Correo:</strong> {{usuarios[index].email}}<br>
                        </b-card-text>
                        <b-row>
                            <b-col>
                                <router-link :to="{ name: 'editar', params: { id: usuarios[index].id } }">
                                    <b-button block pill variant="outline-warning" size="lg">Modificar</b-button>
                                </router-link>
                            </b-col>
                            <b-col>
                                <b-button block pill variant="outline-danger" size="lg" @click="eliminarUsuario(usuarios[index].id)">Eliminar</b-button>
                            </b-col>                            
                        </b-row>
                    </b-card-body>
                </b-col>
            </b-row>
        </b-card> 
        <router-link :to="{name: 'agregar'}">
            <b-button block pill variant="primary" size="lg" id="nuevo">A&ntilde;adir</b-button>
        </router-link>
        
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
    computed: {
        ...mapState(['usuarios'])
    },
    methods: {
        ...mapActions(['eliminarUsuario'])
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
    .noimagen{
        width: 160px;
        height: 160px;
    }    
    .cuerpo-tarjeta{
        text-align: left;
    }

    #nuevo {
        position:fixed;
        bottom:8%;
        right:0px;        
        padding: 1em;
        text-decoration: none;
    }
    #nuevo:hover {
        background: rgba(135, 206, 235, 0.8);
        color: blue;
        cursor: pointer;
    }
    #nuevo {
        right: 10px;
    }
</style>