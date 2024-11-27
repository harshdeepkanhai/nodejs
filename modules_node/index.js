#!/usr/bin/env node

import * as thing from "./utils";
import fs from "node:fs";
import _ from "lodash";
// const { count } = require("./utils");

const note = process.argv[2];
const newNote = {
  content: note,
  id: Date.now(),
};
console.log(newNote);
