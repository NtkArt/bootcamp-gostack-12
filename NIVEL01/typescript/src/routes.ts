import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: "tetse",
    password: "123213",
    techs: [
      "Nodejs",
      "React",
      "React Native",
      { title: "Javascript", experience: 100 },
    ],
  });

  return response.json({ user });
}
