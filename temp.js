import * as z from "zod";

// const schema = z.string();

// const result = schema.parse("142");
// console.log(result); // true

// const Player = z.object({
//     username: z.string(),
//     xp: z.number()
// });
// const result = Player.parse({ username: "JohnDoe", xp: "1000" }); // Valid
// console.log(result);

const Player = z.object({
    username: z.string(),
    xp: z.number()
});

// extract the inferred type
type Player = z.infer<typeof Player>;

const player24: Player = { username: "billie", xp: 100 };