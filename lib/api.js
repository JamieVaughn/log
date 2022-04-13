import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

// load regular .md posts
const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter((path) => /\.md$/.test(path))
}

// load .mdx posts
const mdxDirectory = path.join(process.cwd(), '_mdx')
  
export function getMDXPostSlugs() {
  return fs.readdirSync(mdxDirectory).filter((path) => /\.mdx$/.test(path))
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
  const mdxSlugs = getMDXPostSlugs()
  const mdxPosts = mdxSlugs.map(slug => getPostBySlug(slug, fields, 'mdx'))
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
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
