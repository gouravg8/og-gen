"use server"
import client from '@/db'
import fs from 'fs/promises'

export async function getAllPosts() {
    try {
        const posts = await client.post.findMany()
        return { message: posts, error: false };
    } catch (error) {
        return { message: 'Can not get posts', error }
    }
}

export async function getPostById(id: string) {
    try {
        const post = await client.post.findFirst({ where: { id } })
        return { message: post, error: false };
    } catch (error) {
        return { message: 'Can not get post by id', error }
    }
}

export async function initDb() {
    try {
        const data = JSON.parse(await fs.readFile('./public/posts.json', 'utf-8'))
        // console.log(data.length);

        const posts = await client.post.createMany({
            data: data,
            skipDuplicates: true,
        })
        return { message: true, posts }
    } catch (error) {
        return { message: false, error }
    }
}