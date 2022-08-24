import NextAuth from "next-auth/next";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../database/connect";

import GoogleProvider from "next-auth/providers/google";
 import GithubProvider from 'next-auth/providers/github'
 export default NextAuth({
    providers:[
        GithubProvider({
            clientId :process.env.GITHUB_ID,
            clientSecret : process.env.GITHUB_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
          })
    ],
    pages:{
        signIn :'/auth/signin',
        signOut:'/auth/signout'
    },
    adapter :MongoDBAdapter(clientPromise)
})