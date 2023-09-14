<script setup>
    defineProps({
        propiedad: {
            type: Object
        },
        price: {
            type: Function
        }
    })
</script>

<template>
    <v-col cols="12" md="4">
        <v-card>
            <v-card-title class="text-center font-weight-bold text-h5">{{ propiedad.titulo }}</v-card-title>
            <v-img :src="propiedad.imagen" height="250" cover/>
            <v-card-text class="text-truncate">{{ propiedad.descripcion }}</v-card-text>
            <v-card-text class="font-weight-bold text-h6">Precio: {{ price (propiedad.precio) }}</v-card-text>
            <template v-slot:actions>
                <v-btn 
                    block 
                    color="info" 
                    variant="flat" 
                    :to="{name: 'propiedad', params: { id: propiedad.id} }"
                >
                    Ver Información
                </v-btn>
            </template>
        </v-card>
    </v-col>
</template>