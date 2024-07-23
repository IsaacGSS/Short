import { test } from "vitest";
import supertest from 'supertest'
import { app } from "@/register";

test('usuario deve castrar um link', async () => {
  supertest(app.server)
})