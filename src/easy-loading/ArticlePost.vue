<template>
    <h1>Hello</h1>
    <Suspense>
        <template #default>
            <article-info />
        </template>
        <template #fallback>
            Loading Article....
        </template>
    </Suspense>
</template>


<script>
import ArticleInfo from './ArticleInfo.vue'
export default ({
    components: {
        ArticleInfo,
    }

})
</script>