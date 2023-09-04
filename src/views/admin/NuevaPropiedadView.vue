<script setup>
    import { useForm, useField } from 'vee-validate'

    const { handleSubmit } = useForm()

    const items = [1,2,3,4,5]

    const submit = handleSubmit((valuees) => {

    })

</script>

<template>
    <v-card max-width="800" flat class="mx-auto my-2">
        <v-card-title class="text-h4 font-weight-bold" tag="h3">
            Nueva Propiedad
        </v-card-title>

        <v-card-subtitle class="text-h5 py-3">
            Crea una nueva propiedad llenando el siguiente formulario
        </v-card-subtitle>

        <v-form class="mt-5">
            <v-text-field class="mb-2" label="Titulo Propiedad"/>

            <v-file-input accept="image/jpeg" label="Fotografía" prepend-icon="mdi-camera" class="mb-5"/>

            <v-text-field class="mb-2" label="Precio"/>

            <v-row>
                <v-col cols="12" md="4">
                    <v-select label="Habitaciones" class="mb-5" :items="items"/>
                </v-col>

                <v-col cols="12" md="4">
                    <v-select label="Baños" class="mb-5" :items="items"/>
                </v-col>

                <v-col cols="12" md="4" >
                    <v-select label="Estacionamiento" class="mb-5" :items="items"/>
                </v-col>
            </v-row>
            
            <v-textarea class="mb-5" label="Descripción"/>
            
            <v-checkbox label="Alberca"/>

            <v-btn color="pink-accent-3" block @click="submit">
                Agregar Propiedad
            </v-btn>
        </v-form>
    </v-card>
</template>