<template>
    <router-view v-slot="{ Component, route }">
        <div :key="route.name">

            <Component :is="Component" />
            <p v-if="notFound">{{ notFound }}</p>
        </div>
    </router-view>
</template>



<script>
import { ref } from "vue";
import { getSavedUrl } from './service/intusServices.js';
import { INTUS_API_RESPONSES } from './utils/constants.js'

export default {
    setup() {
        const notFound = ref();
        if (location && location.pathname !== '/') {
            (async () => {
                const { data } = await getSavedUrl(location.href)
                if (data.message === INTUS_API_RESPONSES.original_success) {

                    window.open(data.data.original_url, '_blank');

                    // I like it more when it is not redirecting but opening in new tab.
                    // If redirect is required please uncomment this line and comment the line above. 
                    // window.location.href = data.data.original_url;
                }
                if (data.message === INTUS_API_RESPONSES.original_404) {
                    notFound.value = data.message
                }
            })()
        }
        return {
            notFound
        }
    }
}
</script>