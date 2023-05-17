<template></template>




<script>
const getArticleInfo = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000));

    const article = {
        title: 'My Vue 3 Article',
        author: 'Matt Maribojoc'
    }
    return article;
}


export default {
    async setup() {
        const article = await getArticleInfo()
        return {
            article,
        }
    }
}
</script>