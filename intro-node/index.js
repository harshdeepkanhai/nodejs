#!/usr/bin/env node

import { count } from "./utils";
import whatever from "./utils";

const note = process.argv[2];
const newNote = {
  content: note,
  id: Date.now(),
};
console.log(newNote);
