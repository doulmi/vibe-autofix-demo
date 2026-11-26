import assert from "node:assert/strict";
import { test } from "node:test";
import { formatTotal } from "../src/total.js";

test("sums the order lines", () => {
  assert.equal(formatTotal([{ cents: 250, quantity: 2 }, { cents: 99, quantity: 1 }]), "€5.99");
});
