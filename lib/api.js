import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

// set posts ext & directory
const ext = 'md' // 'md' or 'mdx'
const postsDir = '_posts' // '_posts' or '_mdx'
// load regular .md posts
const postsDirectory = join(process.cwd(), postsDir)

export function getPostSlugs(ext = 'md') {
  const regex = new RegExp(`\.${ext}$`)
  return fs.readdirSync(postsDirectory).filter((path) => regex.test(path))
}

export function getPostBySlug(slug, fields = [], ext = 'md') {
  const regex = new RegExp(`\.${ext}$`)
  const realSlug = slug.replace(regex, '')
  const fullPath = join(postsDirectory, `${realSlug}.${ext}`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }
    items['tags'] = data.tags

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })
  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields, ext))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export function getRandomPost() {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, []))
    
  return posts[Math.floor(Math.random() * posts.length - 1)]
}
