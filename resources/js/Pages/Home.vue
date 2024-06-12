<template>
    <div class="home-wrapper">
        <h1 class="home-title">Welcome to your URL shortener</h1>
        <input class="home-input" type="text" v-model="url" placeholder="Enter your URL" />
        <button class="home-shorten-cta" @click="handleUrl(url)">Shorten your URL</button>
        <p v-if="intusResponse">{{ intusResponse.message }}</p>
        <p v-if="intusResponse">{{ intusResponse.data.hashed_url }}</p>
        <button class="home-copy-cta" v-if="intusResponse" @click="copy(intusResponse.data.hashed_url)">
            Copy
        </button>
        <p class="home-warning" v-if="errorResponses">{{ errorResponses }}</p>
    </div>
</template>

<script>
import { ref } from "vue";
import { handleCheckSafetyUrl, handleSaveUrl } from '../service/intusServices.js'
import { useClipboard } from '@vueuse/core'
import { GOOGLE_SAFE_BROWSING_WARNING, INVALID_URL } from '../utils/constants.js'
import './Home.css'
import { checkIsValidURL } from '../utils/helper.js'
export default {
    setup() {
        const intusResponse = ref();
        const errorResponses = ref();
        const { copy } = useClipboard()
        const handleUrl = async (url) => {
            errorResponses.value = ''
            intusResponse.value = ''

            const isValidUrl = checkIsValidURL(url)
            if (isValidUrl) {
                try {
                    const { data } = await handleCheckSafetyUrl(url)
                    if (data?.matches && data.matches.length > 0) {
                        errorResponses.value = GOOGLE_SAFE_BROWSING_WARNING

                    } else {
                        const { data } = await handleSaveUrl(url);
                        intusResponse.value = data
                    }

                } catch (error) {
                    if (error?.response?.data?.error?.message) {
                        errorResponses.value = error?.response?.data?.error?.message
                    } else {
                        errorResponses.value = error?.message
                    }
                    console.error(error);
                }
            } else {
                errorResponses.value = INVALID_URL
            }
        };

        return {
            handleUrl,
            intusResponse,
            errorResponses,
            copy
        }
    }



}
</script>