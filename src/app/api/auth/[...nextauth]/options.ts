import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import EmailProvider from "next-auth/providers/email";
import CredentialsProvider from "next-auth/providers/credentials";

const users = [
  { id: "42", name: "Dave", password: "nextauth" },
  { id: "43", name: "John", password: "password123" },
  { id: "44", name: "Jane", password: "securepass" },
  { id: "45", name: "Bob", password: "qwerty" },
  { id: "46", name: "Alice", password: "letmein" },
  { id: "47", name: "Eva", password: "123456" },
  { id: "48", name: "David", password: "welcome123" },
  { id: "49", name: "Grace", password: "p@ssw0rd" },
  { id: "50", name: "Henry", password: "pass1234" },
  { id: "51", name: "Isabel", password: "secretPass" },
];

const options: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    // EmailProvider({
    //   server: process.env.EMAIL_SERVER,
    //   from: process.env.EMAIL_FROM,
    // }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "your-cool-username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your-awesome-password",
        },
      },
      async authorize(credentials) {
        const matchingUser = users.find(
          (user) =>
            credentials?.username === user.name &&
            credentials?.password === user.password
        );

        return matchingUser || null;
      },
    }),
  ],
  session: {},
  callbacks: {},
  //   pages: {
  //     signIn: "/auth/signin",
  //     signOut: "/auth/signout",
  //     error: "/auth/error", // Error code passed in query string as ?error=
  //     verifyRequest: "/auth/verify-request", // (used for check email message)
  //     newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  //   },
};

export default options;
