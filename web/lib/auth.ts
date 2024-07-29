import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialProvider from "next-auth/providers/credentials";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [

    //credentials

    CredentialProvider({
        name:"Email",
        credentials:{
            emial:{label:"Email" ,type:"email" ,placeholder:"Enter your email.."},
            password:{label:"Password" ,type:"password" ,placeholder:"Enter your password.."}
        },
        async authorize(credentials :any){
            console.log(credentials)
            //validation
            return {
                id:"user1",
                name:"abc",
                email:"abc@example.com"
            }
        }
    }),

    // google o auth
    GoogleProvider({
        clientId:process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        authorization:{
            params:{prompt :"consent"},
        }
    }),

    //github o auth
  ],

  pages:{
    signIn:"/signin"
  }
})