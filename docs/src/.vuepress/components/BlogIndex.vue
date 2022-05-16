<template>
    <div>
        <div v-for="post in posts">
            <h2>
                <router-link :to="post.path">{{ post.frontmatter.title }}</router-link>
            </h2>

            <p>{{ post.frontmatter.descritpion }}</p>

            <p>
                <router-link :to="post.path">Read more</router-link>
            </p>
        </div>
    </div>
</template>

<script>

export default {
    computed: {
        posts() {
            console.log(this.$site)
            return this.$site.pages
            .filter(page => page.path.startWith('/blog/') && !page.frontmatter.blog_index )
            .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
        }
    },
}
</script>