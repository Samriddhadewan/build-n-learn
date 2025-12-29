import { prisma } from "./lib/prisma";

async function run() {
//   const createUser = await prisma.user.create({
//     data: {
//       name: "Jharna Chakma",
//       email: "jharna@gmail.com",
//     },
//   });
//   console.log("Account Created", createUser);


    // // CREATE POST FOR USERID 1
    // const createPost = await prisma.post.create({
    //     data: {
    //         title: "Ajke ghurte gelam guys",
    //         content: "Stay safe guys",
    //         authorId: 1
    //     }
    // })

    // console.log('Created post', createPost)

    // const createProfile = await prisma.profile.create({
    //     data: {
    //         bio: "Love me or hate me, i don't care!",
    //         userId: 1
    //     }
    // })

    // console.log('created profile', createProfile)


    // Retrieve all user data
    // const users = await prisma.user.findMany({
    //     // include: {
    //     //     posts: true,
    //     //     profiles: true
    //     // }
    //     select : {
    //         id: true,
    //         name: true,
    //         email: true,
    //         posts: true,
    //         profiles: true
    //     }
    // });
    // console.dir(users, {depth : Infinity})

    // update user data 
    // const updateUser = await prisma.profile.update({
    //     where : {
    //         userId: 1,
    //     },
    //     data : {
    //         bio:  "Please don't hurt me baby!",
    //         dateOfBirth: '2005-12-29T10:27:53.675Z'
    //     },
    //     select :{
    //         id: true,
    //         bio: true,
    //         user:{
    //             select: {
    //                 name: true,
    //                 email: true
    //             }
    //         }
    //     }
    // })

    // console.log("updated user", updateUser)

    // delete user 
    // const deleteUser = await prisma.user.delete({
    //     where : {
    //         id: 2
    //     }
    // })

    // console.log('user delete', deleteUser)
    
    // // find user data 
    // const findUserData = await prisma.user.findUnique({
    //     where : {
    //         id : 2
    //     },
    //     include : {
    //         posts: true,
    //         profiles: true,
    //     }
    // })

    // console.log('user unique data found', findUserData)

    // const findusers = await prisma.user.findMany({
    //     include : {
    //         profiles: true,
    //         posts: true 
    //     }
    // })
    // console.dir(findusers, {depth: Infinity})


    // const upsertUser = await prisma.user.upsert({
    //     where : {
    //         email: 'jkr@ph.com'
    //     },
    //     update: {
    //         name: "Jhankar mahabub 2",
    //     },
    //     create: {
    //         name: "Jhankar mahabub 2",
    //         email: 'jkr@ph.com'
    //     }
    // })


    // console.log('upsert user', upsertUser)
}

run();
