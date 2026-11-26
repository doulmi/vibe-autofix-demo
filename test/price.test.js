import assert from "node:assert/strict";
import { test } from "node:test";
import { formatPrice } from "../src/price.js";

test("formats cents as euros", () => {
  assert.equal(formatPrice(1999), "€19.99");
});
