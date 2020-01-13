const fs = require("fs")
const slugify = require("slug")
const dateFns = require("date-fns")
const title = process.argv[2]
if (!title) {
  throw "a title is required!"
}
const slug = slugify(title.toLowerCase())
const date = dateFns.format(new Date(), "yyyy-MM-dd")
const dir = `./content/posts/${date}-${slug}`

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir)
} else {
  throw "That post already exists!"
}

fs.writeFileSync(
  `${dir}/index.mdx`,
  `---
title: "${title}"
author: Kyle Gill
date: ${date}
hero: ./images/hero.jpg
excerpt: Come, Follow Me study for ${date}
tags: ["Come Follow Me"]
---`,
  function(err) {
    if (err) {
      return console.log(err)
    }
    console.log(`${title} was created!`)
  }
)

fs.mkdirSync(`${dir}/images`)
